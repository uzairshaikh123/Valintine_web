var http = require("http"),
  fs = require("fs"),
  ccav = require("./ccutils.js"),
  crypto = require("crypto"),
  qs = require("querystring");
const CartModel = require("../Models/CartModel.js");
const OrdersModel = require("../Models/Orders.Model.js");

exports.postRes = async function (request, response) {
  var ccavEncResponse = "",
    ccavResponse = "",
    workingKey = process.env.Working_Key, //Put in the 32-Bit key shared by CCAvenues.
    ccavPOST = "";

  //Generate Md5 hash for the key and then convert in base64 string
  var md5 = crypto.createHash("md5").update(workingKey).digest();
  var keyBase64 = Buffer.from(md5).toString("base64");

  //Initializing Vector and then convert in base64 string
  var ivBase64 = Buffer.from([
    0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b,
    0x0c, 0x0d, 0x0e, 0x0f,
  ]).toString("base64");

  ccavEncResponse += qs.stringify({ ...request.body });
  ccavPOST = qs.parse(ccavEncResponse);
  var encryption = ccavPOST.encResp;
  ccavResponse = ccav.decrypt(encryption, keyBase64, ivBase64);
  // The input string containing the URL query parameters
  // Function to parse the query string into an object
  function parseQueryString(ccavResponse) {
    const params = {};
    ccavResponse.split("&").forEach((param) => {
      const [key, value] = param.split("=");
      params[key] = decodeURIComponent(value || "");
    });
    return params;
  }

  // Parse the query string
  const queryParams = parseQueryString(ccavResponse);

  // Get the value of the 'order_status' parameter
  const order_status = queryParams["order_status"];
  const customer_identifier = queryParams["merchant_param1"];

  if (
    order_status == "Invalid" ||
    order_status == "Aborted" ||
    order_status == "Cancelled" ||
    order_status == "Unsuccessful" ||
    order_status == "Failure"
  ) {
    var pData = "";
    pData = "<table border=1 cellspacing=2 cellpadding=2><tr><td>";
    pData = pData + ccavResponse.replace(/=/gi, "</td><td>");
    pData = pData.replace(/&/gi, "</td></tr><tr><td>");
    pData =
      pData +
      "</td></tr></table>" +
      `<button>
			<a href="https://valentinesaga.com">
			Return To Mernchant Site
			</a>
		  </button>`;
    htmlcode =
      '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Response Handler</title></head><body><center><font size="4" color="blue"><b>Response Page</b></font><br>' +
      pData +
      "</center><br></body></html>";

    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(htmlcode);
    // try {
    //   let allorders = await CartModel.find({ userID: customer_identifier });
    //   console.log(allorders, "allorders");
    //   // adding products to orders
    //   let hala=await OrdersModel.insertMany(allorders);
    // 	console.log(hala,"hello")
    // //   await CartModel.deleteMany({ userID: customer_identifier });
    // } catch (error) {
    //   return response.end("error");
    // }
    const cartOrders = await CartModel.find({ userID: customer_identifier });
    const ordersToInsert = cartOrders.map((order) => ({
      // Map the fields from CartModel to OrdersModel as needed
      userID: order.userID,
      productID: order.productID,
      name: order.name,
      category: order.category,
      image: order.image,
      price: order.price,
      city: order.city,
      prod_details: order.prod_details,
      description: order.description,
      delivery_info: order.delivery_info,
      quantity: order.quantity,
      status: "pending",
      orderDate: order.orderDate,
      productMessage: order.productMessage,
      reviews: order.reviews,
      booked_dates: order.booked_dates,
    }));

    try {
      // 3. Use insertMany to insert multiple orders at once into OrdersModel
      const insertedOrders = await OrdersModel.insertMany(ordersToInsert);
      console.log("Orders inserted successfully:", insertedOrders);

      await CartModel.deleteMany({ userID: customer_identifier });
      console.log("Products removed from CartModel.");
      // Optionally, you can remove the orders from the CartModel if needed
      // await CartModel.deleteMany({ _id: { $in: cartOrders.map(order => order._id) } });
    } catch (error) {
      console.error("Error inserting orders:", error);
    }
    response.end();
    return;
  } else {
    // try {

    // 	let allorders = await CartModel.find({userID:customer_identifier})
    // 		// adding products to orders
    // 		let orders= await OrdersModel.insertMany(allorders)
    // 		await CartModel.deleteMany({userID:customer_identifier})
    // } catch (error) {
    // 	return response.send("error")
    // }
    var pData = "";
    pData = "<table border=1 cellspacing=2 cellpadding=2><tr><td>";
    pData = pData + ccavResponse.replace(/=/gi, "</td><td>");
    pData = pData.replace(/&/gi, "</td></tr><tr><td>");
    pData =
      pData +
      "</td></tr></table>" +
      `<button>
<a href="https://valentinesaga.com/orders">
See Your Orders
</a>
</button>`;
    htmlcode =
      '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Response Handler</title></head><body><center><font size="4" color="blue"><b>Response Page</b></font><br>' +
      pData +
      "</center><br></body></html>";
    response.writeHeader(200, { "Content-Type": "text/html" });
    response.write(htmlcode);

    const cartOrders = await CartModel.find({ userID: customer_identifier });
    const ordersToInsert = cartOrders.map((order) => ({
      // Map the fields from CartModel to OrdersModel as needed
      userID: order.userID,
      productID: order.productID,
      name: order.name,
      category: order.category,
      image: order.image,
      price: order.price,
      city: order.city,
      prod_details: order.prod_details,
      description: order.description,
      delivery_info: order.delivery_info,
      quantity: order.quantity,
      status: "pending",
      orderDate: order.orderDate,
      productMessage: order.productMessage,
      reviews: order.reviews,
      booked_dates: order.booked_dates,
    }));

    try {
      // 3. Use insertMany to insert multiple orders at once into OrdersModel
      const insertedOrders = await OrdersModel.insertMany(ordersToInsert);
      console.log("Orders inserted successfully:", insertedOrders);

      await CartModel.deleteMany({ userID: customer_identifier });
      console.log("Products removed from CartModel.");
    } catch (error) {
      console.error("Error inserting orders:", error);
    }
    response.end();
    return;
  }
};
