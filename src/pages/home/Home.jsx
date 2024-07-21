import React, { useEffect, useState } from 'react'
import './Home.css'
import { IoStarSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { projectFireStore } from '../../firebase/config';

function Home({setData2}) {

    const [data, setData] = useState([])
    projectFireStore.collection("furnitures")

    return (
        <div className='home'>
            <div className="headerTop">
                <div className="container">
                    <div className="header">
                        <h1>Your Best Value Products</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <Link to={'/create'} ><button>Add Product</button></Link>
                        <div className="header-box">
                            <img className='header-img1' src="./public/imgs/Background.png" alt="" />
                            <img src="./public/imgs/satr.png" alt="" className="hader-img2" />
                            <p>Low <br />  prices</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="cards">
                    {data?.map((item) => {
                        return <div key={item.id} className="card">
                            <img src={item.img} alt="" />
                            <div className="name">
                                <p>{item.title}</p>
                                <h4>${item.price}</h4>
                            </div>
                            <h4 className="desc">{item.desc?.slice(0,80)}...</h4>
                            <div className="stars">
                                <span><IoStarSharp /></span>
                                <span><IoStarSharp /></span>
                                <span><IoStarSharp /></span>
                                <span><IoStarSharp /></span>
                                <div className='black-star' ><IoStarSharp /></div>
                                <p>(267)</p>

                            </div>
                            <Link to={`/info/${item.id}`} ><button>Choose Options</button></Link>
                        </div>
                    })}


                </div>
            </div>
        </div>
    )
}

export default Home