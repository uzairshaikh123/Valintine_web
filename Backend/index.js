const express = require('express')
const connection = require('./config')
const AuthRouter = require('./Routes/Auth.route')
const app = express()
const cors = require('cors')
const productRoute = require('./Routes/Product.route')
const CartRoute = require('./Routes/Cart.route')
const OrdersRoute = require('./Routes/Orders.route')
const AdminRouter = require('./Routes/Admin.route')
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/auth",AuthRouter)
app.use("/products",productRoute)
app.use("/cart",CartRoute)
app.use("/orders",OrdersRoute)
app.use("/admin",AdminRouter)

app.listen(8080, async () => {
    try {
         await connection
         console.log('connection established')
    } catch (error) {
        console.log(error.message,"Error")
    }
  console.log('Example app listening on port 8080!')
})