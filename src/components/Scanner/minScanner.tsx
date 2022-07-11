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
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
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
        (err: any) => {
          if (err) {
            console.log(err);
            alert(
              'Erro ao abrir a câmera do dispositivo, por favor, dê a perissão de uso.'
            );
            return;
          }
          Quagga.start();
        },
        Quagga.onDetected(onDetected)
      );
    }
  }, []);

  return (
    // If you do not specify a target,
    // QuaggaJS would look for an element that matches
    // the CSS selector #interactive.viewport
    <>
    <div id="video" className="viewport" />
    <div id="interactive" className="viewport" />
    </>
  );
};

export default Scanner;
