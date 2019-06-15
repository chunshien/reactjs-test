import 'cross-fetch/polyfill'

export function getProduct(api_endpoint){    
    return function(dispatch) {  
        return fetch(api_endpoint)
            .then(response => response.json())
            .then(data => {                 
                dispatch({ type: 'FETCHED_PRODUCT', data });
        })                      
    }
}

export function setActivePage(index){
    return{
        type: 'SET_ACTIVE_PAGE',
        index
    }
}

export function getActivePageProduct(index){
    return{
        type: 'GET_ACTIVE_PAGE_PRODUCT',
        index
    }
}

export function setItemPerPageCount(itemCountPerPage){
    return{
        type: 'SET_ITEM_PER_PAGE_COUNT',
        itemCountPerPage
    }
}