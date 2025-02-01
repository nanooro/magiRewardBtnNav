(() => {
  // src/main.jsx
  var calculatedResultNum = 0;
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
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "h-screen bg-gray-100 flex flex-col justify-center align-middle items-center",
        id: "container"
      },
      /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "w-4/5 h-[75vh] outline flex flex-col bg-white rounded-xl justify-center items-center",
          id: "card"
        },
        /* @__PURE__ */ React.createElement("p", { className: "", id: "question1" }, "how many answers did akash learn?"),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "flex flex-row justify-center items-center",
            id: "inputDiv"
          },
          /* @__PURE__ */ React.createElement(
            "input",
            {
              type: "text",
              className: "w-32 h-12 outline rounded-md shadow-xl m-12 -mr-0 mr-2 ",
              id: "question",
              onChange: hanldeUserInputValueChange
            }
          ),
          /* @__PURE__ */ React.createElement(
            "button",
            {
              className: "outline w-auto h-12 rounded-md shadow-xl transition  hover:bg-blue-100",
              id: "calculate"
            },
            "calculate"
          )
        ),
        /* @__PURE__ */ React.createElement("p", { className: "", id: "output" }, handleUserInputSubmit())
      )
    );
  }
  var root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(/* @__PURE__ */ React.createElement(App, null));
})();
