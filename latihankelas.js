const angkaPrima = (numb)=>{ 
    let output = [2,3]
    for (let i = 4; i <= numb; i++) { 
        let habisDibagi = 1 
        for (let j = 2; j <= i; j++) {
            if (i%j === 0) {
                 habisDibagi++ 
            } 
            if (habisDibagi>2){
                break
            }
        } 
        if (habisDibagi ===2) {
            output.push(i) 
        }  
    }
    return output
} 
console.log (angkaPrima(50)) 

let database = [
    {id:1,username:'aqil177',password:'123abc'},
    {id:2,username:'rio007',password:'strong09'}
] 

const signIn = (data)=>{  
    let {username,password} = data
    let filterData = database.filter((val)=>{
        return val.username == username && val.password === password
    }) 
    return Boolean(filterData.length)   
}


console.log(signIn({id:1,username:'aqil177',password:'123abc'})) 
console.log(signIn({id:1,username:'aq177',password:'123abc'})) 

let database = [
    {id:1,username:'aqil177',password:'123abc'},
    {id:2,username:'rio007',password:'strong09'}
] 

const signUp = (data)=>{
    let {username,password} = data
    let filterData = database.filter((val)=>{
        return val.username == username     
    }) 
    if (filterData.length > 0){
        return `username telah digunakan`
    }else{
        let idNew = database.length+1 
        data.id = idNew
        database.push(data)
        return `masuk`
    } 
}