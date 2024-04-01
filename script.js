const inputData = document.querySelector("#input-text");
const listItem1 = document.querySelector("#task-list1");
const listItem2 = document.querySelector("#task-list2");
const check = document.querySelector("#check");


// Add item in list
function addItems(){
    if(inputData.value === ''){
        alert("You need to add some task!!");
    }
    else{
        if(check.checked){
            let  li = document.createElement("li");
            li.innerHTML = inputData.value;
            listItem1.append(li);
            saveData1();
        }
        else{
            let  li = document.createElement("li");
            li.innerHTML = inputData.value;
            listItem2.append(li);
            saveData2();
        }
    }
    inputData.value = '';
}


inputData.addEventListener("keypress", function (e){
    if(e.key === 'Enter'){
        if(inputData.value === ''){
            alert("You need to add some task!!");
        }
        else{
            addItems();
        }
    }
});



//  Removw item in list

listItem1.addEventListener("dblclick", function(e){
    if(e.target.tagName === "LI"){
        e.target.remove();
        saveData1();
    }
},false);

listItem2.addEventListener("dblclick", function(e){
    if(e.target.tagName === "LI"){
        e.target.remove();
        saveData2();
    }
},false);



// local storage 

function saveData1(){
    localStorage.setItem("List1", listItem1.innerHTML);
}

function saveData2(){
    localStorage.setItem("List2", listItem2.innerHTML);
}

function  getData1(){
    listItem1.innerHTML = localStorage.getItem("List1");
}
function  getData2(){
    listItem2.innerHTML = localStorage.getItem("List2");
}
getData1();
getData2();
