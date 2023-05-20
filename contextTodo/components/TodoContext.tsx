import {Text, StyleSheet, View, Alert, Modal} from 'react-native';
import React, {Component, createContext} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import DIcon from 'react-native-vector-icons/AntDesign';

export const TodoContext = createContext({});

interface IState {
  text: string;
  tasks: any[];
  isEditing: boolean;
  editIndex: null | number;
  modalVisible: boolean;
  currentId:number;
}

interface IProps {
  navigation?: any;
  children: any;
}

export default class TodoContextProvider extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      text: '',
      tasks: [],
      isEditing: false,
      editIndex: null,
      modalVisible: false,
      currentId:0
    };
  }

  handleInputChange = (e: string) => {
    //console.log(e)
    this.setState({text: e});
  };

  handleSubmit = ()=> {

    const {tasks, text, isEditing, editIndex} = this.state;

    if (!this.state.text) {
      return;
    }

    if (isEditing) {

    const {tasks} = this.state;

    const editedTaskList = tasks.map(task => {
      if (this.state.currentId === task.id) {
        return {...task, task: text};
      }
      return task;
    });
    this.setState({tasks: editedTaskList,modalVisible:false});
     
    }
    else{
    this.setState({
      tasks: [...tasks, {id: Math.floor(Math.random() * 10000), task: text}],
      text: '',
    });
  } 
    console.log(this.state.tasks);
  };

  handleEdit = (id: number) => {
    this.setState({
      isEditing: true,
       currentId: id,
      modalVisible:true,
      //text: this.state.tasks[id],
    });

  };

  handleDelete = (index: number) => {
    const {tasks} = this.state;
    const newTodos = tasks.filter(i => i.id !== index);
    return this.setState({tasks: newTodos});
  };

  render() {
    return (
      <TodoContext.Provider
        value={{
          list: this.state.tasks,
          submit: this.handleSubmit,
          change: this.handleInputChange,
          delete: this.handleDelete,
          edit: this.handleEdit,
          modal: this.state.modalVisible,
        }}>
        {this.props.children}
      </TodoContext.Provider>
    );
  }
}

const styles = StyleSheet.create({});

//todo app with context api in react native class component ?
