URLParser = require('../../QueryString/URLParser');

var http = require('http');

var hostName = "http://www.thenhome.com";
var screenResolutionX = 1280;
var screenResolutionY = 1024;

var url = hostName + "/api?screenResolutionX=" + 
	screenResolutionX + "&screenResolutionY=" + screenResolutionY;

urlParser = new URLParser(url);

describe('url-parser', function()
{
	it('should return the full url', function()
	{	
		expect(url).toEqual(urlParser.getURL());
	});

	it('should return screen resolution x', function()
	{
		expect(screenResolutionX).toEqual(urlParser.getScreenResolutionX());
	});
	
	it('should return screen resolution y', function()
	{
		expect(screenResolutionY).toEqual(urlParser.getScreenResolutionY());
	});
});
