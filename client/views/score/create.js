Template.scoreCreate.helpers({
    date: new Date()
});

Template.scoreCreate.events({
    'submit form': function(e) {
        e.preventDefault();

        var scoreData = {
            description: $(e.target).find('[name=description]').val(),
            value: $(e.target).find('[name=value]').val(),
            ownerUserName: $(e.target).find('[name=owner]').val()
        };

        Meteor.call('createScore', scoreData, function (error, scoreId){
            if (error) {
                return alert(error.reason);
            } else {
                Router.go('scoreList');
            }
        });
    }
});
