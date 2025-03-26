const header_1 = document.querySelector('.header1');
const link_1 = document.querySelector('.link-1');
const link_2 = document.querySelector('.link-2');
const link_3 = document.querySelector('.link-3');
const link_4 = document.querySelector('.link-4');
const register = document.querySelector('.register');
const submit = document.querySelector('#submit');

link_1.addEventListener("mouseover", function() {
    link_1.style.transform = "scale(1.1)";
    link_1.style.transition = "all 0.4s";
});

link_1.addEventListener("mouseout", function() {
    link_1.style.transform = "scale(1)";
    link_1.style.transition = "all 0.4s";
  })

link_2.addEventListener("mouseout", function() {
    link_2.style.transform = "scale(1)";
    link_2.style.transition = "all 0.4s";
  })

link_2.addEventListener("mouseover", function() {
    link_2.style.transform = "scale(1.1)";
    link_2.style.transition = "all 0.4s";
});

link_3.addEventListener("mouseover", function() {
    link_3.style.transform = "scale(1.1)";
    link_3.style.transition = "all 0.4s";
})

link_3.addEventListener("mouseout", function() {
    link_3.style.transform = "scale(1)";
    link_3.style.transition = "all 0.4s";
})

link_4.addEventListener("mouseover", function() {
    link_4.style.transform = "scale(1.1)";
    link_4.style.transition = "all 0.4s";
})

link_4.addEventListener("mouseout", function() {
    link_4.style.transform = "scale(1)";
    link_4.style.transition = "all 0.4s";
})

register.addEventListener("mouseover", ()=> {
    register.style.transform = "scale(1.1)";
    register.style.transition = "all 0.4s";
})

register.addEventListener("mouseout", ()=> {
    register.style.transform = "scale(1)";
    register.style.transition = "all 0.4s";
})

submit.addEventListener("mouseover", ()=> {
    submit.style.transform = "scale(1.05)";
    submit.style.transition = "all 0.4s";
})

submit.addEventListener("mouseout", ()=>{
    submit.style.transform = "scale(1)";
    submit.style.transition = "all 0.4s";
})