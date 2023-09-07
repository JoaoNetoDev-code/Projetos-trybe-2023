import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  console.log(navigate)
  const [passoword, setPassword] = useState('');
  const handleClick = () => {
    if (passoword.length > 5) {
    navigate('/home');
    }
  }

  return (
    <button onClick={ handleClick }>Acessar</button>
  );
}

export default Login;
