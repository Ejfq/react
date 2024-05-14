import FilterableProductTable from './product'
function Header(props){
  console.log(props)
  return (
    <header>
    <h1>
      <a href='/'>{props.title}</a>
    </h1>
  </header>)
}

function Nav(props){
  const lis = [];
  for(let i = 0 ; i<props.topics.length; i++){
    let t = props.topics[i]
    lis.push(<li key = {t.id}><a href={'/read/' +t.id}>{t.title}</a></li>)
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

function Gallery(props){
  //const images = [];
  let images = props.images.map(img => 
    <div className ="col-3 m-3" key ={img.description}>
     <img src={img["image-src"]} style ={{width:300 , display:'inline'}} alt ={img.description}></img>
   </div>
  );

  // for (let i = 0 ; i <props.images.length; i++){
  //   const img = props.images[i];
  //   images.push(<div className ="col-3 m-3" key ={img.description}>
  //   <img src={img["image-src"]} style ={{width:300 , display:'inline'}} alt ={img.description}></img>
  // </div>)
  //}

  return (
    <div className="container">
      <div className = "row">
        {images}
      </div>
    </div>
  )
}


function App() {
  const girlImages = [
  {
    "description": "Redhead with frackles",
    "image-src": "https://images.pexels.com/photos/3228213/pexels-photo-3228213.jpeg"
  },
  {
    "description": "Girl in black dress",
    "image-src": "https://images.pexels.com/photos/1385472/pexels-photo-1385472.jpeg"
  },
  {
    "description": "Girl Sitting on Chair",
    "image-src": "https://images.pexels.com/photos/4725133/pexels-photo-4725133.jpeg"
  }
]
  const topics = [
                  {id : 1 , title : 'html', body : 'html is...'},
                  {id : 2 , title : 'csss', body : 'css is...'}, 
                  {id : 3 ,title : 'javascript', body : 'javacript is...'} ];
  return (
    <div className="App">
      {/* <Header title="REACT" />
      <Nav topics={topics}/>
      <Article title="Welcome" body="Hello,WEB </br> bye"/>
      <Gallery images={girlImages}/> */}
      <FilterableProductTable />
    </div>
  );
}

export default App;
