function checkPal (srting) {
    const len = string.length;
    for (let i=0; i < len / 2; i++) {
        if (string[i] !== string[len -1 -i]) {
        return 'not palindrome';
    }
}
return 'palindrome'
}

const string = prompt ('enter a string: ');
const value = checkPal (string);
console.log (value);
