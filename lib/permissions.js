canEditScore = function(user, score) {
    return user && user.username === score.creatorUserName;
};