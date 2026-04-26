function Display({ current, expression }) {
  const fontSize = current.length > 9 ? "28px" : current.length > 6 ? "42px" : "58px";
  return (
    <div className="display">
      <div className="expression">{expression || "\u00A0"}</div>
      <div className="current" style={{ fontSize }}>{current}</div>
    </div>
  );
}
export default Display;
