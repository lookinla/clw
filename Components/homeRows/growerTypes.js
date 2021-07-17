import {useState} from 'react'

const GrowerTypes = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <>
    <div className="row-title"></div>
    <div className="row-sub-title"></div>

    <div className="grow-types-items">
      <div className="gt-item">
        <div className="gt-item-content gt-item-comercial">
          {hovered && <div className='gt-item-hovered-description'></div>}
        </div>
      </div>
    </div>
    </>
  )

}
