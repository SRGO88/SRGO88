//Variables

var Content = "Content";
var Layouts = "Layouts";
var tabElements = document.querySelectorAll("[data-selectbutton]");
var imgElements = document
    .querySelector("section.blockTabTemplate > table")
    .querySelectorAll("img");

//Common functions

function addClass(querySelector, className) {
    document.querySelectorAll(querySelector)[0].classList.add(className);
}

function removeClass(querySelector, className) {
    document.querySelectorAll(querySelector)[0].classList.remove(className);
}

function replaceClass(querySelector, before, after) {
    let elementClass = document.querySelectorAll(querySelector)[0];
    elementClass.className = elementClass.className.replace(before, after);
}

function addClickEventToElements(element, eventName, functionName) {
    element.addEventListener(eventName, functionName);
}

//Event Function declaration

let buttonClick = function(e) {
    replaceClass("button.active", "active", "");
    this.classList.add("active");
    let data = this.innerText;
    switch (data) {
        case Layouts:
            removeClass("[data-section_Layouts]", "hidden");
            addClass("[data-section_Content]", "hidden");
            addClass("[data-section_editImage]", "hidden");
            break;
        case Content:
            addClass("[data-section_Layouts]", "hidden");
            removeClass("[data-section_Content]", "hidden");
            addClass("[data-section_editImage]", "hidden");
            break;
        default:
            break;
    }
};

let selectImage = function(e) {
    addClass("[data-section_Layouts]", "hidden");
    addClass("[data-section_Content]", "hidden");
    removeClass("[data-section_editImage]", "hidden");
};

//Event initialized functions
tabElements.forEach((btns) => {
    addClickEventToElements(btns, "click", buttonClick);
});

imgElements.forEach((img) => {
    img.addEventListener(img, "click", selectImage);
});
