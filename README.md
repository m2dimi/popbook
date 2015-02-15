popbook
=======

Le projet PopBook est constitué de Sarah, Pauline, Eléonore et Idrissa. Nous avons choisi de travailler sur les livres adaptés au cinéma afin de quantifier l'importance des livres en tant que sources d'inspiration pour le cinéma, tout en prenant en compte les notes attribuées aux films par les spectateurs afin d'avoir une idée du succés (ou non) de ces adaptations.

Pour se faire, nous avons récupéré les données suivantes :
Pour les livres : titre original, nom de l’auteur, année de publication, cible et pays d’origine.
Pour les films : titres des films (adaptation/réadaptation), réalisateur(s), année de sortie, pays d’origine de l’adaptation, pochette de film et finalement les notes fournies par les spectateurs.
Nous avons trouvé les informations relatives aux livres sur les sites tels que Babelio tandis que les métadonnées qui concernent les films ont été piochés sur IMDB.

Nous avons choisi une interface volontairement épurée et minimaliste tout en gardant l'atmosphére d'une salle de cinéma. 

Pour mettre en perspective nos données, nous avons choisi une visualisation de données se rapprochant des réseaux où chaque cercle représenterait une donnée, à l'intérieur de laquelle est déjà ancrée d'autres données qui se libéreraient au clic.
Notre point d'entrée est les auteurs : en cliquant sur un auteur, les métadonnées correspondant à ses livres déjà adaptés au cinéma apparaissent. Le cercle "auteur" sera plus ou moins gros en fonction du nombre de livres qui ont été adaptés. En cliquant sur un titre de livre, nous avons accès à son ou ses adaptations, si le livre a été adapté plusieurs fois. La différence entre l'année de publication du livre et l'année de sortie de son film est mis en perspective par leurs espacements : plus l'écart entre les années est grand, plus le cercle correspondant au film sera visuellement éloigné du cercle correspondant au livre. Enfin, c'est à ce moment là que les notes des spectateurs rentrent en ligne de compte : les métadonnées "films" sont de différentes couleurs en fonction de leurs notes.
Ainsi, cette visualisation nous permet de voir assez rapidement quels auteurs ont été le plus adaptés au cinéma et avec quels livres, en prenant en compte leurs espacement dans le temps, et leurs succés auprés des spectateurs.


Inspirations :
http://vax.herokuapp.com/tour
http://pmcruz.com/
http://bl.ocks.org/mbostock/4063269 
http://www.cytoscape.org/

Librairies : 
d3
Jquery





