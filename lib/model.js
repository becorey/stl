SimpleSchema.debug = true;

Projects = new Meteor.Collection("projects");
Projects.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name"
	},
	team: {
		type: [String],
		label: "Team",
		optional: true
	},
	description: {
		type: String,
		label: "Description"
	}
}));

/* ect, copy for each collection and define schema */