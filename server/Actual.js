// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');
//PS YOU WILL NEED https://github.com/mikeal/request.git which is a HTTP Request libary for Node so 
//that it will make dev faster use npm install request

URLParser = require('./QueryString/URLParser');

var http = require('http');
var request = require('request');
var url = require('url');

listen();

//parseQueryString();
//testWithoutLoaded();
//testWithRequestInJson();
//makeNestoriaRequest();

//so I think it's the loaded in the front of it as it works with other api when you try and pull stuff off the json too.
//ie. works with http://dev.virtualearth.net/REST/v1/Locations/UK/postalCode?includeNeighborhood=includeNeighborhood&maxResults=maxResults&key=BingMapsKey
//json must seperate using " and not '       ie. "bedroom_max" : "100"

//load in the URL that it is sent
//pick off the params from it
//we'll need to add the screen resolution to the response

var screenResolutionX;
var screenResolutionY;
var placeName;
var storeBody;

//request needs to be http://127.0.0.1:1337/?screenResolutionX=19393&screenResolutionY=43110&placeName=hounslow

function parseParams(request,callback){

    var queryData = url.parse(request.url, true).query;

    var paramsObj = new Object();
    paramsObj.screenResolutionX = queryData.screenResolutionX;
    paramsObj.screenResolutionY = queryData.screenResolutionY;
    paramsObj.placeName = queryData.placeName;
    paramsObj.centerLng = queryData.centerLng;
    paramsObj.centerLat = queryData.centerLat;
    paramsObj.lat_lo = queryData.lat_lo;
    paramsObj.lng_lo = queryData.lng_lo;
    paramsObj.lat_hi = queryData.lat_hi;
    paramsObj.lng_hi = queryData.lng_hi;
    paramsObj.page = queryData.page;
    paramsObj.min_price = queryData.min_price;
    paramsObj.max_price = queryData.max_price;
    paramsObj.updated_min = queryData.updated_min;

    callback(paramsObj);
}

//function parseRequest(request)
//{
//    console.log('parseRequest');
//
//    var queryData = url.parse(request.url, true).query;
//
//    screenResolutionX = queryData.screenResolutionX;
//    screenResolutionY = queryData.screenResolutionY;
//    placeName = queryData.placeName;
//
//    makeNestoriaRequest(placeName, screenResolutionX, screenResolutionY);
//}

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
function makeNestoriaRequest(params, callbackWithNestoriaJson){
    //console.log('makeNestoriaRequest with ' + params.placeName + params.screenResolutionX + params.screenResolutionY +
    //    params.centerLat + params.centerLng);

    var item_lat = 51.490994;
    var item_lng = -0.371348;

    var screenResolutionX = params.screenResolutionX;
    var screenResolutionY = params.screenResolutionY;
    var placeName = params.placeName.toString();
    //sw
    var lat_lo = params.lat_lo;
    var lng_lo = params.lng_lo;

    //ne
    var lat_hi = params.lat_hi;
    var lng_hi = params.lng_hi;

    //north east
//    console.log('lat_hi' + lat_hi);
//    console.log('lng_hi' + lng_hi);
//
//    //south west
//    console.log('lat_lo' + lat_lo);
//    console.log('lng_lo' + lng_lo);

    //Use a search with Lat Lng bounds and take these
    //and then see the x and y's of divs


    var centerLat = params.centerLat;
    var centerLng = params.centerLng;
    var page = params.page;
    var min_price = params.min_price;
    var max_price = params.max_price;
    var updated_min = params.updated_min;

    console.log('centerLat' + centerLat.toString());
    console.log('centerLng' + centerLng.toString());

    var nestoriaUrl = 'http://api.nestoria.co.uk/api?country=uk&page='+page.toString()+'&pretty=1&action=search_listings&centre_point='+centerLat.toString()+','+centerLng.toString()+',0.625mi&encoding=json&listing_type=buy&number_of_results=15&property_type=all&bedroom_min=0&bedroom_max=100&price_min='+min_price+'&price_max='+max_price+'&updated_min='+updated_min;
    //var url = http://api.nestoria.co.uk/api?country=uk&page=1&pretty=1&action=search_listings&place_name='+placeName+'&encoding=json&listing_type=buy&number_of_results=2&property_type=all&bedroom_min=0&bedroom_max=100&price_min=0&price_max=25000000&updated_min=1341378000

    //console.log('nestoriaUrl : ' + nestoriaUrl);

    request({url:nestoriaUrl, json:true}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    
    //console.log(body.response.listings);
    //console.log(body.response.listings.length);
       //51.430994,-0.488156,51.499972,-0.271348

      //Returns a string of the form "lat_lo,lng_lo,lat_hi,lng_hi" for this bounds, where "lo" corresponds to the
      // southwest corner of the bounding box, while "hi" corresponds to the northeast corner of that box.

      var request = body.request;
      request.screenResolutionX = screenResolutionX;
      request.screenResolutionY = screenResolutionY;
      request.placeNamePhilips = placeName;

      var listings = body.response.listings;
      if(listings)
      {
          for (var i = 0; i < listings.length;i++ )
          {
             // console.log(listings[i].longitude);
              //console.log(listings[i].latitude);

              item_lat = listings[i].latitude;
              item_lng = listings[i].longitude;

              convertCoordToDivPixel(screenResolutionX,screenResolutionY,item_lat,item_lng,lat_lo,lng_lo,lat_hi,lng_hi);

              //Longitude is X, Latitude is Y

              listings[i].longitudeXCoor = Math.round(getDivPixelLng());
              listings[i].latitudeYCoor = Math.round(getDivPixelLat());
           }
      }
      //you do need to print print the json, something is going wrong !
      var jsonBody = JSON.stringify(body);
      //pullOutLatLng(body);

      callbackWithNestoriaJson(jsonBody);
    }
})


}

