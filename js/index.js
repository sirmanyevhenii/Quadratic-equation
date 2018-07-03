const a = parseFloat(prompt('Enter number a'));
const b = parseFloat(prompt('Enter number b'));
const c = parseFloat(prompt('Enter number c'));
const result = solveQuadEquation(a, b, c);
alert(result);

function solveQuadEquation(a, b, c) {
    const discr = b**2 - 4 * a * c;
    let x1, x2;
    if(discr > 0) {
        x1 = ((-b) + Math.sqrt(discr)) / (2 * a);
        x2 = ((-b) - Math.sqrt(discr)) / (2 * a);
        return 'Discriminant = ' + discr + '. Root x1 = ' + x1 + '. Root x2 = ' + x2;
    } else if(discr === 0) {
        x1 = -(b / (2 * a));
        return 'Discriminant is ' + discr + '. Roots x1 = x2 = ' + x1;
    }   
    return 'Discriminant is ' + discr + '. No Roots';
}