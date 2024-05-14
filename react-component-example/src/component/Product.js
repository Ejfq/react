

function Product(props){
    console.log(props)
    const {no, pname, price} = props.product
    return (
    <tr onClick={()=>props.onClick(no)}>
        <td>{no}</td><td>{pname}</td><td>{price}</td>
    </tr>)
}

export default Product;