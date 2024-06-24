import React, { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import Post from './Post';


export default function MatjipInsert(){

    let url = 'http://192.168.0.7:8000/matjip'
    const [form, setForm] = useState({});
    const navigation = useNavigate();


    const file = new FormData();
    // file.append()


    async function clickHandler(){
        //file.append("file", )

        await axios.post(url, form)
        console.log(form)
        alert('등록 완료')
        navigation("/")
    }

    const [enroll_company, setEnroll_company] = useState({
        address:'',
    });
    
    const [popup, setPopup] = useState(false);
    
    const handleInput = (e) => {
        setEnroll_company({
            ...enroll_company,
            [e.target.name]:e.target.value,
        })
    }
    
    const handleComplete = (data) => {
        setPopup(!popup);
    }
        


    return(
        
        <div>
            <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
            <h2 style={{textAlign:'center'}}>등록 페이지</h2>
            <a href='/' style={{color:'black' , border:'none'}}><i class="fa-solid fa-arrow-left" style={{marginLeft:500}}></i></a>
            <div className='box' style ={{width:1000 , margin:'auto', textAlign:'left'}}>
                    <label style={{marginLeft:200, width:'15%'}}>사진 등록</label><input type="file" name="image"  className="form-control"
                    onChange={e => { setForm({ ...form, image: e.target.value.substring(12) }); console.log(e.target.value.substring(12)) }}></input>
                    <button>사진 업로드</button><br></br>
                    <label style={{marginLeft:200, width:'15%'}}>맛집 상호명</label> <input type="text" name= "name" width={300}
                    onChange={e => { setForm({ ...form, name: e.target.value }) }}></input><br></br>


                    <div className="address_search" ><label style={{marginLeft:200, width:'15%'}}>맛집 주소</label>
                        <input className="user_enroll_text" placeholder="주소"  type="text" required={true} name="address" id = 'address' value={enroll_company.address}/>
                        <button onClick={handleComplete}>우편번호 찾기</button>
                        {popup && <Post company={enroll_company} setcompany={setEnroll_company}></Post>}
                    </div>


                    <label style={{marginLeft:200, width:'15%'}}>카테고리</label><input type="text" name="address" id="roadAddress"
                    onChange={e => { setForm({ ...form, category: e.target.value }) ; setForm({ ...form, address: document.getElementById('address').value })}}></input><br></br>
                    <label style={{marginLeft:200, width:'15%'}}>영업 시간</label><input type="text" name="openTime" style={{width:100}} onChange={e => { setForm({ ...form, opentime: e.target.value }) }}></input>
                    <h5 style={{width:'3%', display:'inline-block' ,textAlign:'center'}}>~</h5> 
                    <input type="text" name="closeTime" style={{width:100}} onChange={e => { setForm({ ...form, closetime: e.target.value }) }}></input><br></br>
                    <label style={{marginLeft:200, width:'15%'}}>전화 번호</label> <input type="text" name= "tel" width={300} 
                    onChange={e => { setForm({ ...form, tel: e.target.value }) }}></input><br></br>

                
            </div>
            <div style={{textAlign:'center', marginTop:50}} >
                <button onClick={clickHandler} >등록</button>
            </div>
        </div>
    )
}