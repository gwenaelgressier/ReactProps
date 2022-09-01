import { useState } from "react";
import "./App.css";
import { HandleProps } from "./HandleProps";

function App() {
  const [test, setTest] = useState(false);
  const [testSucess, setTestSucess] = useState(false);

  const handletest = () => {
    setTest(!test);
    setTestSucess(false);
  };

  const handletestSucess = () => {
    handletest();
    setTestSucess(!testSucess);
  };

  return (
    <div>
      <div>
        <button className="btn-test" onClick={handletest}>
          test
        </button>
      </div>
      {test && (
        <HandleProps
          test={test}
          handletest={handletest}
          handletestSucess={handletestSucess}
        />
      )}
      {testSucess && <p>nice</p>}
    </div>
  );
}

export default App;
