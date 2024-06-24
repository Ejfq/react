import { useState, useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import axios from "axios";
import {Link, useNavigate, useParams} from 'react-router-dom'

const url = "http://192.168.0.7:8000/matjip/"

export default function MatjipUpdate(){

    const {id} = useParams();
    const [form, setForm] = useState({});
    const navigation = useNavigate();


    // const addressInput = (props) => {
    //     const AddressInput = (props) => {
    //         const [zodecode, setZonecode] = useState('');
    //         const [address, setAddress] = useState('');
    //         const [isOpen, setIsOpen] = useState('false');
    //   }
    //   const completeHandler = (data) => {
    //     const { address, zonecode } = data;
    //     setZonecode(zonecode);
    //     setAddress(address);
    //   };

    const mjSelect = async () =>{
        const result = await axios.get(url + id)
        setForm(result.data[0]);
        console.log(result.data[0])
    }

    useEffect(()=>{
        mjSelect();
    },[])

    function clickHandler(){
        axios.put(url + id, form)
        console.log(form)
        alert('수정 완료')
        navigation("/" + id)
    }

    return(
        <div>
            <h2 style={{textAlign:'center'}}>수정 페이지</h2>
            <a href={"/" + id}><button >수정 취소</button></a>
            <div className='box' style ={{width:1000 , margin:'auto'}}>
                    <label>사진 등록 : &ensp;</label><input type="file" name="image" className="form-control"
                    onChange={e => { setForm({ ...form, image: e.target.value }) }}></input>
                    <button>사진 업로드</button><br></br>
                    <label>맛집 상호명 : &ensp; </label> <input type="text" name= "name" value={form.name} width={300}
                    onChange={e => { setForm({ ...form, name: e.target.value }) }}></input><br></br>
                    <label>맛집 주소 : &ensp; </label><input type="text" name="address" value={form.address} id="roadAddress"
                    onChange={e => { setForm({ ...form, address: e.target.value }) }}></input><br></br>
                    <label>카테고리 : &ensp; </label><input type="text" name="address" value={form.category} id="roadAddress"
                    onChange={e => { setForm({ ...form, category: e.target.value }) }}></input><br></br>
                    {/* <button onClick={addressInput}>주소 검색</button> */}
                    <label>영업 시간:  &ensp; </label><input type="text" name="openTime" value={form.opentime} style={{width:100}} onChange={e => { setForm({ ...form, opentime: e.target.value }) }}></input> ~ 
                    <input type="text" name="closeTime" style={{width:100}} value={form.closetime} onChange={e => { setForm({ ...form, closetime: e.target.value }) }}></input><br></br>
                    <label>전화 번호 : &ensp; </label> <input type="text" name= "tel" value={form.tel} width={300} 
                    onChange={e => { setForm({ ...form, tel: e.target.value }) }}></input><br></br>

                
            </div>
            <div style={{textAlign:'center', marginTop:50}} >
                <button onClick={clickHandler} >수정</button>
            </div>
        </div>
    )
}