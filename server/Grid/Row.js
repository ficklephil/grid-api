/**
* ROW
*/

var _offset;

//CONST
var Row = function()
{
}

Row.prototype.setOffset = function(offset)
{
	_offset = offset;
}

Row.prototype.getOffset = function()
{
    return _offset;
}

module.exports = Row;