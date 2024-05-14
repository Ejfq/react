import {useState} from "react";

function Comp5(){
//let color = 'black'

let [color, setColor] = useState('black')
let [message, setMessage] = useState('안녕하세요')

let randomNum = 0;

const changeColor = (c) => {
    randomNum = Math.floor(Math.random() * randomColor.length);
     setColor(c)
     console.log(color)
     console.log(randomNum)
 }

const randomColor = ['black','red','blue','green','pink','yellow','purple']

    return(
        <>
            <button onClick={(e)=>setMessage('안녕하세요')}>입장</button>
            <button onClick={(e)=>setMessage('안녕히 가세요')}>퇴장</button>
            <h1 style = {{backgroundColor:color, color:"white"}}>{message}</h1>
            <button onClick={(e)=>changeColor('red')}>빨강</button>
            <button onClick={(e)=>changeColor('blue')}>파랑</button>
            <button onClick={(e)=>changeColor('green')}>초록</button>
            <button onClick={(e)=>changeColor(randomColor[randomNum])}>랜덤</button>
        </>
    )
}

export default Comp5;