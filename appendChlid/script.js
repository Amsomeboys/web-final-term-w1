const container = document.getElementById("container");
const table = document.getElementById("myTable");
const button = document.createElement("button");

button.textContent = "Click Me";
container.appendChild(button);

button.id = "myButton";

button.addEventListener("click", (e) => {
	e.preventDefault();

	const names = document.getElementById("name");
	const age = document.getElementById("age");

	const myRow = table.insertRow();
	const cell1 = myRow.insertCell(0);
	const cell2 = myRow.insertCell(1);
	cell1.textContent = names.value;
	cell2.textContent = age.value;

	names.value = "";
	age.value = "";
});
