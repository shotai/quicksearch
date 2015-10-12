var quickSearch = (function($) {
    var itemSource = []
    var updateItems = function() {
        $('*:data(qs)').each(function(index, value) {
            var qsattr = $(value).data('qs');
            if (!(qsattr in itemSource)) {
                itemSource.push(qsattr);
            }
        });
        console.log(itemSource);
    };
    var getItems = function() {
        return itemSource;
    };
    var generateSearchBar = function() {
        var html = '<div id="qsmodal" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"><div class = "modal-dialog modal-sm" ><div class = "modal-content" ><div class="ui-widget" id="myLargeModalLabel"><input id="qsbar" > </div></div> </div > </div>'
        
        $("#qs").html(html);
        $("#qsbar").autocomplete({
            source: itemSource,
            open: function( event, ui ) {
            	console.log($(".ui-autocomplete").html());
            	console.log($("#myLargeModalLabel").html());
            	$(".ui-autocomplete").addClass("modal-content")
            }
        });
        $("#qsbar").change(function() {
            var tmp = $(this).val()
            $('#qsmodal').modal('toggle')
            $('*[data-qs="'+tmp+'"]').click()

        })
        $(document).on('keydown', null, 'ctrl+a', function() {
            $('#qsmodal').modal('toggle')
            console.log($(".ui-autocomplete").html())
        });


    };
    return {
        updateItems: updateItems,
        getItems: getItems,
        generateSearchBar: generateSearchBar
    };
}(jQuery))
