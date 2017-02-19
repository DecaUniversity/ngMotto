function TodoController() {
	
	"use strict";
	
	this.list = [
		{
			title: "First todo item!",
			completed: false
		},
		{
			title: "Second todo item!",
			completed: false
		},
		{
			title: "Third todo item!",
			completed: false
		}
	];
	
}

TodoController.$inject = ['$scope'];

angular
	.module('app')
	.controller('TodoController', TodoController);