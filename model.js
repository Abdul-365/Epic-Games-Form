var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var FormDataSchema = new Schema(
    {
        country: { type: String, required: true },
        first_name: { type: String, required: true, minLength: 3, maxLength: 100 },
        last_name: { type: String, required: true, minLength: 3, maxLength: 100 },
        display_name: { type: String, required: true, maxLength: 100 },
        email: { type: String, required: true },
        password: { type: String, required: true, minLength: 8, maxLength: 30 },
        email_subscription: { type: Boolean, default: false },
    }
);

FormDataSchema
    .virtual('url')
    .get(function () {
        return '/' +  this._id + '/detail';
    })

module.exports = mongoose.model('details', FormDataSchema);