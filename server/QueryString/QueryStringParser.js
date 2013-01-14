var _url = require('url');
var _path;

function parseURL(path)
{
	_path = url.parse(path, parseQueryString=false);
}

function test():int
{
	return 3;
}

function get screenResolutionX():int
{
	return 10;
}

function get screenResolutionY():int
{
	return 15;
}