import axios from 'axios';
import { useState , useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom';


const url = "http://localhost:8000/board/"

export default function BoardInfo(){
    let {id} = useParams();
    const navigation = useNavigate();
    
    const backPage = ()=>{
        navigation(-1)
    }

    //state
    let [form,setForm] = useState({
        "id":0,
        "title":"",
        "body":"",
        "dt":"",
        "writer":""
    });

    //callAPI
    const callAPI = async () =>{
        const board =await axios.get(`http://localhost:8000/board/${id}`);
        setForm(board.data[0]);
    }

//useEffect
useEffect(()=>{
    callAPI();
},[])

async function delBtn (){
    const del = await axios.delete(`http://localhost:8000/board/${id}`)
    console.log(del.data)
    navigation('/boardlist')
}

return(
    <div>
       <div className="card" style={{width: 800}}>
            <table className='table table-success table-striped' style={{width:800}}>
            <div className = "card-head">
                <tbody>
                <tr>
                    <th style={{width:'5%'}}>게시글id :  {form.id}</th>
                    <th style={{width:'10%'}}>게시글 제목 : {form.title}</th>
                    <th style={{width:`10%`}}>작성자 :  {form.writer}</th>
                    <th style={{width:`10%`}}>작성시간 :  {form.dt}</th>
                </tr>
                </tbody>
             </div>
            </table>
        <div className="card-body">
            
                <p className="card-text">{form.body}</p>
                <button href="#" className="btn btn-primary" onClick={backPage}>뒤로가기</button>
                <a href='/boardlist'><button href="#" className="btn btn-primary">목록으로</button></a>
                <button className="btn btn-primary" onClick={delBtn}>삭제</button>
            
        </div>
        
        </div> 
    </div>
)

}