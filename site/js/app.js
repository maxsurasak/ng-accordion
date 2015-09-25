﻿var app = angular.module('app', ['ngAccordian', 'ui.router']);

app.constant('tplBase', document.location.hostname === 'localhost' ? '/site/' : '/ng-accordian/');

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode({
		enabled: true
	});

	$stateProvider
		.state('home', {
			url: '/',
			controller: 'gettingStartedCtrl',
			templateUrl: 'view/getting-started.html'
		})
		.state('basic', {
			url: '/examples/basic',
			controller: 'basicCtrl',
			templateUrl: 'view/examples/basic.html'
		})
		.state('configuration', {
			url: '/examples/configuration',
			controller: 'configurationCtrl',
			templateUrl: 'view/examples/configuration.html'
		})
		.state('contentStrings', {
			url: '/examples/content-strings',
			controller: 'contentStringsCtrl',
			templateUrl: 'view/examples/content-strings.html'
		})
		.state('modelBinding', {
			url: '/examples/model-binding',
			controller: 'modelBindingCtrl',
			templateUrl: 'view/examples/model-binding.html'
		})
		.state('standalone', {
			url: '/examples/standalone',
			controller: 'standaloneCtrl',
			templateUrl: 'view/examples/standalone.html'
		})
		.state('methods', {
			url: '/methods',
			controller: 'methodsCtrl',
			templateUrl: 'view/methods.html'
		})
		.state('callbacks', {
			url: '/callbacks',
			controller: 'callbacksCtrl',
			templateUrl: 'view/callbacks.html'
		})
		.state('attributes', {
			url: '/attributes',
			controller: 'attributesCtrl',
			templateUrl: 'view/attributes.html'
		})
		.state('icons', {
			url: '/icons',
			controller: 'iconsCtrl',
			templateUrl: 'view/icons.html'
		});
}]);

app.run(['$rootScope', 'tplBase', function ($rootScope, tplBase) {
		$rootScope.tplBase = tplBase;

		$rootScope.scripts = [
			{ 'src': 'js/app.js' },
			{ 'src': '../src/js/ng-accordian.js' }
		];
	}]);

app.controller('gettingStartedCtrl', ['$scope', function ($scope) {
	$scope.intro = 'getting started';
}]);

app.controller('basicCtrl', ['$scope', function ($scope) {

	$scope.tabs = [
		{ 'title': 'Markup', 'url': 'template/accordian/basic/markup.html' },
		{ 'title': 'CSS', 'url': 'template/accordian/basic/css.html' }
	];
}]);

app.controller('configurationCtrl', ['$scope', 'tplBase', function ($scope, tplBase) {

	$scope.tabs = [
		{ 'title': 'Markup', 'url': 'template/accordian/configuration/markup.html' },
		{ 'title': 'JavaScript', 'url': 'template/accordian/configuration/javascript.html' },
		{ 'title': 'CSS', 'url': 'template/accordian/configuration/css.html' }
	];

	$scope.content = [
		{ 'value': tplBase + 'template/accordian/configuration/accordian-content.html' },
		{ 'value': tplBase + 'template/accordian/configuration/accordian-content.html' },
		{ 'value': tplBase + 'template/accordian/configuration/accordian-content.html' },
		{ 'value': tplBase + 'template/accordian/configuration/accordian-content.html' }
	];
}]);

app.controller('contentStringsCtrl', ['$scope', function ($scope) {

	$scope.tabs = [
		{ 'title': 'Markup', 'url': 'template/accordian/content-strings/markup.html' },
		{ 'title': 'JavaScript', 'url': 'template/accordian/content-strings/javascript.html' },
		{ 'title': 'CSS', 'url': 'template/accordian/content-strings/css.html' }
	];

	$scope.content = [
		{ 'value': '<p><span>hey, I\'m a string!</span></p>', 'heading': 'cool stuff' },
		{ 'value': '<p><span>hey, I\'m a string!</span></p>', 'heading': 'cool stuff' },
		{ 'value': '<p><span>hey, I\'m a string!</span></p>', 'heading': 'cool stuff' },
		{ 'value': '<p><span>hey, I\'m a string!</span></p>', 'heading': 'cool stuff' },
		{ 'value': '<p><span>hey, I\'m a string!</span></p>', 'heading': 'cool stuff' },
		{ 'value': '<p><span>hey, I\'m a string!</span></p>', 'heading': 'cool stuff' }
	];
}]);

