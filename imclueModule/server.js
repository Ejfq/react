// 1. http 모듈 포함 
const http = require ("http"); 
const movie = require("./movie")
// 2. http 서버 생성 

// 5. 새로운 요청이 수신되면 request 이벤트가 호출되고 
/* http.IncomingMessage 객체와 http.ServerResPonse 객체를 넘겨준다 
req : 요청 상세정보( 요청 헤더와 요청 data ) 
res : 클라이언트에게 데이터를 반환(상태코드, contentType, 응답 데이터 ) */ 
const server = http.createServer((req , res ) => {
    res.writeHead(200, {"Content-Type" : "application/json"});

    (async () => {
        let movieName = await movie();
        console.log("server",movieName)
        let movieInfo = {movieNm: movieName , movieCd:1};
        res.end(JSON.stringify(movieInfo));
    })();
})

// 3. 지정된 포트 및 호스트이름으로 수신 대기 

// 4. 서버가 준비되면 콜백함수 호출 
server.listen(3000 , "127.0.0.1", () => {
    console.log("server running http://127.0.0.1:3000")
}); 

