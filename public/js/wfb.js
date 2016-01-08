'use strict'
var wfb = angular.module('wfb', []);

wfb.controller('menuController', ['$scope', '$window', function($scope, $window) {
	$scope.showMenu = false;
}]);

wfb.directive('toggleMenuItemSub', [function() {
	// Runs during compile
	return {
		scope: true, // {} = isolate, true = child, false/undefined = no change
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		link: function($scope, iElm, iAttrs, controller) {
			$scope.expand = false;

			$scope.toggle = function(){
				$scope.expand = !$scope.expand;
				console.log('test');
			}
		}
	};
}]);
