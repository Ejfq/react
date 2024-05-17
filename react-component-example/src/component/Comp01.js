
function Comp1(){
    const style = {color: "red" , fontWeight:"bold", backgroundColor : "yellow", fontSize : "30px"}
    const modalYn = true;
    const name = "홍길동";


 return   (
    <div>
        {modalYn ? <div>모달</div> : null}
        {name === "홍길동" ? <div>홍길동입니다</div> : <div>홍길동이 아닙니다</div>}

        {/* name 이 있으면 실행 */}
        {name && <div>1홍길동입니다</div> }
        
        {/* name 이 없으면 실행 */}
        {name || <div>2홍길동이 아닙니다</div> }
        
        {/* 여기는 주석 */}
        <h2 style={style}>Hello</h2>
    </div>
)
}

export default Comp1;