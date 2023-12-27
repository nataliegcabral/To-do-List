let task = document.getElementById('task')

let tasks = []

task.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        tasks.push(task.value)

        if(task.value == '') {
            alert('Insira uma tarefa válida!')

        } else {

            let taskLi = document.createElement('li')
            taskLi.innerHTML += task.value
            list.appendChild(taskLi)

            let checkbox = document.createElement('button')
            checkbox.innerHTML = ''
            taskLi.appendChild(checkbox)

            let deleteButton = document.createElement('button')
            deleteButton.innerHTML = `<span class="material-symbols-outlined">
            delete
            </span>`
            deleteButton.classList.add('delete')
            taskLi.appendChild(deleteButton)
            
            checkbox.addEventListener('click', () => {
                if(taskLi.classList.contains('done') || checkbox.classList.contains('checked')) {
                    taskLi.classList.remove('done');
                    checkbox.classList.remove('checked')
                } else {
                    taskLi.classList.add('done');
                    checkbox.classList.add('checked');
                }            
            });

            deleteButton.addEventListener('click', function() {
                taskLi.remove()
            })            
        }

        document.getElementById('task').value = ''
        
    }
})





