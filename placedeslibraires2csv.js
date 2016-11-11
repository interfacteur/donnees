// Sur un résultat de placedeslibraires.fr :
// préparer une extraction avec l'extension ExportToCSV pour Firefox
// cf. https://addons.mozilla.org/fr/firefox/addon/export-to-csv/

// éventuellement trier par code postal

// tri simple :
$("#TABLESHOP td").each(function() { $(this).html($(this).text()); }); $("#TABLESHOP td:first-child").remove(); $("#TABLESHOP td:last-child").remove(); $("#TABLESHOP td:last-child").remove();

// tri avec stock :
$("#TABLESHOP td").each(function() { $(this).html($(this).text()); }); $("#TABLESHOP td:first-child").remove(); $("#TABLESHOP td:last-child").each(function () { if ($(this).text().indexOf("stock") < 0) $(this).parent().remove(); });$("#TABLESHOP td:last-child").remove(); $("#TABLESHOP td:last-child").remove();

// tri avec stock sur Paris :
$("#TABLESHOP td").each(function() { $(this).html($(this).text()); }); $("#TABLESHOP td:first-child").remove(); $("#TABLESHOP td:last-child").each(function () { if ($(this).text().indexOf("stock") < 0) $(this).parent().remove(); }); $("#TABLESHOP td:nth-child(3)").each(function () { if (! $(this).text().match(/75\d{3}/)) $(this).parent().remove(); }); $("#TABLESHOP td:last-child").remove(); $("#TABLESHOP td:last-child").remove();

/*
	le 11 novembre 2016 sur
	https://www.placedeslibraires.fr/livre/9782350173894-la-datavisualisation-au-service-de-l-information-collectif/
	avec ExportToCSV 1.2.b1.1
*/