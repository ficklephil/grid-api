/**
* DOT ITEM
*/

/**
* The dots index
*/ 
var _dotId;
		
/**
* What grid it's in.
*/ 
var _gridPosition;
var _x;
var _y;

var DotItem = function()
{
}

function setDotId(dotId)
{
	_dotId = dotId;
}

function setGridPosition(gridPosition)
{
	_gridPosition = GridPosition;
}

function setX(x)
{
	_x = x;
}

function setY(y)
{
	_y = y;
}

module.exports = DotItem;

