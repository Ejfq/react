function todoList(){
    fetch("http://localhost:3000/todo")
    .then(result => result.json())
    .then(result => {
        for( res of result){
            let li;
            if(res.complete == 1){
                li = `<li id="${res.no}" class ="checked">${res.title}</li>`
            }else{
                li = `<li id="${res.no}">${res.title}</li>`
            }

           
            myUL.insertAdjacentHTML('beforeend', li)
            
        }   
            //x버튼
            var myNodelist = document.getElementsByTagName("LI");
            var i;
            for (i = 0; i < myNodelist.length; i++) {
            var span = document.createElement("SPAN");
            var txt = document.createTextNode("\u00D7");
            span.className = "close";
            span.appendChild(txt);
            span.addEventListener('click', todoDelete)
            myNodelist[i].appendChild(span);
            }

            //x버튼 삭제이벤트
            var close = document.getElementsByClassName("close");
            var i;
            for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        } 
    })
}




async function todoInsert(){
    let title = document.getElementById('myInput').value
    await fetch("http://localhost:3000/todo" ,{
        method : "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({title:title})
    })
    .then((result) => result.json())
    .then(result => {console.log(result)
        const myUL = document.getElementById("myUL");
        myUL.textContent = "";
    
    })
    todoList()
    
}

async function todoDelete(e){
    const no = e.target.parentNode.id;
    await fetch("http://localhost:3000/todo" ,{
        method : "DELETE",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({no:no})
    })
    .then((result) => result.json())
    .then(result => {console.log(result)
        const myUL = document.getElementById("myUL");
        myUL.textContent = "";
    
    })
    todoList()

    
}





//체크 시 checked
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    if(ev.target.classList.contains('checked') == false){
        ev.target.classList.toggle('checked');
        let no = event.target.id
        event.target.addEventListener('click',todoUpdate(no, 1))
    }else if(ev.target.classList.contains('checked') ==true){
        let no = event.target.id
        event.target.addEventListener('click',todoUpdate(no, 0))
    }

  }
}, false);

var checkedList = document.getElementsByClassName('checked');



async function todoUpdate(no , num){
    await fetch("http://localhost:3000/todo" ,{
        method : "PUT",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({no:no, num:num})
    })
    .then((result) => result.json())
    .then(result => {console.log(result)
        const myUL = document.getElementById("myUL");
        myUL.textContent = "";
    
    })
    todoList()
}

todoList()
