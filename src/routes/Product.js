import React from 'react';
import ProductList from '../components/Product/ProductList.js';
import { connect } from "react-redux";
import { getProduct, setActivePage, getActivePageProduct, setItemPerPageCount } from "../actions";
import { bindActionCreators } from "redux";

const API_ENDPOINT = 'https://raw.githubusercontent.com/BookingBoss/reactjs-test/master/productsData.json'
class Product extends React.Component {
    constructor(props) {
        super(props);        
        this.handlePageChanged = this.handlePageChanged.bind(this);
        this.handlePageCountChange = this.handlePageCountChange.bind(this);        
    }
    componentDidMount(){
        this.props.actions.getProduct(API_ENDPOINT)
    }

    handlePageCountChange(e){        
        this.props.actions.setItemPerPageCount(e.target.value)
        this.getActivePageProduct(1)        
    }   

    handlePageChanged(index){        
        this.getActivePageProduct(index)
    }

    getActivePageProduct(index){
        this.props.actions.setActivePage(index)
        this.props.actions.getActivePageProduct(index)
        window.scrollTo(0, 0);   
    }

    render() {
        return (            
            <ProductList 
                product = {this.props.product}
                activePage = {this.props.activePage}
                totalItem = {this.props.totalItem}
                itemCountPerPage = {this.props.itemCountPerPage}
                onHandlePageCountChanged = {this.handlePageCountChange}
                onHandlePageChanged = {this.handlePageChanged}
            />            
        );
    }
  }

  function mapStateToProps(state) {  
    return {
        product: state.product.currentPageProduct,
        activePage: state.product.activePage,
        totalItem: state.product.totalItem,
        itemCountPerPage: state.product.itemCountPerPage
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      actions: { dispatch, ...bindActionCreators({ 
          getProduct, setActivePage, getActivePageProduct, setItemPerPageCount }, 
          dispatch) }
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Product);