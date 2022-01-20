document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.target.new_task.value !== '') {
      let alert = document.getElementById('alert')
    buildTaskItem(e.target.new_task.value, e.target.priority.value)
    alert.textContent = ''
    form.reset()
    } else {
      buildEnterTaskAlert()
    }
  })

});

function buildTaskItem(task, priority) {
  let p = document.createElement('p')
  let deletetBtn = document.createElement('button')
  let editBtn = document.createElement('button')
  editBtn.addEventListener('click', editItem)
  editBtn.textContent = 'Edit'
  editBtn.classList.add('edit-button')
  deletetBtn.addEventListener('click', deleteItem)
  deletetBtn.textContent = 'X'
  deletetBtn.classList.add('delete-button')
  p.textContent = task
  p.appendChild(editBtn)
  p.appendChild(deletetBtn)
  p.classList.add('list-item', priority)
  document.querySelector('#tasks').appendChild(p)
  if (priority === 'high') {
    let priorityNumber = 1
    p.setAttribute('value', priorityNumber)
  } else if (priority === 'medium') {
    let priorityNumber = 2
    p.setAttribute('value', priorityNumber)
  } else {
    let priorityNumber = 3
    p.setAttribute('value', priorityNumber)
  }
}


function deleteItem(e) {
  e.target.parentNode.remove()
}

function editItem(e) {
  alert('Edit feature coming soon!')
  // let taskItem = e.target.parentNode 
  // debugger
  // let inputField = document.createElement('input')
  // inputField.type = 'text'
  // inputField.value = taskItem.textContent
  // debugger
  // // let editBtn = document.getElementsByClassName('edit-button')
  // // e.editBtn.innerHTML = 'Save'
  // taskItem.classList.remove('high', 'medium', 'low')
  // debugger
  // taskItem.setAttribute('value', '')
  // debugger
  // // inputField.textContent = taskItem.textContent
  // // debugger
  // taskItem.textContent = ''
  // debugger
  // taskItem.appendChild(inputField)
  // debugger
  // inputField.classList.add('edit-input')
  // debugger
}

function buildEnterTaskAlert() {
  let alert = document.getElementById('alert')
  alert.textContent = '* Please enter a task first!'
}

const sortDropDown = document.getElementById('sort')
sortDropDown.addEventListener('click', () => alert('Sorting feature coming soon!'))