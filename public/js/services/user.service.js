'use  strict';

app.factory('User', function(DS) {
	var User = DS.defineResource({
		basePath: '/api',
		idAttribute: '_id',
		name: 'users'
		// relations: {
		// 	hasMany: {
		// 		post: {
		// 			localField: 'post',
		// 			foreignKey: 'userId'
		// 		}
		// 	}
		// }
	})
  /*
    create a User jsdata resource 
  */

    return User;

}).run(function(User) {});

