import React from 'react'

function Profilecard(props) {
    const{thumbnailUrl,url,title,id}=props;
  return (
    <div className='profile-c'>
        <img className='img-box' src={thumbnailUrl} alt="" />
        <h2 className='title'>{title}</h2>
        <a href={url}className='button'>details</a>
    </div>
  )
}

export default Profilecard