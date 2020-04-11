const CONVERSION_KEYS: { [key: string]: any[] } = {
  group: [
    ['name', 'name'],
    ['active', 'active'],
    ['description', 'description'],
    ['attributes', 'attributes']
  ],
  user: [
    ['name', 'name'],
    ['active', 'active'],
    ['first-name', 'firstName'],
    ['last-name', 'lastName'],
    ['display-name', 'displayName'],
    ['email', 'email'],
    ['key', 'key'],
    ['attributes', 'attributes'],
    ['created-date', 'createdDate'],
    ['updated-date', 'updatedDate']
  ],
  session: [
    ['token', 'token'],
    ['user', 'user'],
    ['created-date', 'createdDate'],
    ['expiry-date', 'expiryDate']
  ]
}

const convertResponse = (type: string) => {
  return (target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
    const { value: original } = descriptor;
    
    descriptor.value = async function(...args: any[]) {
      const result = await original.apply(this, args);

      return Array.isArray(result) ? result.map( r => convertObj(r, type) ) : convertObj(result, type);
    }
  }
}

const convertObj = (obj: any, type: string) => {
  if (type === 'attributes') return convertAttrToObj(obj);

  const retval: any = { };

  for (const [key, name] of CONVERSION_KEYS[type]) {
    if (obj[key] === undefined) continue;

    retval[name] = obj[key];
  }

  const { attributes, user } = retval;

  if (attributes) retval.attributes = convertAttrToObj(attributes);
  if (user) retval.user = convertObj(user, 'user');

  return retval;
}

const convertAttrToObj = (attrs: { attributes: { link: any, name: string, values: string[] }[]  }): Attributes => {
  const { attributes } = attrs;

  return Object.assign({}, ...attributes.map( ({ name, values })=> ({ [name]: values.join('') }) ));
}

const convertAttrToList = (attrs: Attributes): { name: string, values: string[] }[] => {
  const retval = [];

  for (const [name, value] of Object.entries(attrs)) {
    retval.push({ name, values: [value] });
  }

  return retval;
}

const convertValidationFactors = (factors: { [key: string]: string }): any => ({ validationFactors: Object
  .entries(factors)
  .map( ([name, value]) => ({ name, value }) )
});

export { convertResponse, convertAttrToList, convertValidationFactors } 