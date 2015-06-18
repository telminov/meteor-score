Template.scoreEdit.helpers({
    canEdit: function () { return canEditScore(Meteor.user(), this) }
});

Template.scoreEdit.events({
    'submit form': function(e) {
        e.preventDefault();
        var currentScore = this._id;

        var scoreData = {
            description: $(e.target).find('[name=description]').val(),
            value: $(e.target).find('[name=value]').val(),
            ownerUserName: $(e.target).find('[name=owner]').val()
        };

        Score.update(currentScore, {$set: scoreData}, function (error) {
            if (error) {
                throwError(error.reason);
            } else {
                Router.go('scoreList');
            }
        })
    },

    'click .delete': function(e) {
        if (confirm('Удалить?')) {
            var currentScore = this._id;
            Score.remove(currentScore);
            Router.go('scoreList');
        }
    }
});