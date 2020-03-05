var bTrelloExporterLoaded = false;

function TrelloExportLoader() {
    if (bTrelloExporterLoaded === true) return;
    setTimeout(function() { addExportLink(); }, 500);
}

setInterval(function() {

    if (bTrelloExporterLoaded === false) {
        setTimeout(function() { addExportLink(); }, 500);
    } else {
        bTrelloExporterLoaded = false;
    }

}, 500);


if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function(str) {
        return this.indexOf(str) === 0;
    };
}

// Add a Export Excel button to the DOM and trigger export if clicked
function addExportLink() {
    var $js_btn = $('a.js-export, a.js-export-json'); // Export JSON link

    $('.trelloexport').remove();
    bTrelloExporterLoaded = false;

    if ($('form').find('.trelloexport').length) return;

    if ($js_btn.length) $excel_btn = $('<a>')
        .attr({
            class: 'trelloexport',
            href: '#',
            target: '_blank',
            title: 'TrelloExport',
            id: 'TrelloExport'
        })
        .text('TrelloExport')
        .click(TrelloExportOptions)
        .insertAfter($js_btn.parent())
        .wrap(document.createElement("li"));

    // if ($js_btn.length) $import_btn = $('<a>')
    //     .attr({
    //         class: 'trelloexport',
    //         href: '#',
    //         target: '_blank',
    //         title: 'TrelloImport',
    //         id: 'TrelloImport'
    //     })
    //     .text('TrelloImport')
    //     .click(TrelloImportOptions)
    //     .insertAfter($js_btn.parent())
    //     .wrap(document.createElement("li"));

    bTrelloExporterLoaded = true;
}