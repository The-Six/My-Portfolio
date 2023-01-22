import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className="Footer">
      <div className="Year">YR 20/23</div>
      <div className="Level_container">
        <div>LEVEL 10</div>
        <div className="Level">
          <div className="XP"></div>
          <div className="XP_remaining"></div>
        </div>
      </div>
      <div className="Copyright">Copyright Ijaz Driscoll</div>
    </div>
  )
}

export default  Footer