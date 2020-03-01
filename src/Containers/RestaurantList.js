import React,{Component} from 'react'
import RestaurantListItem from '../Components/ResturatntListItems/ResturantItem'
import axios from 'axios';
import { connect } from 'react-redux';
import * as actionType from '../Store/action' 
class RestaurantList extends Component{
    // state = {
    //     restaurantList : []
    // }

    

    componentDidMount(){
        axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get('/TopRamen')
        .then(response =>{
            this.props.onAddedRestaurants(response.data)
         })
         .catch(error => {
             console.log(error)
         })
    }

    render(){
        let rest_list = this.props.restaurantList.map(item => {
            return (
                <div key={item.Variety}>
                    <RestaurantListItem 
                    Brand = {item.Brand} Country={item.Country}
                    Top_Ten={item["Top Ten"]} 
                    />
                </div>
            )})
        return (<div>
            {rest_list}
            </div>)

    }
     
    
    
}

const mapStateToProps = state => {
    return {
        restaurantList: state.restaurants
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedRestaurants: (restaurants) => dispatch({type: actionType.SET_LIST,restaurants}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);