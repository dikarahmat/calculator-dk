function Keypad({ onNumber, onOperator, onEquals, onClear, onToggleSign, onPercent, onDecimal, onBackspace, activeOperator }) {
  const buttons = [
    { label: "AC", type: "function", action: onClear },
    { label: "+/-", type: "function", action: onToggleSign },
    { label: "%", type: "function", action: onPercent },
    { label: "÷", type: "operator", action: () => onOperator("÷") },
    { label: "7", type: "number", action: () => onNumber("7") },
    { label: "8", type: "number", action: () => onNumber("8") },
    { label: "9", type: "number", action: () => onNumber("9") },
    { label: "×", type: "operator", action: () => onOperator("×") },
    { label: "4", type: "number", action: () => onNumber("4") },
    { label: "5", type: "number", action: () => onNumber("5") },
    { label: "6", type: "number", action: () => onNumber("6") },
    { label: "−", type: "operator", action: () => onOperator("−") },
    { label: "1", type: "number", action: () => onNumber("1") },
    { label: "2", type: "number", action: () => onNumber("2") },
    { label: "3", type: "number", action: () => onNumber("3") },
    { label: "+", type: "operator", action: () => onOperator("+") },
    { label: "⌫", type: "function", action: onBackspace },
    { label: "0", type: "number", action: () => onNumber("0") },
    { label: ".", type: "number", action: onDecimal },
    { label: "=", type: "equals", action: onEquals },
  ];
  return (
    <div className="keypad">
      {buttons.map((btn) => (
        <button
          key={btn.label}
          className={`key key-${btn.type} ${activeOperator === btn.label ? "key-active" : ""}`}
          onClick={btn.action}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}
export default Keypad;
