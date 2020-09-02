const mongoose = require('../database/index');

const autoIncrementModelID = require('../controllers/surrogateKey');



const PeopleSchema = new mongoose.Schema({
    SurrogateKey: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    lonlat: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now,
        require: true
    },
    update_at: {
        type: Date,
        default: Date.now,
        require: true
    },
    infected: {
        type: Boolean,
        default: false,
        require: true
    },
    item: [{
        type:Object,
        name: String,
        value: Number,
        quant: Number,
    }],
    Latitude: {
        type: String,
        required: true
    },
    Longitude: {
        type: String,
        required: true
    }
})

PeopleSchema.pre('save', function(next){
    if(!this.isNew) {
        next();
        return
    }
    autoIncrementModelID('activities', this, next)
});

const People = mongoose.model('People', PeopleSchema);
module.exports = People;
