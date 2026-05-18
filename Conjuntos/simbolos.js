const intersecao = (A, B) => {
    
    let C = [];

    A.forEach(elementOfA => {
        B.forEach(elementOfB => {

            if(elementOfA == elementOfB) {
                C.push(elementOfA);
            };

        });
    });

    return C;

}

const uniao = (...conjuntos) => {
    
    let C = [];
    conjuntos.forEach(conjunto => {
        C = C.concat(conjunto);
    })
    
    return [...new Set(C)];

}

const complemento_relativo = (A, B) => {

    B.forEach(elementOfB => {
        A = A.filter(element => element !== elementOfB);
    });

    return A;

}

const subconjunto = (A, B) => {
    
    if(A == B) return true;
    if(A == null || B == null) return false;
    if(A.length !== B.length) return false;
    
    for(let i = 0; i <= A.length; i++) {

        if(A[i] !== B[i]) return false;

    }

    return true;

}

const subconjunto_adequado = (A, B) => {

    A = [...new Set(A)];
    B = [...new Set(B)];

    if(A == B) return false;
    if(A == null || B == null) return false;
    if(A.length == B.length) return false;

    let buff = [];

    B.forEach(elementOfB => {
        A.forEach(elementOfA =>{

            if(elementOfB == elementOfA) {
                buff = buff.concat(elementOfA);
            }

        })
    })

    return subconjunto(buff, A);

}

const nao_subconjunto = (A, B) => {

    if(!subconjunto_adequado(A, B) && !subconjunto(A, B)) {
        return true;
    }

    return false;

}

const superconjunto = (A, B) => {

    return subconjunto(B, A);

}

const superconjunto_adequado = (A, B) => {

    return subconjunto_adequado(B, A);

}

const nao_superconjunto = (A, B) => {

    return nao_subconjunto(B, A);

}

const conjunto_de_forca = (A) => {

    const conjuntoDeForca = [[]];
    
    const reboot = (curr, remain) => {
        
        if(remain.length == 0) {
            if(curr.length > 0) {
                conjuntoDeForca.push(curr);
            }
            return;
        }
        
        reboot([...curr, remain[0]], remain.slice(1));
        reboot(curr, remain.slice(1));

    }

    reboot([], A);
    return conjuntoDeForca;
    
}
