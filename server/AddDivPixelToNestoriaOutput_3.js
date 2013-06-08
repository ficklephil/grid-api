// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');
//PS YOU WILL NEED https://github.com/mikeal/request.git which is a HTTP Request libary for Node so 
//that it will make dev faster use npm install request

var http = require('http');

//http://api.nestoria.co.uk/api?country=uk&page=1&pretty=1&action=search_listings&place_name=hounslow&encoding=json&listing_type=buy&number_of_results=15&property_type=all&bedroom_min=0&bedroom_max=100&price_min=0&price_max=25000000&updated_min=1341378000&callback=loaded', json:true}, function (error, response, body) {


makeNestoriaRequest();

function makeNestoriaRequest()
{


    var req = http.get('http://dev.virtualearth.net/REST/v1/Locations/UK/postalCode?includeNeighborhood=includeNeighborhood&maxResults=maxResults&key=BingMapsKey', function(res) {
        var body = "";
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            //var obj = JSON.parse(chunk);
            //console.log('BODY: ' + chunk.toString());
            body += chunk;
        });
        res.on('end', function() {
            console.log(JSON.parse(body))
            res.send(JSON.parse(body));
        });
    });


}

function pullOutLatLng(body)
{
	//var obj = JSON.parse(body);
	createResponse(body);
	
	//so lets try and replace bedroom max with something else
	
	
}


//pull out lat lng for each item
//translate lat lng to div pixel
//add div pixel to nestoria output

function createResponse(output)
{
	var server = http.createServer(function(request, response) {
			
			//Write JSON
			response.writeHead(200, { 'Content-Type': 'application/json' });

			//open loaded tag

			response.write('hello');
			response.write(String(output));
			
			//response.write('"status_code" : "200"');
			
			response.end();
			
	}).listen(1337, '127.0.0.1');
	
	console.log("Coord To Div Service Running at http://127.0.0.1:1337/ 0.1");
}