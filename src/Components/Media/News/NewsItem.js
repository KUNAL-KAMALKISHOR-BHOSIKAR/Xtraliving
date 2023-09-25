import React from 'react'
import "./News.css"
function NewsItem({img, text}) {
  return (
    <div>
    <div className="news-list-two">
<div className="news-item-two">
<img loading='lazy' src={img} alt="" style={{padding:"2.5rem"}} />
<h3>"{text}</h3>
</div>

</div>
    </div>
  )
}

export default NewsItem
