/**
 * Created with IntelliJ IDEA.
 * User: philipaberneithy
 * Date: 27/09/2012
 * Time: 14:42
 * To change this template use File | Settings | File Templates.
 */

//IMPORTS
var GridItem = require("./GridItem");
var CreatePattern = require("./CreatePattern");
var CreateRows = require("./CreateRows");



var _width;
var _height;
var _gridItems = new Array();


var CreateGrid = function(width, height)
{
    var EVEN_ROW = "evenRow";
    var ODD_ROW = "oddRow";

    var UPWARDS_MOVEMENT = 1;

    //put this in different class
    var PROPERTY_BOX_GUIDE_WIDTH = 106;
    var PROPERTY_BOX_GUIDE_HEIGHT = 94;

    var gridItemYDirection = PROPERTY_BOX_GUIDE_HEIGHT;

    //WARNING THIS IS THE GOOGLE MAP HEIGHT?!?!?! WHOAAAA LETS PUT IT AS HEIGHT FOR NOW
    var gridItemYCoor = height / 2;


    var maxColumn = getMaxGridItemsX(PROPERTY_BOX_GUIDE_WIDTH, width);
    var maxRow = getMaxGridItemsY(PROPERTY_BOX_GUIDE_WIDTH, height);

    var INVERSE_NUMBER = -1;
    var direction = -1;
    var segmentDirection = -1;
    var startXCoor;

    var midRow = maxRow / 2;

    var gridItemDirection = -1;

    var UPWARDS_MOVEMENT = 1;
    var rowType;

    var rowIndex = 0;

    var patternIndex = 0;

    var gridItemIndex = 0;

    //create Pattern new func perhaps
    createPattern = new CreatePattern();
    var pattern = createPattern.create();

    //create rows new func perhaps
    createRows = new CreateRows();
    var rows = createRows.create(3);


    /*_width = width;
_height = height;

gridItem = new GridItem();
gridItem.setX(width);
gridItem.setY(height);

gridItem2 = new GridItem();
gridItem2.setX(800);
gridItem2.setY(900);

gridItem3 = new GridItem();
gridItem3.setX(1920);
gridItem3.setY(1000);

_gridItems = [gridItem,gridItem2,gridItem3];     */

    for(segmentIndex = 0; segmentIndex < 2; segmentIndex++)
    {
        direction *= INVERSE_NUMBER;
        segmentDirection *= INVERSE_NUMBER;//left and right

        if(segmentDirection == INVERSE_NUMBER)//going backwards
        {
            startXCoor = width - (width - (maxColumn * PROPERTY_BOX_GUIDE_HEIGHT))/2;
            direction = 1;
            gridItemDirection = -1;

            gridItemYCoor += PROPERTY_BOX_GUIDE_HEIGHT * (midRow + 2);
        }


        //reset pattern index
        patternIndex = 0;

        gridItemYCoor -= PROPERTY_BOX_GUIDE_HEIGHT * direction;

        for(columnIndex = 0; columnIndex < maxColumn; columnIndex++)
        {
            gridItemDirection *= INVERSE_NUMBER;

            //Makes the item go up and down
            gridItemYDirection = gridItemYDirection * INVERSE_NUMBER;

            //Check Row type
            rowType = (columnIndex % 2)? EVEN_ROW : ODD_ROW;

            //if its 0 then set as max rows in segment
            //if max rows in seg then set as min rows

            rowIndex = (gridItemDirection == UPWARDS_MOVEMENT)? 0 : midRow;//Max row height;


            //BRAND NEW PLZ CHECK

            for(gridIndex = 0; gridIndex <= midRow; gridIndex++)
            {
                gridItem = new GridItem();
                gridItem.setId(gridItemIndex);
                gridItem.setRow(rowIndex);
                gridItem.setColumn(columnIndex);

                //if the second row and it's 0 do not go down on the
                //y
                if(gridIndex != 0)//PLACE columnIndex !=0 to get the inverse possibly
                {
                    gridItemYCoor += (gridItemYDirection * direction); //instead of plus you negative
                }

                //gridItemYCoor += gridItemYDirection;
                gridItem.setY(gridItemYCoor);

                if(patternIndex < pattern.length &&
                    pattern[patternIndex].column == gridItem.getColumn() &&
                    pattern[patternIndex].row == gridItem.getRow())
                {
                    rows[rowIndex].setOffset(pattern[patternIndex].getOffset() + rows[rowIndex].getOffset());
                       // pattern[patternIndex].getOffset();

                    patternIndex++;
                }

                //previous width + this width and times this by segment direction


                gridItemX = ((PROPERTY_BOX_GUIDE_WIDTH * columnIndex) + 0) * segmentDirection;

                gridItem.setX(gridItemX + startXCoor);
                //gridItem.width = gridItemWidth + rows[rowIndex].offset;



                _gridItems.push(gridItem);
                //temporaryAddGridPositionToSee(gridItemIndex, rowIndex, columnIndex,
                //	gridItem.x, gridItem.y, 0.5, gridItemWidth, gridItemHeight);

                gridItemIndex++;

                gridItemDirection == UPWARDS_MOVEMENT? rowIndex++ : rowIndex--;
            }
        }

    }




}


function getMaxGridItemsX(tileWidth, width)
{
    return (width - tileWidth)  / tileWidth;
}

function getMaxGridItemsY(tileHeight, height)
{
    return (height - tileHeight)  / tileHeight;
}






CreateGrid.prototype.getScreenResolutionX = function()
{
    return _width;
};

CreateGrid.prototype.getScreenResolutionY = function()
{
    return _height;
};

CreateGrid.prototype.getGridItems = function()
{
    return _gridItems;
};


module.exports = CreateGrid;