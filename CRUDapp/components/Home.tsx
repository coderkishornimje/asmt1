import {
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Modal,
    Alert,
    Pressable,
    FlatList,
  } from 'react-native';
  import React, {Component} from 'react';
  import Feather from 'react-native-vector-icons/Feather';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  //import SQLite from 'react-native-sqlite-storage';
  //import {SQLiteDatabase, openDatabase} from 'react-native-sqlite-storage';

  const editIcon = <Feather name="edit" size={30} color="#ffffff" />;
  const deleteIcon = <AntDesign name="delete" size={30} color="#ffffff" />;
  
  
  interface IState {
    name: string;
    email: string;
    modalVisible: boolean;
    listofdata: {id: string|number; name: string; email: string}[];
    id: string;
    isEditing: boolean;
    currentId: string;
  }
  interface IProps {
    navigation?: any;
  }
  export default class Home extends Component<IProps, IState> {
    constructor(props: IProps) {
      super(props);
      this.state = {
        modalVisible: false,
        name: '',
        email: '',
        listofdata: [],
        id: '',
        isEditing: false,
        currentId: '',
      };
    }
  
 handleSubmit=()=>{
  const {name,email,listofdata,id,modalVisible,isEditing}=this.state;
  if (isEditing) {

    const editedTaskList = listofdata.map(task => {
      if (this.state.currentId === task.id) {
        return {...task, name: name,email:email};
      }
      return task;
    });
    this.setState({listofdata: editedTaskList,modalVisible:false});
     
    }
 else
 {
  if (name !== '' && email !='') {
    const newItem = {
      id:listofdata.length + 1,
      name:name,
      email:email,
    }
    this.setState({
      listofdata: [...listofdata, newItem],
      name: '',
      email:'',
      modalVisible:false
    });
  }
  else{
    Alert.alert("Fill the Input")
  }    
 }
}

 handleDelete=(item:any)=>{
    console.log("deleted");
  const delItem=this.state.listofdata.filter((ele)=>ele.id!==item.id);
  this.setState({
   listofdata:delItem
  })
 }

 

    handleEdit = (item: any) => {
      this.setState({
        isEditing: true,
        currentId: item.id,
        modalVisible: true,
        name: item.name,
        email: item.email,
      });
    };
    
    renderData = ({item, index}: any) => {
       return (
        <View
          key={index}
          style={{
            marginHorizontal: 20,
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {/* <Text>{item.id}</Text> */}
          <View>
            <Text style={{fontSize: 20, color: 'white'}}>{item.name}</Text>
            <Text style={{fontSize: 20, color: 'white'}}>{item.email}</Text>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text
              testID="edit-icon"
              onPress={() => this.handleEdit(item)}
              style={{paddingRight: 10}}>
              {editIcon}
            </Text>
            <Text testID="delete_btn" 
            onPress={() => this.handleDelete(item)}
            >
              {deleteIcon}
            </Text>
          </View>
        </View>
      );
    };
    render() {
        //console.log(this.state.name)
        //console.log(this.state.listofdata);
      return (
        <View style={styles.container}>
          <View style={styles.child1}>
            <Text style={{fontSize: 25, color: 'white', alignSelf: 'center'}}>
              Account Holders List
            </Text>
          </View>
          <View style={styles.child2}>
            <FlatList
              testID="flatlist"
              data={this.state.listofdata}
              renderItem={this.renderData}
              //keyExtractor={item => item.id}
            />
            <Modal style={{justifyContent:'center',alignItems:'center',marginTop:50}}
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}>
              <View style={{backgroundColor: '#79857c'}}>
                <Pressable
                  testID="closeModal"
                  style={{position: 'absolute', right: 20, top: 20}}
                  onPress={() =>
                    this.setState({
                      isEditing: false,
                      currentId: '',
                      modalVisible: !this.state.modalVisible,
                      name: '',
                      email: '',
                    })
                  }>
                  <Text style={{fontSize: 40, color: 'white'}}>X</Text>
                </Pressable>
                <View style={{marginTop: 70}}>
                <Text style={styles.modalHeading}>
                     {
                    this.state.isEditing ? "UPDATE USER" : "ADD NEW USER"
                     }
                </Text>
                  <TextInput
                    testID="input-name"
                    onChangeText={e => this.setState({name: e})}
                    value={this.state.name}
                    style={{
                      fontSize: 20,
                      borderWidth: 2,
                      borderColor: 'white',
                      margin: 20,
                      color: 'white',
                    }}
                    placeholder="Enter Name"
                  />
                  <TextInput
                    testID="input-email"
                    onChangeText={e => this.setState({email: e})}
                    value={this.state.email}
                    style={{
                      fontSize: 20,
                      borderWidth: 2,
                      borderColor: 'white',
                      margin: 20,
                      color: 'white',
                    }}
                    placeholder="Enter Email"
                  />
                  {this.state.isEditing ? (
                    <TouchableOpacity
                      testID="update-btn"
                      onPress={this.handleSubmit}
                      style={{
                        backgroundColor: '#000000',
                        padding: 10,
                        marginHorizontal: 20,
                        borderRadius: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 30,
                          color: '#ffffff',
                          alignSelf: 'center',
                        }}>
                        Update
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      testID="submit-btn"
                      onPress={this.handleSubmit}
                      style={{
                        backgroundColor: '#000000',
                        padding: 10,
                        marginHorizontal: 20,
                        borderRadius: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 30,
                          color: '#ffffff',
                          alignSelf: 'center',
                        }}>
                        Submit
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </Modal>
          </View>
          <View style={styles.child3}>
            <TouchableOpacity
              testID="openmodal"
              onPress={() => this.setState({modalVisible: true})}
              style={{
                backgroundColor: '#000000',
                position: 'absolute',
                padding: 20,
                paddingHorizontal: 30,
                right: 20,
                bottom:20,
                borderRadius: 50,
              }}>
              <Text style={{fontSize: 30, color: '#ffffff'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      //backgroundColor: '#035e1b',
      backgroundColor:'#324ec9',
    },
    child1: {
      height: '10%',
      justifyContent:'center',
      alignItems:'center',
      //backgroundColor:'red',
    },
    child2: {
      height: '80%',
    },
    child3: {
      height: '10%',
    },
    modalHeading:{
        fontSize:30,
        color:'#ffffff',
        alignSelf:'center'
    }
  });
  