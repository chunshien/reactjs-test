import React from 'react';
import ProductList from './ProductList.js';
import renderer from 'react-test-renderer';

describe('Component - ProductList Test', () => {
    it('renders ProductList without crashing', () => {
        const component = renderer.create(
            <ProductList/>    
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot()        
    });

    it('renders ProductList with correct style', () => {
        const component = renderer.create(
            <ProductList
                products={[
                    {
                    "id": 1,
                    "price": "$87.68",
                    "product_name": "Amitriptyline Hydrochloride",
                    "description": "synergize efficient metrics",
                    "product_image": "http://dummyimage.com/307x328.bmp/ff4444/ffffff"
                }]}
                activePage = {1}
                totalItem = {1}
                itemCountPerPage = {8}
            />    
        );
        let tree = component.toJSON();
        
        expect(tree.children[0].props.className).toEqual('product-list-header')
        expect(tree.children[1].props.className).toEqual('product-list-content')        
        expect(tree.children[2].props.className).toEqual('product-list-footer')
        
        let header = tree.children[0]
        expect(header.children[0].props.className).toEqual('title')
        expect(header.children[1].props.className).toEqual('total-products')
        expect(header.children[2].props.className).toEqual('item-per-page-count')
       
        let content = tree.children[1]
        expect(content.children[0].props.className).toEqual('productItem')        
    });    
})