import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";

const TeachableMachine = () => {
  const URL = "./my_model/";
  const webcamRef = useRef(null);
  const [webcamInstance, setWebcamInstance] = useState(null);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState({ yo: 0, nada: 0 });

  const init = async () => {
    const modelURL = `${URL}model.json`;
    const metadataURL = `${URL}metadata.json`;

    // Load the model and metadata
    const loadedModel = await tmImage.load(modelURL, metadataURL);
    setModel(loadedModel);

    // Setup webcam
    const webcam = new tmImage.Webcam(300, 300, true); // width, height, flip
    await webcam.setup(); // Request access to webcam
    await webcam.play();
    setWebcamInstance(webcam);
    window.requestAnimationFrame(() => loop(webcam, loadedModel));

    // Set webcam canvas
    if (webcamRef.current) {
      webcamRef.current.appendChild(webcam.canvas);
    }
  };

  const loop = async (webcam, model) => {
    webcam.update(); // Update the webcam frame
    await predict(webcam, model);
    window.requestAnimationFrame(() => loop(webcam, model));
  };

  const predict = async (webcam, model) => {
    if (!model || !webcam) return;

    const predictions = await model.predict(webcam.canvas);

    const updatedPredictions = predictions.reduce((acc, prediction) => {
      acc[prediction.className] = prediction.probability * 100; // Convert to percentage
      return acc;
    }, {});

    setPredictions({
      yo: updatedPredictions["yo"] || 0,
      nada: updatedPredictions["nada"] || 0,
    });
  };

  useEffect(() => {
    return () => {
      if (webcamInstance) {
        webcamInstance.stop();
      }
    };
  }, [webcamInstance]);

  return (
    <div style={{ textAlign: "center" }}>
     
      <div
        id="webcam-container"
        ref={webcamRef}
        style={{
          width: "300px",
          height: "300px",
          border: "2px solid white",
          margin: "20px auto",
        }}
      ></div>
      <button
        type="button"
        onClick={init}
        style={{
          padding: "10px 20px",
          borderRadius: "25px",
          background: "cyan",
          color: "black",
          border: "none",
          cursor: "pointer",
          margin: "10px 0",
        }}
      >
        Start
      </button>
      <div id="label-container" style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Yo:</label>
          <div
            style={{
              width: "300px",
              height: "20px",
              background: "#e0e0e0",
              borderRadius: "10px",
              overflow: "hidden",
              margin: "5px auto",
            }}
          >
            <div
              style={{
                width: `${predictions.yo}%`,
                height: "100%",
                background: "green",
              }}
            ></div>
          </div>
          <p>{predictions.yo.toFixed(2)}%</p>
        </div>
        <div>
          <label>Nada:</label>
          <div
            style={{
              width: "300px",
              height: "20px",
              background: "#e0e0e0",
              borderRadius: "10px",
              overflow: "hidden",
              margin: "5px auto",
            }}
          >
            <div
              style={{
                width: `${predictions.nada}%`,
                height: "100%",
                background: "blue",
              }}
            ></div>
          </div>
          <p>{predictions.nada.toFixed(2)}%</p>
        </div>
      </div>
    </div>
  );
};

export default TeachableMachine;