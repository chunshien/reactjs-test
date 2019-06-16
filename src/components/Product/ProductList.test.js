import React from 'react';
import ProductList from './ProductList.js';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
const testData = require('../../reducers/Product/test-data')

describe('Component - ProductList Test', () => {
    it('renders ProductList without data without crashing', () => {
        const component = renderer.create(
            <ProductList/>    
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot()        
    });

    it('renders ProductList with data without crashing', () => {
        const component = renderer.create(
            <ProductList
                products = {testData.slice(0, 8)}
                activePage = {1}
                totalItem = {20}
                itemCountPerPage = {8}
            />    
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
                onHandlePageCountChanged={onHandlePageCountChangedMock}
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

    //mock props function call
    let ProductListElement
    let onHandlePageCountChangedMock = jest.fn();
    let onHandlePageChangedMock = jest.fn();
    beforeAll(function() {
        ProductListElement = TestUtils.renderIntoDocument(
            <ProductList 
                onHandlePageCountChanged={onHandlePageCountChangedMock}
                onHandlePageChanged={onHandlePageChangedMock}
            />
        );
    });
    beforeEach(function() {
        onHandlePageCountChangedMock.mockClear();
        onHandlePageChangedMock.mockClear();
    });

    it('Simulate ProductList onHandlePageCountChanged', () => {
        ProductListElement.props.onHandlePageCountChanged();
        expect(onHandlePageCountChangedMock).toBeCalled();                
    });

    it('Simulate ProductList onHandlePageChanged', () => {
        ProductListElement.props.onHandlePageChanged();
        expect(onHandlePageChangedMock).toBeCalled();     
    })
})