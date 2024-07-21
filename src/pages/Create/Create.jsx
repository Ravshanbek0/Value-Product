import React, { useState } from 'react'
import './Create.css'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')

    const [number,setNumber] =useState(0)

    const [imgs, setImgs] = useState('')
    const [imgs2, setImgs2] = useState('')

    console.log(imgs2);

    const navigate = useNavigate()

    async function createFun(api, config) {
        await fetch(api, config)
    }

    return (
        <div className='crcrccrrc'>
            <form onSubmit={async () => {
                createFun(`http://localhost:3000/furnitures`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        img, title, desc, price,
                        id: `${Math.floor(Math.random() * 99999999)}`,
                        imgs : imgs2,
                    })
                })
                navigate("/")

            }} className="ceraet">
                <div className="labels">
                    <label htmlFor="">img:</label>
                    <input onChange={(e) => {
                        setImg(e.target.value)
                    }} type="text" placeholder='img' />
                </div>
                <div className="labels">
                    <label htmlFor="">title:</label>
                    <input onChange={(e) => {
                        setTitle(e.target.value)
                    }} type="text" placeholder='img' />
                </div>
                <div className="labels">
                    <label htmlFor="">price:</label>
                    <input onChange={(e) => {
                        setPrice(e.target.value)
                    }} type="text" placeholder='img' />
                </div>
                <div className="labels">
                    <label htmlFor="">desc:</label>
                    <textarea onChange={(e) => {
                        setDesc(e.target.value)
                    }} type="text" placeholder='img' />
                </div>
                <div className="imgs-create">
                    <label htmlFor="">imgs:</label>
                    <input value={imgs} onChange={(e)=>{
                        setImgs(e.target.value)
                    }} type="text" placeholder='imgs' />
                    <button onClick={()=>{
                        setImgs2([...imgs2,imgs])
                        setNumber(number+1)
                        console.log(imgs2);
                        setImgs("")
                    }} type='button'>ok</button>
                </div>
                <h6>{number}</h6>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Create