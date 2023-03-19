interface Props {
  number: number;
}

export default function Tile({ number }: Props) {
  if (number % 2 === 0) {
    return (
      <div className="h-24 w-24 bg-yellow-600">
        {/* [{horizontalAxis[i]}
            {verticalsAxis[j]}] */}
        <img src="B_bishop.png" />
      </div>
    );
  } else {
    return (
      <div className="h-24 w-24 bg-white">
        {/* [{horizontalAxis[i]}
            {verticalsAxis[j]}] */}
        <img src="../public/images/B_bishop.png" />
      </div>
    );
  }
}
