const inputBoxes = document.querySelectorAll(".inputBox")
const addButton = document.getElementById("Add")

inputBoxes.forEach((inputBox) => {
    inputBox.onclick = function() {
        inputBox.style.width = "480px"
        inputBox.style.borderStyle = "outset"
    }
    inputBox.onmouseout = function() {
        inputBox.style.width = "440px"
        inputBox.style.borderStyle = "inset"
    }
})

addButton.addEventListener('click', function() {
    let taskDetails = []
    addButton.style.background = "#241818"
    inputBoxes.forEach(inputBox => {
        taskDetails.push(inputBox.value)
    })
    let taskName = taskDetails[0]
    let taskDescription = taskDetails[1]
    let taskDeadline = taskDetails[2]
    addTask(taskName, taskDescription, taskDeadline)
})

addButton.onmouseout = function() {
    addButton.style.background = "#cc4f43"
}

function addTask(task, description="-", deadline="-") {
    const taskList = document.querySelector('#task-list')
    const row = document.createElement('tr')

    if (task == "") {
        alert("You can't leave task field empty")
    }
    else {
        row.innerHTML = `
            <td>${task}</td>
            <td>${description}</td>
            <td>${deadline}</td>
            <td>
                <input type="radio" name="isCompleted"> Yes  
                <input type="radio" name="isCompleted"> No
            </td>
            <td id="delete"><i class="ion-trash-a"></td>
        `
        taskList.appendChild(row)
        const deleteButton = document.getElementById('delete')
        deleteButton.style.cursor = "pointer"
        deleteButton.onclick = function() {
            row.remove()
        }
    }

    inputBoxes.forEach(inputBox => {
        inputBox.value = null
    })
}