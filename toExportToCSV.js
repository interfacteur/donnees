// préparer une extraction avec l'extension ExportToCSV pour Firefox
// cf. https://addons.mozilla.org/fr/firefox/addon/export-to-csv/
// le 27 novembre 2016 avec ExportToCSV 1.2.b1.1

/*
	répondre au prompt() avec le sélecteur jQuery (de type CSS 3) du tableau ciblé
	suppose jQuery
	to do : lier dynamiquement jQuery au cas où
*/


javascript:table=prompt("tableau?");void($(table+" th,"+table+" td").each(function(){$(this).html($(this).text());}));
