Meteor.publish('score', function() {
    return Score.find();
});