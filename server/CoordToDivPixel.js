/*
* MAIN CLASS
*/

URLParser = require('./QueryString/URLParser');

var http = require('http');

parseURL();

function parseURL()
{
	urlParser = new URLParser("http://www.giant.com/api?screenResolutionX=1280&screenResolutionY=1024&nwLat=0.00000&nwLng=0.00000&seLat=0.00000&seLng=0.00000");
	
	coordToDivPixel(urlParser.getScreenResolutionX(),
					urlParser.getScreenResolutionY());
}

//STEP 3 WORK OUT GRID
//At this step we should have a working version just with boxes on a javascript html5 page

function coordToDivPixel(screenResolutionX, screenResolutionY)
{
	var screenResolutionX = 1000;
	var itemLat = 40.50;
		
	//so lets imagine that there is an item at lat : 33  <--- so this should be at roungly 250px if it is a screenResolutionX of 1000px

	//nw bound
	var northEastLat = 38.70;
	var northEastLng = -127.50;
	
	//se bound
	var southWestLat = 48.85;
	var southWestLng = -55.90;
	
	//difference between 
	var differenceBetweenLat = southWestLat - northEastLat;
	var differenceBetweenLng = southWestLng - northEastLng;

    //so item lat would be 0.56666889
	var itemLatDifferenceFromNWLatBound = itemLat - northEastLat;
	
	//lets get the ratio
	//so lets take the 1000 and we need it in this 
	//so we need to get the number of pixels for each point 
	
	//<!------1000 ------->
	//<!------ 20 -------->
	
	//<!------ ??? ------->
	//<!------ 5 -------->
	
	//so lets 1000/20 = 50
	//then 50 * 5
	
	//so (screenResolutionX / differenceBetweenLat) * itemLat - northEastLat;
	var divPixel = (screenResolutionX / differenceBetweenLat) * itemLatDifferenceFromNWLatBound;
	
	//ok so it takes in screenResolutionX 
	//then we know the left bound and the right bound
	
	//var output = "differenceBetweenLat : " + differenceBetweenLat + " differenceBetweenLng : " + differenceBetweenLng;
	var output = divPixel;
	
	
	//calulate the difference
	
	createResponse(output);
}

//response should be 

//lat
//lng
//x
//y

function createResponse(output)
{
	var server = http.createServer(function(request, response) {
			
			//Write JSON
			response.writeHead(200, { 'Content-Type': 'application/json' });

			//open loaded tag

			response.write('hello');
			response.write(String(output));
			
			response.write('"status_code" : "200"');
			
			response.end();
			
	}).listen(1337, '127.0.0.1');
	
	console.log("Coord To Div Service Running at http://127.0.0.1:1337/ 0.1");
}