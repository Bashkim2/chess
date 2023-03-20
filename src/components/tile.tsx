interface Props {
  image: string;
  number: number;
}

export default function Tile({ number, image }: Props) {
  if (number % 2 === 0) {
    return (
      <div className="h-24 w-24 bg-yellow-600">
        {/* [{horizontalAxis[i]}
            {verticalsAxis[j]}] */}
        <img className="flex place-content-center w-20" src={image} />
      </div>
    );
  } else {
    return (
      <div className="h-24 w-24 bg-white">
        {/* [{horizontalAxis[i]}
            {verticalsAxis[j]}] */}
        <img className="flex place-content-center w-20" src={image} />
      </div>
    );
  }
}
