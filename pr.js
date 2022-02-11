let data = [
    {Category: 'Fast Food', nama: 'noodle', price: 3500, stock: 9},
    {Category: 'Electronic', nama: 'Headphone', price: 4300000, stock: 8},
    {Category: 'cloth', nama: 'Hoodie', price: 300000, stock: 7},
    {Category: 'Fruit', nama: 'Apple', price: 10000, stock: 8},
]  

let Category= ['Fast Food','Electronic','cloth','Fruit']

const initialRender = ()=>{
    let output1 = `<option value="">All</option>` 
    let output2 = `<option value="" hidden selected>pilih Category</option>` 

    Category.forEach((val)=>{
        output1+= `<option value="${val}">${val}</option>` 
        output2+= `<option value="${val}">${val}</option>`
    }) 

    document.getElementById('categoryFilter').innerHTML = output1
    document.getElementById('inputCategory').innerHTML = output2
} 

const renderData = (arr)=>{
    let el = document.getElementById('data')
    let output = arr.map((val,index)=>{
        return `
        <tr>
            <td>${index+1}</td>
            <td>${val.Category}</td>
            <td>${val.nama}</td>
            <td>${val.price}</td> 
            <td>${val.stock}</td>
        </tr>
        ` 
    }) 
    el.innerHTML = output.join('')
} 

initialRender()
renderData(data)  

const inputData = ()=>{ 
    let Nama = document.getElementById('inputNama').value
    let Price = document.getElementById('inputHarga').value
    let Stock = document.getElementById('inputStock').value 
    let category = document.getElementById('inputCategory').value

    data.push({nama:Nama,price:Price,stock:Stock,Category:category}) 
    
    renderData(data)
 
    document.getElementById('inputNama').value = '' 
    document.getElementById('inputHarga').value =''
    document.getElementById('inputStock').value ='' 
    document.getElementById('inputCategory').value =''
}  
renderData(data)

const filterByNama = ()=>{ 
    let namaFilter = document.getElementById('namaFilter').value
    if (!namaFilter){
        renderData(data)
    }else {
        let newFilterData= data.filter((val)=>{
            return val.nama.includes(namaFilter)
        }) 
        renderData(newFilterData) 
    }
} 

const filterByharga = ()=>{
    let priceMin = document.getElementById('hargafilterMin').value
    let priceMax = document.getElementById('hargafilterMax').value 

    let newFilterData = data.filter((val)=>{
        let kondisiMin = !priceMin ? true : val.price >= priceMin
        let kondisiMax = !priceMax && priceMax == '' ? true : val.price<=priceMax

        return kondisiMin && kondisiMax
    }) 
    renderData(newFilterData)
} 

const filterByCategory = ()=>{
    let categoryFilter = document.getElementById('categoryFilter').value
    let newFilterData = data.filter((val)=>{
        if (!categoryFilter){
            return true
        }
        return val.category === categoryFilter
    })
    renderData(newFilterData)
}

const clearFilter = ()=>{
    document.getElementById('namaFilter').value =''
    document.getElementById('hargafilterMin').value =''
    document.getElementById('hargafilterMax').value =''
    document.getElementById('categoryFilter').value =''
    renderData(data)
} 

// const inputData = ()=>{ 
//     let Nama = document.getElementById('inputNama').value
//     let Price = document.getElementById('inputHarga').value
//     let Stock = document.getElementById('inputStock').value 
//     let category = document.getElementById('inputCategory').value

//     data.push({inputNama:Nama,inputHarga:Price,inputStock:Stock,inputCategory:category}) 
    
//     renderData(data)
 
//     // document.getElementById('inputNama').value = '' 
//     // document.getElementById('inputHarga').value =''
//     // document.getElementById('inputStock').value ='' 
//     // document.getElementById('inputCategory').value =''
// }  
// renderData(data)