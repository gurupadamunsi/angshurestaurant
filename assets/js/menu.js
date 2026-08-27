const menuData=[
{category:"Starters",items:[
["Crispy Corn Chaat","Sweet corn, herbs and light spices","₹180","https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80"],
["Paneer Tikka","Charred cottage cheese, peppers and onion","₹240","https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80"],
["Chicken Seekh Kebab","Minced chicken, herbs and house spices","₹280","https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80"]
]},
{category:"Tandoor",items:[
["Chicken Tikka","Boneless chicken marinated in yoghurt and spices","₹320","https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=80"],
["Tandoori Chicken","Half chicken roasted with aromatic spices","₹360","https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80"],
["Garlic Naan","Soft naan finished with garlic and butter","₹90","https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=80"]
]},
{category:"Biryani",items:[
["Chicken Biryani","Fragrant basmati rice, chicken and saffron","₹280","https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80"],
["Mutton Biryani","Slow-cooked mutton with aromatic rice","₹360","https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=80"],
["Veg Biryani","Seasonal vegetables, herbs and fragrant rice","₹220","https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80"]
]},
{category:"Mains",items:[
["Butter Chicken","Creamy tomato gravy with tandoor chicken","₹320","https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=80"],
["Kadai Paneer","Paneer, peppers and tomato in kadai masala","₹270","https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80"],
["Dal Makhani","Slow-cooked black lentils with butter","₹220","https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80"]
]},
{category:"Desserts",items:[
["Gulab Jamun","Warm milk dumplings with fragrant syrup","₹120","https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80"],
["Kesar Kulfi","Traditional saffron and pistachio frozen dessert","₹140","https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80"]
]}
];
document.addEventListener("DOMContentLoaded",()=>{
const tabs=document.getElementById("category-tabs"),grid=document.getElementById("menu-grid");
tabs.innerHTML=menuData.map((x,i)=>`<button class="category-btn ${i===0?"active":""}" data-category="${x.category}">${x.category}</button>`).join("");
grid.innerHTML=menuData.map(x=>`<section id="${x.category.toLowerCase()}" class="menu-section"><div class="mb-7 flex items-end justify-between gap-4"><div><p class="eyebrow">${x.category}</p><h2 class="font-display text-4xl">${x.category}</h2></div></div><div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${x.items.map(i=>`<article class="menu-card"><img loading="lazy" src="${i[3]}" alt="${i[0]}"><div class="menu-card-body"><div class="flex justify-between gap-4"><div><h3 class="font-display text-xl">${i[0]}</h3><p class="mt-2 text-sm leading-6 text-muted">${i[1]}</p></div><strong class="shrink-0 text-sm">${i[2]}</strong></div><a data-whatsapp href="#" class="mt-5 inline-flex text-xs font-bold text-gold">Order this →</a></div></article>`).join("")}</div></section>`).join("");
document.querySelectorAll(".category-btn").forEach(btn=>btn.addEventListener("click",()=>{document.getElementById(btn.dataset.category.toLowerCase()).scrollIntoView({behavior:"smooth",block:"start"});document.querySelectorAll(".category-btn").forEach(b=>b.classList.remove("active"));btn.classList.add("active")}));
document.querySelectorAll("[data-whatsapp]").forEach(a=>{const item=a.textContent.includes("Order this");if(item){const name=a.closest(".menu-card").querySelector("h3").textContent;a.addEventListener("click",()=>{a.href=`https://wa.me/919000000000?text=${encodeURIComponent("Hello! I would like to order "+name+".")}`;a.target="_blank";a.rel="noopener"})}});
});