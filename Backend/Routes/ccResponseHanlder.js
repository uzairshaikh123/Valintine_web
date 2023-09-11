var http = require('http'),
    fs = require('fs'),
    ccav = require('./ccutils.js'),
    crypto = require('crypto'),
    qs = require('querystring');
const CartModel = require('../Models/CartModel.js');
const OrdersModel = require('../Models/Orders.Model.js');

exports.postRes = async function(request,response){
    var ccavEncResponse='',
	ccavResponse='',	
	workingKey = process.env.Working_Key,	//Put in the 32-Bit key shared by CCAvenues.
	ccavPOST = '';
	
    //Generate Md5 hash for the key and then convert in base64 string
    var md5 = crypto.createHash('md5').update(workingKey).digest();
    var keyBase64 = Buffer.from(md5).toString('base64');

    //Initializing Vector and then convert in base64 string
    var ivBase64 = Buffer.from([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,0x0e, 0x0f]).toString('base64');

        
	    ccavEncResponse += qs.stringify({...request.body});
	    ccavPOST =  qs.parse(ccavEncResponse);
	    var encryption = ccavPOST.encResp;
	    ccavResponse = ccav.decrypt(encryption, keyBase64, ivBase64);
		const {order_status,merchant_param1,customer_identifier} = ccavResponse

		console.log('order_status',order_status,ccavResponse)
		
		let userID = customer_identifier || merchant_param1 
		if (
            order_status == 'Invalid'
            || order_status == 'Aborted'
            || order_status == 'Cancelled'
            || order_status == 'Unsuccessful'
            || order_status == 'Failure'
        ) {
          
			var pData = '';
			pData = '<table border=1 cellspacing=2 cellpadding=2><tr><td>'	
			pData = pData + ccavResponse.replace(/=/gi,'</td><td>')
			pData = pData.replace(/&/gi,'</td></tr><tr><td>')
			pData = pData + '</td></tr></table>'+ `<button>
			<a href="https://valentinesaga.com">
			Return To Mernchant Site
			</a>
		  </button>`
			htmlcode = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Response Handler</title></head><body><center><font size="4" color="blue"><b>Response Page</b></font><br>'+ pData +'</center><br></body></html>';
		
			
			response.writeHeader(200, {"Content-Type": "text/html"});
			response.write(htmlcode);
			try {
	
				let allorders = await CartModel.find({userID:customer_identifier})
				console.log(allorders,"allorders")
					// adding products to orders
					 await OrdersModel.insertMany(allorders)

					await CartModel.deleteMany({userID:customer_identifier})
			} catch (error) {
				return response.send("error")
			}
			response.end()
			return
        }
try {
	
	let allorders = await CartModel.find({userID:customer_identifier})
	console.log(allorders,"allorders")
		// adding products to orders
		let orders= await OrdersModel.insertMany(allorders)
		await CartModel.deleteMany({userID:customer_identifier})
} catch (error) {
	return response.send("error")
}

	    var pData = '';
	    pData = '<table border=1 cellspacing=2 cellpadding=2><tr><td>'	
	    pData = pData + ccavResponse.replace(/=/gi,'</td><td>')
	    pData = pData.replace(/&/gi,'</td></tr><tr><td>')
		pData = pData + '</td></tr></table>'+ `<button>
		<a href="https://valentinesaga.com/orders">
		See Your Orders
		</a>
	  </button>`
        htmlcode = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>Response Handler</title></head><body><center><font size="4" color="blue"><b>Response Page</b></font><br>'+ pData +'</center><br></body></html>';
        response.writeHeader(200, {"Content-Type": "text/html"});
			response.write(htmlcode);
           response.end()
		   return
		
	
};
