let data = [
    {id: 1579581080923,Category: 'Fast Food', nama: 'noodle', price: 3500, stock: 9},
    {id: 1579581081130,Category: 'Electronic', nama: 'Headphone', price: 4300000, stock: 8},
    {id: 1579581081342,Category: 'cloth', nama: 'Hoodie', price: 300000, stock: 7},
    {id: 1579581081577,Category: 'Fruit', nama: 'Apple', price: 10000, stock: 8},
]  

let indexDel = -1
let indexEd = -1
let carts = []

let Category= ['Fast Food','Electronic','cloth','Fruit'] 

const convertCurrency =(numb)=>{
    const formatter = new Intl.NumberFormat(`id-ID`,{
        style: 'currency',
        currency: 'IDR',
    }) 
    return formatter.format(numb)
}

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

function generateDefaultCat(category){
    let output = Category.map((val)=>{
        if(val === Category){
            return `<option value="${val}" selected>${val}</option>` 
        }
        return `<option value="${val}">${val}</option>` 
    }) 
    return output.join('')
} 

const renderData = (arr)=>{
    let el = document.getElementById('data')
    let output = arr.map((val,index)=>{
        if (index === indexDel){
            return (`
            <tr>
                <td>${val.id}</td>
                <td>${val.Category}</td>
                <td>${val.nama}</td>
                <td>${convertCurrency(val.price)}</td> 
                <td>${val.stock}</td>  
                <td>
                    <button onclick="productsBuy(${index})"disable>Buy</button>
                </td>
                    <button onclick="yesDelete()">yes</button>
                    <button onclick="cancelDelete()">no</button> 
                <td>
            </tr>
            `)
        } else if(index === indexEd){
            return (
                `<tr>
                    <td>${val.id}</td>
                    <td>
                        <select id='categoryEdit'>
                        ${generateDefaultCat(val.Category)} 
                        </select> 
                    </td>
                    <td><input type="text" value="${val.nama} id="namaEdit> </td>
                    <td><input type="text" value="${val.price} id="priceEdit> </td>
                    <td><input type="number" value="${val.stock} id="stockEdit> </td>
                    <td>
                    <button onclick="productsBuy(${index})"disable>Buy</button>
                    </td>
                    <td> 
                    <button>Save</button>
                    <button onclick="cancelEdit()">Cancel</button> 
                    </td>
                </tr>
                `
            )
        } 
        return (
            `
            <tr>
                <td>${val.id}</td>
                <td>${val.Category}</td>
                <td>${val.nama}</td>
                <td>${convertCurrency(val.price)}</td> 
                <td>${val.stock}</td>  
                <td>
                    <button onclick="productsBuy(${index})"disable>Buy</button>
                </td>
                <td>
                    <button onclick="confEdit(${index})">Edit</button>
                    <button onclick="conflDelete(${index})">Delete</button> 
                <td>
            <tr>
            `
        )  
           
    }) 
    el.innerHTML = output.join('')
} 

// initialRender()
// renderData(data)

const renderCarts = ()=>{
    let cartsEl = document.getElementById('carts')
    let output = carts.map((val,index)=>{
        return  `
        <tr>
            <td>${val.id}</td>
            <td>${val.Category}</td>
            <td>${val.nama}</td> 
            <td>${convertCurrency(val.price)}</td>   
            <td>${val.stock}</td> 
            <td>
            <button onclick="onDeleteCart(${index})">Delete</button>
            </td>
        </tr>`
    }) 
    
    cartsEl.innerHTML = output.join('') 
    let paysEl = document.getElementById('pay-container')
    if(carts.length){
        paysEl.innerHTML = `<button onclick="payment()">Pay</button>`
    }else {
        paysEl.innerHTML= ''
    }
}

initialRender()
renderData(data)   
renderCarts()

const inputData = ()=>{ 
    let Nama = document.getElementById('inputNama').value
    let Price = document.getElementById('inputHarga').value
    let Stock = document.getElementById('inputStock').value 
    let category = document.getElementById('inputCategory').value 
    let time = new Date()

    data.push({id:time.getTime(),nama:Nama,price:Price,stock:Stock,Category:category}) 
    
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
        return val.Category === categoryFilter
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

const conflDelete = (index)=>{
    indexDel = index 
    renderData(data)
} 

const cancelDelete = ()=>{
    indexDel = -1
    renderData(data)
} 

const confEdit = (index)=>{
    indexEd = index
    renderData(data)
} 

const cancelEdit = ()=>{
    indexEd = -1 
    renderData(data)
} 

const yesDelete = ()=>{
    data.splice(indexDel,1)
    indexDel = -1
    renderData(data)
} 

const productsBuy = (index)=>{
    carts.push(data[index])
    renderCarts()
}

const onDeleteCart=(index)=>{
    carts.splice(index,1)
    renderCarts()
} 

const payment=()=>{
    let strukEl = document.getElementById('struk')
    let subTotalEl = document.getElementById('subTotal')
    let ppnEl = document.getElementById('ppn')
    let totalEl = document.getElementById('total') 

    let strukOutput = carts.map((val)=>{
        return `${val.id} | ${val.Category} | ${val.nama} | ${convertCurrency(val.price)}<br><br>`
    })
    strukEl.innerHTML = strukOutput.join('')

    let subTotal = carts.reduce((prevVal,currVal)=>{
        return prevVal +currVal.price
    },0)  

    let ppn= subTotal*0.1 
    let grandTotal  = subTotal+ppn 

    subTotalEl.innerHTML = `subTotal ${convertCurrency(subTotal)}` 
    ppnEl.innerHTML = `PPN ${convertCurrency(ppn)}`
    totalEl.innerHTML = `Grand Total ${convertCurrency(grandTotal)}`
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