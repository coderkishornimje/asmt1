import {
  Text,
  StyleSheet,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {Component} from 'react';
import TodoContextProvider, {TodoContext} from './TodoContext';
import Icon from 'react-native-vector-icons/Entypo';
import DIcon from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-gesture-handler';

const deleteIcon = <DIcon name="delete" size={30} color="red" />;
const editIcon = <DIcon name="edit" size={30} color="green" />;

interface IState {
  text: string;
  tasks: any[];
  isEditing: boolean;
  editIndex: null | number;
  modalVisible: boolean;
}

interface IProps {
  navigation?: any;
  children: any;
}
export default class Display extends Component {
  constructor(props: IProps) {
    super(props);
    this.state = {
      text: '',
      tasks: [],
      isEditing: false,
      editIndex: null,
    };
  }
  render() {
    return (
      <View style={todo.container}>
        <TodoContext.Consumer>
          {context => {
            return (
              <>
                <FlatList
                  data={context.list}
                  renderItem={({item}) => (
                    <View
                      key={item.id}
                      style={{
                        backgroundColor: '#ffffff',
                        margin: 20,
                        padding: 10,
                        borderRadius: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}> 
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#000000',
                          fontWeight: 'bold',
                        }}>
                        {item.task}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <Text
                          style={{marginRight: 15}}
                          onPress={() => context.edit(item.id)}
                          //onPress={()=>this.props.navigation.navigate('Home')}
                        >
                          {editIcon}
                        </Text>
                        <Text
                          style={{marginRight: 10}}
                          onPress={() => {
                            context.delete(item.id);
                          }}>
                          {deleteIcon}
                        </Text>
                      </View>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={context.modal}>
                  <View
                    style={{
                      backgroundColor: 'rgba(128,128,128,0.7)',
                      flex: 1,
                      position: 'absolute',
                      bottom: 100,
                      left: 70,
                      right: 70,
                      borderRadius: 20,
                    }}>
                    <TextInput
                      style={{
                        margin: 20,
                        borderWidth: 2,
                        fontSize: 20,
                        borderRadius: 5,
                        color: '#000000',
                        backgroundColor: 'white',
                      }}
                      //value={this.state.text}
                      onChangeText={e => context.change(e)}
                      placeholder="Enter Task Herer..."
                    />
                    <TouchableOpacity
                      style={todo.addModelItem}
                      onPress={() => context.submit()}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 20,
                          color: '#ffffff',
                        }}>
                        SAVE
                      </Text>
                    </TouchableOpacity>
                    <Pressable onPress={context.modal}>
                      <Text style={todo.closeModel}>X</Text>
                    </Pressable>
                  </View>
                </Modal>
              </>
            );
          }}
        </TodoContext.Consumer>
      </View>
    );
  }
}

const todo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#746AB0',
  },
  showItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#252525',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    position: 'relative',
    top: 30,
  },
  addButton: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#075E54',
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignSelf: 'flex-end',
  },
  bottomPart: {
    backgroundColor: '#252525',
    borderRadius: 20,
    margin: 40,
    position: 'relative',
    top: 90,
  },
  closeModel: {
    fontSize: 20,
    color: 'yellow',
    position: 'relative',
    bottom: 190,
    right: 5,
    alignSelf: 'flex-end',
  },
  addModelItem: {
    margin: 20,
    marginTop: 50,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#075E54',
  },
});
