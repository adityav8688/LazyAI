const sidebarBtn = document.querySelector("#sidebarBtn");
const sidebar = document.querySelector("#sidebar");
const sidebarClo = document.querySelector("#sidebarClo");
const userInput = document.querySelector("#userInput");
const sendBtn = document.querySelector("#sendBtn");
const remove1 = document.querySelector("#remove-1");
const remove2 = document.querySelector("#remove-2");

console.log("its working")
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    sidebarBtn.style.display = "none";
});

sidebarClo.addEventListener("click", () => {
    sidebar.classList.remove("open")
    sidebarBtn.style.display = "flex";
})

userInput.addEventListener("input", ()=>{
    userInput.style.height = "auto";
    userInput.style.height = userInput.scrollHeight + "px";
});

sendBtn.addEventListener("click", ()=>{
    remove1.remove();
    remove2.remove();
});

