emps = [{ name : 'park' , age : 20} , { name : 'kim' , age : 14} , { name : 'lee' , age : 30}]

// age로 정렬
emps.sort( (a,b) => a.age - b.age);
console.log(emps);

// name 정렬
//emps.sort( (a,b) => {if(a.name > b.name) return 1;
//                    if(a.name < b.name) return -1;
//                    return 0;
//                }) ;
emps.sort((a,b) => a.name > b.name ? 1 : a.name == b.name ? 0 : -1)
console.log(emps);

