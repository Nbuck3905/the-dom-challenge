let counterBoy = document.querySelector("#counter")

setInterval(function(){
    counterBoy.innerText = parseInt(counterBoy.innerText) + 1
},1000)

let decrease = document.querySelector("#minus")

let increase = document.querySelector("#add")

decrease.addEventListener("click",function(event){
    counterBoy.innerText--
})


increase.addEventListener("click",function(event){
    counterBoy.innerText++
})





 let like = document.querySelector("#like")

 let likes = document.querySelector(".likes")
 
  let counter = 0
 
like.addEventListener("click", function(event){
    
    counter = counter + 1

    let query = document.querySelector(`#attribute${counterBoy.innerText}`)
    


    if (query){
     return query.innerHTML = `${counterBoy.innerText} has been liked ${counter} times` 
    }
    counter = 1
    let message = document.createElement('li')
    message.setAttribute("id", `attribute${counterBoy.innerText}`)

    message.innerHTML = `${counterBoy.innerText} has been liked ${counter} time`
    

    likes.append(message)

})





 

