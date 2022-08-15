import spinner from'../assets/spinner.gif';
import './spinner.styles.css';

function Spinner() {
  return (
    <div className='spinner'>
    <img src={spinner} alt='Loading...' />
    </div>
  )
}

export default Spinner