<h1>Pop’Book</h1>
=======

<h2>Présentation</h2>
Le projet PopBook est constitué de Sarah Hattab, Pauline Jay, Eléonore Lellouche et Idrissa Diehdiou. Nous avons choisi de travailler sur les livres adaptés au cinéma afin de quantifier l'importance des livres en tant que sources d'inspiration pour le cinéma, tout en prenant en compte les notes attribuées aux films par les spectateurs afin d'avoir une idée du succés (ou non) de ces adaptations.

<h2>Concept</h2>
Pour mettre en perspective nos données, nous avons choisi une visualisation de données se rapprochant des réseaux où chaque cercle représenterait une donnée, à l'intérieur de laquelle est déjà ancrée d'autres données qui se libéreraient au clic.
Notre point d'entrée est les auteurs : en cliquant sur un auteur, les métadonnées correspondant à ses livres déjà adaptés au cinéma apparaissent. Le cercle "auteur" sera plus ou moins gros en fonction du nombre de livres qui ont été adaptés. En cliquant sur un titre de livre, nous avons accès à son ou ses adaptations, si le livre a été adapté plusieurs fois. La différence entre l'année de publication du livre et l'année de sortie de son film est mis en perspective par leurs espacements : plus l'écart entre les années est grand, plus le cercle correspondant au film sera visuellement éloigné du cercle correspondant au livre. Enfin, c'est à ce moment là que les notes des spectateurs rentrent en ligne de compte : les métadonnées "films" sont de différentes couleurs en fonction de leurs notes.
Pour une meilleure compréhension, les métadonnées correspondant au popcorn séléctionné s'affichent sur un ticket de cinéma.
Ainsi, cette visualisation nous permet de voir assez rapidement quels auteurs ont été le plus adaptés au cinéma et avec quels livres, en prenant en compte leurs espacement dans le temps, et leurs succès auprès des spectateurs.

<h2>Inspirations</h2>
<ul>
<li>http://vax.herokuapp.com/tour</li>
<li>http://pmcruz.com/</li>
<li>http://bl.ocks.org/mbostock/4063269</li>
<li>http://www.cytoscape.org/</li>
</ul>

<h2>Les données</h2>

Pour se faire, nous avons récupéré les données suivantes :
<h3>Pour les livres :</h3>
<ul>
<li>Titre original</li>
<li>Nom de l'auteur</li>
<li>Année de publication</li>
<li>Pays d'origine</li>
<li>Genre</li>
</ul>

<h3>Pour les films</h3>
<ul>
<li>Titre du film</li>
<li>Réalisateur</li>
<li>Année de sortie</li>
<li>Pays d'origine</li>
<li>Pochette du film</li>
<li>Ratings</li>
</ul>


Nous avons trouvé les informations relatives aux livres sur les sites tels que Babelio tandis que les métadonnées qui concernent les films ont été piochés sur IMDB. Ces deux sites sont des références dans leur domaines.

<h2>Charte graphique et navigation</h2>
Nous avons choisi une interface volontairement épurée et minimaliste tout en gardant l'atmosphère d'une salle de cinéma. On a voulu plonger l'utilisateur dans l'univers du cinéma en reprenant les codes du cinéma : le rideau rouge qui fait très spectacle pour l'accueil, et la salle de cinéma pour la visualisation de données.
A l'origine les données prennent la forme de popcorns pour garder une cohérence vis à vis de l'atmosphère générale. De plus, les popcorns se prétaient bien à la visualisation de données se rapprochant du type réseaux. Par ailleurs, des éléments inhérents à l'univers du cinéma comme le ticket sont repris au sein de l'interface.

La police utilisée pour l'accueil est Englebert. Nous l'avons choisi pour sa connotation très spectacle et assez rétro.

Les couleurs principales sont le rouge, le noir et le blanc qui font aussi référence au cinéma. On a choisi du jaune/beige pour les popcorns.

Le logo représente donc notre concept en mélangeant les livres, les popcorns et les étoiles pour le côté starisation du cinéma. Les étoiles sont d'ailleurs reprises sur l'accueil.

Pour rester en cohérence avec l'interface simple et minimaliste, nous avons opté pour un menu discret et iconographique qui s’affiche au clic. Les informations complémentaires (about/Comment ça marche) s'affichent au clic sous formes de pop-ups pour éviter de surcharger l'interface de pages inutiles.


<h2>Technique</h2>
Le prototype a été réalisé en HTML 5 et CSS 3 pour l'intégration. La visualisation de données et les interactions ont été codées en javascript en utilisant les librairies D3 et Jquery.


<h2>Prototype</h2>
Dans le temps qui nous a été imparti, nous avons pu aboutir à un prototype du projet. Ce prototype met en forme un réseau de cercles qui représente nos popcorns et donc nos données. Il n'y a pas d'étapes dans la visualisation : toutes les données s'affichent dès le début. Les grands cercles représentent les auteurs et à l'intérieur se trouvent des petits cercles correspondant aux films adaptés de l'oeuvre de cet auteur. Au clic sur l'un des cercles les métadonnées s'affichent sur le ticket et le bandeau.




