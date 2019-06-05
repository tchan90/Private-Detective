const form = document.querySelector('#task-form');
const notelist = document.querySelector('.collection');
const noteinput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
    document.addEventListener('DOMContentLoaded', getNotes);
    form.addEventListener('submit', addNote);   //addNote
    notelist.addEventListener('click', removeNote); //removeNote
}

function getNotes(){
    let tostores;
    if(localStorage.getItem('notes')===null){
        tostores = [];
    }
    else{
        tostores = JSON.parse(localStorage.getItem('notes'));
    }
        tostores.forEach(function(tostore){ 
        const li = document.createElement('li');
        li.className = 'notes-message';
        li.appendChild(document.createTextNode(tostore));
        //create anchor 
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        //add li to ul
        notelist.appendChild(li);
    })
}

//ADD NOTE
function addNote(e){
    if(noteinput.value==='')
    {
        alert('Add a task')
    }

//create elements
const li = document.createElement('li');
li.className = 'notes-message';
li.appendChild(document.createTextNode(noteinput.value));
//create anchor 
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
link.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(link);
//add li to ul
notelist.appendChild(li);

storeNoteInLocalStorage(noteinput.value) //persist to local storage
//STORE NOTES
function storeNoteInLocalStorage(note){
    let tostore;
    if(localStorage.getItem('notes')===null){
        tostore = [];
    }else{
        tostore = JSON.parse(localStorage.getItem('notes'));
    }
    tostore.push(note);
    localStorage.setItem('notes', JSON.stringify(tostore));
    }

//clear input after task added
noteinput.value='';
e.preventDefault();
console.log(li);
}

//REMOVE NOTE
function removeNote(e){
    if(e.target.parentElement.classList.contains
        ('delete-item')){
            if(confirm('Are you sure?')){
               e.target.parentElement.parentElement.remove();   //remove icon and array      

               removeNoteFromLocalStorage(e.target.parentElement.parentElement);
            }
        }
}

//REMOVE NOTE FROM LOCAL STORAGE
function removeNoteFromLocalStorage(noteItem){
    let toremove;
    if(localStorage.getItem('notes')===null){
    }else{
        toremove=JSON.parse(localStorage.getItem('notes'));
    }
    toremove.forEach(function(note,index){
        if(noteItem.textContent===note){
            toremove.splice(index,1);
        }
    })
    localStorage.setItem('notes',JSON.stringify(toremove));
}

