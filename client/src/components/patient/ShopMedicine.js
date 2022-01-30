import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ShopMedicine = () => {
    let navigate = useNavigate();
    const [medicine, setMedicine] = useState(null);
    const [query, setquery] = useState("");
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, []);

    // Separate function to get user details
    async function getMedicine() {
        const response = await fetch(
            `http://localhost:5000/api/shopping/shopmedicine`,
            {
                method: "GET",
                headers: {
                    "auth-token": localStorage.getItem("token"),
                },
            }
        );
        const data = await response.json({ query });
        console.log(query);
        console.log(data);
        setMedicine(data);
    }


    return <div>
        <div>
            <div className='bg-image d-flex justify-content-center align-items-center flex-column' style={{ backgroundImage: "url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1453&q=80)" }} height="150px" >
                <h1
                    className='display-2 text-center text-white mb-3 my-5'>
                    <b>Online Medicine</b>
                </h1>
                <div>
                    <div className="input-group mb-3">
                        <input
                            className="form-control mr-sm-6"
                            placeholder='Medicine Search'
                            value={query}
                            onChange={e => setquery(e.target.value)}
                            style={{ backgroundColor: "white", borderRadius: "4px" }}
                        />
                        <button className="btn btn-primary my-2 my-sm-0 mx-2" type="submit" onClick={getMedicine}><i className='fas fa-search' style={{ borderRadius: "4px" }}></i></button>
                    </div>
                </div>
            </div>
        </div>

    </div>;
};
