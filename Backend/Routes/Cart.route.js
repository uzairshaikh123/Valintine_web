const express = require('express');
const CartModel = require('../Models/CartModel');
const AuthMiddleware = require('../Middlewares/Auth.middleware');
const CartRoute = express.Router()


CartRoute.get('/usercart/:id', AuthMiddleware,async (req, res) => {
    const id = req.params.id;
    try {
        let allproducts = await  CartModel.find({userID:id})
        res.status(200).send({"msg":"All Products",data:allproducts})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }

})


CartRoute.post('/add',AuthMiddleware, async (req, res) => {
console.log(req.body)
    try {
      let findproduct = await CartModel.findOne({_id:req.body._id})
    //   console.log(findproduct)
          if(findproduct){
            console.log("error: product found")
           return res.status(404).send({message: 'Product already exists'})
          }
          else{
              let newproduct = new CartModel(req.body)
              await newproduct.save()
              res.status(200).send({"msg":"Product Added",data:newproduct})
          }

    } catch (error) {
        res.status(500).send({"msg":error.message})
        }



})


CartRoute.patch('/update/:id',AuthMiddleware, async (req, res) => {

    let id = req.params.id
    console.log(id,req.body)
    try {

        let updatedproduct = await  CartModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send({"msg":"Product Updated",data:updatedproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})


CartRoute.delete('/delete/:id',AuthMiddleware, async (req, res) => {

    let id = req.params.id
    try {
        let delproduct = await  CartModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"Product Deleted",data:delproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})
CartRoute.delete('/deleteall/:id',AuthMiddleware, async (req, res) => {

    let id = req.params.id
    console.log(id)
    try {
        let delproduct = await  CartModel.deleteMany({userID:id})
        res.status(200).send({"msg":"Product Deleted",data:delproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})


module.exports = CartRoute;