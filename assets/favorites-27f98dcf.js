import"./index-a55b2bd8.js";import{d as c,s as i}from"./store-b95f9920.js";const s=document.querySelectorAll(".header__nav-authorized"),o=document.querySelectorAll(".header__nav__item.auth"),t=document.querySelectorAll(".header__logout_btn"),r=async()=>{await c.auth().onAuthStateChanged(a=>{a?(o.forEach(e=>{e.classList.add("hidden")}),t.forEach(e=>{e.classList.add("visible")}),s.forEach(e=>{e.classList.add("visible")})):(o.forEach(e=>{e.classList.remove("hidden")}),t.forEach(e=>{e.classList.remove("visible")}),s.forEach(e=>{e.classList.remove("visible")}))})},n=async()=>{await i(),t.forEach(a=>{a.classList.add("hidden")}),window.location.pathname="/project-fitness-07/"};t.forEach(a=>{a.addEventListener("click",n)});r();
