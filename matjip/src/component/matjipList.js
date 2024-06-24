import axios from 'axios';
import { useState , useEffect} from "react";
import {Link} from 'react-router-dom'

const url = "http://192.168.0.7:8000/matjip"


export default function MatjipList(){

    let [list , setList] = useState([]);

    const callAPI = async ()=>{
        const result = await axios.get(url)
        setList(result.data)
        }
    

    useEffect(()=>{
        callAPI();
    }, [])

    return(
        <div className="App">
            <section id="banner" data-video="images/banner" style={{height:10}}>
                <div class="inner">
					<header>
                        <h2>대구 맛집 정보</h2>
					</header>
				</div>
			</section>



        <div id="main">
            <div class="inner">
                <div style={{textAlign:"right", marginRight:30, marginBottom:50}}>
                    <a href='/mjinsert' ><button >맛집 등록</button></a>
                </div>
                <div className="thumbnails">

                    {list.map(li => 
                        <div className="box">
                        <a className="image fit"><img src={"/images/" + li.image} alt="" width="600" height="338"/></a>
                        <div className="inner">
                            <h3 style={{display:'inline'}}>{li.name}</h3><span style={{fontSize:12}}>{'  '+ li.category}</span>
                            <h5>{li.address}</h5>
                            <h5>영업시간 : {li.opentime} ~ {li.closetime}</h5>
                            <h5>전화번호 : {li.tel}</h5>
                            <a href={"/" + li.id} className="button fit" >상세보기</a>
                        </div>
                    </div>                        
                    )}
  
                    
                </div>
                 </div>
            </div>
        </div>
    )
}