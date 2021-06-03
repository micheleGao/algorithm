function largestNumber(a){
    console.log(parseInt('9'.repeat(`${a}`)));   
};

largestNumber(8);

function largestNegative(a) {
    console.log(('.'+'9'.repeat(parseFloat(Math.abs(`${a}`)))));
}
largestNegative(-300);