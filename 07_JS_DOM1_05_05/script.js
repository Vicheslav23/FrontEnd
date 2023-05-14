console.log("Hello world!");
console.log(5 + 4);
console.log(document.body);

// document.body.innerHTML = '<h1>Hello world</h1>'; - zamena nazvaniy v tege body
// var
// let;
// const a = 10;

const div1 = document.getElementById("div1");
console.log(div1);
div1.style.border = "1px solid black";

const a = document.querySelector("#div1");
console.log(a);

const pDiv1 = document.querySelectorAll("#div1 > p");
console.log(pDiv1.length);

for (let index = 0; index < pDiv1.length; index++) {
  pDiv1[index].innerHTML = `<span>new text ${index + 1}</span>`;
}

const children = div1.children;
console.log(children.length);

for (let index = 0; index < children.length; index++) {
  children[index].style.color = "red";
}

const newP = document.createElement('p');
console.log(newP);

const newPText = document.createTextNode('This text was created by ');
newP.appendChild(newPText);

div1.appendChild(newP);
// div1.insertBefore(newP, div1.firstElementChild); - perevodit text(element) na pervyu strochky
// div1.insertBefore(newP, children[1]); -

const newP2 = document.createElement('p');
const newP2Text = document.createTextNode(' This is new p2 text');
newP2.appendChild(newP2Text);
div1.replaceChild(newP2, div1.firstElementChild);
// div1.removeChild(div1.firstElementChild);

