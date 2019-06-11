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
                <div className='productItem'>
                    <ProductItem 
                        productImage={'https://dummyimage.com/318x336.png/5fa2dd/ffffff'}
                        productName={'name'}
                        productDescription={'desc'}
                        productPrice={'16.99'}
                    />
                </div>
                <div className='productItem'>
                    <ProductItem 
                        productImage={'http://dummyimage.com/317x312.png/ff4444/ffffff'}
                        productName={'name'}
                        productDescription={'desc'}
                        productPrice={'16.99'}
                    />
                </div>  
                <div className='productItem'>
                    <ProductItem 
                        productImage={'http://dummyimage.com/350x318.png/dddddd/000000'}
                        productName={'name'}
                        productDescription={'desc'}
                        productPrice={'16.99'}
                    />
                </div>              
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
                        width: 450px;
                    }
                }
            `}</style>
            </div>
        );
    }
  }
  
  export default Product;