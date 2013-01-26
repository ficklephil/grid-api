/*
* MAIN CLASS
*/

URLParser = require('./QueryString/URLParser');

var http = require('http');

//var fs = require("fs");
//var path = require("path");
//var url = require("url");
var CreateGrid = require("./Grid/CreateGrid.js");
//var Grid = require("./Grid/GridItem.js");


//STEP 1 PARSE URL

parseURL();

//STEP 2 ASSIGN URL TO MODEL


//STEP 4 ASSIGN DOTS
//STEP 5 WORK OUT WHERE TO PLACE BOXES
//STEP 6 ASSIGN BOXES
//STEP 7 OUTPUT JSON


function parseURL()
{
	urlParser = new URLParser("http://www.giant.com/api?screenResolutionX=1280&screenResolutionY=1024");
	
	constructGrid(urlParser.getScreenResolutionX(),
					urlParser.getScreenResolutionY());
}

//STEP 3 WORK OUT GRID
//At this step we should have a working version just with boxes on a javascript html5 page

function constructGrid(screenResolutionX, screenResolutionY)
{
	//rename to Grid
	
	//if a screen resolution is not found it should throw an error as 
	//as a response stating that the other screen resolution is needed
	createGrid = new CreateGrid(screenResolutionX, screenResolutionY);
	
	//you spelt response wrong
	var gridItemResponse = new Array();
    gridItemResponse = createGrid.getGridItems();
	
	createResponse(gridItemResponse);
}



//FROm Creating the grid the output you need it x and Y of each piece of the grid
//and also the height and width of each piece?

//then within an application we can run through the X and Y of each piece and
//draw it.


//so first mvp is place in the screenresolutionX and then Y 
//and check if it draws out a grid on a javascript page

//this should all be a context file.
//I guess MVP. a bit.

/* http.createServer(

function (req, res)
{
  res.writeHead(200, {'Content-Type': 'text/plain'});
 
  res.end("Hello Giant Screen Resolution X!" +  urlParser.getScreenResolutionX());
  res.end("Hello Giant Screen Resolution Y!" +  urlParser.getScreenResolutionY());
  res.end("Hello Giant Screen Resolution getURL!" +  urlParser.getURL());
}

).listen(1337, '127.0.0.1');



console.log("Service running http://127.0.0.1:1337/"); */

function addRequestData(response)
{
	response.write('"request" :{');
	response.write('"items_required" : "15"');
	response.write('},');
}

function addResponseData(response)
{
	response.write('"response" : {');
	response.write('"link" : "http://www.thenhome.com",');
	response.write('"response_code" : "100"');
	response.write('},');
}

function createResponse(gridItemResposonse)
{
	var server = http.createServer(function(request, response) {
			
			
			
			//PPrint out request that has come in
			
			
			//Write JSON
			response.writeHead(200, { 'Content-Type': 'application/json' });

			//open loaded tag
			response.write('loaded({');
			
			addRequestData(response);
			addResponseData(response);
			
			//Opening Tag for the document
			
			
			//Opening Tag for the response
			
			
			response.write('"grid_pattern" : [ ');
			for(i = 0; i < gridItemResposonse.length; i++)
			{
				
			
				var responseObj = new Object();
				
				responseObj.id = gridItemResposonse[i].getId();
				responseObj.row = gridItemResposonse[i].getRow();
				responseObj.column = gridItemResposonse[i].getColumn();
				responseObj.x = gridItemResposonse[i].getX();
				responseObj.y = gridItemResposonse[i].getY();
			
				response.write(JSON.stringify(responseObj));
				
				//The last one does not need a comma
				if(!(i == gridItemResposonse.length - 1))
				{
					response.write(',');
				}
			}
			
			response.write('],');
			
			response.write('"status_code" : "200"');
			
			//Close Loaded tag
			response.write('})');
			
			response.end();
			
	}).listen(1337, '127.0.0.1');
	
	console.log("Service Running at http://127.0.0.1:1337/ Grid API Version 0.2");
}









