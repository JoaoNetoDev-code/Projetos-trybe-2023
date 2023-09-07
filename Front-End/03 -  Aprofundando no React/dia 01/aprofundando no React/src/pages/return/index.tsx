import { useNavigate} from 'react-router-dom'

function Return() {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(-1);
    };

  return (
    <button onClick={ handleClick }>Voltar</button>
  );
}

export default Return;