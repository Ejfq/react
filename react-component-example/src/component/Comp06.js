import { useState } from "react";
import Product from "./Product";

function Comp6(){
    let productData = [  {no:1, pname:"apple", price:100},
                {no:2, pname:"orange", price:300},
                {no:3, pname:"grape", price:200}]

    let [products, setProducts] = useState(productData)

    //console.log(products)

    const trDel = (no) =>{
        let newProduct = [];
        //배열의 첫번째 요소 삭제
        for(let i = 0 ; i < products.length; i++){
            if(no !== products[i].no)
            newProduct.push(products[i]);
        }
        setProducts(newProduct);
        console.log(products)
    }

    const list = products.map(product => 
        <Product product={product} key = {product.no} onClick={trDel}/>
    )

    



    return(
        <div>
            <button onClick={trDel}>삭제</button>
            <table>
                <thead>
                    <tr>
                        <th>번호</th><th>상품명</th><th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    )
}

export default Comp6;