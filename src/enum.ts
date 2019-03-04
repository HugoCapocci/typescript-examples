enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

function addDirection(direction: Direction) {
  console.log('direction ajoutée : ', direction);
}

addDirection(Direction.DOWN);

enum FormatTypes {
  PERCENT = 'Percent',
  CURRENCY = 'Currency',
  NONE = ''
}

function displayValue(nombre: number, format: FormatTypes): void {
  switch(format) {
    case FormatTypes.PERCENT:
      console.log(`${nombre} %`);
      break;
    case FormatTypes.CURRENCY:
      console.log(`${nombre} €`);
      break;
    default:
      console.log(nombre);
  }
}

displayValue(125.6, FormatTypes.CURRENCY);

