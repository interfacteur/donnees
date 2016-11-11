// Sur un résultat de placedeslibraires.fr :
// préparer une extraction avec l'extension ExportToCSV pour Firefox
// cf. https://addons.mozilla.org/fr/firefox/addon/export-to-csv/

// éventuellement trier par code postal

// tri simple :
$("#TABLESHOP td").each(function() { $(this).html($(this).text()); }); $("#TABLESHOP tr :first-child, #TABLESHOP tr :last-child").remove(); $("#TABLESHOP tr :last-child").remove();

// tri avec stock :
$("#TABLESHOP td").each(function() { $(this).html($(this).text()); }); $("#TABLESHOP td:last-child").each(function () { if ($(this).text().indexOf("stock") < 0) $(this).parent().remove(); }); $("#TABLESHOP tr :first-child, #TABLESHOP tr :last-child").remove(); $("#TABLESHOP tr :last-child").remove();

// tri avec stock sur Paris :
$("#TABLESHOP td").each(function() { $(this).html($(this).text()); }); $("#TABLESHOP td:last-child").each(function () { if ($(this).text().indexOf("stock") < 0) $(this).parent().remove(); }); $("#TABLESHOP td:nth-child(4)").each(function () { if (! $(this).text().match(/75\d{3}/)) $(this).parent().remove(); }); $("#TABLESHOP tr :first-child, #TABLESHOP tr :last-child").remove(); $("#TABLESHOP tr :last-child").remove();

/*
	le 11 novembre 2016 sur
	https://www.placedeslibraires.fr/livre/9782350173894-la-datavisualisation-au-service-de-l-information-collectif/
	avec ExportToCSV 1.2.b1.1
*/
