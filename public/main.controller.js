'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
		resolve: {
			allPosts: function(Post) {
				//console.log('hello?', Post)
				return Post.findAll();	
			}
		}
			//RESOLVE!
	})
})

app.controller('MainController', function($scope, allPosts) {
	//console.log('in controller - ', allPosts);
	$scope.allPosts = allPosts;
 	/*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
})


