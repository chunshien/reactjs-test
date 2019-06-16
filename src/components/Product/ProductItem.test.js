import React from 'react';
import ProductItem from './ProductItem';
import renderer from 'react-test-renderer';


describe('Component - ProductItem Test', () => {
    it('renders ProductItem without data without crashing', () => {
        const component = renderer.create(
            <ProductItem/>    
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot() 
    })
    it('renders ProductItem with data without crashing', () => {
        const component = renderer.create(
            <ProductItem
                productImage={"http://dummyimage.com/307x328.bmp/ff4444/ffffff"}
                productName={"Amitriptyline Hydrochloride"}
                productDescription={"synergize efficient metrics"}
                productPrice={"$87.68"}
            />    
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot() 
    })
})

