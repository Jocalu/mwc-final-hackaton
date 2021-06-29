import './Home.scss';
import DragAndDrop from '../../components/DragAndDrop/DragAndDrop'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <main className="home container">
      <DragAndDrop></DragAndDrop>
      <br />
      <br />
      
             <Link  to="/result">
          <Button 
                   disabled
          variant="contained" 
          color="primary" 
          size="large">    
            CALCULAR
          </Button>
        </Link>
    </main>
  );
}

export default Home;
