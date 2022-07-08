import React, {useContext} from 'react';

// Components
import {AuthContext} from '@context/context';
import en from '@components/helper/en';
import mm from '@components/helper/mm';

export const useLocal = () => {
  const {lang} = useContext(AuthContext);
  if (lang === 'en') {
    return en;
  } else {
    return mm;
  }
};
