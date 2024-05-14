import {useState} from 'react';
function Header(props){
  console.log(props)
  return (
    <header>
    <h1>
      <a href='/' onClick={(e)=>{
            e.preventDefault();
            props.onChangeMode()
        }}>{props.title}</a>
    </h1>
  </header>)
}

function Nav(props){
  const lis = [];
  for(let i = 0 ; i<props.topics.length; i++){
    let t = props.topics[i]
    lis.push(<li key = {t.id}><a href={'/read/' +t.id} id = {t.id} onClick={(e)=>{
        e.preventDefault();
        props.onChangeMode(e.target.id);
        //console.log(e.target.id)
    }}>{t.title}</a></li>)
  }
  return (
    <nav>
        <ol>
          {lis}
        </ol>
      </nav>
  )
}


function Article(props){
  return (
    <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
  )
}




function App() {
  let [mode, setMode] = useState('welcome');
  const topics = [
                  {id : 1 , title : 'html', body : 'html is...'},
                  {id : 2 , title : 'csss', body : 'css is...'}, 
                  {id : 3 ,title : 'javascript', body : 'javacript is...'} ];

    let [id, setId] = useState(1);

   let content = null;
   if(mode ==="welcome"){
        content = <Article title="Welcome" body="Hello,WEB </br> bye"/>
   }else {
        let title, body = null;
        for(let i = 0 ; i < topics.length ; i++){
            if(topics[i].id == id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title={title} body={body}/>
   }
  return (
    <div className="App">
      <Header title="REACT" onChangeMode={()=>{
        setMode('welcome');
      }} />
      <Nav topics={topics} onChangeMode={(id)=>{
        setMode('read');

        setId(id)
      }}/>
      {content}
    </div>
  );
}

export default App;
