var PatternItem = require('./PatternItem');

var PROPERTY_BOX_WIDTH = 86;


//CONST
var CreatePattern = function()
{

}

CreatePattern.prototype.create = function()
{
    var patternItems = new Array();

    var patternItem = new PatternItem();
    var patternItem2 = new PatternItem();
    var patternItem3 = new PatternItem();
    var patternItem4 = new PatternItem();

    patternItem.setColumn(2);
    patternItem.setRow(0);
    patternItem.setOffset(PROPERTY_BOX_WIDTH / 2);

    patternItem2.setColumn(4);
    patternItem2.setRow(1);
    patternItem2.setOffset(PROPERTY_BOX_WIDTH /2);

    patternItem3.setColumn(6);
    patternItem3.setRow(1);
    patternItem3.setOffset(PROPERTY_BOX_WIDTH /2);

    patternItem4.setColumn(9);
    patternItem4.setRow(0);
    patternItem4.setOffset(PROPERTY_BOX_WIDTH /2);

    patternItems.push(patternItem);
    patternItems.push(patternItem2);
    patternItems.push(patternItem3);
    patternItems.push(patternItem4);

    return patternItems;
}

module.exports = CreatePattern;