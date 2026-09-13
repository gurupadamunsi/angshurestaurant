const restaurant={name:"Angshu",phone:"+919000000000",displayPhone:"+91 90000 00000",whatsapp:"+919000000000",address:"Main Market Road, Your Town, West Bengal",hours:"Every day · 10:30 AM – 10:30 PM"};
const restaurant2={name:"Angshu Bar Cum Restaurant"};

function header(){
return `<header class="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f8f4ed]/95 text-ink backdrop-blur-xl">
<div class="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
<a href="index.html"
   class="flex items-center gap-2.5 sm:gap-3"
   aria-label="${restaurant.name} home">

  <img src="assets/images/angshu-logo.jpg" alt="Angshu Bar Cum Restaurant logo" class="h-11 w-11 shrink-0 rounded-full object-cover sm:h-12 sm:w-12">

  <span class="flex min-w-0 flex-col leading-none">
    <strong class="font-display text-xl font-semibold tracking-wide text-ink sm:text-2xl">
      ${restaurant.name}
    </strong>

    <small class="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.28em] text-gold sm:text-[9px] sm:tracking-[0.32em]">
      BAR CUM RESTAURANT
    </small>
  </span>

</a>
<nav class="hidden items-center gap-7 md:flex" aria-label="Main navigation">
<a class="nav-link" href="index.html">Home</a><a class="nav-link" href="menu.html">Menu</a><a class="nav-link" href="about.html">About</a><a class="nav-link" href="contact.html">Contact</a>
<a data-whatsapp href="#" class="rounded-full bg-gold px-4 py-2 text-xs font-bold text-ink">Order Now</a></nav>
<button id="menu-toggle" class="grid h-10 w-10 place-items-center rounded-full border border-black/15 md:hidden" aria-label="Open menu" aria-expanded="false"><span class="text-xl">☰</span></button>
</div>
<div id="mobile-menu" class="hidden border-t border-black/10 bg-[#f8f4ed] px-5 pb-5 pt-3 md:hidden">
<a class="mobile-link" href="index.html">Home</a><a class="mobile-link" href="menu.html">Menu</a><a class="mobile-link" href="about.html">About</a><a class="mobile-link" href="contact.html">Contact</a>
<a data-whatsapp href="#" class="mt-3 flex justify-center rounded-full bg-gold px-4 py-3 text-xs font-bold text-ink">Order on WhatsApp</a>
</div></header>`}

function footer(){
return `<footer class="bg-ink px-5 py-12 text-white sm:px-8 lg:px-12"><div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
<div><div class="flex items-center gap-3"><img src="assets/images/angshu-logo.jpg" alt="Angshu Bar Cum Restaurant logo" class="h-11 w-11 shrink-0 rounded-full object-cover sm:h-12 sm:w-12">

<div class="flex flex-col leading-none">
  <strong class="font-display text-2xl font-semibold tracking-wide text-white">
    ${restaurant.name}
  </strong>

  <small class="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.32em] text-gold">
    BAR CUM RESTAURANT
  </small>
</div>

</div>
<p class="mt-5 max-w-sm text-sm leading-6 text-white/55">Fresh food, warm hospitality and easy local dining.</p></div>
<div><p class="text-xs font-bold uppercase tracking-[.2em] text-gold">Visit</p><p class="mt-4 text-sm leading-6 text-white/60">${restaurant.address}<br>${restaurant.hours}</p></div>
<div><p class="text-xs font-bold uppercase tracking-[.2em] text-gold">Quick contact</p><a data-phone href="#" class="mt-4 block text-sm text-white/70">${restaurant.displayPhone}</a><a data-whatsapp href="#" class="mt-2 inline-block text-sm text-gold">WhatsApp →</a></div>
</div><div class="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/35">© ${new Date().getFullYear()} ${restaurant2.name}. All rights reserved.</div></footer>`}

document.addEventListener("DOMContentLoaded",()=>{
document.getElementById("site-header").innerHTML=header();
document.getElementById("site-footer").innerHTML=footer();
document.querySelectorAll("[data-phone]").forEach(a=>{a.href=`tel:${restaurant.phone}`});
document.querySelectorAll("[data-whatsapp]").forEach(a=>{a.href=`https://wa.me/${restaurant.whatsapp.replace("+","")}?text=${encodeURIComponent("Hello! I would like to place an order.")}`;a.target="_blank";a.rel="noopener"});
const toggle=document.getElementById("menu-toggle"),mobile=document.getElementById("mobile-menu");
toggle?.addEventListener("click",()=>{const open=!mobile.classList.contains("hidden");mobile.classList.toggle("hidden",open);toggle.setAttribute("aria-expanded",String(!open));toggle.querySelector("span").textContent=open?"☰":"✕"});
mobile?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mobile.classList.add("hidden");toggle?.setAttribute("aria-expanded","false")}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
const current=location.pathname.split("/").pop()||"/";
document.querySelectorAll(".nav-link").forEach(a=>{if(a.getAttribute("href")===current)a.classList.add("text-gold")});
});