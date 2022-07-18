import react, { useState } from 'react';
import MinScanner from "./minScanner";
import Quagga from '@ericblade/quagga2';

const Scanner = ({setValueBarcode}: any) => {
  const [camera, setCamera] = useState(false);

  const onDetected = (result: any) => {
    setValueBarcode(result);
    setCamera(false);
  };

  const handlerStopCameras = (result: any) => {
    setCamera(true);
  }

  return (
    <div>
      <button
        type="button"
        className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={handlerStopCameras}
      >
        Ler
      </button>

      <div className="container">
        {camera ?
          <>
            <MinScanner onDetected={onDetected} />
          </>
        : null
        }
      </div>
    </div>
  );
}

export default Scanner;
