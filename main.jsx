let calculatedResultNum = 0;
function App() {
  const { useState } = React;
  const [userInputValue, setUserInputValue] = useState("");
  const hanldeUserInputValueChange = (event) => {
    setUserInputValue(event.target.value);
  };
  let restult = 0;
  const handleUserInputSubmit = () => {
    if (userInputValue.trim() === "") {
      return "Enter something";
    } else if (isNaN(userInputValue) === false) {
      calculatedResultNum = userInputValue / 2;
      return "akash has earned " + calculatedResultNum + " magi packet";
    } else if (isNaN(userInputValue) === true) {
      return "enter a number";
    } else {
      return "Oops!. something went wrong try again(try reloading)";
    }
  };
  const calculatePrice = () => {
    return calculatedResultNum * 14;
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
        {/* <div className="absolute top-1 mt-12" id="main"> */}
    
            <p className="text-2xl m-5" id="question1">
              how many answers did akash learn?
            </p>
            <div
              className="flex flex-row justify-center items-center"
              id="inputDiv"
            >
              <input
                type="text"
                className="w-32 h-12 outline rounded-md shadow-xl m-12 text-center placeholder-gray-500 "
                id="question"
                onChange={hanldeUserInputValueChange}
                placeholder="enter it here"
              />
              {/* <button
                className="outline w-auto h-12 rounded-md shadow-xl transition  hover:bg-blue-100"
                id="calculate"
              >
                calculate
              </button> */}
            </div>
            <p className="text-xl" id="output">
              {handleUserInputSubmit()}
            </p>

            <p className="m-5 text-xl" id="priceOutput">
              estimated price: {calculatePrice()}
            </p>
      </div>
    </div>
  //  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
