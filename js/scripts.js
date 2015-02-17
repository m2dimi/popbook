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
    .value(function(d) { console.log(d); return 5; })
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
  function draw(something) {
    console.log('draw function, drawing', something.length, 'elements', something);
    
    //console.log(pack.nodes({children:something}))


    var node = svg.datum({
      name: 'root',
      children: something
    }).selectAll(".node")
      .data(pack.nodes)
    .enter().append("g")
      .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")";})
	  .on("mouseover",function(d,i) {var affiche_auteur = d.auteur; d3.select("#auteurnom").text(affiche_auteur);})
	  .on("click", function(d,i) {
	  
	var meta = d.film+" ; film de "+d.realisateur+", sorti en salles en "+d.sortie+". Il est issu du livre "+d.titre+" de "+d.auteur+", paru en "+d.annee_publication+". ";
	console.log(meta);
	d3.select("#ticket").text(meta);
	//alert("Auteur : "+ d.auteur +"\nLivre : "+d.titre+"\nAnnee de publication : " +d.annee_publication +"\nFilm : " +d.film+"\nRealisateur : " +d.realisateur+"\nAnnee (film) : " +d.sortie); 
	}); // automatic depuis pack layout
		
    node.append("title")
        .text(function(d) {
          if(d.film) {
            return d.film
          }
          return (d.name || d.film) +  (d.children ? '(' + d.children.length + ')': "")});

    node.append("circle")
        .attr("r", function(d) { return d.r; }); // automatic depuis pack layout

    node.filter(function(d) { return !d.children; }).append("text")
        .attr("dy", ".3em")
        .style("text-anchor", "middle")
        .text(function(d) { console.log(d); return d.film.substring(0, d.r / 3); });
  };
  
  
  // load csv file using d3
  d3.csv('contents/data.csv', function(res) {
    if(!res) {
      console.log('file not found or network error');
      return;
    }
    // save locally csv data
    csv = res;

    var auteurs_groups = {},
        auteurs = [],
        livres_groups = {},
        livres = [],
        films_groups = {},
        films = [];;

    // cycle through the csv array and find groups belonging to the same author
    csv.filter(function(d){
      if(!auteurs_groups[d.auteur])
          auteurs_groups[d.auteur] = [];
      auteurs_groups[d.auteur].push(d)
    })

    csv.filter(function(d){
      if(!livres_groups[d.titre])
        livres_groups[d.titre] = [];
      livres_groups[d.titre].push(d);
    });

    csv.filter(function(d){
      if(!films_groups[d.film])
        films_groups[d.film] = [] ;
      films_groups[d.film].push(d)
    }) 

    // object to array transformation, to be used with d3
    for(var i in auteurs_groups) {
      auteurs.push({
        name: i,
        children: auteurs_groups[i]
      })
    };
    
    for(var i in livres_groups) {
      livres.push({
        name: i,
        children: livres_groups[i]
      })
    };
    
    for(var i in films_groups) {
      films.push({
        name: i,
        children: films_groups[i]
      })
    };
    
    // groups
    console.log("combien d'auteurs :", auteurs.length);
    console.log('... de livres :', livres.length);
    console.log('... et de films :', films.length);
	

    // call out 'update' function
	
    draw(auteurs);
	
  });

});


