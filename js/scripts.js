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
                  width: 500,
                  height: 300
                });

  /*
    Get csv data as res (resource)
  */
  function draw() {
    console.log('Hello, drawing', csv.length, 'rows');
    // transform data objects and group them year by year
	//console.log(csv)
	var auteurs = {};
	csv.filter(function(d){
		if(!auteurs[d.auteur])
			auteurs[d.auteur] = [] ;
		auteurs[d.auteur].push(d)
		//console.log(d,d.auteur)
	})
	console.log(auteurs)
    // simple disposal of our loaded objects
    svg.selectAll('circle')
      .data(csv, function(d){ return d.album_url})
      .enter()
        .append('circle')
          .attr({
            cx: function(d,i) {return i*50 + 24},
            cy: 24,
            r: 24
          });

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