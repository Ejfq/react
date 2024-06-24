const express = require("express");
const router = express.Router();

const mysql = require("../mysql")

const sql = {
    mjList : "select * from matjip",
    mjInfo : "select * from matjip where id = ?",
    mjInsert : "insert into matjip set ? ",
    mjDelete : "delete from matjip where id = ?",
    mjUpdate : "update matjip set ? where id = ?"
}

//전체조회
router.get("/", async (req,res)=>{
    let result = await mysql.query(sql.mjList);
    res.send(result);
})

//단건조회
router.get("/:id", async(req,res)=>{
    let id = req.params.id;
    let result = await mysql.query(sql.mjInfo, id)
    res.send(result)
})

//등록
router.post("/" , async (req, res)=>{
    let result = await mysql.query(sql.mjInsert, req.body);
    res.send(result)
})

//삭제
router.delete("/:id" ,async (req,res)=>{
    let id = req.params.id
    let result = await mysql.query(sql.mjDelete, id)
    res.send(result)
})

//수정
router.put("/:id", async (req,res) => {
    let id = req.params.id
    let result = await mysql.query(sql.mjUpdate, [req.body, id])
    res.send(result)
})

module.exports = router;
