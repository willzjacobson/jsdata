'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		resolve: {
			thePost: function(Post, $stateParams) {
				return Post.find($stateParams.postId);
			},
			users: function(User){
				// GET - > '/api/users'
				return User.findAll()
			}
		}
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function($scope, Post, thePost, $state) {
	/* 1. FIND POST
		use state params to retrieve the post id and attach post object to scope 
		on controller load 
	*/
	$scope.thePost = thePost;
	//console.log('post - ', thePost)

	/*
		2. DELETE POST 
		create a function that destroys the post, adds an alert that the post has been 
		successfully deleted, and redirects to the main state. 
	*/
	// $scope.deletePost = Post.destroy;
		$scope.deletePost = function(p){
			return p.DSDestroy()
			.then(function () {
				$state.go('main');
			})
		}


	/*
		3. EDIT POST 
		create a function that edits the post, adds an alert that the post has been 
		successfully edited, and displays the edited post.  

	*/
	

})