// Definition of the Controller function

function MainController($scope) {
	this.name = "Todd";
	this.likes = ['kale', 'almond milk'];
}

// Minification proof dependency injection

MainController.$inject = ['$scope'];

// Attachment of the controller to the application

angular.
	module('app')
	.controller('MainController', MainController);