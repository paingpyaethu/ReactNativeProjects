import React, {useContext} from 'react';

import {AuthContext} from '../context/context';
import en from '../components/helper/en';
import mm from '../components/helper/mm';

export const useLocal = () => {
  const {language} = useContext(AuthContext);
  return language === 'en' ? en : mm;
};
