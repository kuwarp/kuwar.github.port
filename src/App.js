import {useEffect,useState} from "react";
import { HashRouter as Router } from "react-router-dom";
import Main from "./Main";
import Loading from './utils/loading'
const App = () => {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 5000);
  }, []);
  if (!spinner){

  
 return(
  <Router>
 <Main/>
 </Router>
 )
}
else {
  return <Loading />;
}
};

export default App;
