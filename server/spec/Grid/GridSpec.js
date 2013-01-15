CreateGrid = require('../../Grid/CreateGrid');

var screenResolutionX = 1280;
var screenResolutionY = 1024;

createGrid = new CreateGrid(screenResolutionX, screenResolutionY);

describe('create-grid', function()
{
	it('should take in screen resolution x to be its height', function()
	{
		expect(screenResolutionX).toEqual(createGrid.getScreenResolutionX());
	});
	
	it('should take in screen resolution y to be its width', function()
	{
		expect(screenResolutionY).toEqual(createGrid.getScreenResolutionY());
	});
});
