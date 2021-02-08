// Data
const students = [];

const houses = [
  {
    name: "Gryffindor",
    extra: {
      founder: "Godric Gryffindor",
      colors: ["scarlet", "gold"],
    },
  },
  {
    name: "Hufflepuff",
    extra: {
      founder: "Helga Hufflepuff",
      colors: ["yellow", "black"],
    },
  },
  {
    name: "Ravenclaw",
    extra: {
      fullName: "Rowena Ravenclaw",
      colors: ["blue", "bronze"],
    },
  },
  {
    name: "Slytherin",
    extra: {
      fullName: "Salazar Slytherin",
      colors: ["green", "silver"],
    },
  },
];

// Global Functions
const printToDOM = (query, newHTML) => {
  document.querySelector(query).innerHTML = newHTML;
};

const createEventListener = (query, callbackFn, action = "click") => {
  document.querySelector(query).addEventListener(action, callbackFn);
};

const getRandomHouse = () => houses[Math.floor(Math.random() * houses.length)];

const createStudentObj = (studentName) => {
  return {
    studentName,
    house: getRandomHouse(),
    uuid: uuidv4(),
  };
};

// HTML Functions
const jumbotronHTML = () =>
  `<div class="jumbotron">
        <h1 class="display-4">Welcome to Hoggy Warts</h1>
        <p class="lead">
            Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.
        </p>
        <hr class="my-4">
        <p>Click the botton below to start sorting students</p>
        <p class="lead">
            <button class="btn btn-primary btn-lg" id="sorting-button" role="button">Start Sorting</button>
        </p>
    </div>`;

const formHTML = () => `
<form id="submit-sort-student">
    <div class="form-group">
        <label for="studentName">Student Name</label>
        <input type="text" class="form-control" id="studentName" required>
    </div>
    <button type="submit" class="btn btn-primary mb-2" >Sort Student</button>
</form>
`;

// Event Callbacks
const handleSubmitStudentForm = (e) => {
  e.preventDefault();
  const studentName = document.querySelector("#studentName").value;
  const studentObj = createStudentObj(studentName);
  students.push(studentObj);
};

const handleToggleForm = (e) => {
  printToDOM("#student-form", formHTML());
  createEventListener(
    "#submit-sort-student",
    handleSubmitStudentForm,
    "submit"
  );
};

// Functions that run initially
const addInitialEventListeners = () => {
  createEventListener("#sorting-button", handleToggleForm);
};

const printInitialHTML = () => {
  const initialHTML = `
    ${jumbotronHTML()}
    <div id="student-form"></div>
    `;
  printToDOM("#app", initialHTML);
};

const init = () => {
  printInitialHTML();
  addInitialEventListeners();
};

init();
