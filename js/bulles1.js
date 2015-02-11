/* ******************

Test 01.
Cet exemple charge des données en format CSV, basé sur http://bl.ocks.org/mbostock/3007180

*********************** */

var largeur = 900,
	hauteur = 600,
    format = d3.format(",d"),
    color = d3.scale.category20c();

var pack = d3.layout.pack()
    .sort(null)
    .size([largeur, hauteur])
    .value(function(d) { return d.ratings; }) // afficher les noeuds
	.value(function(d) { return d.annee_publication * d.annee_publication; }) // afficher tous les noeuds
    .padding(15); // changer la valeur pour plus de space entre les ronds

var csv = [],
 svg = d3.select("#playground").append("svg")
    .attr("width", largeur)
    .attr("height", hauteur);


	d3.csv("contents/data.csv", function(res) {
	
	csv=res;
	console.log('Hello, drawing', csv.length, 'rows');
	
	//regroupements lignes du tableau films
	var films = {};
	csv.filter(function(d){
		if(!films[d.film])
			films[d.film] = [] ;
		films[d.film].push(d)
		//console.log(d,d.film)
	})  
		    console.log(films)	
			
	//regroupements lignes du tableau livres
	var livre = {};
	csv.filter(function(d){
		if(!livre[d.titre])
			livre[d.titre] = [] ;
		livre[d.titre].push(d)
		
	})
		    console.log(livre)
			
	//regroupements lignes du tableau auteurs
	var auteurs_groups = {},
    auteurs = [];
	
	csv.filter(function(d){
    if(!auteurs_groups[d.auteur])
        auteurs_groups[d.auteur] = [] ;
    auteurs_groups[d.auteur].push(d)
	})
		  
	for(var i in auteurs_groups) {
		auteurs.push({
				id:i,
				items:auteurs_groups[i]
			})
	}
  console.log(auteurs)

  //creation des noeuds
	var node = svg.selectAll("g.popcorn")
      .data(pack.nodes({children: res}).slice(1))
      .enter()
	  .append("g")
	  .attr({class:"popcorn"});
	  
	/*node.selectAll('circle.item').data(function(d) {
	return d.items
	})
	.enter()
	.append("circle")
	.attr({class:"item"});*/
	  
	
  
  // c'est le titre qui s'affiche au survol
	node.append("title")
      .text(function(d) { return d.film; });
  
  // les ronds
  node.append("circle")
  .attr("r", function(d) { return d.auteur.length; })
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
    .style("fill", function(d) { return color(d.ratings); }); // couleur des ronds en fonction du rating


	
   // les textes associés aux ronds... la taille du texte varie selon la taille du rond
  node.append("text")
      .attr("x", function(d) { return d.x; })
      .attr("y", function(d) { return d.y; })
      .style("text-anchor", "middle")
	  .style("fill", "white")
	  .style("font-size", function(d) { return d.r/2 + "px"; })
	  .style("opacity", "0.8")
      .text(function(d) { return d.film; });
});

d3.select(self.frameElement).style("height", hauteur + "px");
d3.select(self.frameElement).style("width", largeur+ "px");