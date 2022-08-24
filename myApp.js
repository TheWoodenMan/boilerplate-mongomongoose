require("dotenv").config();
const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

try {
	// Connection to mongoDB
	mongoose.connect(
		process.env.MONGO_URI,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		},
		() => console.log("Mongoose is connected")
	);
} catch (e) {
	// error if no connect
	console.log("could not connect");
}

// declaring a new schema
const personSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	age: Number,
	favoriteFoods: [String],
});

// module.exports = mongoose.model("Person", personSchema);

// compiled model
const Person = mongoose.model("Person", personSchema);

// function to create and save a new Person

//  Within the createAndSavePerson function, create a document
//  instance using the Person model constructor you built before.
//  Pass to the constructor an object having the fields name, age,
//  and favoriteFoods. Their types must conform to the ones in the
//   personSchema. Then, call the method document.save() on the
//   returned document instance. Pass to it a callback using the Node
//   convention. This is a common pattern; all the following CRUD methods
//    take a callback function like this as the last argument.

const createAndSavePerson = (done) => {
	// create a new person object
	const person = new Person({
		name: "Andy Wood",
		age: 43,
		favoriteFoods: ["lasagne", "indian", "pasta carbonara"],
	});

	// save them to the db
	person.save(function (err, data) {
		if (err) return console.error(err);
		done(null, data);
	});
};

const createManyPeople = (arrayOfPeople, done) => {
	done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
	done(null /*, data*/);
};

const findOneByFood = (food, done) => {
	done(null /*, data*/);
};

const findPersonById = (personId, done) => {
	done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
	const foodToAdd = "hamburger";

	done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
	const ageToSet = 20;

	done(null /*, data*/);
};

const removeById = (personId, done) => {
	done(null /*, data*/);
};

const removeManyPeople = (done) => {
	const nameToRemove = "Mary";

	done(null /*, data*/);
};

const queryChain = (done) => {
	const foodToSearch = "burrito";

	done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
