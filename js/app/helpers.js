var AdventureHop = window.AdventureHop = window.AdventureHop || {};

AdventureHop.AjaxHelper = function(config)
{
	return $.ajax(
	{
		url: config.Url,
		global: false,
		type: config.VerbType,
		contentType: "application/json;charset=utf-8",
		data: config.Data,
		cache: false,
		crossDomain: true
	});
};