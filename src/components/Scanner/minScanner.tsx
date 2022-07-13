import React, { useEffect } from "react";
import config from "./config.json";

const Scanner = (props: { onDetected: any; Quagga: any; }) => {
  const { onDetected, Quagga } = props;

  /* const onDetected = (result: any) => {
    Quagga.offDetected(onDetected);

    let isbn = result.codeResult.code;
    alert(isbn);
  } */

  useEffect(() => {
    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
      Quagga.init(
        {
          inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: document.querySelector('#video'),
            constraints: {
              facingMode: 'environment',
            },
          },
          numOfWorkers: 1,
          locate: true,
          decoder: {
            readers: ['ean_reader'],
          },
        },
        function (err: any) {
          if (err) {
            console.log(err);
            alert(
              'Erro ao abrir a câmera do dispositivo, por favor, dê a permissão de uso.'
            );
            return;
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
        },
        Quagga.onDetected(onDetected)
      );
    }
  }, []);

  return (
    <>
      <div id="video" className="viewport" />
      <div id="interactive" className="viewport" />
    </>
  );
};

export default Scanner;