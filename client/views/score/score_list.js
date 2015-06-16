var scoreData = [
    {
        date: new Date(2015, 5, 1),
        title: 'Русский язык',
        value: 10
    },
    {
        date: new Date(2015, 5, 2),
        title: 'Математика',
        value: 20
    }
];
Template.scoreList.helpers({
    score: scoreData
});