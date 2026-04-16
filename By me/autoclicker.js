// §
// for some reason, when you turn it on, youcant turn it off????????????????????????
var enabled = false;

ModAPI.addEventListener("key", (event) => {
    if (event.key == 76) {//L
      if (enabled == true) {
       let enabled = false;
        ModAPI.displayToChat({msg: "§5AutoClicker disabled!"})
    if(enabled == false){
       let enabled = true;
        ModAPI.displayToChat({msg: "§5AutoClicker enabled!"})
      }
    }
})

ModAPI.addEventListener("update", () => {//every time the client updates
  if (enabled == true) ModAPI.clickMouse();//left click. rightClickMouse()
    else {}
})
