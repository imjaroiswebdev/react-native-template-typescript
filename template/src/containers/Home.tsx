import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components/native';
import {fetchUserAsync} from 'src/actions/usersActions';
import useSelector from 'src/utils/useSelector';


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


function Home() {
  const user = useSelector((state) => state.users.user);
  const {t} = useTranslation();
  const dispatch = useDispatch();
  
  const fetchUser = () => {
    const userId = '2';
    dispatch(fetchUserAsync.request(userId));
  };

  const instructions = Platform.select({
    ios: t('iosInstruction'),
    android: t('androidInstruction'),
  });



  return (
    <Container >
      <Text >{t('welcome')}</Text>
      <Text >{t('instructions')}</Text>
      <Text >{instructions}</Text>
      {user && <Text>user: </Text>}
      <Text>{JSON.stringify(user)}</Text>
      <Button title={t('fetchUser')} onPress={fetchUser} />
    </Container>
  );
}

export default memo(Home);
