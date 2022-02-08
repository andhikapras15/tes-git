let namaBuah1 = 'Apel'
let namaBuah2 = 'Anggur'
let namaBuah3 = 'Jeruk' 

let hargaBuah1 = 10000 
let hargaBuah2 = 20000 
let hargaBuah3 = 30000 

alert (`daftar harga buah : 
1. ${namaBuah1} = ${hargaBuah1}
2. ${namaBuah2} = ${hargaBuah2}
3. ${namaBuah3} = ${hargaBuah3}`) 

let qty1 = (parseInt(prompt(`silahkan masukkan jumlah ${namaBuah1} yang diinginkan`)))
let qty2 = (parseInt(prompt(`silahkan masukkan jumlah ${namaBuah2} yang diinginkan`)))
let qty3 = (parseInt(prompt(`silahkan masukkan jumlah ${namaBuah3} yang diinginkan`))) 

let total = (qty1*hargaBuah1) + (qty2*hargaBuah2) + (qty3*hargaBuah3) 

alert (`total belanjaan 
1. ${namaBuah1} : ${qty1} x ${hargaBuah1} = ${qty1*hargaBuah1}
2. ${namaBuah2} : ${qty2} x ${hargaBuah2} = ${qty2*hargaBuah2}
3. ${namaBuah3} : ${qty3} x ${hargaBuah3} = ${qty3*hargaBuah3}`)