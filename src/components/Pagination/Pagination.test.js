import React from 'react';
import Pagination from './Pagination.js';
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';

describe('Component - Pagination Test', () => {
    it('renders Pagination without crashing', () => {
        const component = renderer.create(
            <Pagination />    
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot()        
    });
    
    let PaginationElement
    let onChangedMock = jest.fn();
    beforeAll(function() {
        PaginationElement = TestUtils.renderIntoDocument(<Pagination onChanged={onChangedMock}/>);
    });
    beforeEach(function() {
        onChangedMock.mockClear();
    });

    it('Simulate Pagination onChanged', () => {
        PaginationElement.props.onChanged();
        expect(onChangedMock).toBeCalled();        
    });

    it('Test Pagination 3 pages - page 1 active (first)', () => {
        const component = renderer.create(
            <Pagination 
                totalItem={20}
                itemCountPerPage={8}
                activePage={1}                            
            />    
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot()  
        
        //test previous page
        expect(tree.children[0].children[0]).toEqual('< Previous page')
        expect(tree.children[0].props.className).toEqual('disabled-page-navigation')
        
        //test first index page
        expect(tree.children[1].children[0]).toEqual('1')
        expect(tree.children[1].props.className).toEqual('active-page')
        
        //test second index page        
        expect(tree.children[2].children[0]).toEqual('2')
        expect(tree.children[2].props.className).toEqual('')
        
        //test third index page                
        expect(tree.children[3].children[0]).toEqual('3')
        expect(tree.children[3].props.className).toEqual('')

        //test next page                
        expect(tree.children[4].children[0]).toEqual('Next page >')
        expect(tree.children[4].props.className).toEqual('enabled-page-navigation')       
    });

    it('Test Pagination 3 pages - page 2 active (second index)', () => {
        const component = renderer.create(
            <Pagination 
                totalItem={20}
                itemCountPerPage={8}
                activePage={2}                            
            />    
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot()  
        
        //test previous page
        expect(tree.children[0].children[0]).toEqual('< Previous page')
        expect(tree.children[0].props.className).toEqual('enabled-page-navigation')
        
        //test first index page
        expect(tree.children[1].children[0]).toEqual('1')
        expect(tree.children[1].props.className).toEqual('')
        
        //test second index page        
        expect(tree.children[2].children[0]).toEqual('2')
        expect(tree.children[2].props.className).toEqual('active-page')
        
        //test third index page                
        expect(tree.children[3].children[0]).toEqual('3')
        expect(tree.children[3].props.className).toEqual('')

        //test next page                
        expect(tree.children[4].children[0]).toEqual('Next page >')
        expect(tree.children[4].props.className).toEqual('enabled-page-navigation')       
    });

    it('Test Pagination 3 pages - page 3 active (last)', () => {
        const component = renderer.create(
            <Pagination 
                totalItem={20}
                itemCountPerPage={8}
                activePage={3}                            
            />    
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot()  
        
        //test previous page
        expect(tree.children[0].children[0]).toEqual('< Previous page')
        expect(tree.children[0].props.className).toEqual('enabled-page-navigation')
        
        //test first index page
        expect(tree.children[1].children[0]).toEqual('1')
        expect(tree.children[1].props.className).toEqual('')
        
        //test second index page        
        expect(tree.children[2].children[0]).toEqual('2')
        expect(tree.children[2].props.className).toEqual('')
        
        //test third index page                
        expect(tree.children[3].children[0]).toEqual('3')
        expect(tree.children[3].props.className).toEqual('active-page')

        //test next page                
        expect(tree.children[4].children[0]).toEqual('Next page >')
        expect(tree.children[4].props.className).toEqual('disabled-page-navigation')       
    });

    it('Test Pagination 4 pages - page 3 active (second index)', () => {
        const component = renderer.create(
            <Pagination 
                totalItem={26}
                itemCountPerPage={8}
                activePage={3}                            
            />    
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot()  
        
        //test previous page
        expect(tree.children[0].children[0]).toEqual('< Previous page')
        expect(tree.children[0].props.className).toEqual('enabled-page-navigation')
        
        //test first index page
        expect(tree.children[1].children[0]).toEqual('2')
        expect(tree.children[1].props.className).toEqual('')
        
        //test second index page        
        expect(tree.children[2].children[0]).toEqual('3')
        expect(tree.children[2].props.className).toEqual('active-page')
        
        //test third index page                
        expect(tree.children[3].children[0]).toEqual('4')
        expect(tree.children[3].props.className).toEqual('')

        //test next page                
        expect(tree.children[4].children[0]).toEqual('Next page >')
        expect(tree.children[4].props.className).toEqual('enabled-page-navigation')       
    });
})