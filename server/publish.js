/* publish.js
Publishes collections
Sets permissions
*/

Meteor.publish("Users", function(){
	return Meteor.users.find();
});


Meteor.publish("Suggestions", function(){
	return Suggestions.find();
});

Suggestions.allow({
	insert: function(userId, doc){
		var user = Meteor.users.find(userId);
		if( AuthManager.userIsInRole(userId, ['admin']) ){
			return true;
		}else{
			return true; //false
		}
	},
	update: function(userId, doc){
		var user = Meteor.users.find(userId);
		if( AuthManager.userIsInRole(userId, ['admin']) ){
			return true;
		}else{
			return false;
		}
	},
	remove: function(userId, doc){
		var user = Meteor.users.find(userId);
		if( AuthManager.userIsInRole(userId, ['admin']) ){
			return true;
		}else{
			return false;
		}
	}
});

/* copy for each collection */