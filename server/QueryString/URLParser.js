var _url = require('url');

var _screenResolutionX;
var _screenResolutionY;
var _href;
var _path;
//Constructor

//the path would be ?screenResolutionX=1240&screenResolutionY=800
var URLParser = function(path)
{
	parseQueryString(path);
};

function parseQueryString(path)
{
	_path = path;
	
	var pathURLParsed = _url.parse(_path,true);
	var urlParams = pathURLParsed.query;
	
	_href = pathURLParsed.href;
	
	_screenResolutionX = Number(urlParams.screenResolutionX); 
	_screenResolutionY = Number(urlParams.screenResolutionY);
}

//so this class should just have getter methods so that the context can
//pick stuff off it and pass it to the model if needed.

//method accessor?
URLParser.prototype.getURL = function()
{
	return _path;
};

URLParser.prototype.getScreenResolutionX = function()
{
	return _screenResolutionX;
};

URLParser.prototype.getScreenResolutionY = function()
{
	return _screenResolutionY;
};

URLParser.prototype.getDotCoordinates = function()
{
	//so this should return an array of [x,y]?

	return _dotCoordinateArray;
};

module.exports = URLParser;

//variable but it makes sense if it's taken out using a method! as 
//otherwise it breaks principals.
module.exports.screenResolutionX = 23;