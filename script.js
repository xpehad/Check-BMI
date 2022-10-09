let button = document.getElementById("btn");
let results = document.getElementById("results");

button.addEventListener("click", () => {
	const weight = parseInt(document.getElementById("weight").value);
	const height = parseInt(document.getElementById("height").value);

	const bmi = weight / (height / 100) ** 2;
	let BMICat = "";

	if (bmi < 18.5) {
		BMICat = "Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		BMICat = "Normal Weight";
	} else if (bmi >= 25 && bmi <= 29.9) {
		BMICat = "Overweight";
	} else {
		BMICat = "Obesity";
	}
	results.innerHTML = `<p style="color: black">Your BMI is ${bmi.toFixed(1)} which means You are <strong>${BMICat}</strong></p>`;
});
