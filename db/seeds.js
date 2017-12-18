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
        image: 'https://www.flaticon.com/free-icon/cow_616528',
        text: 'Cow',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/pig_616547',
        text: 'Pig',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/chicken_616443',
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
        image: 'https://www.flaticon.com/free-icon/hen_616560',
        text: 'Chicken',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/rat_616569',
        text: 'Mouse',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/horse_616544',
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
        image: 'https://www.flaticon.com/free-icon/pig_616547',
        text: 'Pig.',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/chicken_616440',
        text: 'Chicken',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/goat_616548',
        text: 'Goat',
        isCorrect: false
      }
    ]
})

let farmAnimals = new Lesson ({
    name: 'Identify Types of Farm Animals',
    lessonImage: 'https://www.flaticon.com/free-icon/barn_186125#term=barn&page=1&position=21',
    questions: [farmQ1, farmQ2, farmQ3]
})

let oceanQ1 = new Question ({
  question: 'Which sea creature has legs?',
  answers:
    [
      {
        image:' https://www.flaticon.com/free-icon/crab_616492',
        text: 'Crab',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/whale_616512',
        text: 'Whale',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/fish_616504',
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
        image:'https://www.flaticon.com/free-icon/shark_616510',
        text: 'Shark',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/shrimp_616501',
        text: 'Shrimp',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/fish_616503',
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
        image: 'https://www.flaticon.com/free-icon/dolphin_616508',
        text: 'Dolphin',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/squid_616495',
        text: 'Squid',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/octopus_616499',
        text: 'Octopus',
        isCorrect: false
      }
    ]
})

let oceanAnimals = new Lesson ({
  name: 'Ocean Animals',
  lessonImage: 'https://www.flaticon.com/free-icon/wave_616545#term=ocean&page=1&position=31',
  questions: [oceanQ1, oceanQ2, oceanQ3]
})

let flyQ1 = new Question ({
  question: 'Which animal sleeps hanging upside down?',
  answers:
    [
      {
        image: 'https://www.flaticon.com/free-icon/bat_616454',
        text: 'Bat',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/bee_616464',
        text: 'Bee',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/bird_616438',
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
        image: 'https://www.flaticon.com/free-icon/ladybug_616477',
        text: 'Ladybug',
        isCorrect: true
      },
      {
        image: ' https://www.flaticon.com/free-icon/dove_616566',
        text: 'Dove',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/duck_616446',
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
        image: 'https://www.flaticon.com/free-icon/butterfly_616468',
        text: 'Butterfly',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/eagle_616448',
        text: 'Eagle',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/bird_616438',
        text: 'Bird',
        isCorrect: false
      }
    ]
})

let flyingAnimals = new Lesson ({
  name: 'Animals that Fly',
  lessonImage: 'https://www.flaticon.com/free-icon/cloudy-day_616511',
  questions: [flyQ1, flyQ2, flyQ3]
})


let animals = new Subject ({
    name: 'Animals',
    subjectImage:'https://www.flaticon.com/free-icon/pawprints_616409',
    lessons: [farmAnimals, oceanAnimals, flyingAnimals]
})


//Transportation
let airplaneQ1 = new Question ({
  question: 'Pick out the airplane.',
  answers:
    [
      {
        image: 'https://www.flaticon.com/free-icon/rocket-ship_171247',
        text: 'Rocket ship',
        isCorrect: false
      },
      {
        image: '../images/airplane.png',
        text: 'Airplane',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/boat_171245',
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
        image: 'https://www.flaticon.com/free-icon/pilot_607405#term=pilot&page=1&position=25',
        text: 'Pilot',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/firefighter_496970#term=fireman&page=1&position=7',
        text: 'Firefighter',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/doctor_607414#term=doctor&page=1&position=14',
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
        image: 'https://www.flaticon.com/free-icon/clouds_414927#term=sky&page=1&position=14',
        text: 'Sky',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/highway_579247#term=highway&page=1&position=1',
        text: 'Highway',
        isCorrect: false
      },
      {
        image: ' https://www.flaticon.com/free-icon/wave_433541#term=ocean&page=1&position=37',
        text: 'Ocean',
        isCorrect: false
      }
    ]
})

let airplanes = new Lesson ({
  name: 'Airplanes',
  lessonImage: 'https://www.flaticon.com/free-icon/travel_201623#term=airplanes&page=1&position=12',
  questions: [airplaneQ1, airplaneQ2, airplaneQ3]
})

let vehicleQ1 = new Question ({
  question: 'Pick out the fire truck.',
  answers:
    [
      {
        image: '',
        text: 'Fire Truck',
        isCorrect: true
      },
      {
        image: '',
        text: 'Police Care',
        isCorrect: false
      },
      {
        image: '',
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
        image: '',
        text: 'Truck',
        isCorrect: false
      },
      {
        image: '',
        text: 'School Bus',
        isCorrect: true
      },
      {
        image: '',
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
        image: '',
        text: 'Car',
        isCorrect: false
      },
      {
        image: '',
        text: 'tractor',
        isCorrect: false
      },
      {
        image: '',
        text: 'Taxi',
        isCorrect: true
      }
    ]
})

let vehicles = new Lesson ({
  name: 'Vehicles',
  lessonImage: '',
  questions: [vehicleQ1, vehicleQ2, vehicleQ3]
})

