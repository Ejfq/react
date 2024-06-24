import React,{useState, useReducer} from 'react';

function countReducer(count, action){
    if(action.type == 'up'){
        return count = count+1
    }else if(action.type =='down'){
        return count = count-1
        }else if(action.type =='reset'){
        return count = 0;
    }
}


export default function App(){
    const [count, dispatch] =useReducer(countReducer, 0);



    function down(){
       dispatch({
        type:'down',
       })
    }
    
    function up(){
        dispatch({
            type:"up",
        })
    }

    function reset(){
        dispatch({
            type:'reset'
        })
    }

    return(
        <div>
            <button onClick={up}>up</button>
            <button onClick={down}>down</button>
            <button onClick={reset}>reset</button>
            <span>{count}</span>
        </div>
    )
}