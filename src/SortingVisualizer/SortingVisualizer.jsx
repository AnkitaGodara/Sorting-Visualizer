import React, { useState, useEffect, useRef, useCallback } from "react";

import "./SortingVisualizer.css";

import {
  bubbleSort,
  mergeSort,
  quickSort,
  selectionSort,
  insertionSort,
  heapSort,
} from "../sortingAlgorithms";

import algorithmInfo from "../data/algorithmInfo";

function SortingVisualizer() {
  const [array, setArray] = useState([]);
  const [speed, setSpeed] = useState(20);
  const [arraySize, setArraySize] = useState(50);
  const [isSorting, setIsSorting] = useState(false);
  const [currentAlgorithm, setCurrentAlgorithm] = useState("");

  const stopSortingRef = useRef(false);

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const generateArray = useCallback(() => {
    if (isSorting) return;

    const arr = [];

    for (let i = 0; i < arraySize; i++) {
      arr.push(randomInt(20, 500));
    }

    setArray(arr);
  }, [arraySize, isSorting]);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  function stopSorting() {
    stopSortingRef.current = true;
    setIsSorting(false);
  }

  function animateSorting(animations, compareColor) {
    stopSortingRef.current = false;

    setIsSorting(true);

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");

      const [barOneIdx, barTwoOrHeight, type] = animations[i];

      if (type === "compare") {
        setTimeout(() => {
          if (stopSortingRef.current) return;

          arrayBars[barOneIdx].style.backgroundColor = compareColor;
          arrayBars[barTwoOrHeight].style.backgroundColor = compareColor;
        }, i * speed);
      } else if (type === "revert") {
        setTimeout(() => {
          if (stopSortingRef.current) return;

          arrayBars[barOneIdx].style.backgroundColor = "cyan";
          arrayBars[barTwoOrHeight].style.backgroundColor = "cyan";
        }, i * speed);
      } else if (type === "swap") {
        setTimeout(() => {
          if (stopSortingRef.current) return;

          arrayBars[barOneIdx].style.height = `${barTwoOrHeight}px`;
        }, i * speed);
      }
    }

    setTimeout(() => {
      if (stopSortingRef.current) return;

      const arrayBars = document.getElementsByClassName("array-bar");

      for (let i = 0; i < arrayBars.length; i++) {
        setTimeout(() => {
          if (stopSortingRef.current) return;

          arrayBars[i].style.backgroundColor = "lime";
        }, i * 10);
      }

      setIsSorting(false);
    }, animations.length * speed);
  }

  function handleBubbleSort() {
    setCurrentAlgorithm("Bubble Sort");

    const animations = bubbleSort(array);

    animateSorting(animations, "red");
  }

  function handleMergeSort() {
    setCurrentAlgorithm("Merge Sort");

    const animations = mergeSort(array);

    animateSorting(animations, "orange");
  }

  function handleQuickSort() {
    setCurrentAlgorithm("Quick Sort");

    const animations = quickSort(array);

    animateSorting(animations, "yellow");
  }

  function handleSelectionSort() {
    setCurrentAlgorithm("Selection Sort");

    const animations = selectionSort(array);

    animateSorting(animations, "pink");
  }

  function handleInsertionSort() {
    setCurrentAlgorithm("Insertion Sort");

    const animations = insertionSort(array);

    animateSorting(animations, "lime");
  }

  function handleHeapSort() {
    setCurrentAlgorithm("Heap Sort");

    const animations = heapSort(array);

    animateSorting(animations, "violet");
  }

  return (
    <div className="container">
      <h1>Sorting Visualizer</h1>

      <div className="buttons">
        <button onClick={generateArray} disabled={isSorting}>
          Generate New Array
        </button>

        <button onClick={handleBubbleSort} disabled={isSorting}>
          Bubble Sort
        </button>

        <button onClick={handleMergeSort} disabled={isSorting}>
          Merge Sort
        </button>

        <button onClick={handleQuickSort} disabled={isSorting}>
          Quick Sort
        </button>

        <button onClick={handleSelectionSort} disabled={isSorting}>
          Selection Sort
        </button>

        <button onClick={handleInsertionSort} disabled={isSorting}>
          Insertion Sort
        </button>

        <button onClick={handleHeapSort} disabled={isSorting}>
          Heap Sort
        </button>

        {isSorting && <button onClick={stopSorting}>Stop</button>}
      </div>

      <div className="slider-container">
        <p>Animation Speed : {speed}</p>

        <input
          type="range"
          min="1"
          max="50"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
      </div>

      <div className="slider-container">
        <p>Array Size : {arraySize}</p>

        <input
          type="range"
          min="10"
          max="150"
          value={arraySize}
          onChange={(e) => setArraySize(Number(e.target.value))}
        />
      </div>

      <div className="main-content">
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                height: `${value}px`,
              }}
            ></div>
          ))}
        </div>

        <div className="info-panel">
          <h2>{currentAlgorithm}</h2>

          {currentAlgorithm && (
            <div>
              {algorithmInfo[currentAlgorithm].description.map(
                (text, index) => (
                  <p key={index}>{text}</p>
                )
              )}

              <h3>How it works:</h3>

              <ul>
                {algorithmInfo[currentAlgorithm].steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>

              <div className="complexity">
                <p>
                  Best : {algorithmInfo[currentAlgorithm].complexity.best}
                </p>

                <p>
                  Average :
                  {algorithmInfo[currentAlgorithm].complexity.average}
                </p>

                <p>
                  Worst : {algorithmInfo[currentAlgorithm].complexity.worst}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SortingVisualizer;