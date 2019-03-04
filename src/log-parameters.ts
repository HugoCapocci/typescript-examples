function logParameters(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  //editing the descriptor/value parameter
  descriptor.value = function () {
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
          args[i - 0] = arguments[i];
      }
      const argsAsString = args.map(arg => JSON.stringify(arg)).join();
      // note usage of originalMethod here
      const result = originalMethod.apply(this, args);
      const returnedValue = JSON.stringify(result);
      console.log('Méthode : ', propertyKey)
      console.log('Paramètres : ', argsAsString);
      console.log('Valeur retournée : ', returnedValue);
      return result;
  };

  // return edited descriptor as opposed to overwriting the descriptor
  return descriptor;
}

class Dummy {
  @logParameters
  doSomething(param1: string, repeat: number) {
    return param1.repeat(repeat);
  }
}

const dummy = new Dummy();
dummy.doSomething('Hello World', 3);
