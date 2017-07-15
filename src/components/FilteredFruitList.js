import React, { Component } from 'react'

const FilteredFruitList = (props) => {
  const list = !props.leProps.currentFilter || props.leProps.currentFilter === 'all' ? props.leProps.items : props.leProps.items.filter(item => item.fruit_type === props.leProps.currentFilter);

  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  )
}

export default FilteredFruitList
