import react, { useState } from 'react';
import MinScanner from "./minScanner";
import Quagga from "quagga";

const Scanner = () => {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = (result: any) => {
    setResult(result);
    Quagga.offDetected(onDetected);

    let isbn = result.codeResult.code;
    alert(isbn);
  };

  const handlerStopCameras = (result: any) => {
    setCamera(!camera);
    Quagga.offDetected(onDetected);
  }

  return (
    <div className="App">
      <p>{result ? result : "Scanning..."}</p>
      <button onClick={handlerStopCameras}>
        {camera ? "Stop" : "Start"}
      </button>
      <div className="container">
        {camera && <MinScanner onDetected={onDetected} Quagga={Quagga} />}
      </div>
    </div>
  );
}

export default Scanner;
