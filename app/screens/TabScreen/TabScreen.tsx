import React , {FC, useState} from 'react';
import {View , Text , Dimensions ,Image , StyleSheet} from 'react-native';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import HomeScreen from '../HomeScreen/HomeScreen';
import AddTaskScreen from '../AddTaskScreen/AddTaskScreen';

import { PLUS , HOME ,SELECTHOME , SELECTPLUS } from '../../../images/index';


let dimensions = Dimensions.get("window");
let cardHeight = Math.round((dimensions.height * 1) / 15);
let devWidth = dimensions.width;


const TabScreen : FC = () =>{

    const [rar, setRar] = useState({
        index: 0,
        routes: [
            { key: 'first', title: 'Home' },
            { key: 'second', title: 'Add' },
        ]
    });

    const FirstView = () =>{
        return(
            <HomeScreen/>
        )

    }

    const secondView = () =>{
        return(
            <AddTaskScreen/>
        )

    }



    return(
        <View style={{ flex: 1 }}>
            
        </View>
    )

}




export default TabScreen;

const styles = StyleSheet.create({
   
})