import Quiz from "./Quiz";
import { jsQuizz } from "./constants";


function App() {

  return <Quiz mysql1={jsQuizz.mysql1} mysql2={jsQuizz.mysql2} mysql3={jsQuizz.mysql3} mysql4={jsQuizz.mysql4} mysql5={jsQuizz.mysql5} mysql6={jsQuizz.mysql6} mysql7={jsQuizz.mysql7} />;
}

export default App;
