import "./Hero.css"
import hero from "../../Img/hero.png"
import line from "./line.png"

const Hero=()=>{
    return(
    <div className="hero" 
    style={{backgroundImage: `url(${line})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    }}>
        <div className="space"></div>
        <div className="banner-area">
       
        <div className="banner">
        <div className="text-area">
    <h2>Elevate Human Performance</h2>
    <p>be <span className="fun">FUN</span><span className="c">c</span>tionally fit</p>
    <svg className="yellow-arrow" width="51" height="66" viewBox="0 0 70 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.655 2.38281C3.24189 16.1718 -4.91093 43.1169 18.4169 43.6929C24.6742 43.8474 30.4854 43.2397 33.7169 37.2382C36.3302 32.385 29.9277 29.7383 25.9609 32.3828C20.8526 35.7884 17.7798 40.4118 16.1219 47.1354C14.6942 52.9255 14.0628 57.1709 16.9609 62.3828C21.9714 71.3934 32.34 71.8479 42.4609 69.8828C50.1864 68.3828 55.2184 67.299 60.8745 64.1567C61.7926 63.6466 67.4734 60.1784 67.3273 60.3828C64.746 63.9967 60.1496 68.5778 56.9609 71.7338C55.9609 72.7571 55.2825 73.5613 54.4609 74.3828C53.8618 74.982 55.5553 73.1784 55.9609 72.7571C59.4405 69.1437 63.6399 64.9589 66.8185 61.0739C68.8105 58.6392 62.4609 57.8828 59.9609 57.8828C55.9458 57.8828 52.4609 57.8828 49.6864 57.4629" stroke="#FFC700" stroke-width="4" stroke-linecap="round"/>
</svg>
        </div>
        <div className="img-area">
        <svg width="51" height="66" viewBox="0 0 51 88" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.65051 85.4866C16.0174 80.6793 42.9604 72.5194 30.502 52.7886C27.1602 47.4961 23.4316 42.9976 16.6454 43.637C11.1577 44.1541 12.5062 50.9496 16.9067 52.7837C22.5737 55.1457 28.125 55.1384 34.6393 52.789C40.2492 50.7659 44.132 48.9367 46.8616 43.6346C51.5806 34.468 46.2083 25.588 38.96 18.2561C33.4272 12.6596 29.7346 9.07349 23.9829 6.1097C23.0493 5.6286 17.0127 2.82511 17.2638 2.83324C21.7026 2.97693 28.0638 4.26097 32.4584 5.16392C33.8645 5.42851 34.91 5.54707 36.0492 5.77506C36.8801 5.94133 34.4401 5.53243 33.8645 5.42851C28.928 4.53713 23.1168 3.36372 18.1211 2.87338C14.9904 2.56609 17.8825 8.26915 19.269 10.3494C21.4958 13.6905 23.4286 16.5903 24.618 19.1319" stroke="#ED5009" stroke-width="4" stroke-linecap="round"/>
</svg>
    <img src={hero} alt=""/>
    </div>
    </div>
    <div className="tag-line">   
<svg className="blue-box" width="150" height="150" viewBox="0 0 294 282" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="159.924" y="39.644" width="99" height="199.053" rx="29.5" transform="rotate(34.2964 159.924 39.644)" stroke="black"/>
<rect x="163.582" y="20.6484" width="100" height="210.566" rx="30" transform="rotate(34.2964 163.582 20.6484)" fill="#8591D7"/>
</svg>

<svg className="peach-box" width="80" height="80" viewBox="0 0 137 132" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9.63689" y="37.276" width="99" height="99" rx="29.5" transform="rotate(-19.2494 9.63689 37.276)" stroke="black"/>
<rect y="32.9688" width="100" height="100" rx="30" transform="rotate(-19.2494 0 32.9688)" fill="#FD8C69"/>
</svg>

<svg className="yellow-circle" width="60" height="60" viewBox="0 0 108 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="58" cy="54.5977" r="49.5" stroke="black"/>
<circle cx="50" cy="50.5977" r="50" fill="#FCFF53"/>
</svg>

    <h3>Forged from evolution, neuroscience, 
        and math, our mission is to elevate
        human potential. Beyond products,
        we're shaping a future where every
        family thrives in <span className="blue">holistic health</span> and <span className="blue">peak performance</span>.</h3>
</div>
</div>
<div className="space"></div>
</div>
    )
}
export default Hero;