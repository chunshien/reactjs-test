import React from 'react';
import ProductItem from '../components/ProductItem.js';

import { connect } from "react-redux";
import { getProduct } from "../actions";
import { bindActionCreators } from "redux";

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {productTotal: 24};
    }
    componentDidMount(){
        this.props.actions.getProduct()
    }

    renderProduct(){
        //console.log('renderProduct',this.props.product)
        const products = this.props.product.filter(product=>product.id<15)
        return products.map((product,index)=> { 
            return (
                <div key = {product.id} className='productItem'>
                    <ProductItem                         
                        productImage={product.product_image}
                        productName={product.product_name}
                        productDescription={product.description}
                        productPrice={product.price}
                    />
                </div>
            )        
        })
    }

    render() {        
        return (
            <div>
                <div className='title'>All Products</div>
                <div className='sub-title'>{this.state.productTotal} Products</div>
                <div className='sub-page'>8 per page</div>
                {this.renderProduct()}                     
                <style jsx ='true'>{`
                .title {                    
                    color: #323232;
                    font-size: 16px;
                    width: 100%;
                    float: left;
                    text-align: left;
                }        
                .sub-title, .sub-page {                    
                    font-size: 14px;
                    width: 50%;
                    float: left;                    
                }
                .sub-title {                    
                    color: #b1b1b1;
                    text-align: left;
                }
                .sub-page{                   
                    color: #323232;
                    text-align: right;
                }
                
                .productItem{
                    float: left;   
                }

                /* mobile only */
                @media only screen and (min-width: 0px) and (max-width: 575px){
                    .productItem{
                        width: 100%;
                    }
                }
                /* tablet */
                @media only screen and (min-width: 576px) and (max-width: 991px){
                    .productItem{
                        width: 50%;
                    }
                }
                /* desktop */
                @media only screen and (min-width: 992px) {
                    .productItem{
                        width: 350px;
                    }
                }
            `}</style>
            </div>
        );
    }
  }

  function mapStateToProps(state) {  
    let product = state.product
    
    return {
        product: product,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: { dispatch, ...bindActionCreators({ getProduct }, dispatch) }
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Product);