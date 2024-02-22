let h5=document.querySelector("h5");

let btn2=document.querySelector("#btn2");
let btn1=document.querySelector("#btn1");

btn2.addEventListener("click",function(){
    h5.innerHTML="new friends"
    h5.style.color="green"
})

btn1.addEventListener("click",function(){
    h5.innerHTML="delete friend";
    h5.style.color="red";
});

