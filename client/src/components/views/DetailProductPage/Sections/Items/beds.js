import React, { useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import Axios from 'axios';
import { Card, Icon , Col, Row } from 'antd';
// import ImageSlider from '../../utils/ImageSlider';
import img1 from './Images/beds/Screenshot 2021-06-18 015446.png'
import img2 from './Images/beds/Screenshot 2021-06-18 015535.png'
import img3 from './Images/beds/Screenshot 2021-06-18 015608.png'
import img4 from './Images/beds/Screenshot 2021-06-18 015631.png'

const {Meta} = Card;
function BedsPage() {
    
    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ color:'#080808',fontFamily:"Cursive", marginBottom: '50px'}}>Beds<Icon type="ShopFilled" /> </h1>
            </div>

            <Row gutter={[16, 16]}>
                <Col lg={6} md={8} xs={24}>
                <Card
                hoverable={true}
                cover={<a href={`https://www.amazon.in/discover/dp/B0731143DY?ref=sbl_dr_sm`}> <img src={img1}></img></a>}
                >
                </Card>
                    
                </Col>

                <Col lg={6} md={8} xs={24}>
                <Card
                hoverable={true}
                cover={<a href={`https://www.amazon.in/discover/dp/B094D5K9JT?ref=sbl_dr_sm`}> <img src={img2}></img></a>}
                >
                </Card>
                    
                </Col>

                <Col lg={6} md={8} xs={24}>
                <Card
                hoverable={true}
                cover={<a href={`https://www.amazon.in/discover/dp/B079RZJFZL?ref=sbl_dr_sm`}> <img src={img3}></img></a>}
                >
                </Card>
                    
                </Col>

                <Col lg={6} md={8} xs={24}>
                <Card
                hoverable={true}
                cover={<a href={`https://www.amazon.in/discover/dp/B091FXVCNW?ref=sbl_dr_sm`}> <img src={img4}></img></a>}
                >
                </Card>
                    
                </Col>
            </Row>

        </div>
    )
}

export default BedsPage
