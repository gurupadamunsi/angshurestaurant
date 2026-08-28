const restaurant={name:"Angshu",phone:"+919000000000",displayPhone:"+91 90000 00000",whatsapp:"+919000000000",address:"Main Market Road, Your Town, West Bengal",hours:"Every day · 11:00 AM – 10:30 PM"};

function header(){
return `<header class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur-xl">
<div class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
<a href="index.html" class="flex items-center gap-3" aria-label="${restaurant.name} home">
<span class="grid h-9 w-9 place-items-center rounded-full border border-gold/70 text-sm font-semibold text-gold">ST</span>
<span><strong class="block font-display text-lg leading-none">${restaurant.name}</strong><small class="text-[9px] uppercase tracking-[.22em] text-white/50">Restaurant</small></span></a>
<nav class="hidden items-center gap-7 md:flex" aria-label="Main navigation">
<a class="nav-link" href="index.html">Home</a><a class="nav-link" href="menu.html">Menu</a><a class="nav-link" href="about.html">About</a><a class="nav-link" href="contact.html">Contact</a>
<a data-whatsapp href="#" class="rounded-full bg-gold px-4 py-2 text-xs font-bold text-ink">Order Now</a></nav>
<button id="menu-toggle" class="grid h-10 w-10 place-items-center rounded-full border border-white/20 md:hidden" aria-label="Open menu" aria-expanded="false"><span class="text-xl">☰</span></button>
</div>
<div id="mobile-menu" class="hidden border-t border-white/10 px-5 pb-5 pt-3 md:hidden">
<a class="mobile-link" href="index.html">Home</a><a class="mobile-link" href="menu.html">Menu</a><a class="mobile-link" href="about.html">About</a><a class="mobile-link" href="contact.html">Contact</a>
<a data-whatsapp href="#" class="mt-3 flex justify-center rounded-full bg-gold px-4 py-3 text-xs font-bold text-ink">Order on WhatsApp</a>
</div></header>`}

function footer(){
return `<footer class="bg-ink px-5 py-12 text-white sm:px-8 lg:px-12"><div class="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
<div><div class="flex items-center gap-3"><span class="grid h-9 w-9 place-items-center rounded-full border border-gold/70 text-sm font-semibold text-gold">ST</span><strong class="font-display text-xl">${restaurant.name}</strong></div><p class="mt-5 max-w-sm text-sm leading-6 text-white/55">Fresh food, warm hospitality and easy local dining.</p></div>
<div><p class="text-xs font-bold uppercase tracking-[.2em] text-gold">Visit</p><p class="mt-4 text-sm leading-6 text-white/60">${restaurant.address}<br>${restaurant.hours}</p></div>
<div><p class="text-xs font-bold uppercase tracking-[.2em] text-gold">Quick contact</p><a data-phone href="#" class="mt-4 block text-sm text-white/70">${restaurant.displayPhone}</a><a data-whatsapp href="#" class="mt-2 inline-block text-sm text-gold">WhatsApp →</a></div>
</div><div class="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/35">© ${new Date().getFullYear()} ${restaurant.name}. All rights reserved.</div></footer>`}

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