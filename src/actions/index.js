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
  