let trainQ1 = new Question ({
  question: 'Pick out the train.',
  answers:
    [
      {
        image: '',
        text: 'Bike',
        isCorrect: false
      },
      {
        image: '',
        text: 'Bus',
        isCorrect: false
      },
      {
        image: '',
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
        image: '',
        text: 'Train Tracks',
        isCorrect: true
      },
      {
        image: '',
        text: 'Highway',
        isCorrect: false
      },
      {
        image: '',
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
        image: '',
        text: 'Conductor',
        isCorrect: true
      },
      {
        image: '',
        text: 'Police Man',
        isCorrect: false
      },
      {
        image: '',
        text: 'Basketball Player',
        isCorrect: true
      }
    ]
})

let trains = new Lesson ({
  name: 'Trains',
  lessonImage: '',
  questions: [trainQ1, trainQ2, trainQ3]
})

let transportation = new Subject ({
  name: 'Transportation',
  subjectImage: 'transportation.png',
  lessons: [airplanes, vehicles, trains]
})

// Alphabets, Colors, & Numbers
let picLetterQ1 = new Question ({
  question: 'Which picture starts with the letter A?',
  answers:
    [
      {
        image: 'https://www.flaticon.com/free---icon/travel_201623#term=airplanes&page=1&position=12',
        text: 'Airplane',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/doctor_607414#term=doctor&page=1&position=14',
        text: 'Doctor',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/boat_171245',
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
        image: 'https://www.flaticon.com/free-icon/school-bus_167728',
        text: 'Bus',
        isCorrect: true
      },
      {
        image: ' https://www.flaticon.com/free-icon/firefighter_496970#term=fireman&page=1&position=7',
        text: 'Firefighter',
        isCorrect: false
      },
      {
        image: ' https://www.flaticon.com/free-icon/rocket-ship_171247',
        text: 'Rocket ship.',
        isCorrect: true
      }
    ]
})

let picLetterQ3 = new Question ({
  question: 'Which icture starts with the letter O?',
  answers:
    [
      {
        image: 'https://www.flaticon.com/free-icon/fish_616504',
        text: 'Fish',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/highway_579247#term=highway&page=1&position=1',
        text: 'Highway',
        isCorrect: false
      },
      {
        image: ' https://www.flaticon.com/free-icon/wave_433541#term=ocean&page=1&position=37',
        text: 'Ocean',
        isCorrect: false
      }
    ]
})

let picLetter = new Lesson ({
  name: 'Identify the picture for the letter.',
  lessonImage: 'https://www.flaticon.com/free-icon/cubes_354688#term=alphabet&page=1&position=79',
  questions: [picLetterQ1, picLetterQ2, picLetterQ3]
})

let picNumQ1 = new Question ({
  question: '1',
  answers:
    [
      {
        image: 'https://www.flaticon.com/free-icon/black-cat_238256#term=cat&page=1&position=19',
        text: 'One Cat',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/pawprints_616575#term=cat&page=1&position=29',
        text: 'Two Paws',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/columns_643645#term=four&page=1&position=7',
        text: 'Three Checks',
        isCorrect: false
      }
    ]
})

let picNumQ2 = new Question ({
  question: '3',
  answers:
    [
      {
        image: 'https://www.flaticon.com/free-icon/columns_643645#term=four&page=1&position=7',
        text: 'Three Checks',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/row_359401#term=four&page=1&position=20',
        text: 'Two Lines',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/apple_167730',
        text: 'One Apple',
        isCorrect: false
      }
    ]
})

let picNumQ3 = new Question ({
  question: '4',
  answers:
    [
      {
        image: 'https://www.flaticon.com/free-icon/text-alignment-justified-option-symbol-for-interface-of-four-aligned-lines-of-same-size_39441#term=set of four&page=1&position=1',
        text: 'Four Lines',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/highway_579247#term=highway&page=1&position=1',
        text: 'One Highway',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/three-piglets_129092#term=three&page=1&position=25',
        text: 'Three Piglets',
        isCorrect: false
      }
    ]
})

let picNum = new Lesson ({
  name: 'Match the pictures with the Numbers.',
  lessonImage: 'https://www.flaticon.com/free-icon/cubes_354688#term=alphabet&page=1&position=79',
  questions: [picNumQ1, picNumQ2, picNumQ3]
})

let colorQ1 = new Question ({
  question: 'Which picture is blue?',
  answers:
    [
      {
        image: 'https://www.flaticon.com/free-icon/hospital_119070',
        text: 'Cross',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/pawprints_616575#term=cat&page=1&position=29',
        text: 'Paws',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/pig_616547,',
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
        image: 'https://www.flaticon.com/free-icon/school-bus_167728',
        text: 'School Bus',
        isCorrect: true
      },
      {
        image: ' https://www.flaticon.com/free-icon/pig_616547 ',
        text: 'Pig',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/apple_167730',
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
        image: ' https://www.flaticon.com/free-icon/red-flag_395841#term=red&page=1&position=20',
        text: 'Flag',
        isCorrect: true
      },
      {
        image: 'https://www.flaticon.com/free-icon/leaf_392173#term=green&page=1&position=39',
        text: 'Leaf',
        isCorrect: false
      },
      {
        image: 'https://www.flaticon.com/free-icon/orange_661758#term=orange&page=1&position=4',
        text: 'Orange',
        isCorrect: false
      }
    ]
})

let colors = new Lesson ({
  name: 'Identify the picture matching the color.',
  lessonImage: 'https://www.flaticon.com/free-icon/rgb_186297#term=color&page=1&position=19',
  questions: [colorQ1, colorQ2, colorQ3]
})

let abc123 = new Subject ({
  name: 'ABCs, 123s & Colors',
  subjectImage:'https://www.flaticon.com/free-icon/cubes_354688#term=alphabet&page=1&position=79',
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
