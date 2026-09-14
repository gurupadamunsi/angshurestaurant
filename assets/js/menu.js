const menuData=[
{category:"Sannks",items:[
["Chicken Pakoda","Crispy chicken pieces seasoned with aromatic spices","₹180","./assets/images/chicken-pokoda-1.jpg"],
["Poneer Pakoda","Crispy paneer fritters with a light spiced coating","₹160","./assets/images/poneer-pakoda.jpg"],
["Fish Pakoda","Crispy fish bites seasoned with Indian spices","₹200","./assets/images/fish-pokoda.jpg"],
["Moshroom Pakoda","Crispy mushrooms with a mildly spiced coating","₹140","./assets/images/moshroom-pakoda.jpg"],
["Fish Finger","Golden fried fish fingers served crisp and tender","₹200","./assets/images/fish-finger.jpg"],
["Veg Pakoda","Crispy mixed vegetable fritters with light spices","₹140","./assets/images/veg-pakoda.jpg"]

]},
{category:"Tandoor",items:[
["Chicken Tikka","Tender chicken pieces marinated with yoghurt and spices","₹180","./assets/images/chicken-tikka.jpg"],
["Tandoori Chicken","Juicy chicken roasted with aromatic tandoori spices","₹240","./assets/images/tandoori-chicken.jpg"],
["Chicken Lgg Kabab","Juicy chicken leg grilled with traditional spices","₹120","./assets/images/chicken-lgg-kabab.jpg"],
["Chicken Shik Kabab","Minced chicken kebab blended with herbs and spices","₹200","./assets/images/chicken-shik-kabab.jpg"],
["Poneer Tikka","Grilled paneer with peppers, onion and mild spices","₹260","./assets/images/poneer-tikka.jpg"],
["Moshroom Tikka","Grilled mushrooms marinated with aromatic spices","₹200","./assets/images/moshroom-tikka.jpg"]
]},
{category:"Biryani",items:[
["Chicken Biryani","Fragrant basmati rice layered with tender chicken and spices","₹150","./assets/images/chicken-biryani-5.jpg"],
["Mutton Biryani","Aromatic basmati rice cooked with tender mutton and spices","₹360","./assets/images/mutton-biryani.jpg"],
["Veg Biryani","Fragrant basmati rice cooked with fresh seasonal vegetables","₹110","./assets/images/veg-biryani.jpg"]
]},
{category:"Chinese",items:[
["Chicken Garlic","Tender chicken tossed with garlic and Chinese-style spices","₹200","./assets/images/chicken-garlic.jpg"],
["Chicken Chlly","Crispy chicken tossed with peppers, onion and chilli","₹150","./assets/images/chicken-chlly.jpg"],
["Fish Chlly","Crispy fish cooked with chilli, peppers and onion","₹220","./assets/images/fish-chlly.jpg"],
["Chicken 65","Crispy spicy chicken bites with a South Indian touch","₹270","./assets/images/chicken-65.jpg"],
["Chicken Lolipop","Crispy chicken lollipop tossed in a spicy sauce","₹210","./assets/images/chicken lolipop.jpg"],
["Moshroom Chlly","Mushrooms tossed with chilli, peppers and onion","₹180","./assets/images/moshroom-chlly.jpg"]
]},
{category:"Desserts",items:[
["Gulab Jamun","Soft milk dumplings soaked in warm fragrant syrup","₹60","./assets/images/gulab-jamun.jpg"],
["Kesar Kulfi","Creamy traditional kulfi infused with saffron and pistachio","₹50","./assets/images/kesar-kulfi.jpg"],
]}
];
document.addEventListener("DOMContentLoaded",()=>{
const tabs=document.getElementById("category-tabs"),grid=document.getElementById("menu-grid");
tabs.innerHTML=menuData.map((x,i)=>`<button class="category-btn ${i===0?"active":""}" data-category="${x.category}">${x.category}</button>`).join("");
grid.innerHTML=menuData.map(x=>`<section id="${x.category.toLowerCase()}" class="menu-section"><div class="mb-7 flex items-end justify-between gap-4"><div><p class="eyebrow">${x.category}</p><h2 class="font-display text-4xl">${x.category}</h2></div></div><div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${x.items.map(i=>`<article class="menu-card"><img loading="lazy" src="${i[3]}" alt="${i[0]}"><div class="menu-card-body"><div class="flex justify-between gap-4"><div><h3 class="font-display text-xl">${i[0]}</h3><p class="mt-2 text-sm leading-6 text-muted">${i[1]}</p></div><strong class="shrink-0 text-sm">${i[2]}</strong></div><a data-whatsapp href="#" class="mt-5 inline-flex text-xs font-bold text-gold">Order this →</a></div></article>`).join("")}</div></section>`).join("");
document.querySelectorAll(".category-btn").forEach(btn=>btn.addEventListener("click",()=>{document.getElementById(btn.dataset.category.toLowerCase()).scrollIntoView({behavior:"smooth",block:"start"});document.querySelectorAll(".category-btn").forEach(b=>b.classList.remove("active"));btn.classList.add("active")}));
document.querySelectorAll("[data-whatsapp]").forEach(a=>{const item=a.textContent.includes("Order this");if(item){const name=a.closest(".menu-card").querySelector("h3").textContent;a.addEventListener("click",()=>{a.href=`https://wa.me/919547526083?text=${encodeURIComponent("Hello! I would like to order "+name+".")}`;a.target="_blank";a.rel="noopener"})}});
});