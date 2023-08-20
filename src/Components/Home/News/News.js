import "./News.css"
import left from "./left.png"
import right from "./right.png"
import { Data } from "./Data"
import NewsItem from "./NewsItem"
const News=()=>{
    let box = document.querySelector(".news-list");
    const Left=()=>{

        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width
    }
    const Right=()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width
    }
    return(
        <div className="News">
        <h2>We are on news</h2>
       <div className="news-list">
       {
        Data.map((data=>(
            <NewsItem img={data.img} text={data.text}/>
        )))
       } </div>
        <div className="arrows">
        <img onClick={Left} src={left} alt="" height={40} />
        <img onClick={Right} src={right} alt="" height={40} />
        </div>
        </div>
        
    )
}
export default News;