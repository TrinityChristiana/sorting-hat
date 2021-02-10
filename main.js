// Data
const loremIpsum =
  "Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last. Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops. Locomotor trunks owl treats that will be 50 points, Mr. Potter. Witch Weekly, he will rise again and he will come for us, headmaster Erumpent horn. Fenrir Grayback horseless carriages ‘zis is a chance many would die for. Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry. Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer's Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr Potter. Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match. Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed. Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks. Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook NEWT, Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun OWL stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter. Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg. Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not? Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire. Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match. Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last.";

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

const getRandomSaying = () =>
  loremIpsum.split(".")[
    Math.floor(Math.random() * loremIpsum.split(".").length)
  ];

const createStudentObj = (studentName) => {
  return {
    studentName,
    house: getRandomHouse(),
    uuid: uuidv4(),
    canExpel: true,
  };
};

const filterHouse = (studentArray, house) => {
  const filteredStudents = studentArray.filter(
    (student) => student.house.name.toLowerCase() === house
  );
  return [filteredStudents, []];
};

// Components
const jumbotronHTML = () =>
  `<div class="jumbotron " id="jumbotron-container">
        <h1 class="display-4">Welcome to Hoggy Warts</h1>
        <p class="lead">
            ${getRandomSaying() || "Palominos scarlet train black robes,"}
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

const cardContainer = () => {
  const filters = [
    "Original",
    "Alphabetically",
    "House",
    "Gryffindor",
    "Hufflepuff",
    "Ravenclaw",
    "Slytherin",
    "Voldemorts",
  ];
  return `
  <div class="form-group option-buttons-container">
    <label for="option-buttons">Select Order: </label>
    <select class="form-control" id="option-buttons">
    ${filters
      .map(
        (filter) =>
          `<option id="${filter.toLowerCase()}--filter" type="button" value="${filter.toLowerCase()}" class="${filter.toLowerCase()}-filter-button">${filter}</option>`
      )
      .join("")}
  </select> 
  </div>
  </div>
      </div>
      <div class="column-toggler" id="column-toggler-container">
          <button id="toggle-first-years" class="btn btn-secondary active">First Years</button>
          <button id="toggle-voldeys-army" class="btn btn-secondary" type="button" >Voldey's Army</button>
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
};

const studentCardListHTML = (studentArray) =>
  studentArray.map((student) => studentCardHTML(student)).join("");

// Rendering functions
const rerenderCards = (studentsArray = students, armyArray = army) => {
  printToDOM("#student-cards", studentCardListHTML(studentsArray));
  printToDOM("#student-cards-army", studentCardListHTML(armyArray));
};

const renderCardContainers = () => {
  printToDOM("#card-container-div", cardContainer());
  createEventListener("#student-cards", handleCardClick);
  createEventListener("#toggle-voldeys-army", handleToggleColumn);
  createEventListener("#toggle-first-years", handleToggleColumn);
  createEventListener("#option-buttons", handleOptionButtons, "input");
};

// Event Callbacks
const handleSubmitStudentForm = (e) => {
  e.preventDefault();
  const studentInput = document.querySelector("#studentName");
  const studentName = studentInput.value;
  studentInput.value = "";
  students.unshift(createStudentObj(studentName));
  renderCardContainers();
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
    army.unshift(
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

const handleOptionButtons = (e) => {
  const targetValue = e.target.value;
  let newStudents = [...students];
  let newArmy = [...army];

  if (targetValue === "alphabetically") {
    newStudents.sort((a, b) =>
      a.studentName.toLowerCase() > b.studentName.toLowerCase() ? 1 : -1
    );
    newArmy.sort((a, b) =>
      a.studentName.toLowerCase() > b.studentName.toLowerCase() ? 1 : -1
    );
  } else if (targetValue === "house") {
    newStudents.sort((a, b) => {
      return a.house.name.toLowerCase() > b.house.name.toLowerCase()
        ? 1
        : a.house.name.toLowerCase() < b.house.name.toLowerCase()
        ? -1
        : a.studentName.toLowerCase() > b.studentName.toLowerCase()
        ? 1
        : -1;
    });
    newArmy.sort((a, b) =>
      a.studentName.toLowerCase() > b.studentName.toLowerCase() ? 1 : -1
    );
  } else if (targetValue === "voldemorts") {
    [newArmy, newStudents] = filterHouse(army, "voldemort's army");
  } else if (targetValue === "original") {
  } else {
    [newStudents, newArmy] = filterHouse(newStudents, targetValue);
  }
  rerenderCards(newStudents, newArmy);
};

const handleDarkMode = () => {
  const bodySelector = document.querySelector("body");
  const jumbotronSelector = document.querySelector("#jumbotron-container");
  const buttonSelector = document.querySelector("#dark-mode");
  const columnTogglerSelector = document.querySelector(
    "#column-toggler-container"
  );
  const styleStrings = {
    dark: "background-color: #000000; color: #ffffff",
    light: "background-color: #e9ecef; color: #000000",
  };

  if (bodySelector.style.backgroundColor === "rgb(0, 0, 0)") {
    buttonSelector.textContent = "Dark Mode";
    buttonSelector.style = styleStrings.dark;
    bodySelector.style = styleStrings.light;
    jumbotronSelector.style = styleStrings.light;
    if (columnTogglerSelector) columnTogglerSelector.style = styleStrings.light;
  } else {
    buttonSelector.style = styleStrings.light;
    buttonSelector.textContent = "Light Mode";
    bodySelector.style = styleStrings.dark;
    jumbotronSelector.style = styleStrings.dark;
    if (columnTogglerSelector) columnTogglerSelector.style = styleStrings.dark;
  }
};

// Functions that run initially
const addInitialEventListeners = () => {
  createEventListener("#sorting-button", handleToggleForm);
  createEventListener("#dark-mode", handleDarkMode);
};

const printInitialHTML = () => {
  const initialHTML = `
    <button class="btn btn-dark" type="button" id="dark-mode">Dark Mode</button>
    ${jumbotronHTML()}
    <div id="card-container-div">
    </div>
    `;
  printToDOM("#app", initialHTML);
};

const init = () => {
  printInitialHTML();
  addInitialEventListeners();
};

init();
