import { addGroupsByCount, generateRandomString, getRandomEle, getCrowd } from './utils';

const crowd = getCrowd();
let groups: Groups = [];

beforeAll(async (done) => {
  groups = await addGroupsByCount(crowd, 3);
  done();
})

afterAll(async (done) => {
  await Promise.all(groups.map((group) => crowd.group.remove(group) ));
  done();
})

describe('Testing group functionalities', () => {
  test('setting a group attributes', async (done) => {
    const params = groups.map( ({ name }) => ({ 
      name,
      attributes: {
        test: generateRandomString()
      }
    }));

    await Promise.all(params.map( p => crowd.group.setAttributes(p) ))
      .catch( err => {
        console.log(err);
        throw err;
      });

    done();
  })

  test('getting crowd group', async (done) => {
    const group = getRandomEle(groups);

    const [noExpansion, withExpansion]= await Promise.all([
      crowd.group.get({ name: group.name }),
      crowd.group.get({ name: group.name, expand: true })
    ]);

    expect(noExpansion).toHaveProperty('name');
    expect(noExpansion.attributes).toEqual({});

    expect(Object.keys(withExpansion.attributes || {}).length).toBeGreaterThan(0);

    done();
  })

  test('changing a group attribute', async (done) => {
    const group: Group = getRandomEle(groups);

    const params = {
      name: group.name,
      attributes: {
        test: 'new value'
      }
    };

    await crowd.group.setAttributes(params);

    const response = await crowd.group.getAttributes({ name: group.name });

    expect(response).toMatchObject(params.attributes);

    done();
  })

  test('removing a group attribute', async (done) => {
    const { name } = getRandomEle(groups);
    const attribute = 'test';

    await crowd.group.removeAttribute({ name, attribute });

    const response = await crowd.group.getAttributes({ name });

    expect(Object.keys(response)).not.toContain(attribute);

    done();
  })

  test('removing a group that does not exist', async (done) => {
    const name = 'goobly-goobly';

    await expect(crowd.group.remove({ name })).rejects.toThrow();

    done();
  })

  test('adding group child', async (done) => {
    const [g1, g2, g3] = groups.slice(0,3);

    await Promise.all([
      crowd.group.addChild({ name: g1.name, childname: g2.name }),
      crowd.group.addChild({ name: g2.name, childname: g3.name })
    ]);

    done();
  })

  test('getting group children', async (done) => {
    const [g1,g2,g3] = groups.slice(0,3);

    const direct = expect(crowd.group.getChildren(g1))
      .resolves.toMatchObject([{ name: g2.name }]);
    const nested = expect(crowd.group.getChildren({ ...g1, nested: true }))
      .resolves.toMatchObject([{ name: g2.name }, { name: g3.name }]);

    await Promise.all([direct, nested]);

    done();
  })

  test('getting group parents', async (done) => {
    const [g1,g2,g3] = groups.slice(0,3);

    const direct = expect(crowd.group.getParents(g3))
      .resolves.toMatchObject([{ name: g2.name }]);
    
    const nested = expect(crowd.group.getParents({ ...g3, nested: true }))
      .resolves.toContainEqual({ name: g1.name });

    await Promise.all([direct, nested]);

    done();
  })

  test('removing group child', async (done) => {
    const [{ name },{ name: childname }] = groups.slice(1,3);

    await expect(crowd.group.removeChild({ name, childname })).resolves.toBeFalsy();
    await expect(crowd.group.getChildren({ name })).resolves.toMatchObject([]);

    done();
  })

  test('removing group child that does not exist', async (done) => {
    const [{ name }, { name: childname }] = groups.slice(1,3);

    await expect(crowd.group.removeChild({ name, childname })).rejects.toThrow();

    done();
  })

  test('adding group parent', async (done) => {
    const [g1, g2] = groups.slice(1,3);

    await expect(crowd.group.addParent({ name: g2.name, parentname: g1.name })).resolves.toBeFalsy();
    await expect(crowd.group.getParents({ name: g2.name })).resolves.toContainEqual({ name: g1.name })

    done();
  })

  test('updating a group', async (done) => {
    const group: Group = getRandomEle(groups);

    group.description = 'desc';

    const response = await crowd.group.update({ name: group.name, ...group });

    expect(response.description).toMatch(group.description);

    done();
  })

  test('pulling full membership', async (done) => {
    const names = groups.map( ({ name }) => name );
    let memberships = await crowd.group.getMemberships();

    memberships = Object.assign({}, ...names.map( (name) => ({ [name]: memberships[name] })));
    expect(Object.keys(memberships).length).toBe(groups.length);

    done();
  })
  
  test('searching groups', async (done) => {
    const names: Set<String>  = new Set(groups.map( ({ name }) => name ));

    let response = await crowd.group.search();

    response = response.filter( ({ name }) => names.has(name));

    expect(response.length).toBe(groups.length);

    done();
  })
})