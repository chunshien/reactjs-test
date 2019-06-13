export function getProduct(){
    // type: 'FETCHING_PRODUCT',
    return function(dispatch) {  
        return fetch('https://raw.githubusercontent.com/BookingBoss/reactjs-test/master/productsData.json')
            .then(response => response.json())
            .then(data => {                 
                dispatch({ type: 'FETCHED_PRODUCT', data });
            })                      
    }
}

export function getActivePageProduct(index){
    return{
        type: 'GET_ACTIVE_PAGE_PRODUCT',
        index
    }
}

export function setActivePage(index){
    return{
        type: 'SET_ACTIVE_PAGE',
        index
    }
}

export function setItemPerPageCount(itemCountPerPage){
    return{
        type: 'SET_ITEM_PER_PAGE_COUNT',
        itemCountPerPage
    }
}