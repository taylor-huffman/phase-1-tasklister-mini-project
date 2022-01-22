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
      enterTaskAlert()
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
  
  // function sortItems() {
  //   let itemArray = getListItems()
  //   let itemValues = []
  //   debugger
  //   for (let item of itemArray)
  //   itemValues.push(item.attributes.value.value)
  //   console.log(itemValues.sort())
  // }
  // sortItems()
}

function buildEditedItem(task, priority) {
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
  // alert('Edit feature coming soon!')
  let taskItem = e.target.parentNode 
  debugger
  let inputField = document.createElement('input')
  let saveBtn = document.createElement('button')
  let selectPriority = document.createElement('select')
  let optHigh = document.createElement('option')
  let optMedium = document.createElement('option')
  let optLow = document.createElement('option')
  optHigh.value = 'high'
  optHigh.text = 'High'
  optMedium.value = 'medium'
  optMedium.text = 'Medium'
  optLow.value = 'low'
  optLow.text = 'Low'
  selectPriority.add(optHigh)
  selectPriority.add(optMedium)
  selectPriority.add(optLow)
  selectPriority.classList.add('task_priority')
  inputField.type = 'text'
  inputField.value = taskItem.textContent.replace('EditX', '')
  debugger
  taskItem.classList.remove('high', 'medium', 'low')
  debugger
  taskItem.setAttribute('value', '')
  debugger
  taskItem.textContent = ''
  debugger
  taskItem.appendChild(inputField)
  taskItem.appendChild(selectPriority)
  debugger
  inputField.classList.add('edit_input')
  debugger
  saveBtn.addEventListener('click', saveEdit)
  saveBtn.textContent = 'Save'
  saveBtn.classList.add('save_button')
  taskItem.appendChild(saveBtn)
}

function enterTaskAlert() {
  let alert = document.getElementById('alert')
  alert.textContent = '* Please enter a task first!'
}

const sortDropDown = document.getElementById('sort')
sortDropDown.addEventListener('click', () => alert('Sorting feature coming soon!'))

function saveEdit(e) {
  // alert('Saved!')
  // let listItem = document.getElementsByClassName('list-item')
  debugger
  if (e.target.parentNode.childNodes[0].value !== '') {
    debugger
    let alert = document.getElementById('alert')
    e.target.parentNode.remove()
    debugger
  buildTaskItem(e.target.parentNode.childNodes[0].value, e.target.parentNode.childNodes[1].value)
  debugger
  alert.textContent = ''
  // form.reset()
  } else {
    enterTaskAlert()
  }
}

function getListItems() {
  let itemsArray = document.querySelectorAll('#tasks p')
  return itemsArray
}