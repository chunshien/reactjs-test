import React from 'react';

import ProductItem from './ProductItem.js';
import Pagination from '../Pagination/Pagination.js';

class ProductList extends React.Component {
    constructor(props) {
        super(props);        
        this.handlePageChanged = this.handlePageChanged.bind(this);
        this.handlePageCountChange = this.handlePageCountChange.bind(this);        
    }

    handlePageCountChange(e){  
        this.props.onHandlePageCountChanged(e.target.value);        
    }

    handlePageChanged(index){
        this.props.onHandlePageChanged(index);      
    }

    renderProduct(){        
        const {products} = this.props
        
        if(products && products.length > 0){
            return products.map((product)=> { 
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
    }

    renderPagination(){        
        return (
            <Pagination 
                totalItem={this.props.totalItem}
                itemCountPerPage={this.props.itemCountPerPage}
                activePage={this.props.activePage}
                onChanged={this.handlePageChanged}
            />
        )
    }

    render() {                
        return (
            <div>
                <div className='product-list-header'> 
                    <div className='title'>All Products</div>
                    <div className='total-products'>{this.props.totalItem} Products</div>
                    <div className='item-per-page-count'>
                        <select onChange={this.handlePageCountChange}>
                            <option value="8">8 per page</option>
                            <option value="16">16 per page</option>
                            <option value="24">24 per page</option>
                            <option value="32">32 per page</option>
                            <option value="50">50 per page</option>
                            <option value="100">100 per page</option>
                        </select>                       
                    </div>
                </div>                
                <div className='product-list-content'>
                    {this.renderProduct()}  
                </div>
                <div className='product-list-footer'>
                    {this.renderPagination()}
                </div>                
                <style jsx ='true'>{`
                .custom-select select {
                    display: none; /*hide original SELECT element: */
                }
                .title {                    
                    color: #323232;
                    font-size: 16px;
                    width: 100%;
                    float: left;
                    text-align: left;
                }        
                .total-products, .item-per-page-count {                    
                    font-size: 14px;
                    width: 50%;
                    float: left;                    
                }
                .total-products {                    
                    color: #b1b1b1;
                    text-align: left;
                }
                .item-per-page-count{                   
                    color: #323232;
                    text-align: right;
                }
                .product-list-header{
                    margin: 0 10px
                }
                .product-list-header, .product-list-content, .product-list-footer{
                    width: 100%;   
                    float: left;                 
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
                @media only screen and (min-width: 576px) and (max-width: 767px){
                    .productItem{
                        width: 50%;
                    }
                }
                /* small desktop */
                @media only screen and (min-width: 768px) and (max-width: 1099px){
                    .productItem{
                        width: 33%;
                    }
                }
                /* desktop */
                @media only screen and (min-width: 1100px) {
                    .productItem{
                        width: 300px;
                    }
                }
            `}</style>
            </div>
        );
    }
}
ProductList.defaultProps = {
    activePage: 1,
    totalItem: 0,
    itemCountPerPage: 8
}
export default (ProductList);