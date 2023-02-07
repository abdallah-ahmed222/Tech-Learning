import React from 'react'

export default function Head( props )
{
    return (
        <>
            <h3 className='fw-bold text-center text-white'>{ props.text }</h3>
            <div className='main-container__move d-flex justify-content-center my-2'><span></span></div>
        </>
    )
}
