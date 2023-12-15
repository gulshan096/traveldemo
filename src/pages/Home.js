import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {


  return (
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide " data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner ">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://c4.wallpaperflare.com/wallpaper/837/468/965/wavy-dark-shadow-light-wallpaper-preview.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>First slide label</h1>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://www.bhmpics.com/downloads/1920x1080-banner-Wallpapers/6.20553812.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Second slide label</h1>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://cdna.artstation.com/p/assets/images/images/000/488/526/large/lekso-tiger-1.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1>Third slide label</h1>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <section className="py-5 bg-light">
        <div className="mx-5">
          <div className='row mx-2 py-3'>
            <div className="col-lg-6 col-md-6 col-6">
              <h3>Best of Electronics</h3>
            </div>
            <div className="col-lg-6 col-md-6 col-6">
              <Link to="" className="btn btn-primary float-end">More</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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

      <section className="py-5">
        <div className="mx-5">
          <div className='row mx-2 py-3'>
            <div className="col-lg-6 col-md-6 col-6">
              <h3>Best of Fashion</h3>
            </div>
            <div className="col-lg-6 col-md-6 col-6">
              <Link to="#" className="btn btn-primary float-end">More</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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

      <section className="py-5 bg-light">
        <div className="mx-5">
          <div className='row mx-2 py-3'>
            <div className="col-lg-6 col-md-6 col-6">
              <h3>Best of Home & Furniture</h3>
            </div>
            <div className="col-lg-6 col-md-6 col-6">
              <Link to="#" className="btn btn-primary float-end">More</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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

      <section className="py-5">
        <div className="mx-5">
          <div className='row mx-2 py-3'>
            <div className="col-lg-6 col-md-6 col-6">
              <h3>Best of Stationary</h3>
            </div>
            <div className="col-lg-6 col-md-6 col-6">
              <Link to="#" className="btn btn-primary float-end">More</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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

      <section className="py-5 bg-light">
        <div className="mx-5">
          <div className='row mx-2 py-3'>
            <div className="col-lg-6 col-md-6 col-6">
              <h3>Best of Sports</h3>
            </div>
            <div className="col-lg-6 col-md-6 col-6">
              <Link to="#" className="btn btn-primary float-end">More</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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

      <section className="py-5">
        <div className="mx-5">
          <div className='row mx-2 py-3'>
            <div className="col-lg-6 col-md-6 col-6">
              <h3>Best of Beauty, Toy & More</h3>
            </div>
            <div className="col-lg-6 col-md-6 col-6">
              <Link to="#" className="btn btn-primary float-end">More</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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
            <div className="col-lg-2">
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

export default Home