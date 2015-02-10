/**
  Simple basic script
*/
$(document).ready(function() {
  console.log('playground is ready')
  
  /*
    vars and some d3 functions
  */
  var csv = [], // this array will contain the csv data
      svg = d3.select('#playground')
              .append('svg')
                .attr({
                  width: 600,
                  height: 600, fill : "green"
                });

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
  
  
    // simple disposal of our loaded objects
	
/*svg.selectAll('circle')
      .data(auteurs, function(d){})
      .enter()
        .append('circle')
          .attr({
            cx: function(d,i) {return i*50 + 50},
            cy: 50,
            r: 50
          });*/
		
var livre = {};
	csv.filter(function(d){
		if(!livre[d.titre])
			livre[d.titre] = [] ;
		livre[d.titre].push(d)
		//console.log(d,d.titre)
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
  cy :60,
  cx : function(d, i){console.log("",d,i);return i*50 ;}
  
})      
var alphabet = auteurs.split("");

function update(data) {
selection.selectAll('circle.item').data(function(d) {
  return d.items
})
  .enter()
  .append("circle")
  
  selection.attr({class:"item", "update", "enter", "class"});
      .attr("x", function(d, i) { return i * 32; })
      .attr("dy", ".35em");
	  
selection.selection(function(d) { return d; });
selection.exit().remove();
}

update(alphabet);
setInterval(function() {
  update(shuffle(alphabet)
      .slice(0, Math.floor(Math.random() * 26))
      .sort());
}, 1500);

// Shuffles the input array.
function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m], array[m] = array[i], array[i] = t;
  }
  return array;
}
  
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


