import React, { useEffect, useRef } from "react";
import config from "./config.json";
import Quagga from '@ericblade/quagga2';
import Video from 'src/components/Scanner/Video';

const Scanner = ({onDetected}: any) => {
  const scannerRef = useRef(null);

  const onDetecteda = (result: any) => {
    const code = result.codeResult.code;
    // Quagga.offDetected(onDetecteda);
    Quagga.stop();
    onDetected(code);
  }
  
  useEffect(() => {
    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
      Quagga.init({
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: "#video",
            
          },
          decoder: {
            readers: ["ean_reader"]
          }
        },
        function (err) {
          if (err) {
            console.log(err);
            return;
          }
          Quagga.start();
        }
      );
      Quagga.onDetected(onDetecteda);
    }
  }, []);

  return (
    <>
      <div id="extralarge-modal" tabIndex={-1} className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
        <div className="relative p-4 w-full max-w-7xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
              <h3 className="text-md font-medium text-gray-900 dark:text-white">
                  Digitalizar um código de barra
              </h3>
              <button  onClick={() => onDetected(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="extralarge-modal">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <Video />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Scanner;
