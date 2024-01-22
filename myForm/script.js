const form = document.getElementById("myForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm = document.getElementById("confirm");

const checkPass = (password, confirm) => {
	password.value !== ""
		? password.value === confirm.value
			? (hideErrorMessage(confirm), hideErrorMessage(password))
			: showErrorMessage("รหัสผ่านไม่ตรงกัน", confirm)
		: showErrorMessage("กรุณากรอกรหัสผ่าน", password);
};

const checkUsername = (min, max) => {
	min > username.value.length
		? showErrorMessage("ชื่อผู้ใช้ต้องมากกว่า 6", username)
		: max < username.value.length
		? showErrorMessage("ชื่อผู้ใช้ต้องน้อยกว่า 10", username)
		: min < username.value.length <= max
		? hideErrorMessage(username)
		: "";
};

const checkEmail = (action) => {
	action.action.value !== ""
		? hideErrorMessage(action)
		: showErrorMessage("", action);
};

const showErrorMessage = (message, action) => {
	const formControl = action.parentElement;
	const small = formControl.querySelector("small");
	formControl.className = "frmDiv error";
	small.innerText = message;
};
const hideErrorMessage = (action) => {
	const formControl = action.parentElement;
	formControl.className = "frmDiv pass";
};

form.addEventListener("submit", (e) => {
	e.preventDefault();
	checkPass(password, confirm);
	checkUsername(6, 10);
	checkEmail(email);
});
