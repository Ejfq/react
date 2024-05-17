import Student from "./Student";



const Comp2 = () => {
    const std = [ {no:1, name:"홍길동"},
                    {no:2, name:"김길동"} ]
                    
    const lis = std.map(s => 
            <Student key = {s.no} std = {s}></Student>
            )
        
    return  (
        <div>
            {lis}
        </div>
)
}

export default Comp2;