import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {data} from '../components/data/data';
import {connect} from 'react-redux';
import {fetchData} from '../redux/actions/actions';

class Home extends Component {

constructor(props:any){
  super(props);
  this.state={
    count:0,
    myData:[],
  }
}

  componentDidMount(): void {
    this.props.sendData(this.state.myData=[...this.props.quizeData]);
    //console.log(this.state.myData);  
  }


  render() {
    return (
      <View style={{height: '100%', backgroundColor: '#766899'}}>
        <View style={styles.child1}>
          <Text style={styles.heading}>Quize App</Text>
        </View>
        <View style={styles.child2}>
          <View style={{width: '90%', marginVertical: 40}}>
            <Text style={{fontSize: 20, color: 'white', marginBottom: 5}}>
              Quize : 05
            </Text>
            <View style={{borderWidth: 1, borderColor: '#f6f5f7'}}></View>
          </View>

          <View style={{width: '90%'}}>
            <Text style={{color: 'white'}}>Questions</Text>
            <Text style={{color: 'white'}}></Text>
        
            <TouchableOpacity
              style={{
                backgroundColor: '#eae6f5',
                padding: 5,
                borderRadius: 20,
                marginBottom: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    backgroundColor: '#cbe344',
                    padding: 10,
                    borderRadius: 50,
                    fontWeight: 'bold',
                  }}>
                  A
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 30,
                    marginTop: 10,
                    fontWeight: 'bold',
                  }}>
                  Hello
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#eae6f5',
                padding: 5,
                borderRadius: 20,
                marginBottom: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    backgroundColor: '#cbe344',
                    padding: 10,
                    borderRadius: 50,
                    fontWeight: 'bold',
                  }}>
                  B
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 30,
                    marginTop: 10,
                    fontWeight: 'bold',
                  }}>
                  john
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#eae6f5',
                padding: 5,
                borderRadius: 20,
                marginBottom: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    backgroundColor: '#cbe344',
                    padding: 10,
                    borderRadius: 50,
                    fontWeight: 'bold',
                  }}>
                  C
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 30,
                    marginTop: 10,
                    fontWeight: 'bold',
                  }}>
                  teddy
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#eae6f5',
                padding: 5,
                borderRadius: 20,
                marginBottom: 10,
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontSize: 20,
                    backgroundColor: '#cbe344',
                    padding: 10,
                    borderRadius: 50,
                    fontWeight: 'bold',
                  }}>
                  D
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    marginHorizontal: 30,
                    marginTop: 10,
                    fontWeight: 'bold',
                  }}>
                  menddy
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: '90%', marginVertical: 60}}>
            <TouchableOpacity onPress={this.nextHandler}
              style={{
                backgroundColor: '#f2860a',
                padding: 15,
                borderRadius: 20,
                marginBottom: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    quizeData: state.fetchDataReducer.quizeData,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    sendData: () => dispatch(fetchData(data)),
  };
};

const styles = StyleSheet.create({
  child1: {
    height: '10%',
    backgroundColor: '#766899',
    justifyContent: 'center',
    alignItems: 'center',
  },
  child2: {
    height: '90%',
    backgroundColor: '#3a344a',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    color: '#eae6f5',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
