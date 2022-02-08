let 
const sortby = (arr,props,urutan)=>{
    let newdata = new.sort((a,b)=>{
        if (a[props]>b[props]){ 
            return urutan ==='desc'? -1:1
        } 
        if (a[props]<b[props]){ 
            return urutan ==='desc'? 1:-1 
        }
        return 0
    })
    return newdata
}