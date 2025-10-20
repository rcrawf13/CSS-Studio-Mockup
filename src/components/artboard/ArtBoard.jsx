import { Stage, Layer, Circle } from "react-konva";

const ArtBoard = () => {
  return (
    <Stage width={500} height={500}>
      <Layer>
        <Circle
          x={250}
          y={250}
          radius={100}
          fill="red"
          stroke="black"
          strokeWidth={4}
        />
      </Layer>
    </Stage>
  );
};

export default ArtBoard;
