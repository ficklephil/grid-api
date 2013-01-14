/**
 * Created with IntelliJ IDEA.
 * User: philipaberneithy
 * Date: 27/09/2012
 * Time: 14:42
 * To change this template use File | Settings | File Templates.
 */

var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
var CreateGrid = require("./Grid/CreateGrid.js");
var Grid = require("./Grid/GridItem.js");

var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};


//STEP 1 PARSE URL

//parseURL();

//STEP 2 ASSIGN URL TO MODEL
//STEP 3 WORK OUT GRID
//STEP 4 ASSIGN DOTS
//STEP 5 WORK OUT WHERE TO PLACE BOXES
//STEP 6 ASSIGN BOXES
//STEP 7 OUTPUT JSON

//so lets try and have the grid of boxes by eop

//create grid for

//1280 x 1024



//gridItems needs to be an Array of Objects, each Object should be a gridItem



var server = http.createServer(function(request, response) {


    createGrid = new CreateGrid(1280,1024);
    //var gridItems = new Array();


    //var uri = url.parse(request.url).pathname;

    //uri = "www/" + uri;

    //if (uri.charAt(uri.length - 1) == "/") {
    //    uri += "index.html";
    //}

    //if (uri.indexOf("..") != -1) {


        var gridItemResposonse = new Array();
        gridItemResposonse = createGrid.getGridItems();


          //  console.log(gridItemResposonse[0].getY());


        response.writeHead(200, {'Content-Type': 'text/plain'});

        for(i = 0; i < gridItemResposonse.length; i++)
        {
            response.write("{ Id:" + gridItemResposonse[i].getId() +
                           " Row:" + gridItemResposonse[i].getRow() +
                           " Column:" + gridItemResposonse[i].getColumn() +
                           " X:" + gridItemResposonse[i].getX() +
                           " Y:" + gridItemResposonse[i].getY()+ " }"
                          );
        }

        response.end();

    //}

    //var filename = path.join(process.cwd(), uri);

    //console.log("\tAttempting to serve: " + filename);

    //path.exists(filename, function(exists) {

    //    if (!exists) {
    //        console.log("File not found: " + filename);
    //        response.writeHead(404);
     //       response.end("Hello Beans!fgfgfgfkkkkg :)");
     //       return;
     //   }

      //  var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
      //  response.writeHead(200, {'Content-Type':mimeType});

  //      var fileStream = fs.createReadStream(filename);
   //     fileStream.pipe(response);
   // });


}).listen(1337, '127.0.0.1');