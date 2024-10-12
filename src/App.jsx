import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Quiz from './components/Quiz1/Quiz';
import Quiz2 from './components/Quiz2/Quiz2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz2" element={<Quiz2 />} />
      </Routes>
    </Router>
  );
}

export default App;
