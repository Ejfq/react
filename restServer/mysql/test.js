    const {pool} = require("./index")

    // 2. SQL 실행 
    function selectAll(){

        sql = "SELECT * FROM customer"; 
        pool.query(sql, function (err, results) { 
        if (err) {     
            console.log(err);    
        } 
    
        // 3. 결과 처리 
        console.log(results);
        //res.send(results);
        }); 
    }

    function selectInfo(){
        const sql = "SELECT * FROM customer where id=?"; 
        const id = 5;
        pool.query(sql,id,(err,results) => {
            if (err){
                console.log(err);
            }

            console.log(results);
        })
    }

    function insert(){
        const sql = "insert into customer set ?"
        const customer = {name:"kim", email:"234@62", phone:"2352-235", address:"efef"};
        pool.query(sql, customer, (err, results)=>{
            if (err){
                console.log(err);
            }

            console.log(results);
        })
    }

    function update(){
        const sql = "update customer set ? where id = ?"
        const customer = {name:"choi", email:"asdf4@62"};
        const id = 5;

        pool.query(sql, [customer , id], (err, results)=>{
            if (err){
                console.log(err);
            }

            console.log(results);
        })

    }

    function deleteC(){
        const sql = "delete from customer where id = ?";
        const id = 5;
        pool.query(sql, id, (err, results)=>{
            if (err){
                console.log(err);
            }

            console.log(results);
        })
    }



    //selectAll();
    //insert();
    //selectInfo();
    //update();
    deleteC();