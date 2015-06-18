Template.scoreItem.helpers({
    isoDate: function() {
        return this.date.toISOString().substring(0, 16).replace('T', ' ')
    }
});