Meteor.startup(function () {
    
    AccountsEntry.config({
      wrapLinks: false,
      homeRoute: '/',                    // mandatory - path to redirect to after sign-out
      dashboardRoute: '/',      // mandatory - path to redirect to after successful sign-in
      profileRoute: 'profile'
    });
  });