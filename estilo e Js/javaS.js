let img = document.getElementById("fotos")
let a = ["social/boné.jpg","social/fone.jpg","social/eu dnv.jpg","social/espelho.jpg","social/joia.jpg"]
let bemV = document.getElementById("BemVindo")

setInterval(function mudarfoto(){
    setTimeout(function (){
        img.src = a[0]
    
    },1000)
    setTimeout(function (){
        img.src = a[1]
    
    },2000)
    setTimeout(function (){
        img.src = a[2]
    
    },3000)
    setTimeout(function (){
        img.src = a[3]
    
    },4000)
    setTimeout(function (){
        img.src = a[4]
    
    },5000)
},4000)




    







    