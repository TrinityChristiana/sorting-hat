// Data
const students = [];
const army = [];

const houses = [
  {
    name: "Gryffindor",
    className: "gryffindor-card",
  },
  {
    name: "Hufflepuff",
    className: "hufflepuff-card",
  },
  {
    name: "Ravenclaw",
    className: "ravenclaw-card",
  },
  {
    name: "Slytherin",
    className: "slytherin-card",
  },
  {
    name: "Voldemort's Army",
    className: "voldey-card",
  },
];

// Helper Functions
const printToDOM = (query, newHTML) => {
  document.querySelector(query).innerHTML = newHTML;
};

const createEventListener = (query, callbackFn, action = "click") => {
  document.querySelector(query).addEventListener(action, callbackFn);
};

const getRandomHouse = () =>
  houses[Math.floor(Math.random() * (houses.length - 1))];

const createStudentObj = (studentName) => {
  return {
    studentName,
    house: getRandomHouse(),
    uuid: uuidv4(),
    canExpel: true,
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
        <div class="lead" id="sort-button-container">
            <p>Click the botton below to start sorting students</p>
            <button class="btn btn-primary btn-lg" id="sorting-button" role="button">Start Sorting</button>
        </div>
        <div class="lead" id="student-form"></div>
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
    <div class="card student-card ${
      studentObj.house.className
    }" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${studentObj.studentName}</h5>
            <p class="card-text">${studentObj.house.name}</p>
            ${
              studentObj.canExpel
                ? `<button class="btn ${studentObj.house.className}-button mb-2" id="expel--${studentObj.uuid}">Expel</button>`
                : ""
            }
        </div>
    </div>
`;

const studentCardListHTML = (studentArray) =>
  studentArray.map((student) => studentCardHTML(student)).join("");

const rerenderCards = () => {
  printToDOM("#student-cards", studentCardListHTML(students));
  printToDOM("#student-cards-army", studentCardListHTML(army));
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
  printToDOM("#sort-button-container", "");
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
    const expelledStudent = students.splice(targetStudentIndex, 1);
    army.push(
      Object.assign(...expelledStudent, { canExpel: false, house: houses[4] })
    );
    rerenderCards();
  }
};

const handleToggleColumn = (e) => {
  const targetId = e.target.id;
  const firstYearsSelector = document.querySelector("#first-years-column");
  const firstYearsButtonSelector = document.querySelector(
    "#toggle-first-years"
  );
  const voldeysSelector = document.querySelector("#voldeys-column");
  const voldeysButtonSelector = document.querySelector("#toggle-voldeys-army");

  if (targetId === "toggle-first-years") {
    firstYearsSelector.classList.remove("first-years-column-hidden");
    voldeysSelector.classList.add("voldeys-column-hidden");
    voldeysButtonSelector.classList.remove("active");
    firstYearsButtonSelector.classList.add("active");
  } else if (targetId === "toggle-voldeys-army") {
    voldeysSelector.classList.remove("voldeys-column-hidden");
    firstYearsSelector.classList.add("first-years-column-hidden");
    firstYearsButtonSelector.classList.remove("active");
    voldeysButtonSelector.classList.add("active");
  }
};

// Functions that run initially
const addInitialEventListeners = () => {
  createEventListener("#sorting-button", handleToggleForm);
  createEventListener("#student-cards", handleCardClick);
  createEventListener("#toggle-voldeys-army", handleToggleColumn);
  createEventListener("#toggle-first-years", handleToggleColumn);
};

const printInitialHTML = () => {
  const initialHTML = `
    ${jumbotronHTML()}
    <div class="column-toggler">
        <button id="toggle-first-years" class="column-toggler btn btn-outline-success active">First Years</button>
        <button id="toggle-voldeys-army" class="column-toggler btn btn-outline-success" type="button" >Voldey's Army</button>
    </div>
    <div class="card-containers">
        <div id="first-years-column" class="card-column">
            <h2 class="container-heading">First Years</h2>
            <div class="card-container" id="student-cards"></div>
        </div>
        <div id="voldeys-column" class="card-column voldeys-column-hidden"> 
            <h2 class="container-heading">Voldey's Army</h2>
            <div class="card-container" id="student-cards-army"></div>
        </div>
    </div>
    `;
  printToDOM("#app", initialHTML);
};

const init = () => {
  printInitialHTML();
  addInitialEventListeners();
};

init();
