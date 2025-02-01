let answersLearned = 1;

function App() {
  const { useState } = React;
  const [answersLearned, setAnswersLearned] = useState(0);
  let numOfMagi = 0;
  function getNumOfMagi() {
    numOfMagi++;
    // return answeresLearned / 5;
  }
  const incrementAnswersLearned = () => {
    setAnswersLearned(answersLearned => answersLearned + 1);
  };
  const decrementAnswersLearned = () => {
    setAnswersLearned(answersLearned-1);
  };

  return (
    <div
      className="h-screen bg-gray-100 flex flex-col justify-center align-middle items-center"
      id="container"
    >
      <div
        className="w-4/5 h-[75vh] outline flex flex-col bg-white rounded-xl justify-center items-center"
        id="card"
      >
        <p className="text-2xl -mt-12 m-5" id="question1">
          how many answers did akash learn?
        </p>
        <p className="m-5 text-lg" id="answersLearnedOutput">
          akash has currently learned{" "}
          <span className="text-blue-500 text-xl">{answersLearned}</span>{" "}
          answers
        </p>

        <div
          className="flex flex-row justify-center items-center"
          id="inputDiv"
        >
          <div className="flex gap-5" id="Btns">
            <button
              className="outline w-auto  p-5 flex items-center text-xl hover:bg-blue-200 h-12 rounded-md shadow-xl transition  hover:bg-blue-100"
              id="incrementBtn"
              onClick={incrementAnswersLearned}
            >
              +1
            </button>
            <button
              className="outline w-auto p-5 flex items-center text-xl hover:bg-red-200 h-12 rounded-md shadow-xl transition  hover:bg-blue-100"
              id="decrementBtn"
              onClick={decrementAnswersLearned}
            >
              -1
            </button>
          </div>
        </div>
        <p className="m-5" id="result">
          akash has earned{" "}
          <span className="text-blue-400 text-2xl">{answersLearned / 2}</span>{" "}
          packets of magi estimated cost:
          <span className="text-2xl text-red-400">{answersLearned * 14 /2 }</span>
        </p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
