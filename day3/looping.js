// while
// ini infinite looping
// while (true){
//     console.log('line 4')
// } 

// let angka = 1
// while (angka<=5){
//     angka++ 
//     console.log('count- '+angka)
// // } 
// let angka = 1
// // // do while 
// do {
//     console.log(angka) 
//     angka++
// } while (angka<5) ;
// console.log('line 23') 

// // for 
// for (let numb = 1; numb <= 5; numb++) {
//     console.log('count- '+numb)
    
// }

//bintang vertikal 
// console.log('*\n*\n*\n*\n*\n')  

// let output = ''
// for (let index = 0; index<5; index++) {
//     console.log('*\n')
    
// }

// let output = ''
// for (let index = 0; index<5; index++) {
//     console.log('*****\n')
    
// } 
//  persegi
// let output = ''
// for (let i = 0; i<5; i++) {
//     for (let j = 0; j <5; j++) {
//         output+='*'   
//     }
//     output+='\n'
// } console.log(output) 
// segitiga alas bawah
// let output = ''
// for (let i = 0; i<5; i++) {
//     for (let j = 0; j <=i; j++) { 
//         output+='*'   
//     }
//     output+='\n'
// } console.log(output) 
//  segitiga alas atas
// let tinggi = 5
// let output = ''
// for (let i = 0; i<tinggi; i++) {
//     for (let j = i; j <tinggi; j++) { 
//         output+='*'   
//     }
//     if (i<tinggi -1){
//         output+='\n'
//     }
// } console.log(output) 
// segitiga rata kanan 
// let tinggi = 5
// let output = ''
// for (let i = 0; i<tinggi; i++) {
//     for (let j = i; j <tinggi-1; j++) { 
//         output+=' '   
//     }for (let k = 0; k<=1; k++) { 
//         output+=' ' 

//     if (i<tinggi -1){
//         output+='\n'
//     }
// } console.log(output)} 

let tinggi = 10
let output=''

for(let i = 0;i<tinggi;i++){
    // segitiga alas atas
    for(let j= i;j<tinggi-1;j++){
        output+='   '
    }
    // segitiga alas bawah
    for (let k = 0; k <= i; k++) {
        output+=' * '
    }
    for(let l= 0;l<i;l++){
        output+=' * ' 
    }
    if(i <tinggi -1){
        output+='\n'
    // }for (let i = 0; i<tinggi-1; i++) {
    //     output+=' * '
        
    }
}

console.log(output)