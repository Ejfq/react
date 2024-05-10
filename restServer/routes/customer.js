const express = require("express");
const router = express.Router();

const mysql = require("../mysql") //index파일은 생략가능

const sql = {
    customerList : "select * from customer",
    customerInfo : "select * from customer where id = ?",
    customerInsert : "insert into customer set ?",
    customerUpdate : "update customer set ? where id = ?",
    customerDelete : "delete from customer where id = ?"
}

//전체조회
router.get("/", async (req, res) => {
    let result = await mysql.query(sql.customerList);
    res.send(result); 
});

//단건조회
router.get("/:id", async (req, res) => {
    let id = req.params.id;
    let result = await mysql.query(sql.customerInfo, id);
    res.send(result);
})

//등록
router.post("/" , async (req, res) => {
    let result = await mysql.query(sql.customerInsert, req.body)
    if(result.affectedRows == 1){
        res.send('등록 성공');
    }else{
        res.send('등록 실패');
    }
    
});

//수정
router.put("/:id", async (req, res) => {
    let id = req.params.id;
    let result = await mysql.query(sql.customerUpdate, [req.body , id])
    if(result.affectedRows == 1){
        res.send('수정 성공');
    }else{
        res.send('수정 실패');
    }
 });


//삭제
router.delete("/:id", async function(req,res){
    let id = req.params.id;
    let result = await mysql.query(sql.customerDelete, id)
    res.send(result);
 });

module.exports = router;