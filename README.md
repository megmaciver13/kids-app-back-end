# LearnNGrow

This app is a visual learning app in the style of short, visual quizzes intended to help young children learn in an engaging environment. Parents also have the capability of adding their own lessons geared to their children's interests and learning needs.

## List of Features

This repository represents the back-end API for Learn n Grow. It comprises of a connection file, a schema file, and a file with our seed data. The index file contains routes for get, post, put, and delete methods, called on to alter the front-end. A full list of dependencies can be found in the package.json file.

## Getting Started

The repository for this code can be found at: https://github.com/megmaciver13/kids-app-back-end
<!-- Combine this with the next section -->
## Installing the App

You will need to use node and mongodb on your local system to get started. To install the app, clone this repository to a local system and 'npm install' to install all dependencies needed. Then you will need to seed your mongodb database by running 'node db/seeds.js.'
<!-- Then what do I do to run my server? -->
## Built with

To build this app, we used:
* Node
* Express
* Mongoose
* MongoDB
* bodyParser
* CORS
<!-- AWS -->
## Deployment

This repository is deployed to a public url here: https://kids-app-back-end.herokuapp.com/

To see the front end, visit:
https://github.com/megmaciver13/kids-app-front-end

The fully deployed app is at:
http://learn-n-grow.surge.sh/

## Group Member Roles
Authors: Meg MacIver, Stella Gordon-Zigel, Charles Wilner

* As a group, we developed the structure of how data would be stored in our MongoDB database.
* As a group, we decided to use the features-branch git workflow.
* Once we created the remote repository, we all researched to find seed data to populate our database.
* Charles structured the seed data. When we changed structure a bit, Stella reorganized the seed data.
* Meg created the routes in the index.js file to allow for CRUD functionality, working in conjunction with the team so that routes correspond to front-end API calls to the back end.

<!-- Good job on the readme!  If you want to really make it pop, add some links to mongo, node, etc.  It may make more sense though to really just strip this one down a bit and link to your front end github. -->
