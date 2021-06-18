import React, { useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import Axios from 'axios';
import { Card, Icon , Col, Row } from 'antd';
// import ImageSlider from '../../utils/ImageSlider';

import img1 from './Images/chair/Screenshot 2021-06-18 015748.png'
import img2 from './Images/chair/Screenshot 2021-06-18 015813.png'
import img3 from './Images/chair/Screenshot 2021-06-18 015839.png'
import img4 from './Images/chair/Screenshot 2021-06-18 015900.png'

const {Meta} = Card;
function ChairPage() {

    


    
    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color:'#080808',fontFamily:"Cursive", marginBottom: '50px'}}>Living Room Chair<Icon type="ShopFilled" /> </h1>
        </div>

        <Row gutter={[16, 16]}>
            <Col lg={6} md={8} xs={24}>
            <Card
            hoverable={true}
            cover={<a href={`https://www.amazon.in/discover/dp/B07XLMHVFV?ref=sbl_dr_sm`}> <img style={{height: '275px', width: '275px'}} src={img1}></img></a>}
            >
            </Card>
                
            </Col>

            <Col lg={6} md={8} xs={24}>
            <Card
            hoverable={true}
            cover={<a href={`https://www.amazon.in/discover/dp/B07Y2WLLX5?ref=sbl_dr_sm`}> <img style={{height: '275px', width: '275px'}} src={img2}></img></a>}
            >
            </Card>
                
            </Col>

            <Col lg={6} md={8} xs={24}>
            <Card
            hoverable={true}
            cover={<a href={`https://www.amazon.in/discover/dp/B085NWHF8L?ref=sbl_dr_sm`}> <img style={{height: '275px', width: '275px'}} src={img3}></img></a>}
            >
            </Card>
                
            </Col>

            <Col lg={6} md={8} xs={24}>
            <Card
            hoverable={true}
            cover={<a href={`https://www.amazon.in/discover/dp/B08KS9FVHW?ref=sbl_dr_sm`}> <img style={{height: '275px', width: '275px'}} src={img4}></img></a>}
            >
            </Card>
                
            </Col>
        </Row>

    </div>
    )
}

export default ChairPage
