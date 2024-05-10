function customerList(){
    fetch("http://localhost:3000/customer")
    .then(result => result.json())
    .then(result => {
        for(let i = 0 ; i < result.length ; i++){

            const newTag = `<tr>
            <td class="text-center">${result[i].id}</td>
            <td class="text-center">${result[i].name}</td>
            <td class="text-center">${result[i].email}</td>
            <td class="text-center">${result[i].phone}</td>
            <td class="text-center">${result[i].address}</td>
            <td class="text-center">
                <button class="btnUpd">조회</button>
                <button class="btnDel">삭제</button>
            </td>
        </tr>`;
            list.insertAdjacentHTML('beforeend', newTag)

            


            
            
        }
    })
}

function customerInsert(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;

    let customer = {name : name , email:email, phone:phone, address:address}

    fetch("http://localhost:3000/customer", {
        method: "POST",
        body: JSON.stringify(customer),
      })
      .then((response) => response.json())
      .then((result) => console.log(result));
}

document.getElementById('btnInsert').addEventListner('click' , customerInsert());

customerList()