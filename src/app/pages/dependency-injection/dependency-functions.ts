//Create register function

const REGISTER_MAP: Record<string, string> = {};


export function register(name: string, value: string) {
  REGISTER_MAP[name] = value;
};

//Create setup function

export function setUp(classes: any[]) {
  classes.forEach((ClassName) => {
    new ClassName();
  });
}

//Create execute function

export function execute(className: string)   {

  const constructorArguments = getConstructorArgumentsArray(className);
  const constructorArgumentsInstances = constructorArguments.map((argument: any) => {
    return REGISTER_MAP[argument.name];

  });

  // check if constructor arguments are registered
  // check if constructor arguments have registered arguments
  //if no, create instance of class
  // if yes ask this function to create instance of class

}

// get constructor arguments from class
export function getConstructorArgumentsArray(className: string) {
  // @ts-ignore
  const classInstance = new className();
  // @ts-ignore
  const constructorArguments = Reflect.getMetadata('design:paramtypes', classInstance.constructor);
  return constructorArguments;
}
