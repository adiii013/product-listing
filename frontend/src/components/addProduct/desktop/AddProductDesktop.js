import React from 'react'
import './AddProductDesktop.css'
import AddProductPopUp from '../../pop-ups/addProduct/AddProductPopUp'
import 'reactjs-popup/dist/index.css';


function AddProductDesktop() {

  return (
    <div className="add__product__container__dk">
      <div className="add__product__subcontainer__dk">
        <p className='suggestions'>10 Suggestions</p>
        <div className="sort__by">
          <p>Sort By : </p>
          <select name="Sort By" id="" className='filter__item'>
            <option defaultChecked value="">UpVotes</option>
            <option value="">Comments</option>
          </select>
        </div>
      </div>
      <AddProductPopUp/>
    </div>
  )
}

export default AddProductDesktop