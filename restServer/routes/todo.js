const express = require("express");
const router = express.Router();

const mysql = require("../mysql") //index파일은 생략가능

const sql = {
    todoList : "select * from todo",
    todoInsert : "insert into todo set ?",
    todoDelete : "delete from todo where id = ?",
    todoUpdate : "update todo set ? where id = ?",
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
router.put("/:id", async (req,res) =>{
    let id = req.params.id
    console.log(req.body)
    let result = await mysql.query(sql.todoUpdate, [req.body, id]);
    res.send(result);
})

//타이틀수정
router.put("/:id", async (req,res) =>{
    let id = req.params.id
    console.log(req.body)
    let result = await mysql.query(sql.todoUpdate, [req.body, id]);
    res.send(result);
})

//삭제
router.delete("/:id", async (req,res) =>{
    let id = req.params.id
    let result = await mysql.query(sql.todoDelete, id);
    res.send(result);
})




module.exports = router;