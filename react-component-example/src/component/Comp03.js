import Product from "./Product";

function Comp(props){

    const list = props.products.map(product => 
        <Product product={product} key = {product.no}/>
    )

    return(
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
    )
}

export default Comp;