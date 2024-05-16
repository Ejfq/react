import {Routes, Route ,Link, NavLink, useParams, useLocation, useNavigate} from 'react-router-dom'
import styled from 'styled-components';
import {Card, CardBody} from 'reactstrap'
const SimpleButton = styled.button`
  color : white;
  background-color : purple;
`;
const LargeButton = styled(SimpleButton)`
  font-size : 2rem;
  margin : 1rem;
`;
function ReactButton(props){
  return <button className={props.className}>{props.children}</button>
}
const ReactLargeButton = styled(ReactButton)`
  background-color : yellowgreen;
  color : white
`


function Home(){
  const style = {fontSize:"3rem"}
  return (

    <div>
      <h2>Home</h2>
      <div style={{color:"tomato"}}>home...</div>
      <SimpleButton>스타일드컴포넌트</SimpleButton>
      <LargeButton>상속</LargeButton>
      <ReactButton></ReactButton>
      <ReactButton></ReactButton>
      <ReactLargeButton>상속라지</ReactLargeButton>
    </div>
  );
}

var contents = [
  { id: 1 , title : "HTML", description:"HTML is.."},
  { id: 2 , title : "JS", description:"JS is.."},
  { id: 3 , title : "React", description:"React is.."}
]

function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      <ul className="nav nav-tabs">
        {contents.map((content)=>(
          <li className="nav-item" key ={content.id}>
            <NavLink className="nav-link" to ={"/topics/" + content.id}>{content.title}</NavLink>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/:topic_id" element={<Topic/>}></Route>
      </Routes>
    </div>
  )
}

function Topic(){
  var params = useParams();
  var topic_id = Number(params.topic_id)
  console.log(params)
  const navigation = useNavigate();

  const topic = contents.find(c=>c.id === topic_id)
  const goHome = ()=>{
    navigation("/topics")
  }
  const goBack = ()=>{
    navigation(-1)
  }
  return (
    <div>
      <h3>{topic.title}</h3>
      {topic.description}
      <div className="m-3">
        <button onClick={goBack} className='btn btn-success me-3'>뒤로가기</button>
        <button onClick={goHome} className='btn btn-info'>홈으로</button>
      </div>
    </div>
  )
}

function Contact(){
  const location = useLocation();
  const search = new URLSearchParams(location.search)
  console.log(search)
  return(
    <div>
      <h2>Contact</h2>
      Contact...
      <div>이름 : {search.get('name')}</div>
      <div>나이 : {search.get('age')}</div>
    </div>
  )
}


function App() {


  
  return (
    <div className="App">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
      <h1>Hello react router DOM</h1>
      </div>
      </nav>
      <div className="row">
       <div className="col-4">
        <ul className="nav flex-column">
          <li className="nav-item"><NavLink className="nav-item" to = "/">Home</NavLink> </li>
          <li className="nav-item"><NavLink className="nav-item" to = "/topics">Topics</NavLink> </li>
          <li className="nav-item"><NavLink className="nav-item" to = "/contact">Contact</NavLink> </li>
          
       </ul>
       </div>
      
      <div className="col-8">
        <Card>
          <CardBody>
      <Routes>
        <Route path ="/" element={<Home />}></Route>
        <Route path ="/topics/*" element={<Topics />}></Route>
        <Route path ="/contact" element={<Contact />}></Route>
      </Routes>
      </CardBody>
      </Card>
      </div>
      </div>
    </div>
  );
}

export default App;
