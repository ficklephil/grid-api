/*
* Pattern Item
*/
var _column;
var _row;
var _offset;

//CONST
var PatternItem = function()
{

}

PatternItem.prototype.setColumn = function(column)
{
	_column = column;
}

PatternItem.prototype.setRow = function(row)
{
	_row = row;
}

PatternItem.prototype.setOffset = function(offset)
{
	_offset = offset;
}

PatternItem.prototype.getOffset = function(offset)
{
    return _offset;
}

module.exports = PatternItem;