var _divPixelLat;
var _divPixelLng;

function convertCoordToDivPixel(screenResolutionX,screenResolutionY,item_lat,item_lng,lat_lo,lng_lo,lat_hi,lng_hi)
{
    var latitudePixelsFromTop = screenResolutionY - calcLatOrLngInPixels(screenResolutionY,lat_hi,lat_lo,item_lat);
    var longitudePixels = calcLatOrLngInPixels(screenResolutionX,lng_hi,lng_lo,item_lng);

    _divPixelLat = latitudePixelsFromTop;
    _divPixelLng = longitudePixels;
}

/**
 * Calculates the Latitude or Longitude in Pixels
 * depending on the screen resolution, and high and low values in this case
 * the high and low values being the latitude/longitude high and latitude/longitude low
 *
 * @inputs screenResolution a screen resolution either x or y ie. 1024
 * high value ie. latitude high ie. lat_hi from the NE bound
 * low value ie. latitude low ie. lat_lo from the SW bound
 * item value ie. latitude of the item
 * @return Number ie. pixels
 */
function calcLatOrLngInPixels(screenResolution,highValue,lowValue,itemValue){
    var ratioLatitudeToPixel = screenResolution / (highValue - lowValue);
    var itemsLatitudeRelativeToBottom = itemValue - lowValue;
    return itemsLatitudeRelativeToBottom * ratioLatitudeToPixel;
}

function getDivPixelLat()
{
    return _divPixelLat;
}

function getDivPixelLng()
{
    return _divPixelLng;
}

function pullOutLatLng(body)
{
    console.log('storing body');
	//var obj = JSON.parse(body);
	//createResponse(body);

    console.log(body);
    storeBody = body;
	//so lets try and replace bedroom max with something else
	
	
}


//pull out lat lng for each item
//translate lat lng to div pixel
//add div pixel to nestoria output

function test()
{
    console.log('hello');
}

function listen()
{
	var server = http.createServer(function(request, response) {

        console.log('lets go!');

        if (request.url === '/favicon.ico') {
            response.writeHead(200, {'Content-Type': 'image/x-icon'} );
            response.end();
            console.log('favicon requested');
            return;
        }

        parseParams(request, function(paramsObj){

            console.log(paramsObj.screenResolutionX);
            console.log(paramsObj.screenResolutionY);
            console.log(paramsObj.placeName);

            makeNestoriaRequest(paramsObj, function(body){

                //console.log(body);

                //console.log('write back to browser');
                response.writeHead(200, { 'Content-Type': 'application/json' });

                //open loaded tag
                response.write('jsonCallback(');


                response.write(body);
                response.write(');');
                //response.write('"status_code" : "200"');

                response.end();
            });
        });
    }).listen(1337, '127.0.0.1');
	
	console.log("Coord To Div Service Running at http://127.0.0.1:1337/ 0.1 a request is http://127.0.0.1:1337/?screenResolutionX=1939&screenResolutionY=3110&placeName=hounslow");
}