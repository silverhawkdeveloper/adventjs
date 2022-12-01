const gifts = ['book', 'game', 'socks']
const wrapped = wrapping(gifts)
console.log(wrapped)
/* [
     "******\n*book*\n******",
     "******\n*game*\n******",
     "*******\n*socks*\n*******"
   ] */

/**
 * * Gift wrapping function.
 * @param {Array} array 
 * @returns Returns an array with the wrapped gifts.
 */
function wrapping(array) {
    let paper = '*';
    let gifts = new Array();
    for (let i = 0; i < array.length; i++) {
        const gift = array[i];
        let paperUpDownLong = gift.length + 2;
        let wrappedObject = paper.repeat(paperUpDownLong) + '\n' + paper + gift + paper + '\n' + paper.repeat(paperUpDownLong);
        gifts.push(wrappedObject);
    }
    return gifts;
}