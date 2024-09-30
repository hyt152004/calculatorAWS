import React, { useState } from "react";

const PowerOfMath = () => {
  // Use state hooks to store operation and num1 values
  const [operation, setOperation] = useState("");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  // Function to call the API with the operation and num1
  const callAPI = (operation, num1, num2) => {
    // Create headers object
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Create the request body
    const raw = JSON.stringify({
      operation: operation,
      num1: num1,
      num2: num2,
    });

    // Set up request options
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    // Fetch API with error handling
    fetch(
      "https://g25ol49ao4.execute-api.us-west-2.amazonaws.com/calculator-dev",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => alert(JSON.parse(result).body))
      .catch((error) => console.log("error", error));
  };

  // JSX for the component
  return (
    <div
      style={{ backgroundColor: "#222629", height: "100vh", padding: "20px" }}
    >
      <h1
        style={{
          color: "#FFFFFF",
          fontFamily: "system-ui",
          marginLeft: "20px",
        }}
      >
        TO THE POWER OF MATH!
      </h1>
      <form>
        <label
          style={{
            color: "#86C232",
            fontFamily: "system-ui",
            fontSize: "20px",
            marginLeft: "20px",
            marginTop: "20px",
          }}
        >
          Base number:
        </label>
        <input
          type="text"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          style={{
            color: "#222629",
            fontFamily: "system-ui",
            fontSize: "20px",
            marginLeft: "10px",
            marginTop: "20px",
            width: "100px",
          }}
        />
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={{
            color: "#222629",
            fontFamily: "system-ui",
            fontSize: "20px",
            marginLeft: "10px",
            marginTop: "20px",
            width: "100px",
          }}
        />
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={{
            color: "#222629",
            fontFamily: "system-ui",
            fontSize: "20px",
            marginLeft: "10px",
            marginTop: "20px",
            width: "100px",
          }}
        />
        <button
          type="button"
          onClick={() => callAPI(operation, num1, num2)}
          style={{
            backgroundColor: "#86C232",
            borderColor: "#86C232",
            color: "#FFFFFF",
            fontFamily: "system-ui",
            fontSize: "20px",
            fontWeight: "bold",
            marginLeft: "30px",
            marginTop: "20px",
            width: "140px",
          }}
        >
          CALCULATE
        </button>
      </form>
    </div>
  );
};

export default PowerOfMath;
