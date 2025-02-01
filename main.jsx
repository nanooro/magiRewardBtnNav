let answersLearnedCountRef = 1;
function App() {
  const incrementAnswersLearned = () => {
    setAnswersLearned(answersLearnedCountRef++);
  };
  const decrementAnswersLearned = () => {
    setAnswersLearned(answersLearnedCountRef--);
  };
  const { useState } = React;
  const [answersLearned, setAnswersLearned] = useState("");
  return (
    <div
      className="h-screen bg-gray-100 flex flex-col justify-center align-middle items-center"
      id="container"
    >
      <div
        className="w-4/5 h-[75vh] outline flex flex-col bg-white rounded-xl justify-center items-center"
        id="card"
      >
        <p className="text-3xl -mt-12 m-5" id="question1">
          how many answers did akash learn?
        </p>
        <p className="m-5 text-xl" id="answersLearnedOutput">
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
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
