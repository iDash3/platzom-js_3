'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;
	//Si es un palidromo, ninguna reagla anterior cambia
	//sólo se devuelve con CamelCase.
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length = str.length;
		var translation = '';
		var capitalize = true;
		for (var i = 0; i < length; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return translation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	//Si termina con "ar", se le quitan esas letras.
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}
	//Si inicia con "z", se le agrega "pe";
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}
	//Si la palabra traducida tiene diez o más letras se debe serparar y unir con un guion.
	let length = translation.length;
	if (length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(Math.round(length / 2));
		translation = firstHalf + ' - ' + secondHalf;
	}
	return translation;
}