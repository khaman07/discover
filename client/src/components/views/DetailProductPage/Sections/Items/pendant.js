import React, { useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import Axios from 'axios';
import { Card, Icon , Col, Row } from 'antd';
// import ImageSlider from '../../utils/ImageSlider';

import img1 from './Images/pendant/Screenshot 2021-06-18 020011.png'
import img2 from './Images/pendant/Screenshot 2021-06-18 020043.png'
import img3 from './Images/pendant/Screenshot 2021-06-18 020103.png'
import img4 from './Images/pendant/Screenshot 2021-06-18 020135.png'

const {Meta} = Card;
function PendantPage() {

    


    
    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color:'#080808',fontFamily:"Cursive", marginBottom: '50px'}}>Pendant Lights<Icon type="ShopFilled" /> </h1>
        </div>

        <Row gutter={[16, 16]}>
            <Col lg={6} md={8} xs={24}>
            <Card
            hoverable={true}
            cover={<a href={`https://www.amazon.in/discover/dp/B07N8R6CMW?ref=sbl_dr_sm`}> <img src={img1}></img></a>}
            >
            </Card>
                
            </Col>

            <Col lg={6} md={8} xs={24}>
            <Card
            hoverable={true}
            cover={<a href={`https://www.amazon.in/discover/dp/B015WE7394?ref=sbl_dr_sm`}> <img src={img2}></img></a>}
            >
            </Card>
                
            </Col>

            <Col lg={6} md={8} xs={24}>
            <Card
            hoverable={true}
            cover={<a href={`https://www.amazon.in/discover/dp/B07FDZC57M?ref=sbl_dr_sm`}> <img src={img3}></img></a>}
            >
            </Card>
                
            </Col>

            <Col lg={6} md={8} xs={24}>
            <Card
            hoverable={true}
            cover={<a href={`https://www.amazon.in/discover/dp/B091XXQ83H?ref=sbl_dr_sm`}> <img src={img4}></img></a>}
            >
            </Card>
                
            </Col>
        </Row>

    </div>
    )
}

export default PendantPage
