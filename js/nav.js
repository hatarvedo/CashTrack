function navDropdown() {
    var element = document.getElementById("header");
    if (element.className === "topnav") 
    {
        element.className += " responsive";
    } else 
    {
        element.className = "topnav";
    }
  }