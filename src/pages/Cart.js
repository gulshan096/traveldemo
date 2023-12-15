import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faX } from '@fortawesome/free-solid-svg-icons';


const Cart = () => {
    return (
        <>
            <div className='detailPageBanner'>
                <img src="https://rofof.ae/uploads/slider/slider_62ee63931d9027-54251173-28405306.jpg" alt='' className='' />
            </div>
            <div className="container my-5">
                <h4>My Cart (4)</h4>
                <hr />
                <div className='row '>
                    <div className='col-lg-9'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img width="100px" height="100px" src='https://rofof.ae/assets/img/payment/visa.svg' alt='' />
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='mt-4'>
                                            <h6 className=''>OPPO F9 PRO</h6>
                                            <h6 className=''>1000.00 Rs-/</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 '>
                                <div className='d-flex mt-4 float-left'>
                                    <button className='btn btn-primary'><FontAwesomeIcon icon={faMinus} /></button>
                                    <input className='text-center form-control border border-dark' type='phone' value="5" />
                                    <button className='btn btn-primary'><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            </div>
                            <div className='col-md-4 '>
                                <div className='mt-4'>
                                    <button className='btn btn-danger text-whute'><FontAwesomeIcon icon={faX} /></button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img width="100px" height="100px" src='https://rofof.ae/assets/img/payment/mastercard.svg' alt='' />
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='mt-4'>
                                            <h6 className=''>OPPO F9 PRO</h6>
                                            <h6 className=''>1000.00 Rs-/</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 '>
                                <div className='d-flex mt-4 float-left'>
                                    <button className='btn btn-primary'><FontAwesomeIcon icon={faMinus} /></button>
                                    <input className='text-center form-control border border-dark' type='phone' value="5" />
                                    <button className='btn btn-primary'><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            </div>
                            <div className='col-md-4 '>
                                <div className='mt-4'>
                                    <button className='btn btn-danger text-whute'><FontAwesomeIcon icon={faX} /></button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img width="100px" height="100px" src='https://rofof.ae/assets/img/payment/maestro.svg' alt='' />
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='mt-4'>
                                            <h6 className=''>OPPO F9 PRO</h6>
                                            <h6 className=''>1000.00 Rs-/</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 '>
                                <div className='d-flex mt-4 float-left'>
                                    <button className='btn btn-primary'><FontAwesomeIcon icon={faMinus} /></button>
                                    <input className='text-center form-control border border-dark' type='phone' value="5" />
                                    <button className='btn btn-primary'><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            </div>
                            <div className='col-md-4 '>
                                <div className='mt-4'>
                                    <button className='btn btn-danger text-whute'><FontAwesomeIcon icon={faX} /></button>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img width="100px" height="100px" src='https://rofof.ae/assets/img/payment/amex.svg' alt='' />
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='mt-4'>
                                            <h6 className=''>OPPO F9 PRO</h6>
                                            <h6 className=''>1000.00 Rs-/</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4 '>
                                <div className='d-flex mt-4 float-left'>
                                    <button className='btn btn-primary'><FontAwesomeIcon icon={faMinus} /></button>
                                    <input className='text-center form-control border border-dark' type='phone' value="5" />
                                    <button className='btn btn-primary'><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            </div>
                            <div className='col-md-4 '>
                                <div className='mt-4'>
                                    <button className='btn btn-danger text-whute'><FontAwesomeIcon icon={faX} /></button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='col-lg-3 bg-light'>
                        <div className='  text-center'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h6 className='py-4'>Subtotal</h6>
                                    <h6 className='py-4'>Total</h6>
                                    <h6 className='py-4'>GST(18%)</h6>
                                </div>
                                <div className='col-md-6'>
                                    <h6 className='py-4'>5000.00 Rs-/</h6>
                                    <h6 className='py-4'>5000.00 Rs-/</h6>
                                    <h6 className='py-4'>50.00 Rs-/</h6>
                                </div>
                                <hr />
                                <div className='col-md-12'>
                                    <Link to="/payment">
                                        <button className='btn btn-outline-primary fs-5 mt-3'>Continue to checkout</button>
                                    </Link>
                                </div>
                                <div className='col-md-12'>
                                    <div className='row py-5 mx-auto'>
                                        <div className='col-md-2'><img width="50px" height="50px" src='https://rofof.ae/assets/img/payment/visa.svg' alt='' /></div>
                                        <div className='col-md-2'><img width="50px" height="50px" src='https://rofof.ae/assets/img/payment/mastercard.svg' alt='' /></div>
                                        <div className='col-md-2'><img width="50px" height="50px" src='https://rofof.ae/assets/img/payment/maestro.svg' alt='' /></div>
                                        <div className='col-md-2'><img width="50px" height="50px" src='https://rofof.ae/assets/img/payment/amex.svg' alt='' /></div>
                                        <div className='col-md-2'><img width="50px" height="50px" src='https://rofof.ae/assets/img/payment/discover.svg' alt='' /></div>
                                        <div className='col-md-2'><img width="50px" height="50px" src='https://rofof.ae/assets/img/payment/visa.svg' alt='' /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart