import "./News.css"
import times from "./times.png"
import outlook from "./outlook.png"
import money from "./money.png"
import left from "./left.png"
import right from "./right.png"
const News=()=>{
    return(
        <div className="News">
        <h2>We are on news</h2>
        <div className="news-list">
        <div className="news-item">
        <img src={times} alt="" height={20} style={{padding:"2.5rem"}} />
        <p>"Fitness company building deep tech solution
            using their training expertise and
            understanding of market.</p>
    </div>

    <div className="news-item">
        <img src={outlook} alt="" height={100} />
        <p>"Fitness company building deep tech solution
            using their training expertise and
            understanding of market.</p>
    </div>

    <div className="news-item">
        <img src={money} alt="" height={100} />
        <p>"Fitness company building deep tech solution
            using their training expertise and
            understanding of market.</p>
    </div>
        </div>
        
        <div className="arrows">
        <img src={left} alt="" height={40} />
        <img src={right} alt="" height={40} />
        </div>
        </div>
    )
}
export default News;