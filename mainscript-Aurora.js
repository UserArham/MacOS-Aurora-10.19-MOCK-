/* Aurora mouse glow */
document.addEventListener("mousemove", e => {
    document.documentElement.style.setProperty("--mx", e.clientX + "px");
    document.documentElement.style.setProperty("--my", e.clientY + "px");
});

/* Open windows */
let z = 10;

function openWindow(app) {
    const win = document.createElement("div");
    win.className = "window";
    win.style.left = (50 + Math.random()*200) + "px";
    win.style.top = (50 + Math.random()*200) + "px";
    win.style.zIndex = ++z;

    win.innerHTML = `
        <div class="titlebar" onmousedown="startDrag(event,this.parentElement)">
            <div class="btn close" onclick="this.parentElement.parentElement.remove()"></div>
            <div class="btn minimize"></div>
            <div class="btn zoom"></div>
            <span style="margin-left:10px">${app}</span>
        </div>
        <div style="padding:15px;color:white;">
            <h3>${app}</h3>
            <p>This is a simulated app in macOS Aurora.</p>
        </div>
    `;

    document.body.appendChild(win);
}

/* Drag windows */
let dragObj = null;
let offX = 0, offY = 0;

function startDrag(e, target) {
    dragObj = target;
    offX = e.clientX - target.offsetLeft;
    offY = e.clientY - target.offsetTop;

    document.onmousemove = drag;
    document.onmouseup = () => dragObj = null;
}

function drag(e) {
    if (!dragObj) return;
    dragObj.style.left = (e.clientX - offX) + "px";
    dragObj.style.top = (e.clientY - offY) + "px";
}

/* Launchpad */
function toggleLaunchpad() {
    const lp = document.getElementById("launchpad");
    lp.style.display = lp.style.display === "block" ? "none" : "block";
}

/* Mission Control */
document.addEventListener("keydown", e => {
    if (e.key === "F3") openMissionControl();
});

function openMissionControl() {
    const mc = document.getElementById("mission-control");
    const grid = document.getElementById("mission-grid");

    grid.innerHTML = "";
    document.querySelectorAll(".window").forEach(w => {
        let clone = w.cloneNode(true);
        clone.style.transform = "scale(.55)";
        clone.style.pointerEvents = "none";
        grid.appendChild(clone);
    });

    mc.style.display = "block";
}

function closeMissionControl() {
    document.getElementById("mission-control").style.display = "none";
}
function openFirefox(win) {
    const c = win.querySelector(".window-inner");

    win.classList.add("firefox-theme");

    c.innerHTML = `
        <div class="browser-bar">Mozilla Firefox</div>
        <input class="browser-url" placeholder="Search with Firefox">
        <p style="color:white; padding:10px;">
            This is a simulated version of Firefox inside macOS Aurora.
        </p>
    `;
}
function openEdge(win) {
    const c = win.querySelector(".window-inner");

    win.classList.add("edge-theme");

    c.innerHTML = `
        <div class="browser-bar">Microsoft Edge</div>
        <input class="browser-url" placeholder="Search or enter URL">
        <p style="color:white; padding:10px;">
            This is a simulated version of Microsoft Edge inside macOS Aurora.
        </p>
    `;
}
if (app === "Firefox") openFirefox(win);
if (app === "Edge") openEdge(win);
