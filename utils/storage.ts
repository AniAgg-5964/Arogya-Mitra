import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';

const ENCRYPTION_KEY = 'arogya_mitra_secure_key';

export async function encryptData(data: string): Promise<string> {
  try {
    const hash = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      data + ENCRYPTION_KEY
    );
    return Buffer.from(data).toString('base64') + '.' + hash.substring(0, 16);
  } catch (error) {
    console.error('Encryption failed:', error);
    return data;
  }
}

export async function decryptData(encryptedData: string): Promise<string> {
  try {
    const [encoded] = encryptedData.split('.');
    return Buffer.from(encoded, 'base64').toString('utf-8');
  } catch (error) {
    console.error('Decryption failed:', error);
    return encryptedData;
  }
}

export async function storeSecureData(key: string, value: any): Promise<void> {
  try {
    const jsonValue = JSON.stringify(value);
    const encrypted = await encryptData(jsonValue);
    await AsyncStorage.setItem(key, encrypted);
  } catch (error) {
    console.error('Failed to store secure data:', error);
    throw error;
  }
}

export async function getSecureData<T>(key: string): Promise<T | null> {
  try {
    const encrypted = await AsyncStorage.getItem(key);
    if (!encrypted) return null;

    const decrypted = await decryptData(encrypted);
    return JSON.parse(decrypted);
  } catch (error) {
    console.error('Failed to get secure data:', error);
    return null;
  }
}

export async function removeSecureData(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Failed to remove secure data:', error);
    throw error;
  }
}

export async function clearAllData(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error('Failed to clear all data:', error);
    throw error;
  }
}
