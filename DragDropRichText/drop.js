function allowDrop(ev) {
    //disable browser default behaviour
    ev.preventDefault();
 }
 
 function drag(ev) {
   console.log("drag start.");
    ev.dataTransfer.setData("text",ev.target.classList[0]);
 }

 function removeNode(node) {
    node.preventDefault();
    node.parentNode.removeChild(node);
  }
 
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    console.log(ev.target.nodeName);
    var isLeft = 'text' == data || "image" == data;
   


    switch(data)
          {
            case "text": 
            var textEle = document.createElement('p');
            textEle.contentEditable = true;
            textEle.innerHTML = 'Add Text here';
            ev.target.appendChild(textEle);
            textEle.id = "";
            break;

            case "image":
              var imgEle = document.createElement('img');
                           imgEle.width = 400;
                           imgEle.height = 150;
                           imgEle.id = "img1";
                           imgEle.src = "image_icon.jpg";
                           imgEle.addEventListener("click", function(e) {
                             hideOrShow();
                          })
                           ev.target.appendChild(imgEle);
            break;

            default: break;
          }
    
    ev.stopPropagation();
    return false;
  }

  function getTemplateCode(){

  }


  function hideOrShow() {
    var x = document.getElementById("imageSettings");
    if (x.style.display === "none") {
      x.style.display = "block";
    }

  }

