// const coba = (kata)=>{
//     let output=''
//     for (let i = 0; i < kata.length; i++) {
//         for (let j = 0; j < kata.length; j++) { 
//             if (j===0){
//                 output += kata[i].toUpperCase()
//             }else(
//                 output+=kata[i].toLowerCase()
//             )  
//         }
//         if(i<kata.length-1) output+='-'
//     }
//     return output
// } 

// const tesPass = (pass)=>{
//     pass = pass.split('').filter((val)=>{
//         return val !==''
//     }) 
//         let adaHuruf=false
//         let adaAngka=false 
//         let huruf = 'abcdefghijklmnopqrstuvwxyz'
//         let angka = '0123456789' 
//         for (let i = 0; i < pass.length; i++) {
//             if (huruf.includes(pass[i].toLowerCase())) {
//                 adaHuruf = true
//             }else if (angka.includes(pass[i])){
//                 adaAngka = true
//             }
//         } 
//         return adaHuruf && adaAngka ? 'strong' : 'tidak strong'
// } 
// console.log (tesPass('abcd23'))   

const includesinmitate = (kata,char)=>{
    let output = false 
    for (let i = 0; i < kata.length; i++) { 
        if (kata[i] === char){
            output =true
            break
        }
    }
    return output   
}

console.log (includesinmitate('abcd','e'))
console.log (includesinmitate('abcd','a'))