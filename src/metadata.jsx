import avatarUrl from "./assets/avatar.png";
import hcmutLogo from "./assets/logos/hcmut.png";
import nashTechLogo from "./assets/logos/nashtech.svg";
import fsoftLogo from "./assets/logos/fsoft.svg";

/**
 * @param {string} username
 * @returns {import("./App").ContactItem}
 */
function getLinkedinContact(username) {
  return {
    text: username,
    url: `https://www.linkedin.com/in/${username}`,
  };
}

/**
 * @param {string} username
 * @returns {import("./App").ContactItem}
 */
function getGithubContact(username) {
  return {
    text: username,
    url: `https://github.com/${username}`,
  };
}

/** @type {import("./App").UserData} */
export const user = {
  firstName: "Binh",
  middleName: "Duc",
  lastName: "Tran",
  phone: {
    text: "+84 8 32 30 61 05",
    url: "tel:+84832306105",
  },
  email: {
    text: "binhtran432k@gmail.com",
    url: "mailto:binhtran432k@gmail.com",
  },
  github: getGithubContact("binhtran432k"),
  linkedin: getLinkedinContact("binhtran432k"),
  website: null,
  description:
    "Fullstack Developer looking for a full time job starting from now",
  avatar: {
    url: avatarUrl,
    position: "0 0",
  },
};

/**
 * @type {import("./App").TimelineItem[]}
 */
export const education = [
  {
    logo: hcmutLogo,
    link: null,
    title: "Computer Science",
    subtitle: "Ho Chi Minh City University of Technology",
    time: "2018 - Present",
    location: "Ho Chi Minh, Vietnam",
    items: ["Thesis: Building a Language Server Protocol", "GPA: 7.3 / 10"],
  },
];

/**
 * @type {import("./App").TimelineItem[]}
 */
export const experiences = [
  {
    logo: nashTechLogo,
    link: null,
    title: "The Rookies (Automation Testing)",
    subtitle: "NashTech",
    time: "Oct 2022 - Dec 2022",
    location: "Ho Chi Minh, Vietnam",
    items: [
      "Trained and participated in real projects involving software testing techniques such as Agile Testing and API Testing. Also trained to use frameworks such as Cypress and Selenium to flexibly serve each different project.",
    ],
  },
  {
    logo: fsoftLogo,
    link: null,
    title: "Java Web Developer (Intern)",
    subtitle: "FPT Software",
    time: "Jun 2021 - Sep 2021",
    location: "Ho Chi Minh, Vietnam",
    items: [
      "Trained how to build a basic website using CSS, HTML, and JavaScript, and how to use Java frameworks like Spring Boot to build a backend system. Additionally, participated in a simulation project to gain a more intuitive understanding of web programming work.",
    ],
  },
];

/**
 * @type {import("./App").TimelineItem[]}
 */
export const projects = [
  {
    logo: null,
    link: "https://github.com/binhtran432k/dracula.nvim",
    title: "Dracula.nvim",
    subtitle: "Personal",
    time: "2023",
    location: "Ho Chi Minh, Vietnam",
    items: [
      "A Dracula theme for Neovim, written in Lua, that provides a dark and stylish color scheme for the text editor, making it easier to focus on your work and reduce eye strain.",
    ],
  },
  {
    logo: null,
    link: "https://github.com/binhtran432k/plantuml-previewer",
    title: "PlantUML previewer",
    subtitle: "Personal",
    time: "2022",
    location: "Ho Chi Minh, Vietnam",
    items: [
      "A PlantUML previewer written in Java that supports hot reloading, allowing you to see changes to your UML diagrams reflected in the previewer immediately, without having to restart the application.",
      "I built this tool for my personal use case of drawing UML diagrams for other projects. It uses PlantUML under the hood and Java Swing for the UI. It can work without PlantUML installed because it is embedded.",
    ],
  },
  {
    logo: null,
    link: "https://github.com/BambooEngine/ibus-bamboo",
    title: "IBus Bamboo",
    subtitle: "Open Source Software",
    time: "2021",
    location: "Ho Chi Minh, Vietnam",
    items: [
      "Vietnamese input method environment written in Go that uses the IBus framework. It is a fast and efficient way to input Vietnamese text in any Linux application.",
      "I contributed icons for English and Vietnamese input modes, as well as a Unicode completion helper that suggests Unicode characters as you type.",
    ],
  },
];

