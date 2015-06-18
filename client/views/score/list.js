Template.scoreList.helpers({
    score: function() {
        return Score.find({}, {sort: {date: -1}});
    }
});