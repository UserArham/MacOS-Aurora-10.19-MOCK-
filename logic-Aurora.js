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
