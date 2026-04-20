const sidebarBtn = document.querySelector("#sidebarBtn");
const sidebar = document.querySelector("#sidebar");
const sidebarClo = document.querySelector("#sidebarClo");

console.log("its working")
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    sidebarBtn.style.display = "none";
});

sidebarClo.addEventListener("click", () => {
    sidebar.classList.remove("open")
    sidebarBtn.style.display = "flex";
})

