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
      let itemIndex : any  = TaskList?.findIndex(item => item.id == id);
      TaskList[itemIndex].is_checked = true;
      checkedTaskList?.push(TaskList[itemIndex]);
      TaskList.splice(itemIndex,1);
    }

    useEffect(()=>{
        setTaskList(TaskList);
        setCheckedTaskList(CheckedTaskList);
    },[])

   
    const setTaskUnChecked = (id:number) =>{

      let itemIndex : any  = CheckedTaskList?.findIndex(item => item.id == id);
      CheckedTaskList[itemIndex].is_checked = false;
      taskList?.push(CheckedTaskList[itemIndex]);
      CheckedTaskList.splice(itemIndex,1);
     
  }

  const refreshList = () =>{
    console.warn("here")
    return true;
  }


  const removeTask = (id:number,is_checked:Boolean) =>{
    if(!is_checked){
      let itemIndex : any  = TaskList?.findIndex(item => item.id == id);
      TaskList.splice(itemIndex,1);
    }else{
      let itemIndex : any  = CheckedTaskList?.findIndex(item => item.id == id);
      CheckedTaskList.slice(itemIndex,1);
    }
   

  }

  return (
    <ScrollView style = {{height:cardHeight * 15  }} contentContainerStyle={{flexGrow: 1}}> 
    <View style={styles.homeContainer}>
      <HeaderComponent />
      
        <View>
        <Text style={styles.headerSubTitle}>Tasks</Text>
          <FlatList
            data={TaskList}
            renderItem={({item, index}) => (
              <TaskComponent
                id={item.id}
                name={item.name}
                startDate={item.startDate}
                is_checked={item.is_checked}
                setTaskChecked = {setTaskChecked}
                setTaskUnChecked = {setTaskUnChecked}
                removeTask = {removeTask}
              />
            )}

          />
        </View>
        <View style = {{marginTop:cardHeight * 0.5}}>
        <Text style={styles.headerSubTitle}>Completed</Text>
          <FlatList
            data={CheckedTaskList}
            renderItem={({item, index}) => (
              <TaskComponent
                id={item.id}
                name={item.name}
                startDate={item.startDate}
                is_checked={item.is_checked}
                setTaskUnChecked = {setTaskUnChecked}
                setTaskChecked = {setTaskChecked}
                removeTask = {removeTask}
              />
            )}
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
