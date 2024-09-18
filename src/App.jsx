import Quiz from "./components/Quiz";
import { mysql1 } from "./data/quiz1";
import { mysql2 } from "./data/quiz2";
import { mysql3 } from "./data/quiz3";
import { mysql4 } from "./data/quiz4";
import { mysql5 } from "./data/quiz5";
import { mysql6 } from "./data/quiz6";
import { mysql7 } from "./data/quiz7";


function App() {

  return <Quiz mysql1={mysql1} mysql2={mysql2} mysql3={mysql3} mysql4={mysql4} mysql5={mysql5} mysql6={mysql6} mysql7={mysql7} />;
}

export default App;
