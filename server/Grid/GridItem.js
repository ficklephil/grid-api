
var _dotItems = new Array();
		
var _id;


		
var _width;
var _height;
		
var _row;
var _column;
var _filled = false;

var _placementDirection = -1;
		
		/**
		 * How many dots are is the Grid Item that is pushing this.
		 * IE. We do not want 1 dot to push a grid item in a NEGATIVE manner,
		 * when 5 dots within a Grid Item has aleardy pushed it in a POSTIVE 
		 * manner. 
		 * 
		 * This should make it looks nicer, as the more dots in a Grid Item
		 * should have more control of the push than a Grid Item with
		 * 1 dot.
		 */ 
		var _pushedByDots;
		
		/**
		 * Just want to store the ID that pushed it.
		 */ 
		var _pushedById;




//CONST
var GridItem = function()
{

}

//remember that dotItem is an actual dotItem
GridItem.prototype.setDotItem = function(dotItem)
{
	if(!_dotItems)
	{
		_dotItems = new Array();
	}
	
	_dotItems.push(dotItem);
}

GridItem.prototype.getDotItemsLength = function()
{
	//hope this works!!!
	return (_dotItems)?_dotItems.length : 0;
}

GridItem.prototype.getDotItems = function()
{
	return _dotItems;
}

GridItem.prototype.clearDotItems = function()
{
	if(_dotItems)
	{
		//_dotItems = new Vector.<DotItem>(); // can make this faster. instead of creating new 
		_dotItems = new Array(); // can make this faster. instead of creating new 
	
	}
				//one only create one if needed.
}

GridItem.prototype.setX = function(value)
{
    this.x = value;
}

GridItem.prototype.getX = function()
{
    return this.x;
}

GridItem.prototype.setY = function(value)
{
    this.y = value;
}

GridItem.prototype.getY = function()
{
    return this.y;
}

GridItem.prototype.setId = function(value)
{
    this.id = value;
}

GridItem.prototype.getId = function()
{
    return this.id;
}

GridItem.prototype.setRow = function(value)
{
    this.row = value;
}

GridItem.prototype.getRow = function()
{
    return this.row;
}

GridItem.prototype.setColumn = function(value)
{
    this.column = value;
}

GridItem.prototype.getColumn = function()
{
    return this.column;
}


module.exports = GridItem;













