import React from 'react';

class Pagination extends React.Component  {
    constructor(props) {
        super(props);  
        this.previousClick = this.previousClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
        this.pageClick = this.pageClick.bind(this);          
    }
    previousClick(){
        if(this.props.activePage > 1){
            this.props.onChanged(this.props.activePage - 1)
        } 
    }
    nextClick(){
        const lastPage = Math.ceil(this.props.totalItem / this.props.itemCountPerPage);
        if(this.props.activePage < lastPage){
            this.props.onChanged(this.props.activePage + 1)
        }   
    }
    pageClick(index){        
        this.props.onChanged(index)
    }
    render() {
        const {activePage, totalItem, itemCountPerPage} = this.props;
        const lastPage = Math.ceil(totalItem / itemCountPerPage);
        console.log(lastPage)
        const firstIndex = activePage > 1 ? 
                    (activePage < lastPage ? activePage - 1 : activePage - 2)
                    : 1;
        const secondIndex = activePage > 1 ? 
                    (activePage < lastPage ? activePage : activePage - 1) 
                    : 2;
        const lastIndex = activePage < lastPage ? 
                    (activePage > 1 ? activePage + 1 : activePage + 2) 
                    : lastPage;

        console.log(firstIndex,secondIndex,lastIndex)
        return (
            <div className="pagination">
                <span 
                    onClick={this.previousClick} 
                    className={activePage === 1 ? 'disabled-page-navigation' : 'enabled-page-navigation'}>
                    {'< Previous page'}
                </span>
                <span 
                    onClick={()=>this.pageClick(firstIndex)} 
                    className={activePage === 1 ? 'active-page' : ''}>
                    {firstIndex}
                </span>
                {totalItem / itemCountPerPage >= 2 &&
                    <span 
                        onClick={()=>this.pageClick(secondIndex)} 
                        className={activePage > 1 && activePage < lastPage ? 'active-page' : ''}>
                        {secondIndex}
                    </span>
                }
                {totalItem / itemCountPerPage >= 3 &&
                    <span 
                        onClick={()=>this.pageClick(lastIndex)} 
                        className={activePage === lastPage ? 'active-page' : ''}>
                        {lastIndex}
                    </span>
                }
                <span onClick={this.nextClick} className={activePage !== lastPage ? 'enabled-page-navigation' : 'disabled-page-navigation'}>
                    {'Next page >'}
                </span>
                <style jsx ='true'>{`
                    .pagination {  
                        margin-top: 30px;
                        text-align: right;  
                        -khtml-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        -webkit-touch-callout: none;
                        -webkit-user-select: none;                      
                    }  
                    .pagination span{
                        padding: 5px 10px;
                        min-width: 20px;
                        cursor: pointer;
                    }                    
                    .active-page{
                        background-color: white;
                        border-bottom: 5px solid black;
                    }
                    .enabled-page-navigation{
                        color: black;
                    }
                    .disabled-page-navigation{
                        color: #dddddd;
                        cursor: not-allowed !important;
                    }
                `}</style>
            </div>
        );
    }
}
    
export default Pagination;