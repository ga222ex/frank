(function() {
var app = angular.module('frank', ['ui.router', 'contact']);
app.config(config);
app.controller('navCtrl', navCtrl);

function config($stateProvider, $locationProvider) {
	$stateProvider
		.state({
			name: 'start',
			url: '/start',
			template: '<h2>Welcome to Frank\'s used cars! Have yourself a lookaround, cowboy!</h2>'
		})
		.state({
			name: 'buy',
			url: '/buy',
			templateUrl: 'templates/buy.html'
		});

		$locationProvider.html5Mode(true);
}
function navCtrl($scope, $http) {
	var vm = this;
	vm.submitForm = submitForm;

	vm.tabs = [
		{url: 'start', title: 'Start'},
		{url: 'buy', title: 'Buy cars'},
		{url: 'sell', title: 'Sell cars'},
		{url: 'gallery', title: 'Gallery'},
		{url: 'contact', title: 'Contact'}
	];

	var form = $('.loginForm');

	$('.loginButton').click(function() {
		$('.loginFormContainer').slideToggle('slow');
	});

	function submitForm(e) {
		e.preventDefault();
		console.log(e);
		var data = {
			username: vm.username,
			password: vm.password
		};
		$http({
			method: 'GET',
			url: 'php/validate_username.php',
			params: data
		}).then(function(response) {
			console.log('inside then');
			console.log(response.data);
		});
	}

	$('.loginForm').submit(function(e) {

	});
}



}());
