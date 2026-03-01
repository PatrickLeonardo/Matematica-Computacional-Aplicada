var A = [1, 2, 3, 7];
var B = [4, 5, 6, 7];

// C = A ⋃ B

var C = A.concat(B);
console.log(C);

// D = A ⋂ B

var D = [];

A.forEach(elementOfA => {
    B.forEach(elementOfB => {

        if(elementOfA == elementOfB) {
            D.push(elementOfA);
        };

    });
});

console.log(D);

// E = A \ B

var A = [1, 2, 3, 4];
var B = [3, 4];

callback(A, B);

B.forEach(elementOfB => {
    A = A.filter(element => element !== elementOfB);
});

var E = A;

console.log(`A / B = [${E}] \n`);

function callback(...sets) {
    var i = 0;
    sets.forEach(set => {
        console.log(`Set = [${set}]`)
        i++;
    });

    console.log();

};
