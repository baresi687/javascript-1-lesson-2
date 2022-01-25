// We code it together

// 1. Select heading h2

const selectElement = document.querySelector("h2");
console.log(selectElement);

// 2. Select element with class .heading2

const selectElementByClass = document.querySelector(".heading2");
console.log(selectElementByClass);

// 3. Select element with id #list using querySelector

const selectElementById = document.querySelector("#list");
console.dir(selectElementById);

// 4. Select element with id #list using getElementById

const selectElementByIdSelector = document.getElementById("list");
console.log(selectElementByIdSelector);

// 5. Select single li

const selectSingleElement = document.querySelector("li");
console.log(selectSingleElement);

// 6.
//  a. Select Multiple li's
//  b. Loop on the list items

const selectMultipleElements = document.querySelectorAll("li");
console.log(selectMultipleElements);

let html = "<ul> \n";
for (let i = 0; i < selectMultipleElements.length; i++) {
  console.log(selectMultipleElements[i].innerText); // innerText
  html += selectMultipleElements[i] + "\n";
}
html += "</ul>";
console.log(html);

// 7.
// a. select h1 element

const heading1 = document.querySelector("h1");
console.dir(heading1);

// b. Change the color of that h1 to be purple

heading1.style.color = "red";

// c. Change the border to be 1px solid green

heading1.style.border = "1px solid green";

// d. Change background colour to be light gray

heading1.style.backgroundColor = "lightgray";

// e. Change the padding to be 1em ( remember that 1em is the base in px you put on the body )

heading1.style.padding = "1em";

// 1. i want to select a div element

const myDiv = document.querySelector("div");

// 2. see if it has any class name

console.dir(myDiv);

// 3. add a class to this div element

myDiv.classList.add("container");

// 4. see if it has a class name now

console.log(myDiv.classList);

// 5. add another class to the div

myDiv.classList.add("second-class");
console.dir(myDiv);

// so in total i have two class names on the div

// 1. select the h1 and change the innerText

const headChange = document.querySelector("h1");
headChange.innerText = "Goodbye";

// 2.loop through al the li element and change the innerText value to be changed

const allTheListItems = document.querySelectorAll("li");
for (let i = 0; i < allTheListItems.length; i++) {
  allTheListItems[i].innerText += " Changed";
}

// 3.change the innerHTML of the h1 to be updated using innerHTML

const heading3 = document.querySelector("h1");
heading3.innerHTML = "Hi";

// 4. add some html to the div >> add <p><b>Bold text</b> not bold text</p>

const myDiv2 = document.querySelector("div");
myDiv2.innerHTML = `<p>
<b>Bold text</b>
not bold text
</p>`;

// 5. select the ul

const selectUl = document.querySelector("ul");

//  a. get the existing HTML inside the ul element and assign it to a variable

const innerUl = selectUl.innerHTML;
console.log(innerUl);

//  a. create the new li HTML

const newUl = `<li>New fish</li>
<li>New Ostrich</li>`;

//  b. set the uls new HTML to the existing HTML plus the new HTML

selectUl.innerHTML += newUl;
