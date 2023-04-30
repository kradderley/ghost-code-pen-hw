/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/

// GET BY ID
const ghostOne = document.getElementById("first_ghost");
ghostOne.style.fill = "orange";

// GET BY CLASSNAME
const ghostTwo = document.getElementsByClassName("second_wave");
console.log(ghostTwo);

for (let i = 0; i < ghostTwo.length; i++) {
  ghostTwo[i].style.fill = "blue";
}

// const ghostTwo1 = ghostTwo[0].style.fill = 'blue';
// const ghostTwo2 = ghostTwo[1].style.fill = 'blue';

// GET AREA, DRILL DOWN using GET BY TAG NAME
const ghostThree = document.getElementById("area-51");
const ghost3 = ghostThree.getElementsByTagName("svg");

for (let i = 0; i < ghost3.length; i++) {
  ghost3[i].style.fill = "green";
}

// querySelector nth-child
const ghostFour = document.querySelector(
  " body > div > div:nth-child(3) > svg:nth-child(3)"
);
console.log(ghostFour);

ghostFour.style.stroke = "red";
ghostFour.style.strokeWidth = "15px";

// from the last child, select the div immediately above the ghost and make its border '5px dashed'
const ghostFive = ghostFour.parentElement;
ghostFive.style.border = "5px dashed";

// querySelectorAll
const ghostFinal = document.querySelectorAll("#area-50");
console.log(ghostFinal);

for (let i = 0; i < ghostFinal.length; i++) {
  ghostFinal[i].style.fill = "red";
}
