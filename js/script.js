let taskList = JSON.parse(tasks);
console.log(taskList);




//Created objects of a JSON array
//ForEach loop+=to get all the objects values on bootstrap cards with the id(result) of the container in HTML file


taskList.forEach(item => {
    
    document.getElementById("result").innerHTML +=
     `<div class="col mb-4 d-flex flex">
     <div class="card text-center p-3 mx-auto" style:"max-width:100%;">
     <div class="d-flex justify-content-between align-items-center">
    <span class="mb-2">
    <button class="btn btn-outline-info btn-sm text-dark fs-8 task-btn">Task</button></span>
    <i class="fa-regular fa-bookmark fa-xl" style="color: #bed31d;"></i></div>
    <img src="${item.image}" class="card-img-top img-fluid imgBx img-thumbnail max-width-100 h-100">
    <div class="card-body">
      <h3 class="card-title">${item.taskName}</h3>
      <h5 class="card-text">${item.description}</h5>
      <hr>
      <h5><i class="fa-solid fa-triangle-exclamation"></i> Priority level:
      <button class="btn btn-success myBtn"><span class="import">${item.importance}</span></button></h5>
      <hr>
      <p>Day and Time: ${item.dayTime} <br> Expected duration: ${item.duration} hour(s).</p>
      <button class="btn btn-success done"><i class="fa-solid fa-circle-check"></i> Done </button> <button class="btn btn-danger remove"><i class="fa-solid fa-trash-can"></i> Delete</button>
      </div>
      </div>
      </div>
`;


});





//Select the button to add eventlistener onclick

let btns = document.querySelectorAll(".myBtn");


btns.forEach(( btn , i) => 


btn.addEventListener("click", function () {
  
    inImportance(i)
})
);


 
//function that stops counting on 5 and +1 index num 
//let color = "";

function inImportance(i) {
    if (taskList[i].importance<5){   
    taskList[i].importance++;
    console.log(taskList[i]);
    document.querySelectorAll(".import")[i].innerText = taskList[i].importance;
    //btns[i].style.backgroundColor = bagColor(taskList[i].importance);
    //btns[i].classList.remove(bagColor(taskList[i].importance));
    btns[i].classList.add(bagColor(taskList[i].importance));

}
}



function doneColor(i) {
    const cards = document.querySelectorAll(".card");
    //card(i).style.backgroundColor="green";
    //cards[i].classList.add('cardColor');
    cards[i].style.opacity="0.3";
}



let doneBtns = document.querySelectorAll(".done");

doneBtns.forEach((donebtn, i)=>{
    donebtn.addEventListener('click', ()=>{
        //const card = document.querySelectorAll('.card')[index];
        //card.style.transition = 'all 1s ease';
        //card.classList.toggle('green');
        //this.closest("div.col").toggle();
        doneColor(i);
    })
})



//Deletes cards radomnly not the specific one with the same delete button
function removeTask(i) {
   taskList.splice(i,1);
}

let removeBtns = document.querySelectorAll(".remove");

   removeBtns.forEach((removeBtn,i) => {
   removeBtn.addEventListener("click",function(){
     
    this.closest("div.col").remove();
    // console.log(removeBtn.closest("div.col"));
    // newelment.remove()
    //  card.style.opacity = '0' //deletes only when the opacity is 0
     //taskList.splice(i,1);
     //result.removeChild(result.children[i]);
     removeTask(i);
   
     
    })
})



//function to change the color of the importance button on different count clicks
function bagColor(importance) {
    if (importance == 2 && 3) {
        return "btn-warning";
    } else if (importance == 4 && 5) {
        return "btn-danger";
    }
        else{
            return "btn-success";
    }
    } 


//console.log(bagColor);

//Sorting items button from most clicks to less clicks. 
//forEach loop for every task(item) and get id(result) from container in HTML

document.getElementById("btnSort").addEventListener("click", function () {
    let newTask = taskList.sort((a, b) => b.importance - a.importance);
    console.log(newTask);

    document.getElementById("result").innerHTML ="";
    newTask.forEach(item => {
       
     document.getElementById("result").innerHTML +=
      `<div class="col mb-4 d-flex flex">
      <div class="card text-center p-3 mx-auto" style:"max-width:100%;">
      <div class="d-flex justify-content-between align-items-center">
        <span class="mb-2">
        <button class="btn btn-outline-info btn-sm text-dark fs-8 task-btn">Task</button></span>
        <i class="fa-regular fa-bookmark fa-xl" style="color: #bed31d;"></i></div>
        <img src="${item.image}" class="card-img-top img-fluid imgBx img-thumbnail max-width-100 h-100">
        <div class="card-body">
        <h3 class="card-title">${item.taskName}</h3>
        <h5 class="card-text">${item.description}</h5>
        <hr>
        <h5><i class="fa-solid fa-triangle-exclamation"></i> Priority level:
        <button class="btn btn-success myBtn"><span class="import">${item.importance}</span></button></h5>
        <hr>
        <p>Day and Time: ${item.dayTime} <br>Expected duration: ${item.duration} hour(s).</p>
        <button class="btn btn-success done"><i class="fa-solid fa-circle-check"></i> Done </button> <button class="btn btn-danger remove"><i class="fa-solid fa-trash-can"></i> Delete</button>
        </div>
      </div>
      </div>
    `;
    });

})