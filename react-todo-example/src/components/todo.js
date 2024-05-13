import React from "react";

function Todo(){

    const DATA = [
        { id: "todo-0", name: "Eat", completed: true },
        { id: "todo-1", name: "Sleep", completed: false },
        { id: "todo-2", name: "Repeat", completed: false },
      ];
    
    
    return(
            <div>
                <TodoOne data={DATA}></TodoOne>
            </div>
         );
}

function TodoOne(props){
    let lis = []

    props.data.forEach(element => {
        console.log(element)
        lis.push(
        <li className="todo stack-small" key = {element.id}>
        <TodoName element={element}/>
        <Btn/>
      </li>)
    });
    return(
        <div>
            {lis}
        </div>
    )
}

function Btn(){
    return (
        <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button type="button" className="btn btn__danger">
          Delete <span className="visually-hidden">Eat</span>
        </button>
        </div>
    )
}

function TodoName(props){

    return (
        <div className="c-cb">
        <input id={props.element.id} type="checkbox" />
        <label className="todo-label" htmlFor={props.element.id}>
          {props.element.name}
        </label>
      </div>
    )
}

export default Todo;