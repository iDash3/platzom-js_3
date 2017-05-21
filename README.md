# Platzom

Platzom es un idioma inventado como proyecto para el curso de JavaScript en Platzi.
[PLatzi](https://platzi.com)

## Descripcion del idioma:
-Si es un palidromo, ninguna reagla anterior cambia
sólo se devuelve con CamelCase.
-Si termina con "ar", se le quitan esas letras.
-Si inicia con "z", se le agrega "pe";
-Si la palabra traducida tiene diez o más letras se debe serparar y unir con un guion.

## Instalación
```
npm install platzom
```

## Uso
```
import platzom from 'platzom'

console.log(platzom("Programar")); // Program
console.log(platzom("Zorro")); // Zorrope
console.log(platzom("Zarpar")); // Zarppe
console.log(platzom("abecedario")); // abece-dario
console.log(platzom("sometemos")); //SoMeTeMos
```

## Crédito
- [IDash3](https://github.com/iDash3

## Licencia
[MIT](https://opensource.org/licenses/MIT)