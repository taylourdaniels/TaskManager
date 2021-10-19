const startMenu = `TASK MANAGER 
What would you like to do (Please enter one of the options below): "TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`

let response;

response = prompt(`${startMenu}`)

//let tasks = [`Charge MacBook
//Master JavaScript`]
let remove
let removeTasks
let removeIndex

while (true) {
  if (response.toUpperCase() === `CLOSE`) {
    alert(`Thank you for using Task Manager!`)
  } else if (response.toUpperCase() === `TASKS`) {
    alert(tasks)
    prompt(startMenu)

  } else if (response.toUpperCase() === `NEW`) {
    response = prompt(`Please enter the new task:`)
    alert(`"${response}" has been added!`)
    prompt(startMenu)
    alert(`${tasks} \n${response}`)

  } else if (response.toUpperCase() === `REMOVE`) {
    const mapOfTasks;
    while (true) {
      //
      for (let i = 0; i < tasks.length; i++) {
        mapOfTasks.set(tasks[i], (i+1))
      }
        
      removeIndex = prompt(`Please enter a number to remove:\n${tasks}`) - 1
        
      if (removeIndex >= 0 && removeIndex < tasks.length) { 
        removeTasks = tasks.splice(removeIndex,1)
      }
    }

  } else {
    prompt(startMenu)
  }
  break
}
