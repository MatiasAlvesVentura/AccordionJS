/*items.forEach(function() {

        items.onclick = function() {
            bool = true
            console.log(bool)
            for (let i in items) {
                if (items[i].style.height > 70 + "px") {
                    items[i].style.height = 70 + "px";

                } else {
                    items[i].style.height = 200 + "px";
                }
            }


        }
    })

for (let item in items) {
    bool = true
    console.log(bool)
    item.onclick = function() {

        if (item.style.height > 70 + "px") {
            item.style.height = 70 + "px";

        } else {
            item.style.height = 200 + "px";
        }
    }


}*/

let items = document.querySelectorAll('.accordion-items');

items.forEach(function(item) {
    console.log(item);
    const vecItems = item.children;
    console.log(vecItems)
    for (let i = 0; i < vecItems.length; i++) {
        console.log(i);
        vecItems[i].onclick = function() {
            console.log("hola");
            if (vecItems[i].style.height === 200 + "px") {
                vecItems[i].style.height = 70 + "px";
            } else {
                vecItems[i].style.height = 200 + "px";
            }
        }
    }
})