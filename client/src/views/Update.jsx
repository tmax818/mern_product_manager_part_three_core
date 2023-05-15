import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
	const { id } = useParams();
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0)
	const navigate = useNavigate();

	useEffect(() => {
		axios.get('http://localhost:8000/api/products/' + id)
			.then(res => {
				setTitle(res.data.title);
				setDescription(res.data.description);
				setPrice(res.data.price);
			})
	}, []);

	const updateProduct = e => {
		e.preventDefault();
		axios.patch('http://localhost:8000/api/products/' + id, {
			title,
			description,
			price
		})
			.then(res => console.log(res))
			.catch(err => console.error(err));
		navigate("/");
	}

	return (
		<div>
			<h1>Update a Product</h1>
			<form onSubmit={updateProduct}>
				<p>
					<label>Title</label><br />
					<input type="text"
						   name="title"
						   value={title}
						   onChange={(e) => { setTitle(e.target.value) }} />
				</p>
				<p>
					<label>Last Name</label><br />
					<input type="text"
						   name="description"
						   value={description}
						   onChange={(e) => { setDescription(e.target.value) }} />
				</p>
				<p>
					<label>Last Name</label><br />
					<input type="number"
						   name="price"
						   value={price}
						   onChange={(e) => { setPrice(e.target.value) }} />
				</p>
				<input type="submit" />
			</form>
		</div>
	)
}

export default Update;

