import { useState, useRef, useEffect } from "react";

export default function Comp9(){
    let txtUsername = useRef(null);
    let txtAddress = useRef(null);
    let [formdata , setFormdata] = useState({username:"",address:""});
    let {username, address} = formdata

    useEffect(()=>{
        txtUsername.current.focus();
    }, [])
    
    const clickHandler = ()=>{
        //username + adddress 결과를 alert(추후fetch)
        alert('이름:' + username + '  주소:' +address);

        //input 초기화
        setFormdata({username:"",address:""})

        //username 입력태그에 focus
        txtUsername.current.focus();
        
    }

    const keyDownHandler = (e) =>{
        if(e.key ==='Enter'){
            clickHandler();
        }
    }

    const nextInput = (e) =>{
        if(e.key ==='Enter'){
            txtAddress.current.focus();
        }
    }


    return (
        <>
            <input ref={txtUsername} type = "text" name ="username" placeholder="이름입력" value={username} 
                    onKeyDown={nextInput}
                    onChange={e=>{setFormdata({...formdata, username:e.target.value})}}></input>
            
            <input ref={txtAddress} type = "text" name ="address" placeholder="주소입력" value = {address}
                    onKeyDown= {keyDownHandler}
                     onChange={e=>{setFormdata({...formdata, address:e.target.value})}}></input>

            <button onClick={clickHandler}>확인</button>
            <h2>이름: {username}</h2>
            <h2>주소: {address}</h2>
        </>
    )
}