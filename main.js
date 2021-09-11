let elForm  = document.querySelector("#form")
let elInput = elForm.querySelector("#input")
let elList = document.querySelector(".list")
let elListItem = elList.querySelector(".list-item")
let elResult1 = elList.querySelector(".result1")
let elResult2 = elList.querySelector(".result2")
let elResult3 = elList.querySelector(".result3")
let elResult4 = elList.querySelector(".result4")
let elSelect = document.querySelector("#select")
let lastResult = document.querySelector(".lastResult")
const piyoda = 3.6
const velosaped  = 20.1
const mashina = 70
const samalyot  = 930

elForm.addEventListener('submit' , function(event){
    event.preventDefault()
    let elInputValue = elInput.value - 0
      if(!isNaN(elInputValue)){
        elInput.style.border = '3px solid green'
        if(elSelect.value === 'piyoda'){
            let hour = Math.floor(elInput.value / piyoda) + ' soat '
            let minute = (((elInput.value /piyoda).toFixed(2) - Math.floor(elInput.value / piyoda))*60).toFixed(0) + ' minut '
            
            elResult1.textContent =  hour + minute
          }else if (elSelect.value === 'moshina'){
              let hour = Math.floor(elInput.value / mashina) + ' soat  '
              let minute = (((elInput.value / mashina).toFixed(2) - Math.floor(elInput.value / mashina))* 60).toFixed(0) + ' minut'
              elResult2.textContent =  hour + minute
          }else if(elSelect.value === 'velosaped'){
              let hour = Math.floor(elInput.value / velosaped) + ' soat  '
              let minute = (((elInput.value / velosaped).toFixed(2) - Math.floor(elInput.value / velosaped))*60).toFixed(0)+ ' minut'
              elResult3.textContent =  hour + minute
          }else if ( elSelect.value === 'samalyot'){
              let hour = Math.floor(elInput.value / samalyot) + ' soat  '
              let minute = (((elInput.value / samalyot).toFixed(2) - Math.floor(elInput.value / samalyot))*60).toFixed(0)+ ' minut'
              elResult4.textContent =  hour + minute
          }
        }
       
    else{
       elInput.style.border = '3px solid red'
       lastResult.textContent = 'Iltimos faqat raqam kiriting'
    } 

    elInput.value = ''

})
