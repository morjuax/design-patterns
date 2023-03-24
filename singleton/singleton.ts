

class SingletonTS {
  private static instance: SingletonTS;

  private constructor(private version: string) {}

  static getInstance(version: string): SingletonTS {
      if (!SingletonTS.instance) SingletonTS.instance = new SingletonTS(version);
      return SingletonTS.instance;
  }
}

function appSingletonTS() {
  const singleton1 = SingletonTS.getInstance('version-1');
  const singleton2 = SingletonTS.getInstance('version-2');
  const singleton3 = SingletonTS.getInstance('version-3');

  console.log(singleton1 === singleton3, singleton1, singleton2)
}


appSingletonTS()