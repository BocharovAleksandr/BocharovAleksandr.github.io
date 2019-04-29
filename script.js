var Coordinates =
[
 [0,0,380,380,800,800,380], //Left coordinates
 
 [40,560,380,640,600,20,10] //Top coordinates    
];

var Animating = false;
var CoordinatesNumber;
var RandomNumber;

function createNumber(){
	
    RandomNumber = Math.random();
    RandomNumber = Math.round(RandomNumber*6); 
	
	if(RandomNumber === CoordinatesNumber)
	{
    do 
	 {
      RandomNumber = Math.random();
      RandomNumber = Math.round(RandomNumber*6);
     } while (RandomNumber === CoordinatesNumber);	 		
	}		
};

$(function(){
		
  $("#button_box_2").mouseover(function(){
	  
	if(Animating == true)
    {
	 return; 	
	};		
	  
	Animating = true;  
	  
    createNumber();
	CoordinatesNumber = RandomNumber;
			  
	$("#button_box_2").animate({"left":Coordinates[0][RandomNumber], "top":Coordinates[1][RandomNumber]},
	{duration:200, 
	 complete: function()
	 {
	  Animating = false;
	 }
	});
	  
  });
  
  $("#button_yes").click(function(){
	  
	$(".button_box_size").hide();
    $("#text_1").hide();
    $("#text_2").show();
	
  });
		
});
