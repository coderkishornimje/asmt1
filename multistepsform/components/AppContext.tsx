import {Text, StyleSheet, View} from 'react-native';
import React, {Component, createContext} from 'react';

interface IProps {
  children?: any;
}
interface IState {
  count: number;
  name: string;
  email: string;
  password: string;
  username: string;
  firstname: string;
  lastname: string;
  currcompany: string;
  totalexp: string;
  designation: string;
}
export const AppContext = createContext({});
export const SecondContext = createContext({});
export const DetailsContext = createContext({});

export default class AppContextProvider extends Component<IProps,IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 1,
      name: '',
      email: '',
      password: '',
      username: '',
      firstname: '',
      lastname: '',
      currcompany: '',
      totalexp: '',
      designation: '',
    };
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  };

  decrement = () => {
    this.setState({count: this.state.count - 1});
  };

  nameHandler = (e: any) => {
    this.setState({name: e});
  };
  emailHandler = (e: any) => {
    this.setState({email: e});
  };
  passwordHandler = (e: any) => {
    this.setState({password: e});
  };
  usernameHandler = (e: any) => {
    this.setState({username: e});
  };
  firstnameHandler = (e: any) => {
    this.setState({firstname: e});
  };
  lastnameHandler = (e: any) => {
    this.setState({lastname: e});
  };
  currcompanyHandler = (e: any) => {
    this.setState({currcompany: e});
  };
  totalexpHandler = (e: any) => {
    this.setState({totalexp: e});
  };
  designationHandler = (e: any) => {
    this.setState({designation: e});
  };

  render() {
   // console.log(this.state.name);
    return (
      <AppContext.Provider
        value={{increase: this.increment, counter: this.state.count}}>
        <SecondContext.Provider
          value={{decrease: this.decrement, deccounter: this.state.count}}>
          <DetailsContext.Provider
            value={{
              uName: this.state.name,
              changeName: this.nameHandler,
              uEmail: this.state.email,
              changeEmail: this.emailHandler,
              uPassword: this.state.password,
              changePassword: this.passwordHandler,
              uUsername: this.state.username,
              changeUsername: this.usernameHandler,
              uFirstname: this.state.firstname,
              changeFirstname: this.firstnameHandler,
              uLastname: this.state.lastname,
              changeLastname: this.lastnameHandler,
              uCurrcompany: this.state.currcompany,
              changeCurrcompany: this.currcompanyHandler,
              uTotalexp: this.state.totalexp,
              changeTotalexp: this.totalexpHandler,
              uDesignation: this.state.designation,
              changeDesignation: this.designationHandler,
            }}>
            {this.props.children}
          </DetailsContext.Provider>
        </SecondContext.Provider>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({});
