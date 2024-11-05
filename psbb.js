function psbbBus(totalFamily, familyMembers){
    let totalFamilyInt = parseInt(totalFamily)
    let membersArray = familyMembers.split(" ").map(Number)
    let totalBus = 0
    if (membersArray.length !== totalFamilyInt) { 
    return "Input must be equal with count of family "
  }
  membersArray.sort((a, b) => b - a)
  let i = 0
  let j = membersArray.length - 1
  while (i <= j) {
    if (membersArray[i] + membersArray[j] <= 4) {
        totalBus += 1
        i++
        j--
  }else{
    totalBus += 1
    i++
  }
  }
  return totalBus
}

//Testing
let totalFamily1 = "5"
let familyMembers1 = "1 2 4 3 3"
console.log("Minimum bus required is:", psbbBus(totalFamily1, familyMembers1))
let totalFamily2 = "8"
let familyMembers2 = "2 3 4 4 2 1 3 1"
console.log("Minimum bus required is:", psbbBus(totalFamily2, familyMembers2))
let totalFamily3 = "5"
let familyMembers3 = "1 5"
console.log("Minimum bus required is:", psbbBus(totalFamily3, familyMembers3))