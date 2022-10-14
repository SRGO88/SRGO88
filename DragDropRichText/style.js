var Content = "Content";
var Layouts = "Layouts";
var btns = document.querySelectorAll("[data-selectbutton]");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(e) {
        var currentButton = document.querySelectorAll("button.active");
        currentButton[0].className = currentButton[0].className.replace("active", "");
        this.className += "active";
        let data = this.innerText;
        switch (data) {
            case Layouts:
                document.querySelectorAll("[data-Layouts]")[0].classList.remove("hidden");
                document.querySelectorAll("[data-Content]")[0].classList.add("hidden");
                break;
            case Content:
                document.querySelectorAll("[data-Layouts]")[0].classList.add("hidden");
                document.querySelectorAll("[data-Content]")[0].classList.remove("hidden");
                break;
            default:
                break;
        }

    });
}