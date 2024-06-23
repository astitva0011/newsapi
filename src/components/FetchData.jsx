import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchData = ({ cat }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const apiUrl = cat
                ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=5a6fb4ded13c4e96970ebde4de8786fe`
                : `https://newsapi.org/v2/top-headlines?country=in&apiKey=5a6fb4ded13c4e96970ebde4de8786fe`;

            const response = await axios.get(apiUrl);
            setData(response.data.articles);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [cat]); 

    return (
        <div className="container my-4">
            <u><h3 style={{color: "violet"}}>TOP INDIAN HEADLINES</h3></u>
            <div className="container d-flex justify-content-center flex-column align-items-center my-4" style={{minHeight: "100vh"}}>
                {loading && "FETCHING..."}
                {error && <p>Error: {error}</p>}
                {data && data.length > 0 ? (
                    data.map((item, index) => (
                        <div key={index} className="container my-3" style={{width: "600px", boxShadow: "5px 6px 15px green", borderRadius: "5px"}}>
                            <h5 className="my-2">{item.title}</h5>
                            {item.urlToImage && (
                                <img src={item.urlToImage} alt="image not available" className="img-fluid" style={{width:"auto", height: "300px", objectFit: "cover"}} />
                            )}
                            <p>{item.content}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                <button style={{width:"auto"}} type="button" className="btn btn-primary my-2">Read more</button>
                            </a>
                        </div>
                    ))
                ) : !loading && "No articles found"}
            </div>
        </div>
    );
};

export default FetchData;
