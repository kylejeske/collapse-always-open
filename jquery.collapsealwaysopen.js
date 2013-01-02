(function($){
	/**
	 * Usage: $("#collapse_group).collapseAlwaysOpen();
	 * Will cause the active collapse (accordion) group to remain open
	 * as it checks for an open group item, if none exists, the item that was just
	 * closed will re-open
	 */
	$.fn.collapseAlwaysOpen = function() {
		var master_id = "#" + $(this).attr('id');
		$(master_id).collapse({
			toggle: false
		});
		function checkGroup(id, target) {
			var open = false;
			var obj = $(id);
			obj.find(".accordion-group").each(function(i, item){
				$(item).find(".collapse").each(function(i, group_item){
					if ($(group_item).hasClass("in")) {
						open = true;
					}
				});
			});
			if (!open) {
				$("#"+target).collapse("toggle");
			}
		}
		$(master_id).find(".accordion-group").live("hidden", function(e){
			var obj = $(this);
			var target_id = $(e.target).attr('id');
			checkGroup(master_id, target_id);
		});
	};
})(jQuery);
