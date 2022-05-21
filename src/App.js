import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Designpart from './container/DesignPart';
import Drug1Input from './container/Drug1Input';
import Drug2Input from './container/Drug2Input';
import Drug1Material from './container/FunctionComponent';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Designpart />} />
          <Route exact path='/drug1details' element={<Drug1Input />} />
          <Route exact path='/drug2details' element={<Drug2Input />} />
          <Route exact path='/Functioncomponent' element={<Drug1Material />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
