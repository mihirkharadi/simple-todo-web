

const mainTodoElem=document.querySelector(".todo-list-element");
const inputValue=document.getElementById("inputValue");




const todoListFromLocal=()=>
{
   return JSON.parse(localStorage.getItem("browserTodoList"));
}

const addTodoListLocalStorage=(localTodoList)=>
{
    return localStorage.setItem("browserTodoList" , JSON.stringify(localTodoList));
}

let localTodoList=todoListFromLocal() || [];



const addTodoDynamicElem=(curElem)=>
{
    const divElem=document.createElement("div");
    divElem.classList.add("main_todo_div"); 
    divElem.innerHTML=`<li>${curElem}</li><button class="deleteBtn">
    Delete</button>`;

    mainTodoElem.append(divElem);
};




const addTodo=(e)=>
{
    e.preventDefault(); 



const todoListValue=inputValue.value.trim();
inputValue.value="";




if(todoListValue!=="" &&!localTodoList.includes(todoListValue))
{
    {
        localTodoList.push(todoListValue);
        localTodoList=[...new Set(localTodoList)];
        console.log(localTodoList);
  
  
  localStorage.setItem("browserTodoList" ,
      JSON.stringify(localTodoList));
    }

    addTodoDynamicElem(todoListValue);
}
};
   










const showTodoList=()=>
{
   console.log(localTodoList);
   localTodoList.forEach((curElem)=>
{
  addTodoDynamicElem(curElem);
});
    
};

showTodoList();

// *Remove data

const removeTodoElem=(e)=>
{
  const todoToRemove=e.target;
  let todoListContent =todoToRemove.previousElementSibling.innerText;
  let parentElem=todoToRemove.parentElement;
  console.log(todoListContent);



  localTodoList=localTodoList.filter((curElem)=> 

{
   return curElem !==todoListContent.toLowerCase();
    
});

addTodoListLocalStorage(localTodoList);
parentElem.remove();


  console.log(localTodoList);
  
}





document.querySelector(".btn").addEventListener('click',
    (e)=>
    {
       addTodo (e);
    }
);

mainTodoElem.addEventListener('click' ,(e)=>
    {
        e.preventDefault();
        console.log(e.target.classList.contains('deleteBtn'));
        if(e.target.classList.contains('deleteBtn'))
        {
            removeTodoElem(e);    
        }
        
      
    });


