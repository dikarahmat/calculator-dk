import { useState, useEffect } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import "./App.css";

function App() {
  const [current, setCurrent] = useState("0");
  const [previous, setPrevious] = useState("");
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [expression, setExpression] = useState("");

  const handleNumber = (num) => {
    if (waitingForOperand) {
      setCurrent(String(num));
      setWaitingForOperand(false);
    } else {
      setCurrent(current === "0" ? String(num) : current + num);
    }
  };

  const handleDecimal = () => {
    if (waitingForOperand) { setCurrent("0."); setWaitingForOperand(false); return; }
    if (!current.includes(".")) setCurrent(current + ".");
  };

  const handleOperator = (op) => {
    const curr = parseFloat(current);
    if (previous !== "" && !waitingForOperand) {
      const result = calculate(parseFloat(previous), curr, operator);
      setCurrent(String(result));
      setPrevious(String(result));
      setExpression(String(result) + " " + op);
    } else {
      setPrevious(current);
      setExpression(current + " " + op);
    }
    setOperator(op);
    setWaitingForOperand(true);
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case "+": return a + b;
      case "−": return a - b;
      case "×": return a * b;
      case "÷": return b !== 0 ? a / b : "Error";
      default: return b;
    }
  };

  const handleEquals = () => {
    if (!operator || waitingForOperand) return;
    const result = calculate(parseFloat(previous), parseFloat(current), operator);
    setExpression(previous + " " + operator + " " + current + " =");
    setCurrent(String(parseFloat(result.toFixed(10))));
    setPrevious("");
    setOperator(null);
    setWaitingForOperand(true);
  };

  const handleClear = () => {
    setCurrent("0"); setPrevious(""); setOperator(null);
    setWaitingForOperand(false); setExpression("");
  };

  const handleToggleSign = () => setCurrent(String(parseFloat(current) * -1));
  const handlePercent = () => setCurrent(String(parseFloat(current) / 100));
  const handleBackspace = () => {
    if (current.length > 1) setCurrent(current.slice(0, -1));
    else setCurrent("0");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key >= "0" && e.key <= "9") handleNumber(e.key);
      if (e.key === ".") handleDecimal();
      if (e.key === "+") handleOperator("+");
      if (e.key === "-") handleOperator("−");
      if (e.key === "*") handleOperator("×");
      if (e.key === "/") { e.preventDefault(); handleOperator("÷"); }
      if (e.key === "Enter" || e.key === "=") handleEquals();
      if (e.key === "Backspace") handleBackspace();
      if (e.key === "Escape") handleClear();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="app">
      <div className="bg-glow" />
      <div className="wrapper">
        <div className="project-label">
          <span className="dot" />
          DK Project <span className="num">#3</span>
        </div>
        <h1 className="app-title">Calculator<span className="accent">_</span></h1>
        <p className="app-sub">basic arithmetic operations</p>
        <div className="calculator">
          <Display current={current} expression={expression} />
          <Keypad
            onNumber={handleNumber}
            onOperator={handleOperator}
            onEquals={handleEquals}
            onClear={handleClear}
            onToggleSign={handleToggleSign}
            onPercent={handlePercent}
            onDecimal={handleDecimal}
            onBackspace={handleBackspace}
            activeOperator={operator}
          />
        </div>
        <p className="hint">keyboard supported · <kbd>esc</kbd> to clear</p>
      </div>
    </div>
  );
}

export default App;
