const inputData = document.querySelector("#input-text");
const listItem = document.querySelector("#task-list");


// Add item in list
function addItems(){
    if(inputData.value === ''){
        alert("You need to add some task!!");
    }
    else{   
        let  li = document.createElement("li");
        li.innerHTML = inputData.value;
        listItem.appendChild(li);
    }
    inputData.value = '';
    saveData();
}

inputData.addEventListener("keypress", function (e){
    // if(e.key === 'Enter' && inputData.value === ''){
    //     alert("You need to add some task!!");
    // }
    if(e.key === 'Enter'){
        addItems();
    }
});



//  Removw item in list

listItem.addEventListener("dblclick", function(e){
    if(e.target.tagName === "LI"){
        e.target.remove();
        saveData();
    }
},false)



// local storage 

function saveData(){
    localStorage.setItem("List", listItem.innerHTML);
}

function  getData(){
    listItem.innerHTML = localStorage.getItem("List");
}
getData();