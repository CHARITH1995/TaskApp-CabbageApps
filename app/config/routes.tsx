import React , {FC} from 'react';
import {View , Text , Image , StyleSheet} from 'react-native';
import {
    Router,
    Scene,
    Modal,
    Lightbox,
    Stack,
    Tabs,
  
  } from 'react-native-router-flux';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AddTaskScreen from '../screens/AddTaskScreen/AddTaskScreen';

import { PLUS , HOME ,SELECTHOME , SELECTPLUS } from '../../images/index';

const Routes:FC = () =>{
    return(
        <Router>
        <Modal>
          <Lightbox hideNavBar>
            <Stack hideNavBar>
              <Scene
                key="tabScene"
                hideNavBar={true}
              >
                  <Tabs
                    key="tabbar"
                    tabBarPosition={'bottom'}
                    swipeEnabled={true}
                    showLabel={false}
                    lazy={true}
                    tabBarStyle={{ height: 55 }}
                  >
                    <Scene key="homeScreen"
                      title="Home"
                      component={HomeScreen}
                      initial={true}
                      hideNavBar={true}
                      icon={iconProfile}
                    />
                    <Scene key="addTaskScreen"
                      title="Add"
                      component={AddTaskScreen}
                      hideNavBar={true}
                      icon={iconProfile}
                    />
                  </Tabs>
              </Scene>
            </Stack>
          </Lightbox>
        </Modal>
      </Router>
    )
}

const iconProfile = ({ title, focused }:any) => {
    let icon;
  
    switch (title) {
      case 'Home':
        icon = focused ? SELECTHOME : HOME;
        break;
  
      case 'Add':
        icon = focused ? SELECTPLUS : PLUS;
        break;
    }
    return (<Image style={styles.iconStyle} source={icon} />);
  }

export default Routes;


const styles = StyleSheet.create({
    iconStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height:30,
        width:30,
    },
})