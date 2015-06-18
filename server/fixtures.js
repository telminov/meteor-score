if (Score.find().count() === 0) {
  Score.insert({
        date: new Date(2015, 5, 1),
        description: 'Русский язык',
        value: 10,
        username: 'Sergey'
  });

  Score.insert({
        date: new Date(2015, 5, 2),
        description: 'Математика',
        value: 20,
        username: 'Ivan'
  });
}