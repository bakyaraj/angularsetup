(function() {
	'use strict';

	angular
	  .module('myapp')
	  .controller('MainController', MainController);

	MainController.$inject = ['$scope','fancytreeFactory'];

	function MainController($scope,fancytreeFactory) {
		//content
		$scope.name="BAKI"
		console.log(fancytreeFactory);
		 // Passing fancytree options
        // second arg is fancytree's element id
        
	}
})();