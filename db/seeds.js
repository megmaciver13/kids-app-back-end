const Schema = require ('./schema')

const Subject = Schema.Subject
const Lesson = Schema.Lesson
const Question = Schema.Question

// Animals
let farmQ1 = new Question ({
  question: 'Pick the cow.',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/cow.png',
        text: 'Cow',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/pig.png',
        text: 'Pig',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/chicken.png',
        text: 'Chicken',
        isCorrect: false
      }
    ]
})

let farmQ2 = new Question ({
  question: 'Pick the chicken.',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/hen.png',
        text: 'Chicken',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/rat.png',
        text: 'Mouse',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/horse.png',
        text: 'Horse',
        isCorrect: false
      }
    ]
})

let farmQ3 = new Question ({
  question: 'Pick the pig.',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/pig.png',
        text: 'Pig.',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/chicken2.png',
        text: 'Chicken',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/goat.png',
        text: 'Goat',
        isCorrect: false
      }
    ]
})

let farmAnimals = new Lesson ({
    name: 'Identify Types of Farm Animals',
    lessonImage: 'https://s3.us-east-2.amazonaws.com/project-3-icons/barn.png',
    questions: [farmQ1, farmQ2, farmQ3]
})

let oceanQ1 = new Question ({
  question: 'Which sea creature has legs?',
  answers:
    [
      {
        image:'https://s3.us-east-2.amazonaws.com/project-3-icons/crab.png',
        text: 'Crab',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/whale.png',
        text: 'Whale',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/fish.png',
        text: 'Fish',
        isCorrect: false
      }
    ]
})

let oceanQ2 = new Question ({
  question: 'Which animal is the largest?',
  answers:
    [
      {
        image:'https://s3.us-east-2.amazonaws.com/project-3-icons/shark.png',
        text: 'Shark',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/shrimp.png',
        text: 'Shrimp',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/fish+(1).png',
        text: 'Fish',
        isCorrect: false
      }
    ]
})

let oceanQ3 = new Question ({
  question: 'Which animal does not have tentacles?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/dolphin.png',
        text: 'Dolphin',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/squid+(1).png',
        text: 'Squid',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/octopus.png',
        text: 'Octopus',
        isCorrect: false
      }
    ]
})

let oceanAnimals = new Lesson ({
  name: 'Ocean Animals',
  lessonImage: 'https://s3.us-east-2.amazonaws.com/project-3-icons/wave.png',
  questions: [oceanQ1, oceanQ2, oceanQ3]
})

let flyQ1 = new Question ({
  question: 'Which animal sleeps hanging upside down?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/bat+(1).png',
        text: 'Bat',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/bee.png',
        text: 'Bee',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/bird.png',
        text: 'Bird',
        isCorrect: false
      }
    ]
})

let flyQ2 = new Question ({
  question: 'Which is an insect?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/ladybug.png',
        text: 'Ladybug',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/dove.png',
        text: 'Dove',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/duck.png',
        text: 'Duck',
        isCorrect: false
      }
    ]
})

let flyQ3 = new Question ({
  question: 'Which animal starts out as a caterpillar?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/butterfly.png',
        text: 'Butterfly',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/eagle.png',
        text: 'Eagle',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/bird.png',
        text: 'Bird',
        isCorrect: false
      }
    ]
})

let flyingAnimals = new Lesson ({
  name: 'Animals that Fly',
  lessonImage: 'https://s3.us-east-2.amazonaws.com/project-3-icons/cloudy-day.png',
  questions: [flyQ1, flyQ2, flyQ3]
})


let animals = new Subject ({
    name: 'Animals',
    subjectImage:'https://s3.us-east-2.amazonaws.com/project-3-icons/pet.png',
    lessons: [farmAnimals, oceanAnimals, flyingAnimals]
})


//Transportation
let airplaneQ1 = new Question ({
  question: 'Pick out the airplane.',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/rocket-ship.png',
        text: 'Rocket ship',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/airplane.png',
        text: 'Airplane',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/boat.png',
        text: 'Boat',
        isCorrect: false
      }
    ]
})

let airplaneQ2 = new Question ({
  question: 'Who drives a plane?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/pilot.png',
        text: 'Pilot',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/firefighter+(1).png',
        text: 'Firefighter',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/doctor.png',
        text: 'Doctor',
        isCorrect: false
      }
    ]
})

let airplaneQ3 = new Question ({
  question: 'Where do planes fly?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/clouds.png',
        text: 'Sky',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/highway.png',
        text: 'Highway',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/wave.png',
        text: 'Ocean',
        isCorrect: false
      }
    ]
})

let airplanes = new Lesson ({
  name: 'Airplanes',
  lessonImage: 'https://s3.us-east-2.amazonaws.com/project-3-icons/travel.png',
  questions: [airplaneQ1, airplaneQ2, airplaneQ3]
})

let vehicleQ1 = new Question ({
  question: 'Pick out the fire truck.',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/fire-truck.png',
        text: 'Fire Truck',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/police.png',
        text: 'Police Care',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/ambulance.png',
        text: 'Ambulance',
        isCorrect: false
      }
    ]
})

let vehicleQ2 = new Question ({
  question: 'Pick out the school bus',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/trucking.png',
        text: 'Truck',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/school-bus.png',
        text: 'School Bus',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/ice-cream.png',
        text: 'Ice Cream Truck',
        isCorrect: false
      }
    ]
})

let vehicleQ3 = new Question ({
  question: 'Pick out the taxi cab.',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/car.png',
        text: 'Car',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/trucking.png',
        text: 'tractor',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/taxi.png',
        text: 'Taxi',
        isCorrect: true
      }
    ]
})

