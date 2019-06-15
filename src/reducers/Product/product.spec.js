import product from './product'
const testData = require('./test-data')
const initialState = {
    allProducts: [],
    currentPageProduct: [],
    totalItem: 0,
    itemCountPerPage: 8,
    activePage: 1
}

describe('product reducer', () => {
    it('should handle initial state', () => {
        expect(product(undefined, {})).toEqual(initialState)
    })
        
    it('should handle FETCHED_PRODUCT', () => {   
        const expectedCurrentPageData = JSON.parse(JSON.stringify(testData)).slice(0,8)        
        const expectedData = { 
            allProducts: testData,
            currentPageProduct: expectedCurrentPageData,
            totalItem: testData.length,
            itemCountPerPage: 8,
            activePage: 1
        };              
        expect(
          product(initialState, {
            type: 'FETCHED_PRODUCT',            
            data: testData
          })
        ).toEqual(expectedData)
    })

    it('should handle SET_ACTIVE_PAGE', () => {
        const expectedCurrentPageData = JSON.parse(JSON.stringify(testData)).slice(0,8)        
        const inputData = { 
            allProducts: testData,
            currentPageProduct: expectedCurrentPageData,
            totalItem: testData.length,
            itemCountPerPage: 8,
            activePage: 1
        };
        const expectedData = { 
            ...inputData,
            activePage: 2
        };
        
        expect(
          product(inputData, {
            type: 'SET_ACTIVE_PAGE',            
            index: 2
          })
        ).toEqual(expectedData)
    })

    it('should handle GET_ACTIVE_PAGE_PRODUCT', () => {
        const index = 2;                
        const expectedCurrentPageData = JSON.parse(JSON.stringify(testData)).slice((index - 1) * 8, index * 8)
        const inputData = { 
            allProducts: testData,
            currentPageProduct: [],
            totalItem: testData.length,
            itemCountPerPage: 8,
            activePage: index
        };
        const expectedData = { 
            ...inputData,
            currentPageProduct: expectedCurrentPageData,           
        };
        
        expect(
          product(inputData, {
            type: 'GET_ACTIVE_PAGE_PRODUCT',            
            index: index
          })
        ).toEqual(expectedData)
    })

    it('should handle SET_ITEM_PER_PAGE_COUNT', () => {
        const expectedCurrentPageData = JSON.parse(JSON.stringify(testData)).slice(0,8)        
        const inputData = { 
            allProducts: testData,
            currentPageProduct: expectedCurrentPageData,
            totalItem: testData.length,
            itemCountPerPage: 8,
            activePage: 1
        };             
        const expectedData = { 
            ...inputData, itemCountPerPage: 16
        };        
        expect(
          product(inputData, {
            type: 'SET_ITEM_PER_PAGE_COUNT',            
            itemCountPerPage: 16
          })
        ).toEqual(expectedData)
    })
})