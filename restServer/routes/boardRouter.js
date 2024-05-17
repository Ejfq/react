const express = require("express");
const router = express.Router();

const mysql = require("../mysql")

const sql = {
    boardList : "select * from boards",
    boardRead : "select * from boards where id = ?",
    boardInsert : "insert into boards set ?",
    boardDelete : "delete from boards where id = ?",
    boardUpdate : "update boards set ? where id = ?"
}

//전체조회

router.get("/", async (req,res)=>{
    let result = await mysql.query(sql.boardList);
    res.send(result);
})

//단건조회
router.get("/:id", async (req,res)=>{
    let id = req.params.id;
    let result = await mysql.query(sql.boardRead, id);
    res.send(result);
})

//등록
router.post("/", async (req,res) =>{
    let result = await mysql.query(sql.boardInsert, req.body);
    res.send(result);
})


//수정
router.put("/:id", async (req,res) =>{
    let id = req.params.id
    let result = await mysql.query(sql.boardUpdate, [req.body, id]);
    res.send(result);
})

//삭제
router.delete("/:id", async (req,res) =>{
    let id = req.params.id
    let result = await mysql.query(sql.boardDelete, id);
    res.send(result);
})

module.exports = router;
