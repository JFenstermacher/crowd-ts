import { addUsersByCount, getCrowd, getRandomEle, generateRandomString } from './utils';

const crowd = getCrowd();

let users: any[] = [];

beforeAll(async (done) => {
  users = await addUsersByCount(crowd, 3);

  done();
})

afterAll(async (done) => {
  await Promise.all(users.map( user => crowd.user.remove(user) ));
  done();
})

describe('Testing user functionalities', () => {
  test('updating user attributes', async (done) => {
    await Promise.all(
      users.map( ({ name }) => 
        crowd.user.setAttributes({ name, attributes: { usertest: '123' } }) 
      )
    );

    done();
  })

  test('updating existing attribute', async (done) => {
    const user = users[0];

    const params = {
      name: user.name,
      attributes: {
        usertest: 'doge'
      }
    };

    await crowd.user.setAttributes(params);

    const attrs = await crowd.user.getAttributes(user);
    expect(attrs.usertest).toEqual('doge');

    done();
  })

  test('removing attribute', async (done) => {
    const { name }= users[1];

    await crowd.user.removeAttribute({ name, attribute: 'usertest' });
    done();
  })

  test('getting user', async (done) => {
    const { name } = getRandomEle(users);

    const noExpand = await crowd.user.get({ name });
    const expand = await crowd.user.get({ name, expand: true });


    const nAttrs = Object.keys(noExpand.attributes || {});
    const eAttrs = Object.keys(expand.attributes || {});

    expect(nAttrs.length).toBe(0);
    expect(eAttrs.length).toBeGreaterThan(0);

    done();
  })

  test('updating user', async (done) => {
    const user = users[0];
    
    user.firstName = 'tom';
    user.lastName = 'jerry';

    await expect(crowd.user.update(user)).resolves.toBeFalsy();

    done();
  })

  test('searching users', async (done) => {
    let response = await crowd.user.search();
    
    const names = new Set(users.map( ({ name }) => name ));

    response = response.filter( ({ name }) => names.has(name) );

    expect(response.length).toBe(users.length);

    done();
  })

  test('renaming user', async (done) => {
    const user = users[2];
    const oldname = user.name;

    user.name = 'yoda';
    const response = await crowd.user.rename({ name: oldname, newname: user.name });

    expect(response.name).toBe(user.name);

    done();
  })

  test('change password', async (done) => {
    const user = getRandomEle(users);
    const { name, password = '' } = user;
    const newPass = generateRandomString(true);

    await crowd.user.authenticate({ name, password });

    await crowd.user.updatePassword({ name, password: newPass });
    user.password = newPass;

    await crowd.user.authenticate({ name, password: newPass });

    done();
  })

  test('removing password', async (done) => {
    const { name, password = '' } = getRandomEle(users);
    
    await crowd.user.removePassword({ name });

    await expect(crowd.user.authenticate({ name, password })).rejects.toThrow();

    done();
  })
})