
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var select1 = {};	// @select
// @endregion// @endlock

// eventHandlers// @lock

	select1.blur = function select1_blur (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("select1", "blur", select1.blur, "WAF");
// @endregion
};// @endlock
