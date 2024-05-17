import{Routes, Route, NavLink} from 'react-router-dom'
import BoardList from './components/BoardList'
import Home from './components/Home';
import BoardInfo from './components/BoardInfo';
import BoardInsert from './components/BoardInsert';

function App() {
  return (
    <div className="App">
       <ul className="nav flex-column">
        <li className="nav-item"><NavLink className="nav-item" to = "/">Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-item" to = "/boardlist">BoardList</NavLink></li>
        {/* <li className="nav-item"><NavLink className="nav-item" to = "/boardread">BoardRead</NavLink></li> */}
        {/* <li className="nav-item"><NavLink className="nav-item" to = "/boardupdate">BoardUpdate</NavLink></li> */}
       </ul>

       <Routes>
        <Route path ="/" element ={<Home/>}></Route>
        <Route path ="/boardlist" element ={<BoardList/>}></Route>
        <Route path ="/board/:id" element={<BoardInfo/>}></Route>
        {/* <Route path ="/boardupdate" element ={<BoardUpdate/>}></Route> */}
        <Route path ="/boardinsert" element ={<BoardInsert/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
