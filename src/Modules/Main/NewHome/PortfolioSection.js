import React from 'react'
import { isMobile } from 'react-device-detect'


const mobb={border:'1px solid black',borderRadius:'10px',color:'black',width:'100%',padding:'10px'}
const deskb={border:'1px solid black',borderRadius:'10px',color:'black',width:'30%',padding:'5px'}

const PortfoloioSection = ()=>{
    return(
        <>
        <div className='row'>
            <div className='col-lg-12'>
                <div className='p-2'>
                <button  style={isMobile?mobb:deskb}>Totally Committed</button>
            
                <h2  className='mt-2' style={{fontSize:'38px',fontWeight:'500'}}>
         Change your portfolio image with our help
                                                </h2>
                                                <p className='mt-2' style={{fontSize:'20px'}}> “If you’re competitor focused, you
                                              have to wait until there is a
                                              competitor doing something. Being
                                              customer-focused allows you to be
                                              more pioneering.”</p>
                                              </div>
            </div>
        </div>
        </>
    )
}

export default PortfoloioSection