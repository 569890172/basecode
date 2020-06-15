import { createStackNavigator } from 'react-navigation-stack';


import Page1  from '../page/Page1';
import Page2 from '../page/Page2';
import Page3 from '../page/Page3';

export  const AppStackNavigator =createStackNavigator({
    HomePage:{
        screen:Page1
    },
    Page2:{
        screen:Page2,
        // navigationOptions:({navigation})=>({
        //     title:`${navigation.state.params.name}页面`
        // })
    },
    Page3:{
        screen:Page3,
        navigationOptions:{
            title:'页面3'
        }
    },
})
