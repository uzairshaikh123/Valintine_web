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
const AwsRouter = require('./Routes/AwsRoute')
const TestimonialRouter = require('./Routes/Testimonials')
const payrouter = require('./Routes/payment')
const totalRouter = require('./Routes/TotalRoute')
const bodyParser = require('body-parser');


app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
const ccavReqHandler = require('./Routes/ccRequestHandler.js');
const ccavResHandler = require('./Routes/ccResponseHanlder.js');

app.use(express.static('public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);


// app.get('/paycc', function (req, res){
//     	res.render('./public/dataFrom.html');
// });

app.post('/ccavRequestHandler', function (request, response){
  console.log("indexjs 39",request.body)
	ccavReqHandler.postReq(request, response);
});


app.post('/ccavResponseHandler', function (request, response){
        ccavResHandler.postRes(request, response);
});



app.use("/auth",AuthRouter)
// app.use("/ccavRequestHandler",ccRouter)
// app.use("/ccavResponseHandler",postRes)
app.use("/products",productRoute)
app.use("/cart",CartRoute)
app.use("/orders",OrdersRoute)
app.use("/admin",AdminRouter)
app.use("/aws",AwsRouter)
app.use("/pay",payrouter)
app.use("/sliders",SlidersRouter)
app.use("/testimonials",TestimonialRouter)
app.use("/blogs",BlogsRouter)
app.use("/total",totalRouter)


app.listen(8080, async () => {
    try {
         await connection
         console.log('connection established')
    } catch (error) {
        console.log(error.message,"Error")
    }
  console.log('Example app listening on port 8080!')
})