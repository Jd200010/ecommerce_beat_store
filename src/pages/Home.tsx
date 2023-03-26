import Navbar from '../components/Navbar';
import Beats from '../components/Beats';
import { HomeProps } from '../interfaces';

const Home = ({beats, cartQuant, onAdd}:HomeProps) => {

    return (
      <>
        <Navbar text="S!nner's Beat Store" cartQuant={cartQuant}/>
        <h1>Home</h1>
        {  beats !== null ? beats?.length > 0 ?<Beats beats={beats} onAdd={onAdd}/> : 'No Beats :(' : 'No Beats :('}
      </>
    );
  }

export default Home