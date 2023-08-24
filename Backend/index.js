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
const { postReq } = require('./Routes/ccRequestHandler')
const { postRes } = require('./Routes/ccResponseHanlder')
const ccRequestHandler = require('./Routes/ccRequestHandler')
const ccRouter = require('./Routes/ccRequestHandler')
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/paycc', function (req, res){
  res.render(`<html>
  <head>
  </head>
  <body>
    <form method="POST" name="customerData" action="/ccavRequestHandler">
      <table width="40%" height="100" border='1' align="center">
        <caption>
          <font size="4" color="blue"><b>Integration Kit</b></font>
        </caption>
      </table>
      <table width="40%" height="100" border='1' align="center">
        <tr>
          <td>Parameter Name:</td>
          <td>Parameter Value:</td>
        </tr>
        <tr>
          <td colspan="2">Compulsory information</td>
        </tr>
        <tr>
          <td>Merchant Id</td>
          <td><input type="text" name="merchant_id" id="merchant_id" value=${process.env.Merchant_ID} /> </td>
        </tr>
        <tr>
          <td>Order Id</td>
          <td><input type="text" name="order_id" value=${Date.now()} /></td>
        </tr>
        <tr>
          <td>Currency</td>
          <td><input type="text" name="currency" value="INR" /></td>
        </tr>
        <tr>
          <td>Amount</td>
          <td><input type="text" name="amount" value="1.00" /></td>
        </tr>
        <tr>
          <td>Redirect URL</td>
          <td><input type="text" name="redirect_url"
            value="http://127.0.0.1:3001/ccavResponseHandler" />
          </td>
        </tr>
        <tr>
          <td>Cancel URL</td>
          <td><input type="text" name="cancel_url"
            value="http://127.0.0.1:3001/ccavResponseHandler" />
          </td>
        </tr>
        <tr>
          <td>Language</td>
          <td><input type="text" name="language" id="language" value="EN" /></td>
        </tr>
        <tr>
          <td colspan="2">Billing information(optional):</td>
        </tr>
        <tr>
          <td>Billing Name</td>
          <td><input type="text" name="billing_name" value="Peter" /></td>
        </tr>
        <tr>
          <td>Billing Address:</td>
          <td><input type="text" name="billing_address"
            value="Santacruz" /></td>
        </tr>
        <tr>
          <td>Billing City:</td>
          <td><input type="text" name="billing_city" value="Mumbai" /></td>
        </tr>
        <tr>
          <td>Billing State:</td>
          <td><input type="text" name="billing_state" value="MH" /></td>
        </tr>
        <tr>
          <td>Billing Zip:</td>
          <td><input type="text" name="billing_zip" value="400054" /></td>
        </tr>
        <tr>
          <td>Billing Country:</td>
          <td><input type="text" name="billing_country" value="India" />
          </td>
        </tr>
        <tr>
          <td>Billing Tel:</td>
          <td><input type="text" name="billing_tel" value="9876543210" />
          </td>
        </tr>
        <tr>
          <td>Billing Email:</td>
          <td><input type="text" name="billing_email"
            value="testing@domain.com" /></td>
        </tr>
        <tr>
          <td colspan="2">Shipping information(optional):</td>
        </tr>
        <tr>
          <td>Shipping Name</td>
          <td><input type="text" name="delivery_name" value="Sam" />
          </td>
        </tr>
        <tr>
          <td>Shipping Address:</td>
          <td><input type="text" name="delivery_address"
            value="Vile Parle" /></td>
        </tr>
        <tr>
          <td>Shipping City:</td>
          <td><input type="text" name="delivery_city" value="Mumbai" />
          </td>
        </tr>
        <tr>
          <td>Shipping State:</td>
          <td><input type="text" name="delivery_state" value="Maharashtra" />
          </td>
        </tr>
        <tr>
          <td>Shipping Zip:</td>
          <td><input type="text" name="delivery_zip" value="400038" /></td>
        </tr>
        <tr>
          <td>Shipping Country:</td>
          <td><input type="text" name="delivery_country" value="India" />
          </td>
        </tr>
        <tr>
          <td>Shipping Tel:</td>
          <td><input type="text" name="delivery_tel" value="0123456789" />
          </td>
        </tr>
        <tr>
          <td>Merchant Param1</td>
          <td><input type="text" name="merchant_param1"
            value="additional Info." /></td>
        </tr>
        <tr>
          <td>Merchant Param2</td>
          <td><input type="text" name="merchant_param2"
            value="additional Info." /></td>
        </tr>
        <tr>
          <td>Merchant Param3</td>
          <td><input type="text" name="merchant_param3"
            value="additional Info." /></td>
        </tr>
        <tr>
          <td>Merchant Param4</td>
          <td><input type="text" name="merchant_param4"
            value="additional Info." /></td>
        </tr>
        <tr>
          <td>Merchant Param5</td>
          <td><input type="text" name="merchant_param5"
            value="additional Info." /></td>
        </tr>
        <tr>
          <td>Promo Code:</td>
          <td><input type="text" name="promo_code" value=""/></td>
        </tr>
        <tr>
          <td>Customer Id:</td>
          <td><input type="text" name="customer_identifier" value=""/></td>
        </tr>
        <tr>
          <td></td>
          <td><input type="submit" value="Checkout"></td>
        </tr>
      </table>
    </form>
  </body>
  </html>
  `);
});


app.use("/auth",AuthRouter)
app.use("/ccavRequestHandler",ccRouter)
app.use("/ccavResponseHandler",postRes)
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