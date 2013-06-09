// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');
//PS YOU WILL NEED https://github.com/mikeal/request.git which is a HTTP Request libary for Node so 
//that it will make dev faster use npm install request

var http = require('http');
var request = require('request');

//makeNestoriaRequest();
testWithoutLoaded();
testWithRequestInJson();
makeNestoriaRequest();
//so I think it's the loaded in the front of it as it works with other api when you try and pull stuff off the json too.
//ie. works with http://dev.virtualearth.net/REST/v1/Locations/UK/postalCode?includeNeighborhood=includeNeighborhood&maxResults=maxResults&key=BingMapsKey
//json must seperate using " and not '       ie. "bedroom_max" : "100"

//WORKS
function testWithoutLoaded(){
    //so this should be coming in
    var jsonInput = '{"bedroom_max" : "100"}';
    var obj =  JSON.parse(jsonInput);
    //pull out something
    console.log("1st Test : "+ obj.bedroom_max);
}

//WORKS TEST WITH REQUEST
function testWithRequestInJson(){
    //so this should be coming in
    var jsonInput = '{"request": {"bedroom_max" : "100"}}';
    var obj =  JSON.parse(jsonInput);
    //pull out something
    console.log(obj.request.bedroom_max);
}

//AWESOME WORKS
//REMEMBER THAT WE'RE SET JSON to TRUE in request
//ALSO REMEMBER TO TAKE LOADED OUT OF THE REQUEST
function makeNestoriaRequest()
{
    //Use a search with Lat Lng bounds and take these
    //and then see the x and y's of divs
    request({url:'http://api.nestoria.co.uk/api?country=uk&page=1&pretty=1&action=search_listings&place_name=hounslow&encoding=json&listing_type=buy&number_of_results=15&property_type=all&bedroom_min=0&bedroom_max=100&price_min=0&price_max=25000000&updated_min=1341378000', json:true}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    
    //console.log(body.response.listings);
    //console.log(body.response.listings.length);




      var listings = body.response.listings;
      for (var i = 0; i < listings.length;i++ )
      {
         // console.log(listings[i].longitude);
          //console.log(listings[i].latitude);

          listings[i].test1 = "test1";
          listings[i].test2 = "test2";


      }

      //you do need to print print the json, something is going wrong !
      body = JSON.stringify(body);
      pullOutLatLng(body);
    }

    //should be outputted onto the json
    //console.log(body);


//
//        Loop through each of the values, extract the stuff you need,
//            and print out onto the json.
//            Send the values to a div to Pixel Method.
//            Attached the output back onto thing


})
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
			response.write(output);
			
			//response.write('"status_code" : "200"');
			
			response.end();
			
	}).listen(1337, '127.0.0.1');
	
	console.log("Coord To Div Service Running at http://127.0.0.1:1337/ 0.1");
}