Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('score'); }
});

Router.map(function(){
    this.route('scoreList', {path: '/'});
});

Router.onBeforeAction('loading');