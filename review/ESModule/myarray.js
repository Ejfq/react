let emps = [{ name : 'park' , age : 20 , point : 100} ,
 { name : 'kim' , age : 14, point : 60} ,
 { name : 'lee' , age : 30,  point : 77}]

function totalPoint(){
    return  emps.reduce((a,b) => a + b.point , 0)
}

export {totalPoint}