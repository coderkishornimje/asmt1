import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

interface IProps {
  navigation?: any;
}

import React, {Component} from 'react';
import TodoContextProvider, {TodoContext} from '../components/TodoContext';
export default class Home extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      text: '',
      tasks: [],
    };
  }

  render() {
    const {text}= this.context;
    
    return (
      <View style={todo.container}>
        <TodoContext.Consumer>
          {context => {
            //const {text, tasks} = TodoContext;

            return (
              <>
                <TextInput
                  style={{
                    margin: 20,
                    borderWidth: 2,
                    fontSize: 20,
                    borderRadius: 5,
                    color: '#000000',
                    backgroundColor: 'white',
                  }}
                  // value={this.state.text}
                  onChangeText={e => context.change(e)}
                  placeholder="Enter Task Herer..."
                />
                <TouchableOpacity
                  style={todo.addModelItem}
                  onPress={context.submit}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      color: '#ffffff',
                    }}>
                    ADD
                  </Text>
                </TouchableOpacity>
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
  heading: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  inputstyle: {
    color: '#252525',
    borderWidth: 2,
    margin: 30,
    fontSize: 20,
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
    right: 20,
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
