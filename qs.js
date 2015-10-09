var quickSearch = (function($){
	var itemSource = []
	var updateItems = function(){
		$('*:data(qs)').each(function(index,value){
			var qsattr = $(value).data('qs');
			if (!(qsattr in itemSource)){
				itemSource.push(qsattr);
			}
		});
		console.log(itemSource);
	};
	var getItems = function(){
		return itemSource;
	};
	var generateSearchBar = function(){
		var html = "<input id='qsbar'>";
		$("#qs").html(html);
		console.log(itemSource);
		var test = ["a","b","c"]
		$( "#qsbar" ).autocomplete({
      		source: itemSource
    	});
	};
	return {
    	updateItems: updateItems,
    	getItems: getItems,
    	generateSearchBar: generateSearchBar
  	};
}(jQuery))