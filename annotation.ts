//  in order to add a Typescript file you need to add and install TS
//  npm install typescript --save-dev
//  in order to compile the TS file you need to do the following:
// npx tsc <filename>


// Annotation are added to a js file to add 
function addShipping(price: number, shipping: number): number {
    return price + shipping;
}

addShipping(51,3);