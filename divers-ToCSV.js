// préparer une extraction avec l'extension ExportToCSV pour Firefox
// cf. https://addons.mozilla.org/fr/firefox/addon/export-to-csv/
// le 27 novembre 2016 avec ExportToCSV 1.2.b1.1
// pour divers sites (via favoris-signets)


// bib
javascript:$("#holdings_container_desktop%20th,#holdings_container_desktop%20td").each(function(){$(this).html($(this).text().replace(/\s{2,}/g,"%20"));$(this).text($(this).text().replace(/^\s|\s$/g,""));});$(".indicator.available").text("dispo").attr("class","");$(".indicator.all-loaned").text("prêtés").attr("class","");void($(".indicator.no-existing").text("aucun").attr("class",""));

// Gandi - to do : formatage final
javascript:void($(".gtable th, .gtable td").each(function(){$(this).html($(this).text());}));