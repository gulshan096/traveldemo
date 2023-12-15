import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faShieldHalved, faCalendarDays,faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
  const [fullSize, setFullSIze] = useState('https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/w/o/6/4xl-db1024-3bros-original-imagt7byhhrqdkym.jpeg')

  const getImage = (image) => {
    setFullSIze(image);
  }

  return (
    <>
      <div className='detailPageBanner'>
        <img src="https://rofof.ae/uploads/slider/slider_62ee63931d9027-54251173-28405306.jpg" alt='' className='' />
      </div>

      <section className='container py-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='row g-1'>
              <div className='col-lg-2 product-small-img'>
                  <div className='item'>
                    <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/w/o/6/4xl-db1024-3bros-original-imagt7byhhrqdkym.jpeg" alt='' onClick={() => { getImage('https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/w/o/6/4xl-db1024-3bros-original-imagt7byhhrqdkym.jpeg') }} />
                  </div>
                  <div className='item'>
                    <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/t/k/a/4xl-db1024-3bros-original-imagt7bygvqgpqm5.jpeg" alt='' onClick={() => { getImage('https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/t/k/a/4xl-db1024-3bros-original-imagt7bygvqgpqm5.jpeg') }} />
                  </div>
                  <div className='item'>
                    <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/r/e/7/4xl-db1024-3bros-original-imagt7byedcwkgm9.jpeg" alt='' onClick={() => { getImage('https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/r/e/7/4xl-db1024-3bros-original-imagt7byedcwkgm9.jpeg') }} />
                  </div>
                  <div className='item'>
                    <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/c/2/m/4xl-db1024-3bros-original-imagt7byhztkj3u9.jpeg" alt='' onClick={() => { getImage('https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/c/2/m/4xl-db1024-3bros-original-imagt7byhztkj3u9.jpeg') }} />
                  </div>
                  <div className='item'>
                    <img src="https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/d/c/u/4xl-db1024-3bros-original-imagt7byg5aw9yqs.jpeg" alt='' onClick={() => { getImage('https://rukminim2.flixcart.com/image/128/128/xif0q/t-shirt/d/c/u/4xl-db1024-3bros-original-imagt7byg5aw9yqs.jpeg') }} />
                  </div>
              </div>
              <div className='col-lg-10 img-container'>
                  <img id='imgBox' src={fullSize} alt='' />
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='mt-5'>
              <h4>Brand Name</h4>
              <p>Ratings( 58 customer reviews)</p>
              <p>MRP :<del>5000.00</del></p>
              <p>Deal of the Day 4000.00</p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

              </p>
              <div className='row text-center'>
                <div className='col-lg-4'>
                  <span><FontAwesomeIcon icon={faShippingFast} /></span>
                  <p>Free Delivery</p>
                </div>
                <div className='col-lg-4'>
                  <span><FontAwesomeIcon icon={faShieldHalved} /></span>
                  <p>2 Years Waranty</p>
                </div>
                <div className='col-lg-4'>
                  <span><FontAwesomeIcon icon={faCalendarDays} /></span>
                  <p>15 Days Replacement</p>
                </div>
              </div>
            </div>
            <div className='row'>
               <div className='col-md-4 col-6'>
                  <Link to="/cart">
                      <button className='btn btn-success text-white  mt-3'><FontAwesomeIcon icon={faCartShopping} />Add to card</button>
                  </Link>
               </div>
               <div className='col-md-4 col-6'>
                  <Link to="/cart">
                      <button className='btn btn-primary text-white  mt-3'>Buy now</button>
                  </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className='row mx-2 py-3'>
            <div className="col-lg-6 col-md-6 col-6">
              <h3>Related Products</h3>
            </div>
            <div className="col-lg-6 col-md-6 col-6">
              <Link href="#" className="btn btn-primary float-end">More</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="text-center ">
                <div className="card">
                  <img src="https://inkmonk-s3.mobimedia.ai/site/20220417_184613824934_25d49d_Mini.jpg?quality=70&format=webp&w=412" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <Link to="/product-detail" className="btn btn-primary">Buy now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-center text-white">
                <div className="card">
                  <img src="https://inkmonk-s3.mobimedia.ai/site/20220417_184613824934_25d49d_Mini.jpg?quality=70&format=webp&w=412" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <Link to="product-detail" className="btn btn-primary">Buy now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-center text-white">
                <div className="card">
                  <img src="https://inkmonk-s3.mobimedia.ai/site/20220417_184613824934_25d49d_Mini.jpg?quality=70&format=webp&w=412" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <Link to="product-detail" className="btn btn-primary">Buy now</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="text-center text-white">
                <div className="card">
                  <img src="https://inkmonk-s3.mobimedia.ai/site/20220417_184613824934_25d49d_Mini.jpg?quality=70&format=webp&w=412" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                     <Link to="product-detail" className="btn btn-primary">Buy now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDetail