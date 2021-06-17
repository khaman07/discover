import React, { useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import Axios from 'axios';
import { Card, Icon , Col, Row } from 'antd';
import ImageSlider from '../../utils/ImageSlider';


const {Meta} = Card;
function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")
    const [Filters, setFilters] = useState({
        continents: [],
        price: []
    })

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,

        }

        getProducts(variables)
    }, [])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if(response.data.success){
                    if(variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fetch product datas')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true,
            filters: Filters,
            searchTerm: SearchTerms

        }
        getProducts(variables)

        setSkip(skip)
    }

    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product._id}`}> <ImageSlider images={product.images} /></a>}
            >
                <Meta
                    style={{textAlign: "center"}}
                    title={<a href={`/product/${product._id}`}><p style={{color: "#080808"}}>View Products</p></a>}
                    // description={`Rs.${product.price}`}
                />
            </Card>
        </Col>
    })

    return (
        <div style={{ width: '75%', margin: '3rem auto' }}>
            
            <div style={{ textAlign: 'center' }}>
                <h1 style={{ color:'#080808',fontFamily:"Cursive", marginBottom: '50px'}}> <b>D</b>iscover <b></b>with <b>A</b>man <Icon type="ShopFilled" /> </h1>
            </div>

            

            {Products.length === 0 ?
                <div style={{ display:'flex', height:'300px', justifyContent:'center', alignItems: 'center', marginTop: '500px'}}>
                    <h2>No Posts Yet...</h2>
                </div> :
                <div>
                    <Row gutter={[16, 16]}>
                        {renderCards}
                    </Row>
                </div>

            }
            <br /><br />

            {PostSize >= Limit && 
                <div style={{ display: 'flex', justifyContent:'center'}}>
                    <button onClick={onLoadMore}>Load More</button>
                </div>
            }

        </div>
    )
}

export default LandingPage
