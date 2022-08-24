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

const createAndSavePerson = (done) => {
	// create a new document instance using the Person model constructor
	const person = new Person({
		name: "Andy Wood",
		age: 43,
		favoriteFoods: ["lasagne", "indian", "pasta carbonara"],
	});

	// call the method document.save() on the returned document instance
	person.save(function (err, data) {
		if (err) return console.error(err);
		done(null, data);
	});
};

// Create Many Records with model.create()
// Sometimes you need to create many instances of your models, e.g. when seeding a database with initial data.
// Model.create() takes an array of objects like [{name: 'John', ...}, {...}, ...] as the first argument, and saves them all in the db.

// Modify the createManyPeople function to create many people using Model.create() with the argument arrayOfPeople.

// Note: You can reuse the model you instantiated in the previous exercise.

// function to create many records from an array of objects

const createManyPeople = (arrayOfPeople, done) => {
	// create many people using Model.create() with the argument arrayOfPeople.
	arrayOfPeople.forEach((p) => {
		let person = Person.create({
			name: p.name,
			age: p.age,
			favoriteFoods: p.favoriteFoods,
		});
		console.log("new Person created");
		person.save(function (err, data) {
			if (err) return console.error(err);
			console.log("new Person saved");
			done(null, data);
		});
	});

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
