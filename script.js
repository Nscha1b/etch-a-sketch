
var gridSetup = function()
{
	//ask user how big to make the grid
	var size = getSize();

	//create an empty string
	var td = '';

	//add table data "squares" to the variable
	for (var i =0 ; i < size; i++)
	{
		td += '<td><div class="square"</td>';
	}

	//add the rows of squares to the table
	for (var i =0 ; i < size; i++)
	{
		$('table').append('<tr>' + td + '</tr>');	
	}

	//calculate height and width for the squares based on grid size
	var sWidth = 700/size - 4;
	var sHeight = 700/size - 4;
	$('.square').css( "width", sWidth );
	$('.square').css( "height", sHeight );	
}
	

var blockSelector = function()
{
		
	//When mouse enters a square change opacity so user knows where they are
	$('.square').mouseenter(function()
	{
		$(this).fadeTo('fast', .7);
	});

	//When mouse leaves a square change opacity back to normal
	$('.square').mouseleave(function()
	{
		$(this).fadeTo('fast', .5);
	});
}


var getSize = function()
{
	//get size of grid from dropdown menu and convert it to an int
	var size = parseInt(document.getElementById("sizeMenu").value);
	return size;
}


var resetGrid = function()
{  
	//clear the data from the table
	$("table tr").remove();

	//run grid set up to start with a new grid
	gridSetup();
	blockSelector();
	paintRed();
}

//**********************************************************************
//Below are the functions for painting different colors. The following
//code does work but must find a way to make mouse down effects global,
//so I can eliminate repetative code.
//**********************************************************************

var paintRed = function()
{
	//Default Paint color

	// Only change css if mouse is down
	var isDown = false;

	$(document).mousedown(function()
	{
		isDown = true;
	})
	.mouseup(function()
	{
		isDown = false;
	});

	//change square color to red
	$(".square").mouseover(function()
	{
    	if(isDown == true)
    	{        
       		$(this).css({background:"red"});
    	}
  	});
}


var paintBlue = function()
{
	// Only change css if mouse is down
	var isDown = false;

	$(document).mousedown(function()
	{
		isDown = true;
	})
	.mouseup(function()
	{
		isDown = false;
	});

	//change square color to blue
	$(".square").mouseover(function()
	{
    	if(isDown == true)
    	{        
       		$(this).css({background:"blue"});
    	}
  	});
}


var paintGreen = function()
{
	// Only change css if mouse is down
	var isDown = false;

	$(document).mousedown(function()
	{
		isDown = true;
	})
	.mouseup(function()
	{
		isDown = false;
	});

	//change square color to green
	$(".square").mouseover(function()
	{
    	if(isDown == true)
    	{        
       		$(this).css({background:"green"});
    	}
  	});
}


var paintRandom = function()
{
	//function to create random color strings
	var randomColor = function()
	{
		//letters & numbers to combine
    	var letters = '0123456789ABCDEF'.split('');
    	var color = '#';

    	//each time loop through grab a random letter
    	for (var i = 0; i < 6; i++ )
    	{
        	color += letters[Math.floor(Math.random() * 16)];
    	}

    return color;

	}


	// Only change css if mouse is down
	var isDown = false;

	$(document).mousedown(function()
	{
		isDown = true;
	})
	.mouseup(function()
	{
		isDown = false;
	});

	//change square color to random
	$(".square").mouseover(function()
	{
    	if(isDown == true)
    	{        
       		$(this).css({background:randomColor});
    	}
  	});
}


$(document).ready(function()
{
	gridSetup();
	blockSelector();
	paintRed();

	
	//When clear button clicked reset grid.
    document.getElementById("clearButton").onclick = function()
    {
    	resetGrid();
    }

    //when blue button clicked change color to blue
    document.getElementById("blue").onclick = function()
    {
    	paintBlue();
    }

    //when red button clicked change color to red
    document.getElementById("red").onclick = function()
    {
    	paintRed();
    }

    //when green button clicked change color to green
    document.getElementById("green").onclick = function()
    {
    	paintGreen();
    }

    //when green button clicked change color to random
    document.getElementById("random").onclick = function()
    {
    	paintRandom();
    }

});








                                                                               
















