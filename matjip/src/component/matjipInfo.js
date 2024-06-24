import axios from 'axios';
import { useState , useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom';


const url = "http://192.168.0.7:8000/matjip/"
const reviewUrl = "http://192.168.0.7:8000/review/"


export default function MatjipInfo(){


    let today = new Date();
    let hour = Number(today.getHours());
    let min = Number(today.getMinutes());
    let openCheck = <div></div>;

    let {id} = useParams();
    
    const navigation = useNavigate();

    let [form , setForm] = useState([]);
    let [review, setReview] = useState([]);
    let [reviewForm, setReviewForm] = useState([]);
    let [reviewInput, setReviewInput] = useState([false])

    const reviewbox = null;

    

    const callAPI = async ()=>{
        const result = await axios.get(url + id)
        const result2 = await axios.get(reviewUrl + id);
        setForm(result.data);
        setReview(result2.data);
        const openTime = result.data[0].opentime
        const closeTime = result.data[0].closetime
        
        let openHour = Number(openTime.substring(0, 2))
        let closeHour = Number(closeTime.substring(0,2))
        let closeMin = Number(closeTime.substring(3,5))

        
        


        // if(hour < openHour || hour > closeHour){
        //     openCheck = <div><h5 style={{color:'red'}}>영업전</h5></div>
        // }else if(hour = closeTime){
        //     if(min > closeMin){
        //         openCheck = <div><h5 style={{color:'red'}}>영업전</h5></div>
        //     }
        // }else{
        //     openCheck = <div><h5 style={{color:'blue'}}>영업중</h5></div>
        // }
        // console.log(openCheck)
        }



    useEffect(()=>{
        callAPI();
        setReviewForm({ ...reviewForm,id :id  })
    }, []);

    const delInfo = async () =>{
        const result = await axios.delete(url + id)
        alert('삭제완료')
        navigation('/')
    }

    const reviewInsert = async ()=>{
        
        console.log(reviewForm)
        const result = await axios.post(reviewUrl, reviewForm)
        callAPI();
   }
    
   const delReview = async (e) =>{
    const reviewId = e.target.parentElement.id
    const result = await axios.delete(reviewUrl+reviewId)
    callAPI();
   }
 

    return(
        <>
        <a href='/' style={{color:'black' , border:'none'}}><i class="fa-solid fa-arrow-left" style={{marginLeft:500}}></i></a>
            <div className='box' style ={{width:1000 , margin:'auto'}}>
                {form.map(fo =>
                    <div className='mjInfo' key ={fo.id}>
                        <a className="image fit"><img src={"/images/" + fo.image} alt="" width="600" height="338"/></a>
                        <h2 style={{margin:20}}>{fo.title}</h2>
                        <i className="fa-solid fa-location-pin">{' ' + fo.address}</i><br></br>
                        <i class="fa-regular fa-clock"> {fo.opentime} ~ {fo.closetime}</i><br></br>
                        <i class="fa-solid fa-phone"> {fo.tel}</i>
                    </div>
                )}
                <div style={{textAlign:'right'}}>
                <a href = {'/mjupdate/' + id}><button>수정</button></a>
                <button onClick={delInfo}>삭제</button>
            </div>
            </div>
            


            <div className='box' style ={{width:1000 , margin:'auto', marginTop:30}}>
                <div className='reviewRow'>
                    <span style={{paddingRight:20}}>리뷰 등록  </span>
                    id : <input type='text' placeholder='작성자 id' onChange={e => setReviewForm({ ...reviewForm,writer :e.target.value  })}></input>
                    password : <input type="password" placeholder='작성자 패스워드' onChange={e => setReviewForm({ ...reviewForm,password :e.target.value  })}></input>
                    <input type ='text' id='review' onChange={e => setReviewForm({ ...reviewForm,body :e.target.value  })} style={{width:300}}></input>
                    <button onClick={reviewInsert}>등록</button>
                </div>
                {review.map(re =>
                    <div className='reviewRow' id={re.reviewId}>
                        <h4 style={{width:'5%'}}>{re.writer}</h4>
                        <h5 style={{width:'10%'}}>{re.date.substring(2,10)}</h5>
                        
                        <h4 style={{width:'60%'}}>{re.body}</h4>
                        <button onClick={delReview}>삭제</button>
                    </div>
                )}
            </div>
        </>
    )
}