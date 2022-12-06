// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

/*
Para probar
getMaxGifts([12, 3, 11, 5, 7], 20, 3) // 20
getMaxGifts([50], 15, 1) // 0
getMaxGifts([50], 100, 1) // 50
getMaxGifts([50, 70], 100, 1) // 70
getMaxGifts([50, 70, 30], 100, 2) // 100
getMaxGifts([50, 70, 30], 100, 3) // 100
getMaxGifts([50, 70, 30], 100, 4) // 100
*/
const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;
let prueba = getMaxGifts(giftsCities, maxGifts, maxCities); // 20

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let arrayRegalos = [0];
    if (giftsCities.length >= 1 && maxGifts >= 1 && maxCities >= 1) {
        let opcion1 = lectura(0);
        let opcion2 = lectura(1);
        let opcion3 = lectura(2);

        arrayRegalos.push(opcion1, opcion2, opcion3);
        arrayRegalos.sort((a, b) => b - a);
    }

    function lectura(orden) {
        let regalos = 0;
        let contador = 0;
        orden == 1 ? giftsCities.sort((a, b) => a - b) :
            orden == 2 ? giftsCities.sort((a, b) => b - a) : giftsCities;
        giftsCities.forEach(function (element) {
            if (regalos + element <= maxGifts && contador <= maxCities) {
                contador++;
                regalos += element;
            }
        });
        return regalos;
    }

    return arrayRegalos[0];
}

/*
for (let i = 0; i < giftsCities.length; i++) {
    const element = giftsCities[i];
    if (regalos + element <= 20) {
        regalos += element
    }
}
*/

/*
giftsCities.forEach(function (element) {
    let contador = 0;
    if (opcion1 + element <= maxGifts && contador <= maxCities) {
        contador++;
        opcion1 += element;
    }
});

giftsCities.sort((a, b) => a - b);
giftsCities.forEach(function (element) {
    let contador = 0;
    if (opcion2 + element <= maxGifts && contador <= maxCities) {
        contador++;
        opcion2 += element;
    }
});

giftsCities.sort((a, b) => b - a);
giftsCities.forEach(function (element) {
    let contador = 0;
    if (opcion3 + element <= maxGifts && contador <= maxCities) {
        contador++;
        opcion3 += element;
    }
});
*/