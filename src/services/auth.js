import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = process.env.API_URL || 'https://geoconnect.com/api';


//login function 

export const login = async (username, password) => {
  try {
    const response = await fetch(`${API_URL}/v1/token/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',


      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const { access, refresh, role, user_id } = await response.json();
    await AsyncStorage.setItem('token', access);
    await AsyncStorage.setItem('refresh', refresh);  // here we save the refresh token for future use
    await AsyncStorage.setItem('UserId', user_id.toString()); // here we save the parents or techer id


    return { access, role };
  } catch (error) {
    throw new Error(error.message);
  }
};

//logout function 

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('token');

    await AsyncStorage.removeItem('refresh');
    await AsyncStorage.removeItem('UserId'); // here we remove the parents or techer id from storage


  } catch (error) {
    console.error('Logout error:', error.message);
    throw error;
  }

};

//check if user is authenticated 

export const isAuthenticated = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;                               // here we return the parents or techer role
  } catch (error) {
    console.error('Authentication error:', error.message);
    throw error;
  }
};


//get the authentication token 

export const getAuthToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (error) {
    'Get token error: ' + error.message
    return null;

  }

}

