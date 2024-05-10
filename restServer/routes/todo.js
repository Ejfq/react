const express = require("express");
const router = express.Router();

const mysql = require("../mysql") //index파일은 생략가능

const sql = {
    todoList : "select * from todo",
    todoInsert : "insert into todo set ?",
    todoDelete : "delete from todo where no = ?",
    todoUpdate : "update todo set complete = ? where no = ?"
}

//전체조회

router.get("/", async (req,res) =>{
    let result = await mysql.query(sql.todoList);
    res.send(result);
})

//등록
router.post("/", async (req,res) =>{
    let result = await mysql.query(sql.todoInsert, req.body);
    res.send(result);
})

//수정
router.put("/", async (req,res) =>{
    let no = req.body.no
    let num = req.body.num
    let result = await mysql.query(sql.todoUpdate, [num, no]);
    res.send(result);
})

//삭제
router.delete("/", async (req,res) =>{
    let no = req.body.no
    let result = await mysql.query(sql.todoDelete, no);
    res.send(result);
})




module.exports = router;