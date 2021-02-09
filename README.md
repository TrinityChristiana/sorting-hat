# Sorting Hat  [![Netlify Status](https://api.netlify.com/api/v1/badges/580a50c7-4dcd-4ec2-8010-00097ad6abba/deploy-status)](https://app.netlify.com/sites/trinity-christiana-sorting-hat/deploys)

[View App](https://drt-sortinghat.netlify.app/)

## Get Started
```
$ git clone git@github.com:drteresavasquez/sorting-hat.git
$ cd sorting-hat
```

## About the User <!-- This is a scaled down user persona -->
- The ideal user for this application is a teacher
- They have students in their classrooms that they would like to put into random groups and they have a love and passion of Harry Potter
- The problem this app solves for them is it allows them to get their students involved and excited about being in random groups. The students have felt that the groups have not been so random and based on favorites.

## Features
- When a new student is added an object should be created and that object should be pushed into an array of students that then prints to the DOM.
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.

## Video Walkthrough of APP NAME
https://www.loom.com/share/829b90d831ea441ba2db6bea724af210

## Relevant Links
- [Check out the deployed site](https://trinity-christiana-sorting-hat.netlify.app/)
- [Project Board](#)

## Code Snippet
```javascript
// get all the student IDs and create a new array and sort them lowest to highest
const studentIds = students.map(student => student.id).sort((a, b) => a - b);

// ternary operator: if the students array is not empty, create an ID that is +1 of the last item in the array. Otherwise make the id 1
const id = studentIds.length ? studentIds[(studentIds.length - 1)] + 1 : 1;

const obj = {
    name,
    house,
    id,
  };
```

## Project Screenshots 
<img width="300" alt="Screen Shot 2021-02-08 at 10 32 33 AM" src="https://user-images.githubusercontent.com/29741570/107249441-fcdbc800-69f8-11eb-9256-9a2fa8a1caf0.png">
<img width="300" alt="Screen Shot 2021-02-08 at 10 32 33 AM" src="https://user-images.githubusercontent.com/29741570/107249441-fcdbc800-69f8-11eb-9256-9a2fa8a1caf0.png">


## Contributors
- [Dr. Teresa Vasquez](https://github.com/drteresavasquez?tab=repositories)

<hr>

## The Template
NOTE: you will have to update this to meet your needs. DO NOT copy and paste this template without making updates to it.

```
# This is the name of my Project  [![Netlify Status](https://api.netlify.com/api/v1/badges/4ab7e730-7ed3-4cfd-a988-66195e79a991/deploy-status)](https://app.netlify.com/sites/drt-sortinghat/deploys)
<!-- update the netlify badge above with your own badge that you can find at netlify under settings/general#status-badges -->

Here I am putting an overview of what my project is about. It comes below the name of my project so that others can read what it is about and get more details.

[View App](#your-link)

## Get Started <!-- OPTIONAL, but doesn't hurt -->
PLACE CODE SNIPPET HERE

## About the User <!-- This is a scaled down user persona -->
- The ideal user for this application is a teacher
- They have students in their classrooms that they would like to put into random groups and they have a love and passion of Harry Potter
- The problem this app solves for them is it allows them to get their students involved and excited about being in random groups. The students have felt that the groups have not been so random and based on favorites.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- When a new student is added an object should be created and that object should be pushed into an array of students that then prints to the DOM.
- House Colors: The color of the student's card changes depending on which house they were sorted.
- Card Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.

## Video Walkthrough of APP NAME <!-- A loom link is sufficient -->
https://www.loom.com/share/829b90d831ea441ba2db6bea724af210

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](#your-link)
- [Wireframes](#your-link)
- [Project Board](#your-link)

## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
PLACE CODE SNIPPET HERE

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="Your Alt" src="your-link.png">

## Contributors
- [YOUR NAME](https://github.com/your-github-url)
```