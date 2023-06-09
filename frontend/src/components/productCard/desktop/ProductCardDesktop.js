import React, { useState } from 'react'
import './ProductCardDesktop.css'
import Logo from '../../../assets/advertiseImage.png'
import { FaRegCommentDots } from 'react-icons/fa'
import { RiArrowDropUpLine } from 'react-icons/ri'
import { BiCommentDetail } from 'react-icons/bi'

function ProductCardDesktop({product}) {
  const [commentOn, setCommentOn] = useState(false);
  return (
    <>
      <div className="product__card__container__dk" key={product._id}>
        <img src={Logo} alt="" className="product__card__logo__dk" />
        <div className="product__card__details">
          <p className='product__name'>{product.name}</p>
          <p className="product__description">{product.description}</p>
          <div className="product__tag__comment">
            <p className="product__tag">Meditech</p>
            <p className="product__comment" onClick={()=>setCommentOn(!commentOn)}> <FaRegCommentDots /> Comment</p>
          </div>
        </div>
        <div className="product__upvote">
          <div className="upvote" >
            <RiArrowDropUpLine />
            <p>{product.upVotes}</p>
          </div>
          <p>{product.comments.length} < BiCommentDetail /></p>
        </div>
      </div>
      {
        (commentOn) ? <div className="comment__box">
        <div className="add__comment__container">
          <input type="text" />
        </div>
        {
          product.comments.map((comment)=><p>{comment}</p>)
        }
      </div> : <div/>
      }
      
    </>
  )
}

export default ProductCardDesktop