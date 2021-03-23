import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #f5fcff;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 16px;
  text-align: center;
  margin:10px;
`;

const Button = styled.Button`
  height: 30px;
  width: 80%;
  margin:10px;
`;

function Settings() {
  const {t, i18n} = useTranslation();
  return (
    <Container>
      <Text>{t('settings')}</Text>
      <Button title={t('english')} onPress={() => i18n.changeLanguage('en')} />
      <Button title={t('french')} onPress={() => i18n.changeLanguage('fr')} />
    </Container>
  );
}

export default memo(Settings);