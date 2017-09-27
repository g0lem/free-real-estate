var mongoose = require('mongoose');


//**Apartment**
var apartmentsSchema = new mongoose.Schema({

		room_number: Number,
		bathroom_number: Number,
		Address: String,
		Surface: Number,
		Price: Number

},{collection:"apartments"});

mongoose.model('Apartment', apartmentsSchema);
//**Apartment**