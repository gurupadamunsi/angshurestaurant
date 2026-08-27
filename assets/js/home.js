const featured=[
{name:"Smoky Chicken Tikka",category:"Tandoor",price:"₹320",image:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80"},
{name:"Royal Chicken Biryani",category:"Biryani",price:"₹280",image:"https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80"},
{name:"Paneer Tikka",category:"Starters",price:"₹240",image:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80"},
{name:"Classic Gulab Jamun",category:"Dessert",price:"₹120",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80"}
];
document.addEventListener("DOMContentLoaded",()=>{
const el=document.getElementById("featured-menu");if(!el)return;
el.innerHTML=featured.map(i=>`<article class="menu-card"><img loading="lazy" src="${i.image}" alt="${i.name}"><div class="menu-card-body"><div class="flex items-center justify-between gap-3"><div><p class="text-[10px] font-bold uppercase tracking-[.18em] text-gold">${i.category}</p><h3 class="mt-1 font-display text-xl text-ink">${i.name}</h3></div><strong class="text-sm text-ink">${i.price}</strong></div></div></article>`).join("");
});