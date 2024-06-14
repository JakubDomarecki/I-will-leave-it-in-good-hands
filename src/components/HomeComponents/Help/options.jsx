import React, {useState} from "react";
import {foundationsTable} from "./data/fundations.js";
import './found,org,local.scss'
const Options = ({data, text}) => {
    const [foundations , setFoundations] = useState(data);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    // oblicza aktualne posty
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPosts = foundations.slice(indexOfFirstItem, indexOfLastItem);

    // zmienia strone
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // oblicza ile bedzie stron + zaokrągla do góry
    const totalPages = Math.ceil(foundations.length / itemsPerPage);

    return (
        <>
            <div>
                <p className="help_des">{text}</p>
            </div>
            <div>
                {currentPosts.map((foundation, index) => {
                    return (
                        <div key={index} className="foundation_container">
                            <div>
                                <p className="foundation_name">{foundation.name}</p>
                                <p className="foundation_mission">{foundation.mission}</p>
                            </div>
                            <div>
                                <p className="foundation_needs">{foundation.needs.join(', ')}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            {totalPages > 1 &&
                <div className="pagination">
                    {[...Array(totalPages).keys()].map(number => (
                        <button key={number + 1} onClick={() => paginate(number + 1)} className="single_number"
                                style={{ border: (number + 1 === currentPage) ? '1px solid black' : 'none' }}>
                            {number + 1}
                        </button>
                    ))}
                </div>
            }

        </>
    );
}

export default Options;