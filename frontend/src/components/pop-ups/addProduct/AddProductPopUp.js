import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './AddProductPopUp.css'

function AddProductPopUp() {
  return (
    <Popup
      trigger={<button className="button add__product">+ Add Product</button>}
      modal
      nested
    >
      <div className="add__product__popup__container">
        <div className="left__container__addproduct__popup">
          <p>Add your product</p>
          <input type="text" placeholder='Name of Product' />
          <input type="text" placeholder='Category' />
          <input type="text" placeholder='Add Logo url' />
          <input type="text" placeholder='Link of Product' />
          <input type="text" placeholder='Add Description' />
          <button>+Add</button>
        </div>
        <div className="right__container__addproduct__popup">
            <p>Feedback</p>
            <article>Add your product and rate other items.............</article>
        </div>
      </div>
    </Popup>
  )
}

export default AddProductPopUp