import Comp1 from "./component/Comp01"
import Comp2 from "./component/Comp02"
import Comp3 from "./component/Comp03"
import Comp4 from "./component/Comp04"
import Comp5 from "./component/Comp05";
import Comp6 from "./component/Comp06";
import Comp7 from "./component/Comp07";
import Comp8 from "./component/Comp08";
import Comp9 from "./component/Comp09";
import TodoApp from "./page/TodoApp";
import {Routes, Route ,Link, NavLink, useParams, useLocation, useNavigate} from 'react-router-dom'
import {Card, CardBody} from 'reactstrap'



function App() {
  const compList = [];
  for(let i = 1 ; i <= 9 ; i++){
    compList.push('Comp0'+i);
  }

  // const DATA = [
  //   { id: "todo-0", name: "Eat", completed: true },
  //   { id: "todo-1", name: "Sleep", completed: false },
  //   { id: "todo-2", name: "Repeat", completed: false },
  // ];

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
      {compList.map(c =>(
            <li className="nav-item"><NavLink className="nav-item" to = {"/"+c}>{c}</NavLink> </li>
          ))}
        </ul>
        </div>
        <div className="col-8">
          <Card>
            <CardBody>
              <Routes>
                <Route path ='/Comp01' element={<Comp1></Comp1>}></Route>
                <Route path ='/Comp02' element={<Comp2/>}></Route>
                <Route path ='/Comp03' element={<Comp3/>}></Route>
                <Route path ='/Comp04' element={<Comp4/>}></Route>
              </Routes>
            </CardBody>
          </Card>

           </div>
    </div>
    </div>
  );
}

export default App;
