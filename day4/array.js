// // let things = ['buku','pena','pensil',] 
// // // tiap data didalam array dikasih label sesuatu yang disebut index
// // // index pasti dimulai dari 0,1,...dst
// // // tiap value dibatasi dengan koma ['pensil','pena','....']
// // console.log(things)
// // console.log(things.Buah)
// // console.log(thingsharga)
// // console.log(things.stock)
// // // ingin mengganti isi salah satu dari array
// // things.Buah = ['laptop '] 
// // // things[3] = ['penghapus'] untuk menambah index 
// // console.log(things.length) untuk mengetahui jumlah data 

// let things = ['buku','pena','pensil',] 
// // untuk memasukkan data paling ujung  
// things.push('jacket') 
// console.log (things) 
// // untuk menghapus data paling ujung
// things.pop()
// console.log(things) 
// // splice bisa untuk edit, nambahin atau hapus di index mana aja 
// // syntax splice (start index,berapa yang mau dihapus,data yang ingin ditambahkan) 
// // contoh splice untuk menambahkan 
// things.splice(2,0,'kacamata')  
// // contoh splice untuk menghapus 
// things.splice(1,2) 
// // syntax slice ('start index,end index') 
// // splice harus disimpan dalam variabel baru
// let newThings=things.slice(1,3)
// console.log('things :',things)
// console.log('newthings :',newThings) 
// // join mengubah array menjadi string  
// // join menggabungkan array of strings menjadi string 
// // join harus disimpan dalam variabel
// let days = ['sunday','monday','tuesday'] 
// let newDays=days.join(' ')
// console.log(newDays) 
// //concatinating yang baru let three = [...days,...things] 

// // array 2 dimensi 
// let things = [
//     ['red pen', 'blue pen']
//     ['analog clock', 'digi clock']
//     ['futsal shoes', 'badminton shoes'] 
// ] 
// console.log(thingshargaharga)  

// // looping with array 
// let kategori = ['horor','romcom','thriller','drama'] 
// for (let i = 0; i <kategori.length; i++) {
//     output+= `${1+i}, ${kategori}/n;
// }   
 
let categories = ['horror','romcom','action','drama', 'thriller']

let output = 'list category film :\n'

for (let i = 0; i < categories.length; i++) {
    output+=`${i+1}. ${categories[i]}\n` ;
}
console.log(output)