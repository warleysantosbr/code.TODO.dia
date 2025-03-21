let optionsButtons = document.querySelectorAll(".option-button");
let advancedOptionButton = document.querySelectorAll(".adv-option-button");
let fontName = document.getElementById("fontName");
let fontSizeRef  = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input");
let linkButton = document.getElementById("createLink");
linkButton.title = "Clique para adicionar um link";
let alignButtons = document.querySelectorAll(".align");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive"
];

const intializer = () =>{
    highlighter(alignButtons, true);
    highlighter(spacingButtons, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, false);

    fontList.map((value) =>{
        let option = document.createElement("option");
        option.value = value;
        option.innerHTML = value;
        fontName.appendChild(option);
    });

    for(let i =1; i <=7; i++){
        let option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        fontSizeRef.appendChild(option);
    }

    fontSizeRef.value = 3;
};

const modifyText = (command, defautUi, value) =>{
    document.execCommand(command, defautUi, value);
};

optionsButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        modifyText(button.id, false, null);
    });
});

advancedOptionButton.forEach((button) =>{
    button.addEventListener("change", () =>{
        modifyText(button.id, false, null);
    });
});

linkButton.addEventListener("click", () =>{
    let userLink = prompt("Insira uma URL");
    if(/http/i.test(userLink)){
        modifyText(linkButton.id, false, userLink);
    }else{
        userLink = "http://" + userLink;
        modifyText(linkButton.id, false, userLink);
    }
})

CONTINUA!...

URL: https://youtu.be/gRyvG7PZ4m0?si=qhp9aEf-7EalSPHd&t=774