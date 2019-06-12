
const product = (state = [], action) => {
    switch (action.type) {
        case 'FETCHED_PRODUCT':        
            return action.data
        default:
            return state
    }
  }
  
export default product
  