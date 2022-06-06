import React from "react";
import Product from "./Product/Product";
const Products = () => {
  const [data,setData]=React.useState([])
  React.useEffect(()=>{
    fetch(" http://localhost:8080/products").then((resp)=>(resp.json())).then((resp)=>{
      setData(resp)
    })
  },[])
  console.log("data is",data)
  return(
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
        {data.map((el)=>(
          <Product el={el}/>
        ))}
    </div>
  ) 
  
  
};

export default Products;
