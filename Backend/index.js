const express = require('express')
const connection = require('./config')
const AuthRouter = require('./Routes/Auth.route')
const app = express()
const cors = require('cors')
const productRoute = require('./Routes/Product.route')
const CartRoute = require('./Routes/Cart.route')
const OrdersRoute = require('./Routes/Orders.route')
const AdminRouter = require('./Routes/Admin.route')
const PaymentRouter = require('./Routes/payment')
const SlidersRouter = require('./Routes/Sliders')
const BlogsRouter = require('./Routes/Blogs.Route')
// var http = require('http'),
//     fs = require('fs'),
//     ccav = require('./Routes/ccutils.js'),
//     qs = require('querystring'),
//     ccavReqHandler = require('./Routes/ccRequestHandler.js'),
//     ccavResHandler = require('./Routes/ccResponseHanlder.js');
const RequestHandler = require('./Routes/ccRequestHandler.js')
const ResponseHandler = require('./Routes/ccResponseHanlder.js')
const AwsRouter = require('./Routes/AwsRoute')
const TestimonialRouter = require('./Routes/Testimonials')
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
app.use("/aws",AwsRouter)
app.use("/sliders",SlidersRouter)
app.use("/testimonials",TestimonialRouter)
app.use("/blogs",BlogsRouter)
// app.use("/payment",PaymentRouter)

// app.post('/ccavRequestHandler', function (request, response){
// 	ccavReqHandler.postReq(request, response);
// });


// app.post('/ccavResponseHandler', function (request, response){
//         ccavResHandler.postRes(request, response);
// });

app.listen(8080, async () => {
    try {
         await connection
         console.log('connection established')
    } catch (error) {
        console.log(error.message,"Error")
    }
  console.log('Example app listening on port 8080!')
})