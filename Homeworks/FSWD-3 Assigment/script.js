
function getFinalOrder(k,amounts){
  
let orderAmount=[]
let orderPerson=[]

let max = Math.max(...amounts)
let maxCycle = Math.ceil(max/k)

  for (let n = 1; n <= maxCycle; n++) {
    for (let i = 0; i < amounts.length; i++) {
      if(!orderAmount.includes(amounts[i]) && amounts[i]<=k*n){
        orderAmount.push( amounts[i])
        orderPerson.push(i+1) 
      }
    }   
  } 

let result=orderPerson.map((item,i)=>`İlk sıralamaya göre ${item}. sıradaki ${i+1}. olarak kuyruktan çıkar`)

return result
}
let k=1500
let amounts=[7000,1300,4000,5000,700,1600,1500,2500]

console.log(getFinalOrder(k,amounts))

