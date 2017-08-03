var cities = ["Los Angeles, CA", "San Jose, CA", "San Diego, CA"]
var dates = ["8/1", "8/2", "8/3"]
var links = ["www.x.com","www.y.com","www.z.com"]

//ON CLICK


var string = "<table>";

$.each(cities, function(index, value){
	  string += '<tr>';
	  string +=   '<th>'+cities[index]+'</th>';
	  string +=   '<th>'+dates[index]+'</th>'; 
	  string +=	  '<th>'+links[index]+'</th>';
	  string +=	'</tr>';
	  $('#tourDates').html(string);
	console.log(string)
});