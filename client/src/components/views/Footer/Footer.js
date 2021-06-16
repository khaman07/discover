import React from 'react'
import {Icon} from 'antd';

function Footer() {


    const script = document.createElement("script");

    script.src = "https://kit.fontawesome.com/a076d05399.js";
    script.async = true;
    script.crossOrigin = "anonymous";

    document.body.appendChild(script);

    // <script src='' crossorigin='anonymous'></script>
    
    var d = new Date();
    var n = d.getFullYear();

    return (
        <div style={{
            backgroundColor: '#080808',
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p style={{color: "white"}} >Made with <i class='fas fa-heart' style={{fontSize:"16px", color:"red"}}></i> by Aman</p>
        </div>
    )
}

export default Footer
