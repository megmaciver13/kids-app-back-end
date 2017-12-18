var AnimalsQuestions = require('./seeds.json');
var Schema = require("../db/schema.js");
var Subject = Schema.Subject;
var Lesson = Schema.Lesson;
var Question = Schema.Question;


Subject.remove({}, function(err){
  console.log(err)
})
Lesson.remove({}, function(err){
  console.log(err)
})
Question.remove({}, function(err){
  console.log(err)
})

// Animals
Animals = new Subject
  ({
    name: "Animals",
    subjectImage:"image: https://www.flaticon.com/free-icon/pawprints_616409",

    new Lesson1{
    name: "Identify Types of Farm Animals",
    LessonImage: "https://www.flaticon.com/free-icon/barn_186125#term=barn&page=1&position=21",
    new Question1({
      Question: "Pick the cow.",
    answers:
      [
        {
          image: "https://www.flaticon.com/free-icon/cow_616528",
          text: "Cow.",
          isCorrect: True
        },
        {
          image: "https://www.flaticon.com/free-icon/pig_616547",
          text: "Pig",
          isCorrect: False
        },
        {
          image: "https://www.flaticon.com/free-icon/chicken_616443",
          text: "Chicken",
          isCorrect: False
        }
      ]
    })
  }
    new Question2({
      Question: "Pick the chicken.",
    answers:
      [
        {
          image: "https://www.flaticon.com/free-icon/hen_616560",
          text: "Chicken.",
          isCorrect: True
        },
        {
          image: "https://www.flaticon.com/free-icon/rat_616569",
          text: "Mouse",
          isCorrect: False
        },
        {
          image: "https://www.flaticon.com/free-icon/horse_616544",
          text: "Horse",
          isCorrect: False
        }
      ]
    }
    new Question3({
      Question: "Pick the pig.",
    answers:
      [
        {
          image: "https://www.flaticon.com/free-icon/pig_616547",
          text: "Pig.",
          isCorrect: True
        },
        {
          image: "https://www.flaticon.com/free-icon/chicken_616440",
          text: "Chicken",
          isCorrect: False
        },
        {
          image: "https://www.flaticon.com/free-icon/goat_616548",
          text: "Goat",
          isCorrect: False
        }
      ]
    })


new Lesson2{
  name: "Ocean Animals",
  LessonImage: "https://www.flaticon.com/free-icon/wave_616545#term=ocean&page=1&position=31",
  new Question1
  ({
    Question: "Which sea creature has legs?",
  answers:
    [
      {
        image:" https://www.flaticon.com/free-icon/crab_616492",
        text: "Crab.",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/whale_616512",
        text: "Whale",
        isCorrect: False
      },
      {
        image: "https://www.flaticon.com/free-icon/fish_616504",
        text: "Fish",
        isCorrect: False
      }
    ]
  }

  new Question2({
    Question: "Which animal is the largest?",
  answers:
    [
      {
        image:"https://www.flaticon.com/free-icon/shark_616510",
        text: "Shark.",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/shrimp_616501",
        text: "Shrimp",
        isCorrect: False
      },
      {
        image: "https://www.flaticon.com/free-icon/fish_616503",
        text: "Fish",
        isCorrect: False
      }
    ]
  }
  new Question3({
    Question: "Which animal does not have tentacles?",
  answers:
    [
      {
        image: "https://www.flaticon.com/free-icon/dolphin_616508",
        text: "Dolphin.",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/squid_616495",
        text: "Squid",
        isCorrect: False
      },
      {
        image: "https://www.flaticon.com/free-icon/octopus_616499",
        text: "Octopus",
        isCorrect: False
      }
    ]
  })


  new Lesson3{
    name: "Animals that Fly",
    LessonImage: "https://www.flaticon.com/free-icon/cloudy-day_616511",
    new Question1({
      Question: "Which animal sleeps hanging upside down?",
    answers:
      [
        {
          image: " https://www.flaticon.com/free-icon/bat_616454",
          text: "bat.",
          isCorrect: True
        },
        {
          image: "https://www.flaticon.com/free-icon/bee_616464",
          text: "Bee",
          isCorrect: False
        },
        {
          image: "https://www.flaticon.com/free-icon/bird_616438",
          text: "Bird",
          isCorrect: False
        }
      ]
    }

    new Question2({
      Question: "Which is not an insect?",
    answers:
      [
        {
          image: "https://www.flaticon.com/free-icon/ladybug_616477",
          text: "Ladybug.",
          isCorrect: True
        },
        {
          image: " https://www.flaticon.com/free-icon/dove_616566",
          text: "Dove",
          isCorrect: False
        },
        {
          image: "https://www.flaticon.com/free-icon/duck_616446",
          text: "Duck",
          isCorrect: False
        }
      ]
    }
    new Question3({
      Question: "Which animal starts out as a caterpillar?",
    answers:
      [
        {
          image: "https://www.flaticon.com/free-icon/butterfly_616468",
          text: "Butterfly.",
          isCorrect: True
        },
        {
          image: "https://www.flaticon.com/free-icon/eagle_616448",
          text: "Eagle",
          isCorrect: False
        },
        {
          image: "https://www.flaticon.com/free-icon/bird_616438",
          text: "Bird",
          isCorrect: False
        }
      ]
    })



//Transportation
Subject
(name: "Transportation",
subjectImage= "https://www.flaticon.com/free-icon/transportation_649315#term=airplanes&page=1&position=95" =

new Lesson1{
  name: "Airplanes",
  LessonImage: "https://www.flaticon.com/free-icon/travel_201623#term=airplanes&page=1&position=12",

  new Question1({
    Question: "Pick out the airplane",
  answers:
    [
      {
        image: "https://www.flaticon.com/free-icon/rocket-ship_171247",
        text: "Rocket ship.",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/airplane_579268#term=airplanes&page=1&position=19",
        text: "Airplane",
        isCorrect: False
      },
      {
        image: "https://www.flaticon.com/free-icon/boat_171245",
        text: "Boat",
        isCorrect: False
      }
    ]
  }

  new Question2({
    Question: "Who drives a plane?",
  answers:
    [
      {
        image: "https://www.flaticon.com/free-icon/pilot_607405#term=pilot&page=1&position=25",
        text: "Pilot",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/firefighter_496970#term=fireman&page=1&position=7",
        text: "Firefighter",
        isCorrect: False
      },
      {
        image: "https://www.flaticon.com/free-icon/doctor_607414#term=doctor&page=1&position=14",
        text: "Doctor",
        isCorrect: False
      }
    ]
  }
  new Question3({
    Question: "Which one do airplanes fly through?",
  answers:
    [
      {
        image: "https://www.flaticon.com/free-icon/clouds_414927#term=sky&page=1&position=14",
        text: "Sky",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/highway_579247#term=highway&page=1&position=1",
        text: "Highway",
        isCorrect: False
      },
      {
        image: " https://www.flaticon.com/free-icon/wave_433541#term=ocean&page=1&position=37",
        text: "Ocean",
        isCorrect: False
      }
    ]
  })

new Lesson2{
  name: "Vehicles",
  LessonImage: "#",
})

// Alphabets, Colors, & Numbers
Subject
(name: "Alphabets , Colors, & Numbers",
subjectImage:"https://www.flaticon.com/free-icon/cubes_354688#term=alphabet&page=1&position=79") =

new Lesson1{
  name: "Identify the picture for the letter.",
  LessonImage: "https://www.flaticon.com/free-icon/cubes_354688#term=alphabet&page=1&position=79",

  new Question1({
    Question: "which picture starts with the letter A",
  answers:
    [
      {
        image: "https://www.flaticon.com/free---icon/travel_201623#term=airplanes&page=1&position=12",
        text: "Airplane.",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/doctor_607414#term=doctor&page=1&position=14",
        text: "Doctor",
        isCorrect: False
      },
      {
        image: "https://www.flaticon.com/free-icon/boat_171245",
        text: "Boat",
        isCorrect: False
      }
    ]
  }

  new Question2({
    Question: "Which picture starts with the letter B?",
  answers:
    [
      {
        image: "https://www.flaticon.com/free-icon/school-bus_167728",
        text: "Bus",
        isCorrect: True
      },
      {
        image: " https://www.flaticon.com/free-icon/firefighter_496970#term=fireman&page=1&position=7",
        text: "Firefighter",
        isCorrect: False
      },
      {
        image: " https://www.flaticon.com/free-icon/rocket-ship_171247",
        text: "Rocket ship.",
        isCorrect: True
      }
    ]
  }
  new Question3({
    Question: "Which icture starts with the letter O?",
  answers:
    [
      {
        image: "https://www.flaticon.com/free-icon/fish_616504",
        text: "Fish",
        isCorrect: False
      },
      {
        image: "https://www.flaticon.com/free-icon/highway_579247#term=highway&page=1&position=1",
        text: "Highway",
        isCorrect: False
      },
      {
        image: " https://www.flaticon.com/free-icon/wave_433541#term=ocean&page=1&position=37",
        text: "Ocean",
        isCorrect: False
      }
    ]
  })

new Lesson2{
  name: "Match the pictures with the Numbers.",
  LessonImage: "https://www.flaticon.com/free-icon/cubes_354688#term=alphabet&page=1&position=79",

  new Question1({
    Question: "1",
  answers:
    [
      {
        image: "https://www.flaticon.com/free-icon/black-cat_238256#term=cat&page=1&position=19",
        text: "Cat",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/pawprints_616575#term=cat&page=1&position=29",
        text: "Paws",
        isCorrect: False
      },
      {
        image: "https://www.flaticon.com/free-icon/columns_643645#term=four&page=1&position=7",
        text: "Checks",
        isCorrect: False
      }
    ]
  }

  new Question2({
    Question: "3",
  answers:
    [
      {
        image: "https://www.flaticon.com/free-icon/columns_643645#term=four&page=1&position=7",
        text: "Checks",
        isCorrect: True
      },
      {
        image: " https://www.flaticon.com/free-icon/row_359401#term=four&page=1&position=20",
        text: "Lines",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/apple_167730",
        text: "Apple",
        isCorrect: False
      }
    ]
  }
  new Question3({
    Question: "4?",
  answers:
    [
      {
        image: " https://www.flaticon.com/free-icon/row_359401#term=four&page=1&position=20",
        text: "Lines",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/highway_579247#term=highway&page=1&position=1",
        text: "Highway",
        isCorrect: False
      },
      {
        image: "https://www.flaticon.com/free-icon/three-piglets_129092#term=three&page=1&position=25",
        text: "Piglets",
        isCorrect: False
      }
    ]
  })


new Lesson3{
  name: "Identify the picture for the color.",
  LessonImage: "https://www.flaticon.com/free-icon/rgb_186297#term=color&page=1&position=19",

  new Question1({
    Question: "Blue",
  answers:
    [
      {
        image: "https://www.flaticon.com/free-icon/hospital_119070",
        text: "Cross",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/pawprints_616575#term=cat&page=1&position=29",
        text: "Paws",
        isCorrect: False
      },
      {
        image: "https://www.flaticon.com/free-icon/pig_616547,",
        text: "Chicken",
        isCorrect: False
      }
    ]
  }

  new Question2({
    Question: "Yellow",
  answers:
    [
      {
        image: "https://www.flaticon.com/free-icon/school-bus_167728",
        text: "school Buss",
        isCorrect: True
      },
      {
        image: " https://www.flaticon.com/free-icon/pig_616547 ",
        text: "Pig",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/apple_167730",
        text: "Apple",
        isCorrect: False
      }
    ]
  })
  new Question3({
    Question: "Red",
  answers:
    [
      {
        image: " https://www.flaticon.com/free-icon/red-flag_395841#term=red&page=1&position=20",
        text: "Flag",
        isCorrect: True
      },
      {
        image: "https://www.flaticon.com/free-icon/leaf_392173#term=green&page=1&position=39",
        text: "Leaf",
        isCorrect: False
      },
      {
        image: "https://www.flaticon.com/free-icon/orange_661758#term=orange&page=1&position=4",
        text: "Orange",
        isCorrect: False
      }
    ]
  })

  subject.forEach(function(subject, i){
    subject.lessons.push(lessons[i], lessons[i+3]);
    subject.save(function(err, docs){
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  });
