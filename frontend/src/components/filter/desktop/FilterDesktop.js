import React from 'react'
import './FilterDesktop.css'


function FilterDesktop() {
  return (
    <div className="filter__container__dk">
      <div className="apply__filter__container__dk">
        <p>Feedback</p>
        <article>Apply Filter</article>
      </div>
      <div className="filter__main__container__dk">
          <p>All</p>
          <p>Fintech</p>
          <p>Edtech</p>
          <p>B2B</p>
          <p>SaaS</p>
          <p>Agritech</p>
          <p>MediTech</p>
      </div>
    </div>
  )
}

export default FilterDesktop