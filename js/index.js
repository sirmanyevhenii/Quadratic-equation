const a = parseInt(prompt('Enter number a'));
const b = parseInt(prompt('Enter number b'));
const c = parseInt(prompt('Enter number c'));
const discr = (b * b) - (4 * a * c);
let x1;
let x2;

if (discr < 0) {
    alert('Discriminant is ' + discr + '. No Roots');
} else if(discr === 0) {
    discrEqualZero();
    alert('Discriminant is ' + discr + '. Roots x1 = x2 = ' + x1);
} else if(discr > 0) {
    discrOverZero();
    alert('Discriminant is ' + discr + '. Root x1 = ' + x1 + '. Root x2 = ' + x2);
}

function discrEqualZero() {
    return x1 = -(b / (2 * a));
}

function discrOverZero() {
    x1 = ((-b) + Math.sqrt(discr)) / (2 * a);
    x2 = ((-b) - Math.sqrt(discr)) / (2 * a);
    return x1, x2;
}