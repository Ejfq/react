import{Routes, Route, NavLink} from 'react-router-dom'

import MatjipList from "./component/matjipList";
import MatjipInfo from './component/matjipInfo';
import MatjipInsert from './component/MatjipInsert';
import MatjipUpdate from './component/MatjipUpdate';

function App() {
  return (
    <div className="App">
      <ul className="nav flex-column">
      </ul>

      <Routes>
        <Route path = "/" element={<MatjipList/>}></Route>
        <Route path = "/:id" element ={<MatjipInfo/>}></Route>
        <Route path = "/mjinsert" element = {<MatjipInsert/>}></Route>
        <Route path = "/mjupdate/:id" element ={<MatjipUpdate/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;
