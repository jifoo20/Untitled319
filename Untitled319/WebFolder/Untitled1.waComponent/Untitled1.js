
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Untitled1';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var fileUpload1 = {};	// @fileUpload
	// @endregion// @endlock

	// eventHandlers// @lock

	fileUpload1.filesUploaded = function fileUpload1_filesUploaded (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_fileUpload1", "filesUploaded", fileUpload1.filesUploaded, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
