const form = document.getElementById("myForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

const checkPass = (password, confirm) => {
	password.value === confirm.value
		? form.reset()
		: showErrorMessage("รหัสผ่านไม่ตรงกัน", confirm);
};

const checkUsername = (min, max) => {
	min > username.value
		? showErrorMessage("ชื่อผู้ใช้ต้องมากกว่า 6", username)
		: max < username.value.length
		? showErrorMessage("ชื่อผู้ใช้ต้องน้อยกว่า 10", username)
		: form.reset(),
		(username.parentElement.querySelector("small").className = "frmDiv");
};

const showErrorMessage = (message, action) => {
	const formControl = action.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "frmDiv error";
	small.innerText = message;
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkPass(password, confirm);
	checkUsername(6, 10);
	console.log(username.value);
});
