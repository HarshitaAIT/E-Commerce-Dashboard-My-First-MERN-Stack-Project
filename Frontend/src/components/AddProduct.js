import React from 'react';

const AddProduct = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [error,setError]=React.useState('');


  const AddProduct =async()=>{
    console.warn(name);
    if(!name || !price || !category || !company){
        setError(true)
        return false;
    }

    const userId=JSON.parse(localStorage.getItem('user'))._id;
    // console.log(userId);
    let result=await fetch("http://localhost:5000/add-product",{
         method:'post',
         body:JSON.stringify({name,price,category,company,userId}),
         headers:{
            "Contact-Type":"application/json"
         }
    });
    result=await result.json();
    console.log(result);
    
  };



  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        placeholder="Enter product name"
        className="inputBox"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error && !name && <span className='invalid-input'>Enter Valid Name</span>}
      <input
        type="text"
        placeholder="Enter product price"
        className="inputBox"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {error && !price  && <span className='invalid-input'>Enter Valid Price </span>}
      <input
        type="text"
        placeholder="Enter product category"
        className="inputBox"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      {error && !category  && <span className='invalid-input'>Enter Valid Category</span>}
      <input
        type="text"
        placeholder="Enter product company"
        className="inputBox"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      {error && !company && <span className='invalid-input'>Enter Valid company</span>}
      <button className="appButton" onClick={AddProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
