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

const arrayOfPeople = [
	{
		"name": "Laura Gray",
		"age": 11,
		"favoriteFoods": ["pasta", "garlic bread"],
	},
	{
		"name": "Rosa Gray",
		"age": 8,
		"favoriteFoods": ["pizza", "cheerios"],
	},
];

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

// function to create many records from an array of objects

const createManyPeople = function (arrayOfPeople, done) {
	Person.create(arrayOfPeople, function (err, people) {
		if (err) return console.log(err);
		console.log("new Person created");
		done(null, people);
	});
};
// function that finds all the people
// having a given name, using Model.find() -> [Person]
const findPeopleByName = (personName, done) => {
	Person.find({ name: personName }, function (err, searchResult) {
		if (err) return console.log(err);
		console.log(`found ${searchResult}`);
		done(null, searchResult);
	});
};

// Use model.findOne() to Return a Single Matching Document from Your Database
// Model.findOne() behaves like Model.find(), but it returns only one
//  document (not an array), even if there are multiple items.
//  It is especially useful when searching by properties that you
//  have declared as unique.

// Modify the findOneByFood function to find just one person which
//  has a certain food in the person's favorites, using
//  Model.findOne() -> Person. Use the function argument food as
//   search key.

const findOneByFood = (food, done) => {
	Person.findOne({ favoriteFoods: food }, function (err, searchResult) {
		if (err) return console.log(err);
		console.log(`found ${searchResult}`);
		done(null, searchResult);
	});
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
