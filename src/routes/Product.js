import React from 'react';
import ProductItem from '../components/ProductItem.js';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {productTotal: 24};
    }
    render() {
        return (
            <div>
                <div className='title'>All Products</div>
                <div className='sub-title'>{this.state.productTotal} Products</div>
                <div className='sub-page'>8 per page</div>
                <ProductItem />
                <style jsx>{`
                .title {                    
                    color: #323232;
                    font-size: 16px;
                    width: 100%;
                    float: left;
                    text-align: left;
                }        
                .sub-title, .sub-page {                    
                    font-size: 12px;
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
            `}</style>
            </div>
        );
    }
  }
  
  export default Product;