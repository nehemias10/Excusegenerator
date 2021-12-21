/* eslint-disable */
import "bootstrap";
import "./style.css";

//the Dom
window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();

  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["The", "My"];
  let subject = [
    " boyfriend ",
    " boss ",
    " brother ",
    " girlfriend ",
    " president ",
    " cat "
  ];
  let possetion = [
    " a bag ",
    " the shoes ",
    " a car ",
    " a cellphone ",
    " a notebook "
  ];
  let action = [" got  ", " stole ", " broke ", " forgot ", "crash"];
  let where = [
    "at the Mall",
    "in my house",
    "at the stadium",
    "at the church",
    "at my job"
  ];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronounIndex] +
    "" +
    subject[subjectIndex] +
    "" +
    action[actionIndex] +
    "" +
    possetion[possetionIndex] +
    "" +
    where[whereIndex]
  );
};
