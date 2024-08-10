import React from 'react'
import './Campus.css'
import gallery_img1 from '../../assets/gallery-1.png'
import gallery_img2 from '../../assets/gallery-2.png'
import gallery_img3 from '../../assets/gallery-3.png'
import gallery_img4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery d-flex justify-content-between align-items-center">
        <img src={gallery_img1} alt="img" />
        <img src={gallery_img2} alt="img" />
        <img src={gallery_img3} alt="img" />
        <img src={gallery_img4} alt="img" />
      </div>
      <button className='btn-common dark-btn'>See more here <img  src={white_arrow} alt="" /></button>
      {/* <h3>Campus component</h3> */}







    </div>
  )
}

export default Campus