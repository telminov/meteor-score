Template.errors.helpers({
    errors: function() {
        return Errors.find();
    }
});

Template.error.render = function() {
    var error = this.data;
    Meteor.defer(function() {
        Errors.update(error._id, {$set: {seen: true}});
    })
};