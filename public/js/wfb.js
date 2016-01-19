'use strict'
var wfb = angular.module('wfb', []);

wfb.controller('menuController', ['$scope', '$window', function($scope, $window) {
	$scope.showMenu = false;
	$scope.fixHeader = false;
	angular.element($window).bind("scroll", function() {
		if($window.pageYOffset >= 120){
			$scope.fixHeader = true;
			$scope.$apply()
		} else {
			$scope.fixHeader = false;
			$scope.$apply()
		}
	});
}]);

wfb.directive('toggleMenuItemSub', [function() {
	// Runs during compile
	return {
		scope: true, // {} = isolate, true = child, false/undefined = no change
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		link: function($scope, iElm, iAttrs, controller) {
			$scope.expand = false;
			$scope.toggle = function() {
				$scope.expand = !$scope.expand;
				console.log('test');
			}
		}
	};
}]);
