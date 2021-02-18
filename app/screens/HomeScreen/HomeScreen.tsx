import React, {FC , useState , useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import TaskComponent from '../../components/taskComponent/taskComponent';

import {Task, TaskList, CheckedTaskList} from '../../../data';

let dimensions = Dimensions.get('window');
let cardHeight = Math.round((dimensions.height * 1) / 15);
let devWidth = dimensions.width;

const HomeScreen: FC = () => {

    const [taskList , setTaskList] = useState<Task[]>([]);
    const [checkedTaskList , setCheckedTaskList] = useState<Task[]>([]);
    const [refresh , setRefresh] = useState(false)

    const setTaskChecked = (id:number) =>{
      let itemIndex : any  = taskList?.findIndex(item => item.id == id);
      taskList[itemIndex].is_checked = true;
      checkedTaskList?.push(taskList[itemIndex]);
      taskList.splice(itemIndex,1);
      
    }

    useEffect(()=>{
        setTaskList(TaskList);
        setCheckedTaskList(CheckedTaskList);
    },[taskList,checkedTaskList])

   
    const setTaskUnChecked = (id:number) =>{

      let itemIndex : any  = checkedTaskList?.findIndex(item => item.id == id);
      checkedTaskList[itemIndex].is_checked = false;
      taskList?.push(checkedTaskList[itemIndex]);
      checkedTaskList.splice(itemIndex,1);
     
  }

  return (
    <ScrollView style = {{height:cardHeight * 15  }} contentContainerStyle={{flexGrow: 1}}> 
    <View style={styles.homeContainer}>
      <HeaderComponent />
        <View>
        <Text style={styles.headerSubTitle}>Tasks</Text>
          <FlatList
            data={taskList}
            renderItem={({item, index}) => (
              <TaskComponent
                id={item.id}
                name={item.name}
                startTime={item.startTime}
                endTime={item.endTime}
                date={item.date}
                is_checked={item.is_checked}
                setTaskChecked = {setTaskChecked}
                setTaskUnChecked = {setTaskUnChecked}
              />
            )}
            extraData = {taskList}

          />
        </View>
        <View style = {{marginTop:cardHeight * 0.5}}>
        <Text style={styles.headerSubTitle}>Completed</Text>
          <FlatList
            data={checkedTaskList}
            renderItem={({item, index}) => (
              <TaskComponent
                id={item.id}
                name={item.name}
                startTime={item.startTime}
                endTime={item.endTime}
                date={item.date}
                is_checked={item.is_checked}
                setTaskUnChecked = {setTaskUnChecked}
                setTaskChecked = {setTaskChecked}
              />
            )}
            extraData = {checkedTaskList}
          />
        
        </View>
      </View>
    </ScrollView>
    // </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: {
    padding: 10,
  },
  headerContent: {
    marginTop: cardHeight * 0.5,
  },
  headerSubTitle: {
    fontSize: cardHeight * 0.3,
    fontWeight: '700',
    color: '#cccccc',
  },
});
