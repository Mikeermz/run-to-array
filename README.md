# Recorrido de Arrays 

Magneto quiere reclutar la mayor cantidad de mutantes para poder luchar contra los X-Mens. 

Te ha contratado a ti para que desarrolles un proyecto que detecte si un humano es mutante basándose en su secuencia de ADN.

Para eso te ha pedido crear un programa con un método o función con la siguiente firma (En
alguno de los siguiente lenguajes: Java / Golang / C-C++ / Javascript (node) / Python / Ruby): 

``boolean isMutant(String[] dna);`` // Ejemplo Java

En donde recibirás como parámetro un array de Strings que representan cada fila de una tabla de (NxN) con la secuencia del ADN.

Las letras de los Strings solo pueden ser: (A,T,C,G), las cuales representa cada base nitrogenada del ADN. 


| A | T | G | C | G | A |
| ------ | ------ | ------ | ------ |  ------ | ------ |
| C | A | G | T | G | C | 
| T | T | A | T | T | T |
| A | G | A | A | G | G |
| G | C | A | T | C | A |
| T | C | A | C | T | G |


| A | T | G | C | G | A |
| ------ | ------ | ------ | ------ |  ------ | ------ |
| C | A | G | T | G | C |
| T | T | A | T | G | T |
| A | G | A | A | G | G |
| C | C | C | C | T | A |
| T | C | A | C | T | G |



Sabrás si un humano es mutante, si encuentras más de una secuencia de cuatro letras iguales, de forma oblicua, horizontal o vertical. 

#### Ejemplo (Caso mutante):

``String[] dna = {"ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"};``

En este caso el llamado a la función isMutant(dna) devuelve "true". 

Desarrolla el algoritmo de la manera más eficiente posible. 

## PASOS PARA PROBAR

Se utiliza una version de node Current 19.3.0.

Luego deben de realizar un `$ npm install`

Esto instalara las dependencias del proyecto **Babel, Jest**

Para correr las pruebas deben utilizar el comando `$ npm test`.