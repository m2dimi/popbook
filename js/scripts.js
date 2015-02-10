/**
  Simple basic script
*/
$(document).ready(function() {
  console.log('playground is ready')
  
  /*
    vars and some d3 functions
  */
var size = 960;

var pack = d3.layout.pack()
    .sort(null)
    .size([size, size])
    .value(function(d) { return d.radius * d.radius; })
    .padding(5);

  var csv = [], // this array will contain the csv data
    svg = d3.select('#playground')
    .append('svg')
	.attr("width", size)
    .attr("height", size)
	.attr("transform", "translate(2,2)");
 
  /*
    Get csv data as res (resource)
  */
  function draw() {
    console.log('Hello, drawing', csv.length, 'rows');
    // transform data objects and group them year by year
	//console.log(csv)
	
	 var auteurs_groups = {},
      auteurs = [];

  // cycle through the csv array and find groups belonging to the same author
  csv.filter(function(d){
    if(!auteurs_groups[d.auteur])
        auteurs_groups[d.auteur] = [] ;
    auteurs_groups[d.auteur].push(d)
  })

  // object to array transformation, to be used with d3
  for(var i in auteurs_groups) {
    auteurs.push({
        id:i,
        items:auteurs_groups[i]
    })
  }
  console.log(auteurs)
		
var livre = {};
	csv.filter(function(d){
		if(!livre[d.titre])
			livre[d.titre] = [] ;
		livre[d.titre].push(d)
		
	})
		    console.log(livre)
			
			
var films = {};
	csv.filter(function(d){
		if(!films[d.film])
			films[d.film] = [] ;
		films[d.film].push(d)
		//console.log(d,d.film)
	})  
		    console.log(films)		
			
var selection = svg.selectAll("g.popcorn").data(auteurs)
.enter()
.append("g").attr({class:"popcorn"});


selection.append("circle").attr({
  r: function (d,i){
    return d.items.length
  }, 
  cy :20,
  cx : function(d, i){console.log("",d,i);return i*40 ;}
})      

selection.selectAll('circle.item').data(function(d) {
  return d.items
})
  .enter()
  .append("circle")
    .attr({class:"item"});
	

/*function update(){


  // note the use of key function and that we RESELECT
  var uselection = selection.selectAll("circle.item").data(function(d) {return ''+d;});
  console.log('selection without data is', selection, 'while uselection is', uselection);
  
  uselection.exit()
  	.transition()
  	
  	.duration(500)
  	.attr({
    	x: 50,
    	//y : function(d, i){return i * 30 + 30}
  	})
  	.remove()
  // only already existing stuffs
  uselection
  	.transition()
  	
  	.duration(500)//function(d, i){return 100 * i})
  	.attr({
    	y : function(d, i){return i * 30 + 30}
  	})
  
  uselection.enter()
  	.append("circle")
  	.attr({
    	x: 20,
    	y : function(d, i){return i * 30 + 30}
  	})
  	.selectAll(function(d){return d})
 	
  }
setInterval(update, 1500);
*/
  }
  
  


  // load csv file using d3
  d3.csv('contents/data.csv', function(res) {
    if(!res) {
      console.log('file not found or network error');
      return;
    }
    // save locally csv data
    csv = res;
    // let's call our draw function 
    draw(); 
  });

});


