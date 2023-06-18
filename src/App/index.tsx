import { Projects } from '../template/Projects';
import { Header } from '../layout/Header';
import { Navbar } from '../layout/Navbar/';
import * as Styled from './styles';
import { Technologies } from '../template/Technologies';
import { AboutMe } from '../template/AboutMe';
import { Footer } from '../layout/Footer';

function App() {
   return (
      <Styled.Main>
         <Navbar />
         <Header />
         <Projects />
         <Technologies />
         <AboutMe />
         <Footer />
      </Styled.Main>
   );
}

export default App;
