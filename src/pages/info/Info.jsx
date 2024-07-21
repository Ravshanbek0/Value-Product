import React, { useEffect, useState } from 'react'
import './Info.css'
import { useParams } from 'react-router-dom'

function Info({data2}) {


    const [imgss,setImgss]=useState()

    const {id}=useParams()

    const newData = data2.filter((item)=>{
        return item.id==id
    })

    useEffect(()=>{
        setImgss(newData[0]?.img)
    },[])

    return (
        <div className="container">
            <h1 className='title'>Green 2-seater velvet sofa </h1>
            <div className='info'>

                <div className="info-left">
                    <img src={imgss} alt="" className="main-img" />
                    <div className="imgs">
                        {newData[0]?.imgs?.map((item)=>{
                            return <img  onClick={()=>{setImgss(item)}}  src={item} alt="" />
                        })}
                    </div>
                </div>
                <div className="info-right">
                    <div className="info-right-top">
                        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.</p>
                        <h4>${newData[0]?.price}</h4>
                    </div>
                    <hr />
                    <div className="infos">
                        <span><p href="">Description</p>
                        </span>
                        <span><p href="">Dimensions</p>
                        </span>
                        <span><p href="">Details</p>
                        </span>
                    </div>
                    <p className="description">
                       {newData[0]?.desc}
                    </p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Info