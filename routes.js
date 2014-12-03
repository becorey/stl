Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    'header': {to: 'header'},
    'footer': {to: 'footer'}
  },
  loadingTemplate: 'loading',
  notFoundTemplate: '404',
  waitOn: function (){
    return [
    Meteor.subscribe("Users"),
    Meteor.subscribe("Suggestions")
    ];
  },
  data: function(){

  },
  action: function () {

  }
});

/* https://github.com/EventedMind/iron-router/issues/554 */
Router.onBeforeAction('loading');

Router.map(function () {
  this.route('home', {
    path: '/',
    onBeforeAction: function(){
      Session.set('routeName', 'Home');
      $('body').scrollTop(0);
      this.next();
    }
  });

  this.route('news', {
    path: '/news',
  });

  this.route('profile', {
    path: '/profile',
  });

  this.route('suggest', {
    path: '/suggest',
    template: 'suggest',

    onBeforeAction: function(){
      Session.set('routeName', 'Suggest');
      $('body').scrollTop(0);
      AccountsEntry.signInRequired(this);
      //this.next();
    }
  });


  this.route('admin', {
    path: '/admin',
    onBeforeAction: function() {
      if (!AuthManager.userIsInRole(Meteor.userId(), ['admin'])) {
        Router.go("/");
      }
      this.next();
    }
  });
});