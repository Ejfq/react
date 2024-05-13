function SearchBar(){
    return (
        <form>
        <input type="text" placeholder="Search..."/>
        <label><input type="checkbox"/> Only show products in stock</label>
      </form>
    )
}



function ProductTable(props){
    let lastCategory = null;
    let category = [];
    

    for (let i = 0 ; i < props.data.length ; i++){
        console.log(props.data[i].category)
        if (props.data[i].category !== lastCategory){
            category.push(<ProductCategoryRow category = {props.data[i].category} key = {props.data[i].category}/>)
            lastCategory = props.data[i].category
        } 
        category.push(<ProductRow props = {props.data[i]} key = {props.data[i].name}/>)
    }

    return(
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {category}
          </tbody>
        </table>
    )
}

function ProductCategoryRow(props){
     return (
     <tr key = {props.category}> 
        <th >{props.category}</th>
    </tr>
     )  
}

function ProductRow(props){
    console.log(props)
    const name = props.props.stocked ? props.props.name :
    <span style={{ color: 'red' }}>
      {props.props.name}
    </span>;

    return(
        <tr>
            
        <td>{name}</td>
        <td>{props.props.price}</td>
      </tr>
    )
}


function FilterableProductTable(){
    const data = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
      ]

    return (
        <div>
            <SearchBar/>
            <ProductTable data={data}/>

      </div>
    );
}

export default FilterableProductTable;