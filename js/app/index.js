

	var AdventureHop = window.AdventureHop = window.AdventureHop || {};

	AdventureHop.IndexVM = function() {
		
		var self = this;
		
		console.log('AdventureHop.IndexVM');
		console.log(self);
		
		self.emailNewsLetter = ko.observable("");
		
		self.init = function(){
		};
		

		self.saveEmail = function()
		{
			var data = ko.toJSON(self.emailNewsLetter());

			console.log('saveEmail');
			
            var ajaxConfig = { Url: "http://emcloud.co/api/email", VerbType: "POST", Data: data };

            var response = ConsoleApp.AjaxHelper(ajaxConfig);

            response.success(function (data) 
			{
				toastr.info("Email saved - Thank you!");
				console.log('success');
            });
			
			response.fail(function(xhr, status)
		    {
			    toastr.info("Error!");
				console.log('fail');
		    });

		};
		
		return self;
	};

