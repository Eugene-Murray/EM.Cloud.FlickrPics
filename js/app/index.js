
(function($) {
	var AdventureHop = window.AdventureHop = window.AdventureHop || {};

	AdventureHop.IndexVM = function() {
		
		var self = this;
		
		console.log('AdventureHop.IndexVM');
		console.log(self);
		
		self.test = ko.observable("Join The Adventure!");
		
		return self;
	};
})(jQuery);
