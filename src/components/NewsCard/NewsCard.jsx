import React from 'react'
import './NewsCard.css'

const NewsCard = ({item}) => {
  return (
    <>
        <div className='news-card'>
            <a href="" className='element-new-card'>
                <span className='text-deco'>{item.type}</span>
                <h2 className='title'>{item.title}</h2>
                <p className='body'>{item.body}</p>
                <div className='image-new-box'>
                    <img src={`media/images/${item.url}.webp`} alt="new-image" />
                </div>
            </a>
        </div>
    </>
  )
}

export default NewsCard