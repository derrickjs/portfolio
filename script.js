function removeForm(){
    var form = document.querySelector("form");

    form.style.display = "none";
}


if(document.querySelector("#submitForm")){
document.querySelector("#submitForm").addEventListener("click", removeForm);
}


function addText(){
    var show = document.querySelector(".show");

    show.style.display = "block";
}

if(document.querySelector("#submitForm")){
document.querySelector("#submitForm").addEventListener("click", addText);
}