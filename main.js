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

// Helper Functions
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

// Components
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

const studentCardHTML = (studentObj) => `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${studentObj.studentName}</h5>
            <p class="card-text">${studentObj.house.name}</p>
            <button class="btn btn-primary mb-2" id="expel--${studentObj.uuid}">Expel</button>
        </div>
    </div>
`;

const studentCardListHTML = () =>
  students.map((student) => studentCardHTML(student)).join("");

const rerenderCards = () => {
  printToDOM("#student-cards", studentCardListHTML());
};

// Event Callbacks
const handleSubmitStudentForm = (e) => {
  e.preventDefault();
  const studentInput = document.querySelector("#studentName");
  const studentName = studentInput.value;
  studentInput.value = "";
  students.push(createStudentObj(studentName));
  rerenderCards();
};

const handleToggleForm = () => {
  printToDOM("#student-form", formHTML());
  createEventListener(
    "#submit-sort-student",
    handleSubmitStudentForm,
    "submit"
  );
};

const handleCardClick = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;
  if (targetType === "submit" && targetId.startsWith("expel--")) {
    const itemId = targetId.split("--")[1];
    const targetStudentIndex = students.findIndex(
      (student) => student.uuid === itemId
    );
    students.splice(targetStudentIndex, 1);
    rerenderCards();
  }
};

// Functions that run initially
const addInitialEventListeners = () => {
  createEventListener("#sorting-button", handleToggleForm);
  createEventListener("#student-cards", handleCardClick);
};

const printInitialHTML = () => {
  const initialHTML = `
    ${jumbotronHTML()}
    <div id="student-form"></div>
    <div id="student-cards"></div>
    `;
  printToDOM("#app", initialHTML);
};

const init = () => {
  printInitialHTML();
  addInitialEventListeners();
};

init();
