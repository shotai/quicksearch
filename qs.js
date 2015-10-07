var quickSearch = (function($){
	var itemSource = []
	var updateItems = function(){
		$('p').each(function(index,value){
			var qsattr = $(value).data('qs');
			if (!(qsattr in itemSource)){
				itemSource.push(qsattr);
			}
		});
		console.log(itemSource);
	}
	return {
    	updateItems: updateItems
  	};
}(jQuery))