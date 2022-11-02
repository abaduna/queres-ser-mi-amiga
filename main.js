let btnSi = document.querySelector("#si")

btnSi.addEventListener("click",()=>{
    alert("lo sabia")
})

const btnNo = document.querySelector("#no")

btnNo.addEventListener("mouseover",()=>{
  const randomX =  parseInt(Math.random()*89)
  const randomy =  parseInt(Math.random()*89)
  btnNo.style.setProperty("top",randomX + "%" )
  btnNo.style.setProperty("left",randomy + "%" )
    })