function highlight() {
    const bold = document.querySelectorAll("strong");
    
    bold.forEach(function(word) {
        word.style.color = "rgb(0, 128, 0)";
    });
}

function return_normal() {
    const bold = document.querySelectorAll("strong");
    
    bold.forEach(function(word) {
        word.style.color = "rgb(0, 0, 0)";
    });
}