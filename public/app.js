var list = document.getElementById('list')


function addTodo() {
    var todo_item = document.getElementById("todo-item")
    var li =document.createElement('li')

    var input =document.createElement('input')
        
   var inputText=document.createTextNode(todo_item.value)
    input.appendChild(inputText)
    //li.setAttribute("class", "color")
     input.setAttribute("class" , "size")
     input.value = todo_item.value;
    
    
    
    var delBtn = document.createElement("button");
    var delText =document.createTextNode("DELETE")
    
    delBtn.setAttribute("class" , "blue")
    delBtn.setAttribute("onclick" , "deleteItem(this)")
    delBtn.appendChild(delText)



    var editBtn= document.createElement("button")
    var editText= document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class" , "blue")
    editBtn.setAttribute("onclick" , "editItem(this)")

    
    li.appendChild(input)
    
    li.appendChild(editBtn)
    li.appendChild(delBtn)
    
    list.appendChild(li)


    console.log(li)

    todo_item.value=""
}


function deleteItem(e){
e.parentNode.remove();
}

function deleteAll(){
    list.innerHTML=""
}


function editItem(e){
  
var val = e.parentNode.firstChild.nodeValue;
var editValue = prompt("Enter edit value" ,e.parentNode.firstChild.value )
e.parentNode.firstChild.value =editValue

}