let vehicles = new Lesson ({
  name: 'Vehicles',
  lessonImage: 'https://s3.us-east-2.amazonaws.com/project-3-icons/parking.png',
  questions: [vehicleQ1, vehicleQ2, vehicleQ3]
})

let trainQ1 = new Question ({
  question: 'Pick out the train.',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/bike.png',
        text: 'Bike',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/bus.png',
        text: 'Bus',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/toy-train.png',
        text: 'Train',
        isCorrect: true
      }
    ]
})

let trainQ2 = new Question ({
  question: 'Where do you drive a train?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/railway.png',
        text: 'Train Tracks',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/road.png',
        text: 'Highway',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/sea.png',
        text: 'Water',
        isCorrect: false
      }
    ]
})

let trainQ3 = new Question ({
  question: 'Who drives a train?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/driver.png',
        text: 'Conductor',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/police2.png',
        text: 'Police Man',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/basketball+(3).png',
        text: 'Basketball Player',
        isCorrect: true
      }
    ]
})

let trains = new Lesson ({
  name: 'Trains',
  lessonImage: 'https://s3.us-east-2.amazonaws.com/project-3-icons/train.png',
  questions: [trainQ1, trainQ2, trainQ3]
})

let transportation = new Subject ({
  name: 'Transportation',
  subjectImage: 'https://s3.us-east-2.amazonaws.com/project-3-icons/transportation.png',
  lessons: [airplanes, vehicles, trains]
})

// Alphabets, Colors, & Numbers
let picLetterQ1 = new Question ({
  question: 'Which picture starts with the letter A?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/travel.png',
        text: 'Airplane',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/doctor.png',
        text: 'Doctor',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/boat.png',
        text: 'Boat',
        isCorrect: false
      }
    ]
})

let picLetterQ2 = new Question ({
  question: 'Which picture starts with the letter B?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/school-bus.png',
        text: 'Bus',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/firefighter+(1).png',
        text: 'Firefighter',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/rocket-ship.png',
        text: 'Rocket ship.',
        isCorrect: false
      }
    ]
})

let picLetterQ3 = new Question ({
  question: 'Which picture starts with the letter O?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/fish.png',
        text: 'Fish',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/highway.png',
        text: 'Highway',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/wave.png',
        text: 'Ocean',
        isCorrect: true
      }
    ]
})

let picLetter = new Lesson ({
  name: 'Identify the picture for the letter.',
  lessonImage: 'https://s3.us-east-2.amazonaws.com/project-3-icons/blocks.png',
  questions: [picLetterQ1, picLetterQ2, picLetterQ3]
})

let picNumQ1 = new Question ({
  question: 'Which picture has 1 item?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/black-cat.png',
        text: 'One Cat',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/pawprints.png',
        text: 'Two Paws',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/columns.png',
        text: 'Three Checks',
        isCorrect: false
      }
    ]
})

let picNumQ2 = new Question ({
  question: 'Which picture has 3 items?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/columns.png',
        text: 'Three Checks',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/row.png',
        text: 'Two Lines',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/apple.png',
        text: 'One Apple',
        isCorrect: false
      }
    ]
})

let picNumQ3 = new Question ({
  question: 'Which picture has 4 items?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/text-alignment-justified-option-symbol-for-interface-of-four-aligned-lines-of-same-size.png',
        text: 'Four Lines',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/highway.png',
        text: 'One Highway',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/three-piglets.png',
        text: 'Three Piglets',
        isCorrect: false
      }
    ]
})

let picNum = new Lesson ({
  name: 'Match the pictures with the Numbers.',
  lessonImage: 'https://s3.us-east-2.amazonaws.com/project-3-icons/cubes.png',
  questions: [picNumQ1, picNumQ2, picNumQ3]
})

let colorQ1 = new Question ({
  question: 'Which picture is blue?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/add-square-button.png',
        text: 'Blue Cross',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/pawprints.png',
        text: 'Paw Prints',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/pig.png',
        text: 'Chicken',
        isCorrect: false
      }
    ]
})

let colorQ2 = new Question ({
  question: 'Which picture is yellow?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/school-bus.png',
        text: 'School Bus',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/pig.png',
        text: 'Pig',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/apple.png',
        text: 'Apple',
        isCorrect: false
      }
    ]
})

let colorQ3 = new Question ({
  question: 'Which color is red?',
  answers:
    [
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/red-flag.png',
        text: 'Red Flag',
        isCorrect: true
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/leaf.png',
        text: 'Green Leaf',
        isCorrect: false
      },
      {
        image: 'https://s3.us-east-2.amazonaws.com/project-3-icons/orange.png',
        text: 'Orange',
        isCorrect: false
      }
    ]
})

let colors = new Lesson ({
  name: 'Identify the picture matching the color.',
  lessonImage: 'https://s3.us-east-2.amazonaws.com/project-3-icons/pantone.png',
  questions: [colorQ1, colorQ2, colorQ3]
})

let abc123 = new Subject ({
  name: 'ABCs, 123s & Colors',
  subjectImage:'https://s3.us-east-2.amazonaws.com/project-3-icons/abc.png',
  lessons: [picLetter, picNum, colors]
})

let subjects = [transportation, animals, abc123]

Subject.remove({})
  .then(() => {
    console.log('Subjects removed successfully.')
    return Subject.collection.insert(subjects)
  })
  .then(() => {
    process.exit()
  })
  .catch(err => console.log(err))
