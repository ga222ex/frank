(function() {
var app = angular.module('contact', []);
app.config(config);

function config($stateProvider) {
	$stateProvider
		.state({
			name: 'contact',
			url: '/contact',
			templateUrl: 'templates/contact.html'
		})
		.state({
			name: 'contact.about',
			url: '/about',
			templateUrl: 'templates/contact/about.html'
		})
		.state({
			name: 'contact.form',
			url: '/form',
			templateUrl: 'templates/contact/form.html'
		})
		.state({
			name: 'contact.map',
			url: '/map',
			templateUrl: 'templates/contact/map.html'
		});
}

}());
