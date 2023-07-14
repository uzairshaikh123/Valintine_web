const express = require('express');
const CartModel = require('../Models/CartModel');
// const CartModel = require('../Models/Cart.model');

const CartRoute = express.Router()


CartRoute.get('/usercart/:id', async (req, res) => {
    const id = req.params.id;
    try {
        let allproducts = await  CartModel.find({userID:id})
        res.status(200).send({"msg":"All Products",data:allproducts})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }

})


CartRoute.post('/add', async (req, res) => {

    try {
        let newproduct = new CartModel(req.body)
        await newproduct.save()
        res.status(200).send({"msg":"Product Added",data:newproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }



})


CartRoute.patch('/update/:id', async (req, res) => {

    let id = req.params.id
    console.log(id,req.body)
    try {

        let updatedproduct = await  CartModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send({"msg":"Product Updated",data:updatedproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})


CartRoute.delete('/delete/:id', async (req, res) => {

    let id = req.params.id
    try {
        let delproduct = await  CartModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"Product Deleted",data:delproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})
CartRoute.delete('/deleteall/:id', async (req, res) => {

    let id = req.params.id
    try {
        let delproduct = await  CartModel.findByIdAndDelete({userID:id})
        res.status(200).send({"msg":"Product Deleted",data:delproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})


module.exports = CartRoute;