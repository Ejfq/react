//mysql 연결 및 쿼리 실행 테스트

//mysql 모듈 로드
const mysql = require("mysql2");

//mysql 접속 정보
const conn = {host : "127.0.0.1", 
                port : "3306",
                user : "hr",
                password : "hr",
                database : "test",
                connectionLimit : 10>
                
};

//DB 커넥션 생성
let pool = mysql.createPool(conn);
//console.log(connection);

module.exports = pool;

