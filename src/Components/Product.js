import React from "react";
import { useState, useEffect } from "react";
import {

    Link
} from "react-router-dom";

const Product = () => {

    const [products, setProducts] = useState([]);
    const imgStyle = {
        width: 'calc(100 %)',
        objectFit: 'scale-down',
        height: '200px',
    }
    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: { "Content-Type": "Productslication/json" },
        };
        const fetchData = async () => {
            const response = await fetch('https://fakestoreapi.com/products', requestOptions);
            const newresponseData = await response.json();
            console.log(newresponseData);
            setProducts(newresponseData);

        }
        fetchData();

    }, []);

    if (products != null) {
        return (
            <>
                <div className="container py-5">
                    <div className="row">
                        {products.map(product => (
                            <div key={product.id} className="col-md-3" >
                                <div className="card mb-2">
                                    <img src={product.image} className="card-img-top img-fluid" style={imgStyle} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.category}</p>
                                        <Link to={"/" + product.title.replace(/\s+/g, '-').toLowerCase() + "/" + product.id} className="btn btn-primary">Buy Now $ {product.price}</Link>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </>
        );
    }

    else {
        return (
            <><h4>Loading</h4></>
        )
    }

};

export default Product;
