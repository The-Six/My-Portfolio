import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div className="Footer">
      <div className="Year">Rank:</div>
      <div className="Level_container">
        <div>Jedi-Knight</div>
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