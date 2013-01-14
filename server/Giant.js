/*
* MAIN CLASS
*/

URLParser = require('./QueryString/URLParser');

var http = require('http');

//STEP 1 PARSE URL

parseURL();

//STEP 2 ASSIGN URL TO MODEL

//STEP 3 WORK OUT GRID
//At this step we should have a working version just with boxes on a javascript html5 page


//STEP 4 ASSIGN DOTS
//STEP 5 WORK OUT WHERE TO PLACE BOXES
//STEP 6 ASSIGN BOXES
//STEP 7 OUTPUT JSON


function parseURL()
{
	urlParser = new URLParser("http://www.giant.com/api?screenResolutionX=1240");
	
	//configuration.getScreenResolutionX;
	//configuration.getScreenResolutionY;
	//configuration.getXYCoors;
	//should bring back data on

	constructGrid();
}



//FROm Creating the grid the output you need it x and Y of each piece of the grid
//and also the height and width of each piece?

//then within an application we can run through the X and Y of each piece and
//draw it.


//so first mvp is place in the screenresolutionX and then Y 
//and check if it draws out a grid on a javascript page

//this should all be a context file.
//I guess MVP. a bit.

http.createServer(

function (req, res)
{
  res.writeHead(200, {'Content-Type': 'text/plain'});
 
  res.end("Hello Giant Screen Resolution X!" +  urlParser.getScreenResolutionX());
  res.end("Hello Giant Screen Resolution Y!" +  urlParser.getScreenResolutionY());
  res.end("Hello Giant Screen Resolution getURL!" +  urlParser.getURL());
}

).listen(1337, '127.0.0.1');



console.log("Service running http://127.0.0.1:1337/");