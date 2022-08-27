const button = document.getElementById("submit");
const task_list = document.getElementById('task_list');

function test(){

    const new_task = document.createElement('li');
    const label_task = document.createElement('label');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label_task.appendChild(checkbox);

    const task = document.createElement('span');
    const node = document.createTextNode(document.getElementById('task_text').value);
    task.appendChild(node);
    label_task.appendChild(task);

    new_task.appendChild(label_task);

    task_list.appendChild(new_task);

    if (document.getElementsByTagName('li').length === 26){
        button.disabled = true;
        button.style.cursor = 'not-allowed';
    } else {button.disabled = false;}

    document.getElementById('task_text').value = '';
    document.getElementById('task_text').focus();

}