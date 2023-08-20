import React from 'react'
import "./News.css"
function NewsItem({img, text}) {
  return (
    <div>
    <div className="news-list">
<div className="news-item">
<img src={img} alt="" height={30} style={{padding:"2.5rem"}} />
<p>"{text}</p>
</div>

</div>
    </div>
  )
}

export default NewsItem
