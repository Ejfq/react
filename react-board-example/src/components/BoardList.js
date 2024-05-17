import axios from 'axios';
import { useState , useEffect} from "react";
import {Link} from 'react-router-dom'


const url = "http://localhost:8000/board"

function BoardList(){
    let [boards, setBoard] = useState([]);
    let [loading, setLoading] = useState(false);

    const callApi = async () =>{ 
        setLoading(true);
        await axios.get(url).then(res=>
            setBoard(res.data),
        )
        setLoading(false)
    }
   
    useEffect(()=>{
        callApi();
    },[])

    if(loading) return <div class="position-absolute top-50 start-50"><h1>로딩중입니다.......</h1></div>

    return(
        <div>
            <table className='table table-striped table-hover'>
            <thead>
            <tr>
                <th scope="col">글ID</th>
                <th scope="col">글제목</th>
                <th scope="col">작성일자</th>
                <th scope="col">작성자</th>
            </tr>
            </thead>
            <tbody>
            {boards.map(b => 
                <tr key = {b.id}>
                    <td >{b.id}</td>
                    <td ><Link to={`/board/${b.id}`}>{b.title}</Link></td>
                    <td >{b.dt}</td>
                    <td >{b.writer}</td>
                </tr>
            )}
            </tbody>
            </table>
            <a href='/boardinsert'><button >글등록</button></a>
        </div>
    )

}

export default BoardList;