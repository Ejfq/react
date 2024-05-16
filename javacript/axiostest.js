//import axios from "axios";
const axios = require('axios');

const url = 'https://jsonplaceholder.typicode.com/todos'

function todoget(){
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(
        res => console.log(res.data)
    );
}



function todoPost(){
    const param = { userId: 1, title: 'react', completed: false }
    axios.post(url,param).then(res=>console.log(res.data));
}

function todoPut(){
    const param = {title: 'hihello'}
    axios.put(url+"/1" , param).then(res=>console.log(res.data));
}

function todoDelete(){
    axios.delete(url+"/1").then(res=>console.log(res.data));
}

todoget();
//todoPost();
//todoPut();
//todoDelete();