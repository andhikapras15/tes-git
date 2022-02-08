let caesarChipper = (str) => {
    let code = {
        a: 'c', b:'d', c:'e', d:'f', e:'g', f:'h',
        g: 'i', h:'j', i:'k', j:'l', k:'m', l:'n',
        m: 'o', n:'p', o:'q', p:'r', q:'s', r:'t',
        s: 'u', t:'v', u:'w', v:'x', w:'y', x:'z', 
        y: 'a', z:'b'
    } 
    str = str.toLowerCase();
    let dechiper = ''; 
    for (let i = 0; i < str.length; i++) {
        dechiper += code[str[i]]; 
        
    }
    return dechiper; 
}
// console.log(caesarChipper('sundaysix')) 
// console.log(caesarChipper('dhika')) 

let angka=[1,2,3,2,5,2,7,2] 
angka.sort((a,b)=>{
if(a<b){
    return -1
} 
if(a>b){
    return 1
} return 0
}) 
console.log(angka)