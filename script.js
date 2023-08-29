
function palindromo() {
	const inputValue = document.getElementById("isPalindromo").value
	const inputNormalize = inputValue.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[ ,]/g, "");
	const inputReverse = inputNormalize.split("").reverse().join("");
	let result;
	if (inputNormalize === inputReverse) {
		result = "✔️ Si, es un palíndromo"
	} else {
		result = "❌ No, no es un palíndromo"
	}
	document.getElementById("displayResult").innerText = result;
}


document.addEventListener("keyup", function (event) {
	if (event.code === 'Enter') {
		palindromo();
	}
});

