import { ChangeEvent, useState } from 'react';

import './styles.css'

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

function Homework08() {

    const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const onChangePassword= (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event);

    setPassword(event.target.value)
  }

  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  const hidePasswordHandler = () => {
    setShowPassword(false);
  
  }
  return (
    <div className="homework08-container">
      <Input
        name='Change password'
        label='Password'
        id='password_id'
        placeholder='Enter your password'
        type='password'
        value={password}
        onChange={onChangePassword}
      />
      <Button name='SHOW PASSWORD' onClick={showPasswordHandler} />
      <Button name="HIDE PASSWORD" onClick={hidePasswordHandler} />
   
      {showPassword && <div>{password}</div>}
      
    </div>
  )
}

export default Homework08;