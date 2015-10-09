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
        var html = '<div id="qsmodal" class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"><div class = "modal-dialog modal-lg" ><div class = "modal-content" >..<input id="qsbar"> </div> </div > </div>'
            //var html = "<input id='qsbar'>";
        $("#qs").html(html);
        console.log(itemSource);
        var test = ["a", "b", "c"]
        $("#qsbar").autocomplete({
            source: itemSource
        });
        $("#qsbar").change(function() {
            alert($(this).val());
        })
        $(document).on('keydown', null, 'ctrl+a', function() {
            alert("111");
            $('#qsmodal').modal('toggle')
        });


    };
    return {
        updateItems: updateItems,
        getItems: getItems,
        generateSearchBar: generateSearchBar
    };
}(jQuery))
