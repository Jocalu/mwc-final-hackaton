import './Home.scss';
import DragAndDrop from '../../components/DragAndDrop/DragAndDrop'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <main className="home container">
      <h1 className="mb-6">Calcula tu desviación</h1>
      <DragAndDrop></DragAndDrop>
      <br />
      <br />
      
    </main>
  );
}

export default Home;
