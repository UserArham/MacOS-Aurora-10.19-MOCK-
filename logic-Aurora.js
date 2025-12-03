/* Spotlight */
document.addEventListener("keydown", e => {
    if (e.metaKey && e.code === "Space") {
        toggleSpotlight();
    }
});

function toggleSpotlight() {
    const sp = document.getElementById("spotlight");
    if (!sp) return;
    sp.style.display = sp.style.display === "flex" ? "none" : "flex";
    document.getElementById("spot-input").focus();
}
function openSafariHorizon(win) {
    const content = win.querySelector(".window-inner");
    content.innerHTML = `
        <div id="safari-horizon-tabs">
            <div class="horizon-tab">Aurora OS</div>
            <div class="horizon-tab">Design</div>
            <div class="horizon-tab">Simulator</div>
            <div class="horizon-tab">About</div>
        </div>
        <p style="color:white;">Safari Horizon Mode: Curved 3D Tabs</p>
    `;
}
if (app === "Safari") openSafariHorizon(win);
function openFinderStackFlow(win) {
    const content = win.querySelector(".window-inner");
    content.innerHTML = `
        <h3>Finder — StackFlow</h3>
        <div class="stackflow-column">
            <div class="stack-item">Recent Files</div>
            <div class="stack-item">Research</div>
            <div class="stack-item">Design</div>
            <div class="stack-item">Screenshots</div>
            <div class="stack-item">Downloads</div>
        </div>
    `;
}
if (app === "Finder") openFinderStackFlow(win);
function openTerminal(win) {
    const content = win.querySelector(".window-inner");
    content.style.background = "black";
    content.style.color = "#00ff90";
    content.innerHTML = `
        <div id="term"></div>
        <input id="term-input" autocomplete="off" autofocus>
    `;

    const term = document.getElementById("term");
    const input = document.getElementById("term-input");

    input.onkeydown = e => {
        if (e.key === "Enter") {
            term.innerHTML += `<div>aurora$ ${input.value}</div>`;
            input.value = "";
            term.scrollTop = term.scrollHeight;
        }
    };
}
if (app === "Terminal") openTerminal(win);
document.addEventListener("keydown", e => {
    if (e.metaKey && e.code === "Tab") {
        cycleWindows();
    }
});

function cycleWindows() {
    const wins = [...document.querySelectorAll(".window")];
    if (wins.length < 2) return;
    const top = wins.pop();
    wins.unshift(top);
    wins.forEach((w,i) => w.style.zIndex = 20+i);
}
function toggleNotificationCenter() {
    const nc = document.getElementById("notification-center");
    nc.style.display = nc.style.display === "block" ? "none" : "block";
}

document.getElementById("menubar").onclick = toggleNotificationCenter;
