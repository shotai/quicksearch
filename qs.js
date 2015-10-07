quickSearch = (function($){
	var itemSource = []
	var updateItems = function(){
		$.data("qs").each(function(index, value){
			if !($(this) in itemSource){
				itemSource.push($(this));
			}
		});
	}
}(jQuery))