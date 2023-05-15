import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useParams} from "react-router-dom";

const Detail = (props) => {
	const [product, setProduct] = useState({})
	const { id } = useParams();

	useEffect(() => {
		axios.get('http://localhost:8000/api/products/' +id)
			.then(res => setProduct(res.data))
			.catch(err => console.error(err));
	}, []);

	return (
		<div>
			<p>title: {product.title}</p>
			<p>description: {product.description}</p>
			<p>price: ${product.price}</p>
			<Link to={"/people/" + product._id + "/edit"}>Edit</Link>


		</div>
	)
}

export default Detail;

