import {useState} from "react";
import axios from "axios";


const ProductForm = () => {
	//keep track of what is being typed via useState hook
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState(0);
	//handler when the form is submitted
	const onSubmitHandler = e => {
		//prevent default behavior of submit
		e.preventDefault();
		//make a post request to create a new product
		axios.post('http://localhost:8000/api/products', {
				title,
				description,
				price
			}
		)
			.then(res=>console.log(res))
			.catch(err=>console.log(err))

		setTitle("");
		setDescription("");
		setPrice(0);
	}
	//onChange to update title and description
	return (
		<form onSubmit={onSubmitHandler}>
			<p>
				<label>Title</label><br/>
				<input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
			</p>
			<p>
				<label>Description</label><br/>
				<input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
			</p>
			<p>
				<label>Price</label><br/>
				<input type="number" onChange={(e)=>setPrice(e.target.value)} value={price}/>
			</p>
			<input type="submit"/>
		</form>
	)
}

export default ProductForm;