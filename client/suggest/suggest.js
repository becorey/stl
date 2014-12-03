if (Meteor.isClient){

	Template.suggest.helpers({
		listSuggestions: function(){
			return Suggestions.find();
		}
	});

	AutoForm.hooks({
		insertSuggestionForm: {
			before: {
				insert: function(doc){
					doc.userId = Meteor.userId();
					return doc;
				}
			}
		}
	})
}