import React, { Component }  from 'react'
import Filter from './Filter'
import FilteredFruitList from './FilteredFruitList.js'

const FruitBasket = (props) => {

  return (
    <div className="fruit-basket">
      <Filter
        handleChange={props.handleFilterChange}
        leProps={props.leProps}
      />
      <FilteredFruitList
        leProps={props.leProps}
      />
    </div>
  )
}

export default FruitBasket
