000import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  S0
	xcrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Шаблоны TibetaStarter
const templates = [
  { title: 'MVP', description: 'Минимум, который уже продаёт', color: '#FF6B00' },
  { title: 'Лендинг', description: 'Одностраничный экран с CTA и вау-эффектом', color: '#00BFA6' },
  { title: 'Каталог', description: 'Витрина товаров с фильтрами и карточками', color: '#6C63FF' },
  { title: 'Профиль', description: 'Личный кабинет с настройками и историей', color: '#FF4081' },
];

// Экран выбора шаблона
function TemplateScreen() {
  const navigation = useNavigation();
  const [lastSelected, setLastSelected] = useState<string | null>(null);
  const [lastDate, setLastDate] = useState<string | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('lastTemplate').then((value) => {
      if (value) setLastSelected(value);
    });
    AsyncStorage.getItem('lastDate').then((value) => {
      if (value) setLastDate(value);
    });
  }, []);

  const handleSelect = async (template: string) => {
    const now = new Date().toLocaleString();
    await AsyncStorage.setItem('lastTemplate', template);
    await AsyncStorage.setItem('lastDate', now);
    navigation.navigate('Setup

