import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
          <img className='home__image' src="https://m.media-amazon.com/images/I/71oW28b76+L._SX3000_.jpg" alt="" />

          <div className='home__row'>
            <Product id={1293812} title="The lean startup" price={19.99} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={4}/>
            <Product id={1213822} title="Logitech C922x Pro Stream Webcam – Full HD 1080p Camera" price={99.99} image="https://m.media-amazon.com/images/I/712xpaJPT6L._AC_SL1500_.jpg" rating={5}/>            

          </div>

          <div className='home__row'>
            <Product id={1293822} title="The Road to React: Your journey to master plain yet pragmatic React.js" price={29.99} image="https://m.media-amazon.com/images/P/172004399X.01._SCLZZZZZZZ_SX500_.jpg" rating={5}/>
            <Product id={1253822} title="SAMSUNG SSD 970 EVO Plus 2TB – Interface M.2 NVMe com tecnologia V-NAND (MZ-V7S2T0B/AM)" price={43.99} image="https://m.media-amazon.com/images/I/813bvfaxuAL._AC_SL1500_.jpg" rating={4}/>
            <Product id={1294922} title="Fire TV Stick with Alexa Voice Remote (includes TV controls), HD streaming device" price={50.99} image="https://m.media-amazon.com/images/I/61+T2xNzR7S._AC_SL1000_.jpg" rating={4}/>
          </div>

          <div className='home__row'>
            <Product id={1294262} title="GIGABYTE G34WQC A 34' 144Hz Ultra-Wide Curved Gaming Monitor, 3440 x 1440 VA 1500R Display, 1ms (MPRT) Response Time, 90% DCI-P3, VESA Display HDR400, FreeSync Premium, Black (G34WQC A-SA)" price={349.99} image="https://m.media-amazon.com/images/I/71hvdURMrWL._AC_SL1500_.jpg" rating={4}/>
          </div>

        </div>
    </div>
  )
}

export default Home