// رسالة ترحيب
console.log("Welcome to ELHNDAZA");

// تأثير ظهور العناصر أثناء التمرير
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.7s";
    observer.observe(card);
});

// إنشاء زر واتساب عائم
const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/201221562726";
whatsapp.className="whatsapp";
whatsapp.target="_blank";
whatsapp.innerHTML='<i class="fab fa-whatsapp"></i>';

document.body.appendChild(whatsapp);
