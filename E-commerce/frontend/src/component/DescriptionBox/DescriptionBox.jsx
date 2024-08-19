import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>An E-commerce website is an online platform that facilitates the buying and selling of products of services over the internet. It serves as a virtual marketplace where business and individuals and showcase their products,interact with cutomers, and conduct transaction without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience,accessibillity, and the global reach they offer.</p>
        <p>E-commerce website typically display products or services along with detaild descriptions, image,price and any available variations (e.g,size,color). Each product usally has its own dedicated page with relevant information.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
