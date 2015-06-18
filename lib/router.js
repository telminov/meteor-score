Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('score'); }
});

Router.map(function() {
    this.route('scoreList', {path: '/'});

    this.route('scoreCreate', {
        path: '/score/new/'
    });

    this.route('scoreEdit', {
        path: '/score/:_id',
        data: function() { return Score.findOne(this.params._id)}
    });
});

Router.onBeforeAction('loading');
Router.before(function() {
    clearErrors();
    this.next();
});