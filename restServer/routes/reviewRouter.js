const express = require("express");
const router = express.Router();

const mysql = require("../mysql")

const sql ={
    reviewList : "select * from review where id = ?",
    reviewInsert : "insert into review set ? ",
    reviewDelete : "delete from review where reviewId = ?",
    reviewUpdate : "update review set ? where id = ?"
}

//게시글 리뷰조회
router.get("/:id", async(req,res)=>{
    let id = req.params.id;
    let result = await mysql.query(sql.reviewList, id)
    res.send(result)
})

//리뷰 작성
router.post("/", async(req,res)=>{
    let result = await mysql.query(sql.reviewInsert, req.body);
    res.send(result)
})

router.delete("/:id", async (req,res)=>{
    let id = req.params.id;
    let result = await mysql.query(sql.reviewDelete, id);
    res.send(result)
})

module.exports = router;
