import React, { useState, useEffect, } from 'react';
import './Books.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import BookCard from './BookCard';
import { useNavigate } from "react-router-dom";


export default function Books(props) {
    const [maxResults, setMaxResults] = useState(10);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [cards, setCards] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);

    const handleSubmit = () => {
        setLoading(true);
        if (maxResults > 40 || maxResults < 1) {
            toast.error('max results must be between 1 and 40');
        } else {
            axios
                .get(
                    `https://serpapi.com/search.json?q=${query}&tbm=shop&location=India&hl=en&gl=us&api_key=2643c59d908561f9a329099b6663dcc1c19adec112c6c76d61c106387651b15c`
                )
                .then(res => {
                    console.log(res);
                    if (res.shopping_results.length > 0) {
                        setCards(res.shopping_results);
                        setLoading(false);
                    }
            
                })
                .catch(err => {
                    setLoading(true);
                    console.log(err.response);
                });
        }
    };

    const mainHeader = () => {
        return (
            <div>
                <div className='bg-image d-flex justify-content-center align-items-center flex-column' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80)" }} height="150px" >
                    <h1
                        className='display-2 text-center text-white mb-3 my-5'
                    >
                        <b>Online Medicine</b>
                    </h1>
                    <div>
                        <div className="input-group mb-3">

                            <input
                                className="form-control mr-sm-6"
                                placeholder='Book Search'
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                style={{ backgroundColor: "white", borderRadius: "4px" }}
                            />
                            <button className="btn btn-primary my-2 my-sm-0 mx-2" type="submit" onClick={handleSubmit}><i className='fas fa-search' style={{ borderRadius: "4px" }}></i></button>
                        </div>


                        <div className='d-flex text-white justify-content-center'>
                            <form className='d-flex'>
                                <div className="form-group mb-5 pb-5 mx-2">
                                    <label className="mx-2" htmlFor='maxResults' style={{ color: "white" }}>Max Results</label>
                                    <input
                                        type='number'
                                        id='maxResults'
                                        placeholder='Max Results'
                                        value={maxResults}
                                        onChange={e => setMaxResults(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    };

    const handleCards = () => {
        if (loading) {
            return (
                <div className='d-flex justify-content-center mt-3'>
                    <spinner style={{ width: '3rem', height: '3rem' }} />
                </div>
            );
        } else {
            const items = cards.map((item, i) => {
                let thumbnail = '';
                if (item.volumeInfo.imageLinks) {
                    thumbnail = item.volumeInfo.imageLinks.thumbnail;
                }

                return (
                    <div className='col-lg-4 mb-3' key={item.id}>
                        <BookCard
                            title={item.shopping_results.title}
                            product_link={item.shopping_results.product_link}
                            extracted_price={item.shopping_results.extracted_price}
                            thumbnail={thumbnail}
                        />
                    </div>
                );
            });
            return (
                <div className='container my-5'>
                    <div className='row'>{items}</div>
                </div>
            );
        }
    };
    return (
        <div className='w-100 h-100'>
            {mainHeader()}
            {handleCards()}
            <ToastContainer />
        </div>
    );
}
