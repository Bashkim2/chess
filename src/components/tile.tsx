interface Props {
  image: string;
  number: number;
}

export default function Tile({ number, image }: Props) {
  if (number % 2 === 0) {
    return (
      <div className="h-24 w-24 bg-yellow-600">
        {image && (
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="bg-center bg-no-repeat bg-cover hover:cursor-grab active:cursor-grabbing chessPiece"
          ></div>
        )}
      </div>
    );
  } else {
    return (
      <div className="h-24 w-24 bg-white">
        {image && (
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="bg-center bg-no-repeat bg-cover hover:cursor-grab active:cursor-grabbing chessPiece"
          ></div>
        )}
      </div>
    );
  }
}
