/* INITIAL CODE THAT JUST ADDS AND DELTED TASKS 

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form= document.querySelector("form")
  console.log(form)
  //listen for a submit event on the <form> element.
  form.addEventListener("submit", (e) =>{
    // prevent the default behavior of the submit event, when our event listener "sees" the event, we use preventDefault()
    e.preventDefault()
    newToDo(e.target['new-task-description'].value)
    form.reset()
  })
});

//function that adds tasks to the DOM when submit event takes place 
function newToDo(todo){
  let li= document.createElement("li")
  let button = document.createElement('button')
  //listen for a click on the created button 
  button.addEventListener("click", handleDelete)
  button.textContent = " X"
  li.textContent = `${todo} `
  //append the button onto the task 
  li.appendChild(button)
  //append the tasks (li) onto the ul with the id #tasks 
  document.querySelector("#tasks").appendChild(li)
}

//function that deleted both the task and the X button when button is clicked 
function handleDelete (e){
  e.target.parentNode.remove()
}
*/

document.addEventListener("DOMContentLoaded", ()=>{
  const form = document.querySelector("form");

  //listen for a submit event on the <form> element.
  form.addEventListener("submit", (e) => {
    // prevent the default behavior of the submit event, when our event listener "sees" the event, we use preventDefault()
    e.preventDefault(); 
    const taskDescription = e.target['new-task-description'].value;
    const dropDownValue = e.target['priority'].value;
    const userValue = e.target['user'].value;
    const durationValue = e.target['duration'].value;
    const dateDueValue = e.target['date-due'].value;

    newToDo(taskDescription, dropDownValue, userValue, durationValue, dateDueValue);
    form.reset();
  }); 
})

//function that adds tasks, priority value assigned, user, duration and due date of tasks to the DOM when submit event takes place 
function newToDo (todo, value, user, duration, dateDue){
  let li = document.createElement("li");
  let button = document.createElement("button")

  //listen for a click on the created button 
  button.addEventListener('click', handleDelete)
  button.textContent = " X";

  li.innerHTML = `Task: ${todo} <br>
   Priority: ${value} <br>
   User: ${user} <br>
   Duration: ${duration} <br>
   Due Date: ${dateDue} `;
  li.style.color = priorityColor(value);
  
  //append the button onto the tasks + additional items 
  li.appendChild(button);
  //append the tasks (li) onto the ul with the id #tasks
  document.querySelector("#tasks").appendChild(li)
}

//function that delets the task and additional items plus the X button when button is clicked 
function handleDelete (e){
  e.target.parentNode.remove()
}

//function to select the color of the tasks based on the priority value selected 
function priorityColor(value) {
  const lowerCasePriority = value.toLowerCase();

  if (lowerCasePriority === 'high') {
    return 'red';
  } else if (lowerCasePriority === 'medium') {
    return 'yellow';
  } else if (lowerCasePriority === 'low') {
    return 'green';
  } else {
    return 'black';
  }
}

