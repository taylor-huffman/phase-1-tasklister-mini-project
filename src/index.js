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
  p.classList.add(priority)
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
  alert('Ready to edit?!')
}

function buildEnterTaskAlert() {
  let alert = document.getElementById('alert')
  alert.textContent = '* Please enter a task first!'
}