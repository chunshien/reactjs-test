const initialState = {
    allProducts: [],
    currentPageProduct: [],
    totalItem: 0,
    itemCountPerPage: 8,
    activePage: 1
}
const product = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCHED_PRODUCT':        
            return {
                ...state,                
                allProducts: action.data,
                currentPageProduct: action.data.slice(0, state.itemCountPerPage),
                totalItem: action.data.length,                
                activePage: 1
            }
        case 'SET_ACTIVE_PAGE':        
            return {
                ...state,                                
                activePage: action.index
            }
        case 'GET_ACTIVE_PAGE_PRODUCT':
            return {
                ...state,                                
                currentPageProduct: state.allProducts.slice(action.index * state.itemCountPerPage, (action.index + 1) * state.itemCountPerPage),
            }
        case 'SET_ITEM_PER_PAGE_COUNT':
            return {
                ...state,                                
                itemCountPerPage: action.itemCountPerPage
            }
            
        default:
            return state
    }
  }
  
export default product
  