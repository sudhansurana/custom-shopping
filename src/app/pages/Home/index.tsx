import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IProductState } from '../../redux/reducers/product.reducer'
import './index.css'

import * as actions from '../../redux/actions'
// require('../../../assets/images/')

interface IState {
  productReducer?: IProductState
}

const Home = (props: any) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state: IState) => state.productReducer?.products);
  const banner = useSelector((state: IState) => state.productReducer?.banner);
  const isLoading = useSelector((state: IState) => state.productReducer?.isLoading);
  // const { isLoggedIn, products } = props
  console.log('props', props)
  console.log('banner', banner)
  console.log('products', products)
  const bannerImage = (image: any) => {
    return require(`../../../assets/images/${image}`)
  }
  useEffect(() => {
    dispatch(actions.getMainBanner())
    dispatch(actions.getProducts())
  }, []);

  const productItems = products?.map((product: any, index: number) => {
    return (
      <div className="product-card card m-1" key={`prod_${index}`}>
        <img src={product.image} className="card-img-top" alt="..."></img>
        <div className="card-body w-sm-100">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <Link to={'/product/' + product.id}>Details</Link>
        </div>
      </div>
    )
  })

  return (
    <>
        {!!banner && <div className="container main-banner-container mt-5">
          <div className="main-banner-content m-1">
            <div className="main-banner-text">
              <h4 className="display-4 main-banner-title">{banner.title}</h4>
              <p className="lead">   {banner.description}</p>
              <p><a className="btn btn-primary btn-lg" href="/products">Shop Now</a></p>
            </div>
            <img className="main-banner-image" src={banner.image} alt="banner"></img>
          </div>
        </div>}
        {isLoading && <label>Loading...</label>}
    </>
  )
}

export default Home;