/** @type {string[]} */
export const publications = [];

/** @type {import("./App").CertificateItem[]} */
export const certificates = [
  {
    name: "JavaScript Algorithms and Data Structures",
    year: 2023,
    host: "freeCodeCamp",
    url: "https://freecodecamp.org/certification/binhtran432k/javascript-algorithms-and-data-structures",
  },
  {
    name: "SQL (Advanced)",
    year: 2022,
    host: "HackerRank",
    url: "https://www.hackerrank.com/certificates/245f7e25aa3c",
  },
  {
    name: "SQL (Intermediate)",
    year: 2022,
    host: "HackerRank",
    url: "https://www.hackerrank.com/certificates/275869878d38",
  },
  {
    name: "SQL (Basic)",
    year: 2022,
    host: "HackerRank",
    url: "https://www.hackerrank.com/certificates/606dcf30aed7",
  },
  {
    name: "Responsive Web Design",
    year: 2021,
    host: "freeCodeCamp",
    url: "https://freecodecamp.org/certification/binhtran432k/responsive-web-design",
  },
  {
    name: "Advanced SQL for Developer",
    year: 2021,
    host: "CodeLearn.io",
    url: "https://codelearn.io/certification/ndhimgu1",
  },
  {
    name: "Basic SQL for Developer",
    year: 2021,
    host: "CodeLearn.io",
    url: "https://codelearn.io/certification/n2yzytg4",
  },
  {
    name: "Responsive Web Design course",
    year: 2021,
    host: "Sololearn",
    url: "https://www.sololearn.com/Certificate/1162-22740359/jpg",
  },
  {
    name: "Javascript",
    year: 2021,
    host: "Sololearn",
    url: "https://www.sololearn.com/certificates/course/en/22740359/1024/landscape/png",
  },
  {
    name: "CSS course",
    year: 2021,
    host: "Sololearn",
    url: "https://www.sololearn.com/Certificate/1023-22740359/jpg",
  },
  {
    name: "HTML course",
    year: 2021,
    host: "Sololearn",
    url: "https://www.sololearn.com/Certificate/1014-22740359/jpg",
  },
  {
    name: "Java SE Programming Essentials",
    year: 2021,
    host: "CodeLearn.io",
    url: "https://codelearn.io/certification/n2i0ywzi",
  },
  {
    name: "Java Basics - FPT Software Academy",
    year: 2021,
    host: "CodeLearn.io",
    url: "https://codelearn.io/certification/yzljmjm3",
  },
  {
    name: "SQL Essentials",
    year: 2021,
    host: "CodeLearn.io",
    url: "https://codelearn.io/certification/yzu3yjax",
  },
  {
    name: "Introduction to SQL",
    year: 2021,
    host: "CodeLearn.io",
    url: "https://codelearn.io/certification/ytawzdy1",
  },
  {
    name: "Java Fundamentals",
    year: 2021,
    host: "CodeLearn.io",
    url: "https://codelearn.io/certification/njeyyzhi",
  },
  {
    name: "Object Oriented-Programming in Java",
    year: 2021,
    host: "CodeLearn.io",
    url: "https://codelearn.io/certification/yme2njcw",
  },
];

/** @type {import("./App").SkillItem[]} */
export const skills = [
  {
    name: "Languages",
    subskills: ["English", "Vietnamese"],
  },
  {
    name: "Tech Stack",
    subskills: [
      "Javascript",
      "Java",
      "Lua",
      "Haskell",
      "C#",
      "C",
      "C++",
      "NodeJs",
      "Linux",
      "NixOS",
    ],
  },
  {
    name: "Personal Interests",
    subskills: ["Reading", "Coding", "Handmade"],
  },
];
