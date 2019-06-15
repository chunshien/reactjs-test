import React from 'react';

class ProductItem extends React.Component  {
    render() {
        return (
            <div style={{backgroundColor: 'white', margin: 10}}>
                <div>
                    <img className='productImage' alt={this.props.productName} src={this.props.productImage} />
                </div>
                <hr style={{backgroundColor: '#f0f0f0', height: 1, border: 0, margin: 0}}/>
                <div style={{padding: 10}}>
                    <div className='productName'>{this.props.productName}</div>
                    <div className='productDescription'>{this.props.productDescription}</div>
                    <div className='productPrice'>{this.props.productPrice}</div>
                </div>
                <style jsx='true'>{`                                    
                    .productImage {
                        width: 90%;
                        max-width: 250px;
                        height: 200px;
                        object-fit: cover;
                        padding: 5% 5px;
                    }

                    .productName, .productDescription, .productPrice {                        
                        text-align: left;
                    }                
                    
                    .productName{
                        color: #323232;
                        font-size: 14px;
                        width: 100%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .productDescription{
                        color: #b1b1b1;
                        font-size: 13px;
                        width: 100%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .productPrice{
                        color: #000;
                        font-weight: 600;
                        font-size: 14px;
                    }
                `}</style>
            </div>
        );
    }
  }
  export default ProductItem;