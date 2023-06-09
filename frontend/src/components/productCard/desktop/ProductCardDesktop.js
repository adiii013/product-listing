import React, { useState } from 'react'
import './ProductCardDesktop.css'
import Logo from '../../../assets/advertiseImage.png'
import { FaRegCommentDots } from 'react-icons/fa'
import { RiArrowDropUpLine } from 'react-icons/ri'
import { BiCommentDetail } from 'react-icons/bi'

function ProductCardDesktop() {
  const [commentOn, setCommentOn] = useState(false);
  return (
    <>
      <div className="product__card__container__dk">
        <img src={Logo} alt="" className="product__card__logo__dk" />
        <div className="product__card__details">
          <p className='product__name'>Cred Club</p>
          <p className="product__description">Lorem ipsum dolor sit amet.</p>
          <div className="product__tag__comment">
            <p className="product__tag">Meditech</p>
            <p className="product__comment" onClick={()=>setCommentOn(!commentOn)}> <FaRegCommentDots /> Comment</p>
          </div>
        </div>
        <div className="product__upvote">
          <div className="upvote">
            <RiArrowDropUpLine />
            <p>50</p>
          </div>
          <p>5 < BiCommentDetail /></p>
        </div>
      </div>
      {
        (commentOn) ? <div className="comment__box">
        <div className="add__comment__container">
          <input type="text" />
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt cumque laboriosam sed quaerat molestias vitae eaque sapiente, distinctio quibusdam dolor illum dolorem quia ratione, perferendis soluta, sequi maiores error ipsum?</p>
      </div> : <div/>
      }
      
    </>
  )
}

export default ProductCardDesktop