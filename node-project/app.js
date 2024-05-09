const express = require("express"); 
const app = express(); 
const pool = require("./mysql")
const port = 3000; 
app.use(express.urlencoded({ extended: false })); 
app.use(express.json())

let emps = [{ no: 100, name : 'park' , age : 20 , point : 100} ,
 { no: 101, name : 'kim' , age : 14, point : 60} ,
  { no: 102, name : 'lee' , age: 30 ,point : 77}]
 
app.get("/", (req, res) => { 
  res.send("hello world!!!"); 
}); 

//전체조회 : 
app.get("/customer" , (req, res) => {
    
    // 2. SQL 실행 
    sql = "SELECT * FROM customer"; 
    pool.query(sql, function (err, results, fields) { 
    if (err) {     
    console.log(err);    
    } 

    // 3. 결과 처리 
    res.send(results);
    }); 

    
})

//단건조회 : path variable => GET , req.params
app.get("/customer/:id" , (req, res) => {
    const id = req.params.id;
    
        // 2. SQL 실행 
    sql = "SELECT * FROM customer where id=" + id ;
    pool.query(sql, function (err, results, fields) { 
    if (err) {     
    console.log(err);    
    } 
    
    // 3. 결과 처리 
    res.send(results);
    }); 
})
 
//등록 POST req.body
app.post("/customer", (req, res)=>{
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const address = req.body.address

   sql = `insert into customer set name = '${name}', email= '${email}' , phone = '${phone}' , address= '${address}' `
   pool.query(sql, function (err, results, fields) { 
    if (err) {     
    console.log(err);    
    } 
    res.send(results);
    }); 
})

//수정 PUT json => req.body
app.put("/customer/:id" , (req, res) =>{
    const id = req.params.id
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const address = req.body.address

   sql = `update customer set name = '${name}', email= '${email}' , phone = '${phone}' , address= '${address}' where id = ${id} `
   pool.query(sql, function (err, results, fields) { 
    if (err) {     
    console.log(err);    
    } 
    res.send(results);
    }); 
})

//삭제
app.delete("/customer/:id" , (req, res) =>{
    const id = req.params.id
    sql = `delete from customer where id = ${id}`
    pool.query(sql, function (err, results, fields) { 
        if (err) {     
        console.log(err);    
        } 
        res.send(results);
        });

})

app.route("/customer") 
.get( (req, res) => { res.send("고객정보조회");  }) 

app.listen(port, () => { 
  console.log(`server runing http://localhost:${port}`); 
});



// function searchNo(no){
//     for(let i = 0 ; i < emps.length;i++){

//     }
// }