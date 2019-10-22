const todo = [
    {text : "clean kitchen" , completed : true },
    {text : "coding" , completed : true },
    {text : "working" , completed : false } 

]


const incompleted = todo.filter (function(todo){
    return !todo.completed


})
const summary = document.createElement('h2')
summary.textContent = `you have ${incompleted.length}` 
document.querySelector('body').appendChild(summary)
