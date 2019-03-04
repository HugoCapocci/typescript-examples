function add(value1: string|number, value2: string|number) {
  if (typeof value1 === 'string')
    return value1 + value2 as string;
  else
   return value1 + <number>value2;
 }
 