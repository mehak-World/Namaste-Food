import React from 'react'

const MenuCard = ({items, isVeg, isNonVeg}) => {
  return (
    <div style = {{margin: "20px"}}>
        {console.log(items)}
      {items.map((item) => {
        return ( (!isVeg && !isNonVeg) || (isVeg && item.card.info.isVeg == 1) || (isNonVeg && !item.card.info.isVeg) ? 
        
          <div className = "item-container">
            <div >
            {item.card.info.imageId ? <img src = { "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_200,c_fit/" + item.card.info.imageId }  alt = "food image" /> : ""}
            </div>
            <div>
            <p style = {{fontWeight: "bold"}}>{item.card.info.name}</p>
            <p style = {{color: "gray"}}>{item.card.info.description}</p>
            </div>
          </div> 
        : '')
       
      })}
    </div>
  )
}

export default MenuCard
