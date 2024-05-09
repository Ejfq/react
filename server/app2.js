// 1. http 모듈 포함 
const http = require('http'); 
const url = require("url")
const hostname = '127.0.0.1'; 
const port = 3000; 
let emps = [{ no: 100, name : 'park' , age : 20 , point : 100} ,
 { no: 101, name : 'kim' , age : 14, point : 60} ,
  { no: 102, name : 'lee' , age: 30 ,point : 77},
{no:103, name : 'shin' , age: 50 , point : 88}]

 
// 2. http 서버 생성(요청이 수신되면 응답 처리) 
const server = http.createServer((req, res) => {
    const _url = url.parse(req.url, true)
    const pathname = _url.pathname;
    res.setHeader('Content-Type', 'application/json');
    if (pathname =="/emp"){
        res.end(JSON.stringify(emps));

    }else if(pathname =="/empInfo"){ //empInfo?no=100
        let no = _url.query.no
        console.log(no)
        let emp = emps.filter(emp => emp.no == no)
        res.end(JSON.stringify(emp))

    }else if(pathname =="/empDelete"){ //empDelete?no=100
        let no = _url.query.no
        for(let i = 0 ; i < emps.length ; i ++){
            if (emps[i].no == no ){
                emps.splice(i,1)
            }
            
        }
        res.end(JSON.stringify(emps))

    }else if(pathname =="/empInsert"){ //empInsert?no=104&name=hong&age=23
        let no = _url.query.no
        let name = _url.query.name
        let age = _url.query.age

        emps.push({no:no, name:name , age:age})
        res.end(JSON.stringify(emps))

    }else {
        res.statusCode = 404;
        res.end();
    }
}); 
 
// 3. 지정된 포트 및 호스트이름으로 수신 대기 
server.listen(port, hostname, () => {                   
  console.log(`Server running at http://${hostname}:${port}/`); 
}); 