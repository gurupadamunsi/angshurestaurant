const featured=[
{name:"Smoky Chicken Tikka",category:"Tandoor",price:"₹320",image:"./assets/images/smoky-chicken-tikka.jpg"},
{name:"Royal Chicken Biryani",category:"Biryani",price:"₹280",image:"./assets/images/chicken-biryani-5.jpg"},
{name:"Paneer Tikka",category:"Starters",price:"₹240",image:"./assets/images/paneer-tikka.jpg"},
{name:"Classic Gulab Jamun",category:"Dessert",price:"₹120",image:"./assets/images/gulab-jamun.jpg"},
];
document.addEventListener("DOMContentLoaded",()=>{
const el=document.getElementById("featured-menu");if(!el)return;
el.innerHTML=featured.map(i=>`<article class="menu-card"><img loading="lazy" src="${i.image}" alt="${i.name}"><div class="menu-card-body"><div class="flex items-center justify-between gap-3"><div><p class="text-[10px] font-bold uppercase tracking-[.18em] text-gold">${i.category}</p><h3 class="mt-1 font-display text-xl text-ink">${i.name}</h3></div><strong class="text-sm text-ink">${i.price}</strong></div></div></article>`).join("");
});