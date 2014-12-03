SimpleSchema.debug = true;

Suggestions = new Meteor.Collection("suggestions");
Suggestions.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	userId: {
		type: String,
		label: "UserId",
		optional: true
	},
	description: {
		type: String,
		label: "Description"
	}
}));

Suggestions.helpers({
	userName: function(){
		var self = this;
		var usr = Meteor.users.findOne(self.userId);
		if (!usr){
			return "";
		}
		return usr.username? usr.username : usr.emails[0].address;
	}
});

/* ect, copy for each collection and define schema */


Meteor.users.attachSchema(new SimpleSchema({
    _id: {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
        optional: true
    },
    username: {
        type: String,
        regEx: /^[a-z0-9A-Z_]{3,15}$/,
        optional: true
    },
    emails: {
        type: [Object],
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    "emails.$.verified": {
        type: Boolean,
        optional: true
    },
    createdAt: {
        type: Date,
        optional: true
    },
    profile: {
        type: Object,
        blackbox: true,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    authItems: {
    	type: [String],
    	blackbox: true,
    	optional: true
    },
    "authItems.$": {
    	type: String,
    	blackbox: true,
    	optional: true
    }
}));
