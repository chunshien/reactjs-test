import * as actions from './index'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('product actions', () => {
    it('actions test - setActivePage(1)', () => {
        expect(actions.setActivePage(1)).toEqual({
          type: 'SET_ACTIVE_PAGE',
          index: 1
        })        
    })


    it('actions test - getActivePageProduct(1)', () => {
        expect(actions.getActivePageProduct(1)).toEqual({
            type: 'GET_ACTIVE_PAGE_PRODUCT',
            index: 1
        })
    })

    it('actions test - setItemPerPageCount(8)', () => {
        expect(actions.setItemPerPageCount(8)).toEqual({
            type: 'SET_ITEM_PER_PAGE_COUNT',
            itemCountPerPage: 8
        })
    })

    const api_endpoint = 'https://raw.githubusercontent.com/BookingBoss/reactjs-test/master/productsData.json'
    it('actions test - getProduct(api-endpoint)', () => { 
        const initialState = {
            allProducts: [],
            currentPageProduct: [],
            totalItem: 0,
            itemCountPerPage: 8,
            activePage: 1
        }       
        const store = mockStore({ product: initialState })    
        return store.dispatch(actions.getProduct(api_endpoint)).then(() => {
          // return of async actions
          expect(store.getActions()[0].type).toEqual('FETCHED_PRODUCT')          
          expect(store.getActions()[0].data.length).toEqual(1000)
        })
      })    
});