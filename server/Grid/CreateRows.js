/**
* Create Rows 
*/

var Row = require('./Row');

var _rowItems = new Array();

var CreateRows = function(rows)
{

};

CreateRows.prototype.create = function(rows)
{
    for(rowIndex = 0; rowIndex <= rows; rowIndex++)
    {
        var rowItem = new Row();

        //wait so you can set something on something without using a getter or setter
        rowItem.setOffset(0);

        _rowItems.push(rowItem);
    }

    return _rowItems;
}

module.exports = CreateRows;