if (Score.find().count() === 0) {
  Score.insert({
        date: new Date(2015, 5, 1),
        description: 'Русский язык',
        value: 10,
        creatorUserName: 'Sergey',
        ownerUserName: 'Ivan'
  });

  Score.insert({
        date: new Date(2015, 5, 2),
        description: 'Математика',
        value: 20,
        creatorUserName: 'Ivan',
        ownerUserName: 'Ivan'
  });
}