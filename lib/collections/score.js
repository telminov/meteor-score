Score = new Mongo.Collection('score');

Meteor.methods({
    createScore: function(scoreData) {
        var user = Meteor.user();
        if (!user)
            throw new Meteor.Error(401, "Требуетя авторизация для регистрации баллов");

        if (!scoreData.description)
            throw new Meteor.Error(422, "Нет описания");
        if (!scoreData.value)
            throw new Meteor.Error(422, "Не задано кол-во баллок");
        if (!scoreData.ownerUserName)
            throw new Meteor.Error(422, "Не указано кому зачислять баллы");

        var ownerExists = Meteor.users.find({username: scoreData.ownerUserName}).count();
        if (!ownerExists)
            throw new Meteor.Error(422, "Нет пользователя с именем " + scoreData.ownerUserName);

        scoreData.creatorUserName = user.username;
        scoreData.date = new Date();

        var scoreId = Score.insert(scoreData);
        return scoreId;
    }
});