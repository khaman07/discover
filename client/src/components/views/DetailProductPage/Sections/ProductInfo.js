import React, { useEffect, useState } from 'react'
import { Button, Descriptions,Row,Col } from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})
    
    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }
    
    return (
        <div>
            <p style={{textAlign: "center", fontSize: "20px", fontWeight: "bold"}}>Shop similar products</p>

        <Descriptions>
                <Descriptions.Item><a href="/beds" style={{color: "black"}}>Beds</a></Descriptions.Item>
                <Descriptions.Item><a href="/pendant" style={{color: "black"}}>Pendant Lights</a></Descriptions.Item>
                <Descriptions.Item><a href="/chair" style={{color: "black"}}>Living Room Chair</a></Descriptions.Item>
                {/* <Descriptions.Item label="Description">{Product.description}</Descriptions.Item> */}
        </Descriptions> 



        </div>
    )
}

export default ProductInfo
