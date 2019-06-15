import React from 'react';
import Pagination from './Pagination.js';
import renderer from 'react-test-renderer';

describe('Component - Pagination Test', () => {
    it('renders Pagination without crashing', () => {
        const component = renderer.create(
            <Pagination/>    
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot()        
    });

    it('Test Pagination - page 1', () => {
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

    it('Test Pagination - page 2', () => {
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

    it('Test Pagination - page 3', () => {
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
})