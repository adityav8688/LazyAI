const sidebarBtn = document.querySelector("#sidebarBtn");
const sidebar = document.querySelector("#sidebar");
const sidebarClo = document.querySelector("#sidebarClo");
const userInput = document.querySelector("#userInput");
const sendBtn = document.querySelector("#sendBtn");
const remove1 = document.querySelector("#remove-1");
const remove2 = document.querySelector("#remove-2");
const basic = document.querySelector("#basicChat");
const container = document.querySelector("#container");

console.log("its working")
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    sidebarBtn.style.display = "none";
});

sidebarClo.addEventListener("click", () => {
    sidebar.classList.remove("open")
    sidebarBtn.style.display = "flex";
});

userInput.addEventListener("input", () => {
    userInput.style.height = "auto";
    userInput.style.height = userInput.scrollHeight + "px";

});
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});

sendBtn.addEventListener("click", async () => {
    let text = userInput.value.trim();
    if (text === "") {
        return
    } else {
        remove1.remove();
        remove2.remove();
        container.style.alignItems = "start";
    };
    inputMsg(text, "user");
    const output = await response(text);
    outputMsg(output, "ai");
    userInput.value = "";
});

async function response(text) {
    try {
        const res = await fetch("http://127.0.0.1:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({msg: text})
        });
        let data = await res.json();
        return data.output;
    } catch (error) {
        console.error("fetch falied: ", error);
    }
};

async function inputMsg(text, type) {
    const msg = document.createElement("div");
    msg.innerHTML = `<p>${text}<p>`;
    msg.classList.add("message", type);
    msg.style.alignSelf = "flex-end";
    basic.appendChild(msg);

    container.scrollTop = container.scrollHeight;
};

async function outputMsg(text, type) {
    const msg = document.createElement("div");
    msg.innerHTML = `<p>${text}<p>`;
    msg.classList.add("message", type);
    msg.style.alignSelf = "flex-start";
    basic.appendChild(msg);
};





