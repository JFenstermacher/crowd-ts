const CONVERSION_KEYS: { [key: string]: string[] } = {
  group: [
    'name',
    'active',
    'description',
    'attributes'
  ],
  user: [
    'name',
    'active',
    'first-name',
    'last-name',
    'display-name',
    'email',
    'key',
    'attributes',
    'created-date',
    'updated-date',
  ],
  token: [
    'token',
    'user',
    'created-date',
    'expiry-date'
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

  const keys = CONVERSION_KEYS[type];

  const entries = keys
    .filter( key => obj[key] !== undefined )
    .map( key => ({ [key]: obj[key] }) );

  const retval = Object.assign({}, ...entries);

  const { attributes } = retval;

  if (attributes) retval.attributes = convertAttrToObj(attributes);

  return retval;
}

const convertAttrToObj = (attrs: { attributes: { link: any, name: string, values: string[] }[]  }): Attributes => {
  const { attributes } = attrs;

  return Object.assign({}, ...attributes.map( attr => ({ [attr.name]: attr.values.join('') })));
}

const convertAttrToList = (attrs: Attributes): { name: string, values: string[] }[] => {
  const retval = [];

  for (const [name, value] of Object.entries(attrs)) {
    retval.push({ name, values: [value] });
  }

  return retval;
}

export { convertResponse, convertAttrToList } 