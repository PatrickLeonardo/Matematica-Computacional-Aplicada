function determinant(m) {

    if(m.length == 1) return m[0][0];    
    if(m.length == 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

    const n_minor = (m, col) => {
        
        const result = m.map(row => row.filter((_, idx) => idx !== col))
        result.splice(0, 1);
        return result
        
    };
    
    const majores = []
    for(let idx = 0; idx < m.length; idx++) {

        const x_minor = n_minor(m, idx);
        const X = m[0][idx] * determinant(x_minor);
        majores.push(X);

    }
    
    return majores.reduce((acc, val, idx) => {
        return acc + (idx % 2 == 0 ? val : -val);
    }, 0);
    
}

const M = [
  [2,  1, 3, 4],
  [0, -1, 2, 1],
  [5,  2, 0, 3],
  [1,  4, 2, 2]
];

console.log(determinant(M));
