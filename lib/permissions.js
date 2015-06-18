canEditScore = function(userId, score) {
    var user = Meteor.users.findOne(userId);
    return user && user.username === score.creatorUserName;
};