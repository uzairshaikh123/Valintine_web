const express = require('express');
const OrdersModel = require('../Models/Orders.Model');

const OrdersRoute = express.Router()


OrdersRoute.get('/all/:id', async (req, res) => {
    const id = req.params.id
    try {
        let allproducts = await  OrdersModel.find({userID:id})
        res.status(200).send({"msg":"All Products",data:allproducts})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }

})


OrdersRoute.post('/add', async (req, res) => {

    try {
        let newproduct = new OrdersModel(req.body)
        await newproduct.save()
        res.status(200).send({"msg":"Product Added",data:newproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }



})


OrdersRoute.patch('/update/:id', async (req, res) => {

    let id = req.params.id
    console.log(id,req.body)
    try {

        let updatedproduct = await  OrdersModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).send({"msg":"Product Updated",data:updatedproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})


OrdersRoute.delete('/delete/:id', async (req, res) => {

    let id = req.params.id
    try {
        let delproduct = await  OrdersModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"Product Deleted",data:delproduct})
    } catch (error) {
        res.status(500).send({"msg":error.message})
        }


})


module.exports = OrdersRoute;