app.controller('modelBindingCtrl', ['$scope', function ($scope) {

	$scope.tabs = [
		{ 'title': 'Markup', 'url': 'template/accordian/model-binding/markup.html' },
		{ 'title': 'Template', 'url': 'template/accordian/model-binding/model-binding-template-display.html' },
		{ 'title': 'JavaScript', 'url': 'template/accordian/model-binding/javascript.html' },
		{ 'title': 'CSS', 'url': 'template/accordian/model-binding/css.html' }
	];

	$scope.content = [
		{ 'value': 'I\'m a model!' },
		{ 'value': 'I\'m a model!' },
		{ 'value': 'I\'m a model!' }
	];
}]);

app.controller('standaloneCtrl', ['$scope', function ($scope) {

	$scope.tabs = [
		{ 'title': 'Markup', 'url': 'template/accordian/standalone/markup.html' },
		{ 'title': 'CSS', 'url': 'template/accordian/standalone/css.html' }
	];
}]);

app.controller('methodsCtrl', ['$scope', function ($scope) {
	$scope.content = [
		{ 'value': '<p><span>stuff</span></p>' },
		{ 'value': '<p><span>stuff</span></p>' },
		{ 'value': '<p><span>stuff</span></p>' }
	];

	$scope.content2 = [
		{ 'value': '<p><span>stuff</span></p>' },
		{ 'value': '<p><span>stuff</span></p>' },
		{ 'value': '<p><span>stuff</span></p>' }
	];

	$scope.$on('accordian2:expand', function (e, index) {
		console.log('accordian2:expand ' + index);
	});

	$scope.$on('accordian2:collapse', function (e, index) {
		console.log('accordian2:collapse' + index);
	});

	$scope.$on('accordian:expand', function (e, index) {
		console.log('accordian:expand' + index);
	});

	$scope.$on('accordian:collapse', function (e, index) {
		console.log('accordian:collapse' + index);
	});

	$scope.$on('toggle:collapse', function (e) {
		console.log('toggle:collapse');
	});

	$scope.$on('toggle:expand', function (e) {
		console.log('toggle:expand');
	});
}]);

app.controller('callbacksCtrl', ['$scope', function ($scope) {
	$scope.content = [
		{ 'value': '<p><span>stuff</span></p>' },
		{ 'value': '<p><span>stuff</span></p>' },
		{ 'value': '<p><span>stuff</span></p>' }
	];

	$scope.content2 = [
		{ 'value': '<p><span>stuff</span></p>' },
		{ 'value': '<p><span>stuff</span></p>' },
		{ 'value': '<p><span>stuff</span></p>' }
	];

	$scope.$on('accordian2:expand', function () {
		console.log('accordian2:expand');
	});

	$scope.$on('accordian2:collapse', function () {
		console.log('accordian2:collapse');
	});

	$scope.$on('accordian:expand', function () {
		console.log('accordian:expand');
	});

	$scope.$on('accordian:collapse', function () {
		console.log('accordian:collapse');
	});
}]);

app.controller('attributesCtrl', ['$scope', function ($scope) {
}]);

app.controller('iconsCtrl', ['$scope', function ($scope) {
}]);

app.directive('tabs', [function () {
	return {
		restrict: 'E',
		templateUrl: 'template/tabs.html',
		scope: {
			tabs: '=',
			selected: '@'
		},
		link: function (scope, elem, attrs) {

			scope.currentTab = scope.tabs[scope.selected].url;

			scope.onClickTab = function (tab) {
				scope.currentTab = tab.url;
			}

			scope.isActiveTab = function (tabUrl) {
				return tabUrl === scope.currentTab;
			}
		}
	}
}]);

app.directive('prism', [function () {
	return {
		restrict: 'A',
		link: function (scope, elem, attrs) {
			elem.ready(function () {
				Prism.highlightElement(elem[0]);
			});
		}
	}
}]);
