const container = document.getElementById("container");
const img = document.createElement("img");
const fruitlist = document.getElementById("fruitlist");

img.src = "dragon.png";
img.alt = "Toothless Dragon";

container.appendChild(img);

const fruits = ["Apple", "Banana", "Mango", "Strawberry", "Orange"];

fruits.forEach((e) => {
	const li = document.createElement("li");
	li.textContent = e;
	fruitlist.appendChild(li);
});
