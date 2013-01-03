(function($){
	/**
	 * Usage: $("#collapse_group).collapseAlwaysOpen({ namespace: '.groupA' });
	 * Will cause the active collapse (accordion) group to remain open
	 * as it checks for an open group item, if none exists, the item that was just
	 * closed will re-open
	 */
	$.fn.collapseAlwaysOpen = function(options) {
		if (!options) {
			var options = {
				'namespace': false
			};
		}
		if (!options.namespace) {
			options.namespace = "";
		}	
		var master_id = "#" + $(this).attr('id');
		$(master_id).collapse({
			toggle: false
		});
		function checkGroup(id, target, namespace) {
			var open = false;
			var obj = jQuery(id);

			$(".accordion-group"+namespace).children().each(function(i, obj){
				var that = $(this);
				if(that.hasClass("collapse") && that.hasClass("in")){ 
					open = true;
				}
			});
			if (!open) {
				$("#"+target).collapse("toggle");
			}
		}
		$(master_id).find(".accordion-group"+options.namespace).live("hidden", function(e){
			var obj = $(this);
			var target_id = $(e.target).attr('id');
			checkGroup(master_id, target_id, options.namespace);
		});
	};
})(jQuery);
