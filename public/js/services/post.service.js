'use strict';

app.factory('Post', function(DS, $state) {

	var Post = DS.defineResource({
		name: 'post',
		relations: {
			belongsTo: {
				User: {
					localField: 'user',
					localKey: 'userId'
				}
			}
		}, 
		methods: {
			go: function(state) {
				$state.go('post', {postId: this._id});
			}
		}
	});

	/*

		TODOS: 
		1) create a js-data POST resource that establishes a relationship 
		between posts and users

		2) add a methods object to the resource
				a) add a `go` method that takes each post to the individual post page 
				(HINT: see post.js)

	*/

}).run(function(Post) {});


