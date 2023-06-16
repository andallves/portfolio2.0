import { Header } from '../layout/Header';
import { Navbar } from '../layout/Navbar/';
import * as Styled from './styles';

function App() {
   return (
      <Styled.Main>
         <Navbar />
         <Header />
      </Styled.Main>
   );
}

export default App;
