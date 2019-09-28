//check off specific todos by clicking

$(".listItems").on("click","li",function()
	{$(this).toggleClass("completed");
	 // ($(this).find('span').find('i')).addClass('fa-circle-thin');
	 //console.log($(this).find('span i').attr('class'));
	   if($(this).find('span i').attr('class')=="fa fa-circle-thin")
	   { 
	   	 $(this).find('.checkUncheck').find('i').removeClass('fa fa-circle-thin');
	     $(this).find('.checkUncheck').find('i').addClass('fa fa-check');	
	   }

	    else if($(this).find('span i').attr('class')=='fa fa-check')
	   {  $(this).find('.checkUncheck').find('i').removeClass('fa fa-check');	
	   	  $(this).find('.checkUncheck').find('i').addClass('fa fa-circle-thin');
	   }
});


//click on X to delete the todos
$("ul").on("click",".delete",function(event){
	$(this).parent().fadeOut(500,function(){
		
		$(this).addClass("toBeRemoved");
		$('li.toBeRemoved + hr').remove();
		//alert("hye");
		$(this).remove();
		
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress",function(event){
	if(event.which===13)
	{	//grabbing the new todo text from the inputh
		var todoText = $(this).val();
		$(this).val("");
		console.log(todoText);
		if(todoText!="")
		{			//create a new li and add to ul
		$(".listItems").append("<li class='todoli'><span class='checkUncheck'> <i class='fa fa-circle-thin'></i> </span> "+todoText+"<span class='delete'><i class='fa fa-times' aria-hidden='true'></i></span></li><hr>");	
		}
		
		
	}

});

$(".fa-plus").click(function(){
$("input[type='text']").fadeToggle();
});

document.querySelector('input').addEventListener('focusin',function(){
	//var plus_icon =document.getElementByClassName('fa-plus')[0];
	document.getElementsByClassName('input_icon')[0].classList.remove("fa-plus");
	document.getElementsByClassName('input_icon')[0].classList.add("fa-pencil-square-o");
});

document.querySelector('input').addEventListener('blur',function(){
	//var plus_icon =document.getElementByClassName('fa-plus')[0];
	document.getElementsByClassName('input_icon')[0].classList.remove("fa-pencil-square-o");
	document.getElementsByClassName('input_icon')[0].classList.add("fa-plus");
});

document.getElementById("inactive").addEventListener('click', function(){

	var x = document.getElementsByClassName("fa-circle-thin");
  	for(var i=0;i<x.length; i++)
	{
		x[i].parentElement.parentElement.style.display="none",
		x[i].parentElement.parentElement.nextSibling.style.display="none";
	}

	var y = document.getElementsByClassName("fa-check");
  	for(var i=0;i<y.length; i++)
	{
		y[i].parentElement.parentElement.style.display="list-item",
		y[i].parentElement.parentElement.nextSibling.style.display="block";
	}
});

document.getElementById("active").addEventListener('click', function(){

	var x = document.getElementsByClassName("fa-circle-thin");
  	for(var i=0;i<x.length; i++)
	{
		x[i].parentElement.parentElement.style.display="list-item",
		x[i].parentElement.parentElement.nextSibling.style.display="block";
	}

	var y = document.getElementsByClassName("fa-check");
  	for(var i=0;i<y.length; i++)
	{
		y[i].parentElement.parentElement.style.display="none",
		y[i].parentElement.parentElement.nextSibling.style.display="none";
	}
});

document.getElementById("all").addEventListener('click', function(){

	var x = document.getElementsByClassName("fa-circle-thin");
  	for(var i=0;i<x.length; i++)
	{
		x[i].parentElement.parentElement.style.display="list-item",
		x[i].parentElement.parentElement.nextSibling.style.display="block";
	}

	var y = document.getElementsByClassName("fa-check");
  	for(var i=0;i<y.length; i++)
	{
		y[i].parentElement.parentElement.style.display="list-item",
		y[i].parentElement.parentElement.nextSibling.style.display="block";
	}
});


var date= document.getElementById("date");
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
var today = dd + '/' + mm + '/' + yyyy;
date.innerHTML=today;

