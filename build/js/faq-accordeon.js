document.querySelectorAll(".faq-item").forEach((e=>{let t=e.querySelector(".faq-item__text-wrapper"),l=document.querySelectorAll(".faq-item__text-wrapper"),r=e.querySelector(".faq-item__button");e.addEventListener("click",(()=>{t.style.maxHeight?(l.forEach((e=>e.style.maxHeight=null)),r.textContent="+"):(l.forEach((e=>e.style.maxHeight=null)),t.style.maxHeight=t.scrollHeight+"px",r.textContent="-")}))}));