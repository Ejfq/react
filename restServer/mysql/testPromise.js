const mysql = require("./index");


//const selectAll = async () =>{
async function selectAll(){
    const sql = "select * from customer"
    const result = await mysql.query(sql)
   
}

async function selectInfo(id){
    const sql = "select * from customer where id = ?";
    const result = await mysql.query(sql, id)
    console.log(result)
    
    //.then(res => console.log(result));
   
}

async function insert(){
    const sql = "insert into customer set ?";
    const customer = {name:"lee", email:"2@df.d" , phone:"523-53", address:"seoul"};
    const result = await mysql.query(sql, customer);

    console.log(result)
}

async function update(id){
    const sql = "update customer set ? where id = ?";
    const customer = {email : "11@11" , phone :"11-22"}
    const result = await mysql.query(sql, [customer, id]);

    console.log(result)
}

async function deleteCust(id){
    const sql = "delete from customer where id = ?";
    const result = await mysql.query(sql, id);

    console.log(result)
}

//selectAll();
//selectInfo(6);
//insert();
//update(3);
//deleteCust(2);
