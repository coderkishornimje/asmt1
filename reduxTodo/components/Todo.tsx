import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {FlatList, TextInput} from 'react-native-gesture-handler';
import {addtodo, edittodo, removetodo} from '../redux/actions/Actions';
import {useSelector, useDispatch} from 'react-redux';

const Todo = () => {
  const [todoValue, setTodoValue] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editValue,setEditValue]=useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  //console.log(todoValue);
  const data = useSelector(state => state.todoReducer.todos);
  const dispatch = useDispatch();
  //const todos = data.todos.todos;

  const addTodo = (item:any) => {
    if(isEditing)
    { 
      dispatch(edittodo(todoValue));
      // setIsEditing(false);
      // setTodoValue('');
      // console.log(data);
      const taskToEdit = data.find((ele) => ele.id === item.id);
    const taskIndex = data.indexOf(taskToEdit);
    setEditingTaskIndex(taskIndex);
    setTodoValue(taskToEdit.todoValue);
     setIsEditing(false);
    }
    else if (data && !data.includes(todoValue)) {
      dispatch(addtodo(todoValue));
      console.log(data);
      setTodoValue('');
    } else {
      Alert.alert(`${todoValue} already added in Todo List`);
    }
};

  const removeTodo = (index:number)=>{
    dispatch(
      removetodo(data.filter((item:any,i:number)=>i !== index))
    )
  }

  
  const editHandler=(item:any)=>{
    setIsEditing(true);
    
  }

  //console.log(data);
  return (
    <View style={{flex: 1, margin: 20}}>
      <TextInput value={todoValue}
        style={{borderWidth: 2, padding: 5, fontSize: 20}}
        placeholder="Enter Task Here"
        onChangeText={e => setTodoValue(e)}
      />
      <TouchableOpacity
        onPress={addTodo}
        style={{backgroundColor: '#3e3e3e', padding: 10, marginTop: 20}}>
        <Text style={{fontSize: 30, color: '#ffffff', alignSelf: 'center'}}>
        {!isEditing ? "ADD" :"Update"}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={({item,index}) => (
          <View style={styles.todoView} key={index}>
            <View style={styles.todoList}>
              <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10}}>{item}</Text>
            </View>
            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => editHandler(item)}>
              <Text style={{fontWeight:'bold'}}> ? </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.removeTodo}
              onPress={() => removeTodo(index)}>
              <Text style={{fontWeight:'bold'}}> X </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  todoView: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    },
  removeTodo: {
    backgroundColor: 'cyan',
    borderRadius: 4,
    alignItems: 'center',
    margin: 4, 
    padding:8
    },
    todoList: {
      borderWidth: 1,
      borderRadius: 10,
      width:'80%',
      height: 40,
      },
});

