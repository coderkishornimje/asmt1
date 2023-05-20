import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {AppContext, DetailsContext, SecondContext} from './AppContext';

export default function Details() {
  const {increase, counter} = useContext(AppContext);
  const {decrease} = useContext(SecondContext);
  const {
    uName,
    changeName,
    uEmail,
    changeEmail,
    uPassword,
    changePassword,
    uUsername,
    changeUsername,
    uFirstname,
    changeFirstname,
    uLastname,
    changeLastname,
    uCurrcompany,
    changeCurrcompany,
    uTotalexp,
    changeTotalexp,
    uDesignation,
    changeDesignation,
  } = useContext(DetailsContext);

  const page1 = () => {
    return (
      <>
        <View
          style={{
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{backgroundColor: '#ed4928', padding: 10, borderRadius: 50}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              1
            </Text>
          </TouchableOpacity>
          <View style={{width: '20%', borderWidth: 1}}></View>
          <TouchableOpacity
            style={{backgroundColor: '#3e3e3e', padding: 10, borderRadius: 50}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              2
            </Text>
          </TouchableOpacity>
          <View style={{width: '20%', borderWidth: 1}}></View>
          <TouchableOpacity
            style={{backgroundColor: '#3e3e3e', padding: 10, borderRadius: 50}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              3
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 30, alignSelf: 'center', marginBottom: 20}}>
          SIGN IN INFO
        </Text>
        <TextInput
          onChangeText={changeName}
          style={styles.input}
          placeholder="Name"
        />
        <TextInput
          onChangeText={changeEmail}
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          onChangeText={changePassword}
          style={styles.input}
          placeholder="Password"
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={decrease}
            disabled={counter === 1}
            style={{
              backgroundColor: '#a2d8eb',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
              Back
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={increase}
            style={{
              backgroundColor: '#62d4e3',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const page2 = () => {
    return (
      <>
        <View
          style={{
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{backgroundColor: '#ed4928', padding: 10, borderRadius: 50}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              1
            </Text>
          </TouchableOpacity>
          <View style={{width: '20%', borderWidth: 1}}></View>
          <TouchableOpacity
            style={{backgroundColor: '#ed4928', padding: 10, borderRadius: 50}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              2
            </Text>
          </TouchableOpacity>
          <View style={{width: '20%', borderWidth: 1}}></View>
          <TouchableOpacity
            style={{backgroundColor: '#3e3e3e', padding: 10, borderRadius: 50}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              3
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.childContainer}>
          <Text style={{fontSize: 30, alignSelf: 'center', marginBottom: 20}}>
            USER INFO
          </Text>
          <TextInput
            onChangeText={changeUsername}
            style={styles.input}
            placeholder="User Name"
          />
          <TextInput
            onChangeText={changeFirstname}
            style={styles.input}
            placeholder="First Name"
          />
          <TextInput
            onChangeText={changeLastname}
            style={styles.input}
            placeholder="Last Name"
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={decrease}
              style={{
                backgroundColor: '#62d4e3',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={increase}
              style={{
                backgroundColor: '#62d4e3',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  const page3 = () => {
    return (
      <>
        <View
          style={{
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{backgroundColor: '#ed4928', padding: 10, borderRadius: 50}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              1
            </Text>
          </TouchableOpacity>
          <View style={{width: '20%', borderWidth: 1}}></View>
          <TouchableOpacity
            style={{backgroundColor: '#ed4928', padding: 10, borderRadius: 50}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              2
            </Text>
          </TouchableOpacity>
          <View style={{width: '20%', borderWidth: 1}}></View>
          <TouchableOpacity
            style={{backgroundColor: '#ed4928', padding: 10, borderRadius: 50}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              3
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.childContainer}>
          <Text style={{fontSize: 30, alignSelf: 'center', marginBottom: 20}}>
            PROFESSIONAL INFO
          </Text>
          <TextInput
            onChangeText={changeCurrcompany}
            style={styles.input}
            placeholder="Current Company"
          />
          <TextInput
            onChangeText={changeTotalexp}
            style={styles.input}
            placeholder="Total Experience"
          />
          <TextInput
            onChangeText={changeDesignation}
            style={styles.input}
            placeholder="Designation"
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={decrease}
              style={{
                backgroundColor: '#62d4e3',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={increase}
              style={{
                backgroundColor: '#62d4e3',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  const page4 = () => {
    return (
      <>
        <View
          style={{
            height: '40%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{backgroundColor: '#ed4928', padding: 10, borderRadius: 50}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              1
            </Text>
          </TouchableOpacity>
          <View style={{width: '20%', borderWidth: 1}}></View>
          <TouchableOpacity
            style={{backgroundColor: '#ed4928', padding: 10, borderRadius: 50}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              2
            </Text>
          </TouchableOpacity>
          <View style={{width: '20%', borderWidth: 1}}></View>
          <TouchableOpacity
            style={{backgroundColor: '#ed4928', padding: 10, borderRadius: 50}}>
            <Text
              style={{
                fontSize: 30,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
              }}>
              3
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.childContainer}>
          <Text style={{fontSize: 30, alignSelf: 'center', marginBottom: 20}}>
            USER VERIFED
          </Text>
          <Text style={styles.dataText}>Name :{uName}</Text>
          <Text style={styles.dataText}>Email :{uEmail}</Text>
          <Text style={styles.dataText}>Password :{uPassword}</Text>
          <Text style={styles.dataText}>User Name :{uUsername}</Text>
          <Text style={styles.dataText}>First Name :{uFirstname}</Text>
          <Text style={styles.dataText}>Last Name :{uLastname}</Text>
          <Text style={styles.dataText}>Company :{uCurrcompany}</Text>
          <Text style={styles.dataText}>Experience :{uTotalexp}</Text>
          <Text style={styles.dataText}>Designation :{uDesignation}</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <TouchableOpacity
              onPress={decrease}
              style={{
                backgroundColor: '#62d4e3',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={true}
              style={{
                backgroundColor: '#a2d8eb',
                padding: 10,
                borderRadius: 10,
              }}>
              <Text
                style={{fontSize: 30, textAlign: 'center', fontWeight: 'bold'}}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: '80%',
          backgroundColor: '#d6dcff',
          marginHorizontal: 20,
          marginVertical: 20,
          borderRadius: 20,
        }}>
        <View style={styles.childContainer}>
          {counter === 1
            ? page1()
            : counter === 2
            ? page2()
            : counter === 3
            ? page3()
            : counter === 4
            ? page4()
            : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#344feb',
  },

  childContainer: {
    height: '50%',
    margin: 20,
  },
  input: {
    borderWidth: 2,
    fontSize: 20,
    borderRadius: 10,
    marginTop: 10,
  },

  dataText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
