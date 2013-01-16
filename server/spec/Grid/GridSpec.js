CreateGrid = require('../../Grid/CreateGrid');

var PROPERTY_BOX_GUIDE_WIDTH = 106;
var PROPERTY_BOX_GUIDE_HEIGHT = 94;

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
	
	it('id of grid item should always increase', function()
	{
		var gridItems = 0;
		var gridItemResponse = new Array();
		gridItemResponse = createGrid.getGridItems();
	
		for(i = 0; i < gridItemResponse.length; i++)
		{
			++gridItems;
		}
		
		//as the length will be the last one and then we get the id of the last
		//one which should be the total length as we are constantly incrementing
		//the id so it would be equal to the grid items length.
		expect(gridItems - 1).toEqual(gridItemResponse[gridItemResponse.length - 1].getId());
	});
	
	it('should increase row until mid section of the page', function()
	{
		var EVEN_ROW = "evenRow";
		var ODD_ROW = "oddRow";
	
		//calulate mid point of page
		var maxColumn = getMaxGridItemsX(PROPERTY_BOX_GUIDE_WIDTH, screenResolutionX);
    
		var maxRow = getMaxGridItemsY(PROPERTY_BOX_GUIDE_WIDTH, screenResolutionY);
		var midRow = Math.round(maxRow / 2);
		
		var gridItemResponse = new Array();
		gridItemResponse = createGrid.getGridItems();
		
		//if the column is 0 or 2 or 4 then the final number
		//should be 4
		//for 0-4 row number should increase
		var rowType;
		
		for(columnIndex = 0; columnIndex < maxColumn; columnIndex++)
		{
			//for EVEN numbers ie.0,2,4,6 the row number should go up
			//for ODD numbers ie. 1,3,5,7 the row number should go down
			rowType = (columnIndex % 2)? EVEN_ROW : ODD_ROW;
			
			if(rowType == EVEN_ROW)
			{
				for(p = 0; p <= midRow; p++)
				{
					//console.log(p);
					//expect(p).toEqual(gridItemResponse[p].getRow());
					
					
				}
			}
		}
	});
	
	function getMaxGridItemsY(tileHeight, height)
	{
		return (height - tileHeight)  / tileHeight;
	}
	function getMaxGridItemsX(tileWidth, width)
	{
		return (width - tileWidth)  / tileWidth;
	}
	
});
