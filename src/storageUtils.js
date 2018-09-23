import { AsyncStorage } from 'react-native';

export const getData = async itemKey => {
  try {
    return await AsyncStorage.getItem(itemKey);
  } catch (error) {
    console.log('Error retrieving data: ', error);
    return null;
  }
};

export const storeData = async (itemKey, value) => {
  try {
    await AsyncStorage.setItem(itemKey, value);
  } catch (error) {
    console.log('Error saving data: ', error);
  }
};
