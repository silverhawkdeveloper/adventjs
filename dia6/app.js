const cubeOfOne = createCube(1);
const cubeOfTwo = createCube(2);
const cubeOfTree = createCube(3);


function createCube(size) {
    const pieza1 = "/";
    const pieza2 = "\\";
    const pieza3 = "_";
    
    console.log(pieza1+pieza2+pieza3+pieza2);
    console.log(pieza2+pieza1+pieza3+pieza1);

    console.log(' '+pieza1+pieza2+pieza3+pieza2+pieza3+pieza2);
    console.log(pieza1+pieza2+pieza1+pieza2+pieza3+pieza2+pieza3+pieza2);
    console.log(pieza2+pieza1+pieza2+pieza1+pieza3+pieza1+pieza3+pieza1);
    console.log(' '+pieza2+pieza1+pieza3+pieza1+pieza3+pieza1);
    return ''
}

/**
 * /\_\
 * \/_/
 */

/**
 *  /\_\_\ 1
 * /\/\_\_\
 * \/\/_/_/
 *  \/_/_/ 1
 */

/**
 *   /\_\_\_\  2
 *  /\/\_\_\_\ 1
 * /\/\/\_\_\_\
 * \/\/\/_/_/_/
 *  \/\/_/_/_/ 1
 *   \/_/_/_/  2
 */