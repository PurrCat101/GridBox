import ColorBox from "./ColorBox";
import "./ColorBoxGrid.css";
function ColorGridBox({ colors }) {
  const boxes = [];
  for (let i = 0; i < 25; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }
  return <div className="ColorBoxGrid">{boxes}</div>;
}

export default ColorGridBox;
