let taskList = JSON.parse(tasks);
console.log(taskList);


//Created objects of a JSON array
//ForEach loop+=to get all the objects values on bootstrap cards with the id(result) of the container in HTML file


taskList.forEach(item => {
    
    document.getElementById("result").innerHTML +=
     `
    <div class="card text-center p-3" style:"max-width: 100%;">
    <img src="${item.image}" class="card-img-top img-fluid max-width:100% h-100 ">
    <div class="card-body">
      <h3 class="card-title" style ="color :">${item.taskName}</h3>
      <h5 class="card-text">${item.description}</h5>
      <p>Priority level: 
      <button class="btn btn-success myBtn"><span class="import">${item.importance}</span></button></p>
      <p>Day and Time: ${item.dayTime} <br> Expected duration: ${item.duration} hour(s).</p>
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
 
//function that stops counting on 5 and 1 index num 


function inImportance(i) {
    if (taskList[i].importance<5){   
    taskList[i].importance++;
    console.log(taskList[i]);
    document.querySelectorAll(".import")[i].innerText = taskList[i].importance;
    btns[i].style.backgroundColor = bagColor(taskList[i].importance);
}
}
//function to change the color of the importance button on different count clicks

function bagColor(importance) {
if (importance = 2 || 3) {
    return "btn-warning";
} else if (importance = 4 || 5) {
    return "btn-danger";
}
    else{
        return "btn-success";
}
} 

//Sorting items button from most clicks to less clicks. 
//forEach loop for every task(item) and get id(result) from container in HTML

document.getElementById("btnSort").addEventListener("click", function () {
    let newTask = taskList.sort((a, b) => b.importance - a.importance);
    console.log(newTask);

    document.getElementById("result").innerHTML ="";
    newTask.forEach(item => {
       
    
        document.getElementById("result").innerHTML +=
         `
        <div class="card text-center p-3" style:"max-width: 100%;">
        <img src="${item.image}" class="card-img-top img-fluid max-width:100% h-100">
        <div class="card-body">
          <h3 class="card-title" style ="color :">${item.taskName}</h3>
          <h5 class="card-text">${item.description}</h5>
          <p>Priority level:
          <button class="btn btn-success myBtn"><span class="import">${item.importance}</span></button></p>
          <p>Day and Time: ${item.dayTime} <br>Expected duration: ${item.duration} hour(s).</p>
          </div>
      </div>
    `;
    });

})