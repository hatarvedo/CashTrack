function navDropdown() {
    var element = document.getElementById("header");
    if (element.className === "header") 
    {
        element.className += " responsive";
    } else 
    {
        element.className = "header";
    }
  }