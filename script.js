/* ===========================
   ELHNDAZA
   script.js
===========================*/

// تأثير ظهور العناصر

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll(".button,.qr,footer,.card,.gallery img").forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});



// تكبير الزر عند الضغط

document.querySelectorAll(".button").forEach(btn=>{

btn.addEventListener("mousedown",()=>{

btn.style.transform="scale(.97)";

});

btn.addEventListener("mouseup",()=>{

btn.style.transform="";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});




// تأثير لمعان عند المرور

document.querySelectorAll(".button").forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const x=e.offsetX;

const y=e.offsetY;

button.style.backgroundPosition=x+"px "+y+"px";

});

});




// زر واتساب عائم

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/201221562726";

whatsapp.target="_blank";

whatsapp.innerHTML='<i class="fab fa-whatsapp"></i>';

whatsapp.className="floating-whatsapp";

document.body.appendChild(whatsapp);




// العودة لأعلى الصفحة

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.className="topButton";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.classList.add("showTop");

}else{

topBtn.classList.remove("showTop");

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};




// عداد بسيط

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.dataset.target;

const c=+counter.innerText;

const inc=target/120;

if(c<target){

counter.innerText=Math.ceil(c+inc);

setTimeout(update,15);

}else{

counter.innerText=target;

}

};

update();

});




// تكبير صور الجاليري

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=function(){

const overlay=document.createElement("div");

overlay.className="imageOverlay";

overlay.innerHTML=

`<img src="${this.src}">`;

document.body.appendChild(overlay);

overlay.onclick=function(){

overlay.remove();

}

}

});




// رسالة ترحيب

console.log("ELHNDAZA Website Loaded Successfully");
