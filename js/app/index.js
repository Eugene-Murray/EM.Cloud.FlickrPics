

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
			
			
			
			
			
			//var data = ko.toJSON(self.emailNewsLetter());
			var data = {website: 'AdventureHop', email : self.emailNewsLetter()};
			
			
			function email(data){
                console.log("In callback function");
                console.log(data);
            }
			
			
			
			$.ajax({
            url: "http://localhost:63109/api/email/saveemail",
            type: "POST",
            //crossDomain: true,
            data: data,
			dataType: 'jsonp',
            jsonp: 'email',
            contentType: "application/json;charset=utf-8",
            success:function(result){
                alert(JSON.stringify(result));
            },
            error:function(xhr,status,error){
                alert(status);
            }
        });
			
			
			
			
			
			
			

			/*console.log('saveEmail');
			//http://emcloud.co/api/email
            var ajaxConfig = { Url: "http://localhost:63109/api/email", VerbType: "POST", Data: data };

            var response = AdventureHop.AjaxHelper(ajaxConfig);

            response.success(function (data) 
			{
				toastr.info("Email saved - Thank you!");
				console.log('success');
            });
			
			response.fail(function(xhr, status)
		    {
			    toastr.error("Error!");
				console.log('fail');
		    });*/

		};
		
		return self;
	};

