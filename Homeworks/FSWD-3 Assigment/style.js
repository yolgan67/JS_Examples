
function getFinalOrder(k,amounts){
let result=[]

let max = Math.max(...amounts)
let maxCycle = Math.ceil(max/k)

  for (let n = 1; n <= maxCycle; n++) {
    for (let i = 0; i < amounts.length; i++) {
      if(!result.includes(amounts[i]) && amounts[i]<=k*n){
        result.push(amounts[i])
      }
    }   
  }

return {result}
}
let k=1000
let amounts=[2900,1500,2800,2300,700,2500]
console.log(getFinalOrder(k,amounts))