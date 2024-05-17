import axios from 'axios';
import { useState, useRef, useEffect } from "react";




export default function BoardInsert(){
    let [form,setForm] = useState({
        "id":0,
        "title":"",
        "body":"",
        "dt":"",
        "writer":""
    });

    async function insertForm(){
        console.log(form)
        const ins = await axios.post(`http://localhost:8000/board`, form)
        console.log(ins)
    }

    return (
        <div>
            <ul className='nav'>
                <li className='nav-item'>
                    <span>게시글 제목 : </span><input type='text' id='boardTitle' 
                    onChange={e=>{setForm({...form,title:e.target.value})}}></input>
                </li>
                <li className='nav-item'>
                    <span>작성자 : </span><input type='text' id='boardWriter' 
                    onChange={e=>{setForm({...form,writer:e.target.value})}}></input>
                </li>
                <li className='nav-item'>
                    <span>게시글 내용 : </span><input type='text' id='boardBody' 
                    onChange={e=>{setForm({...form,body:e.target.value})}}></input>
                </li>
                <button onClick={insertForm}>등록</button>
                <button>초기화</button>
            </ul>
        </div>
    )
}