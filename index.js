const inputBox = document.querySelector('.input-js');
const listContainer = document.getElementById('list-container');
function addTask(){
  if (inputBox.value == ''){
    alert("You  must write something")
  }else{
    let li = document.createElement('li');
    li.innerText = inputBox.value
    listContainer.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

inputBox.addEventListener('keydown', (e) => {
  if(e.key==='Enter'){
    addTask();
  }
})


listContainer.addEventListener('click', function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked') 
  }else if(e.target.tagName === 'SPAN'){
    e.target.parentElement.remove();
  }
  saveData();
})

function saveData(){
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTasks(){
  listContainer.innerHTML = localStorage.getItem('data')
}

showTasks();
