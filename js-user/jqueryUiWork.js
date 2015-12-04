$(document).ready(function()//wen jquery has loaded call this function
{
//here we create an accordion
$( "#accordion" ).accordion();
$( "#tabs" ).tabs();


// var listTemplate= '
// 	<ul>
// 			<li>
// 			<h1>  <a href="#repo_link "> Repository title</a></h1>
// 			<p>Description</p>
// 			<span> Last updated:<time>12:00pm</time></span>

// 			</li>
// 		</ul>
// 		';

url = 'https://api.github.com/users/ephantus/repos';
$.get(url, function(data)
{
	var listTemplate ='';
		listTemplate += '<ul>';
	data.forEach(function(repository)
	{
		
		listTemplate += '<li>';
		listTemplate += '<h1><a href="'+repository.html_url+'">'+repository.name+'</a></h1>';
		listTemplate += '<p>'+repository.description+'</p>';
		listTemplate += '<span> Last updated:<time>12:00pm</time></span>';
		listTemplate += '</li>';
		

	});
	listTemplate += '</ul>';


$('#open-source-container').html(listTemplate);
	
});

// $('#open-source-container').html(listTemplate);

});






	