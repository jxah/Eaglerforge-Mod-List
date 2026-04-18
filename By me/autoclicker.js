// §
// for some reason, when you turn it on, youcant turn it off????????????????????????
let enabled = false;

ModAPI.addEventListener("key", (event) => {
    if (event.key == 33) {//f
      enabled = !enabled
    }});

ModAPI.addEventListener("update", () => {//every time the client updates
    if (enabled == true) ModAPI.clickMouse();//left click. rightClickMouse()
});
