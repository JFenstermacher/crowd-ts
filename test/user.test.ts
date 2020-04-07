import { addUsersByCount, getCrowd, getRandomEle, generateRandomString } from './utils';

const crowd = getCrowd();

let users: Users = [];

beforeAll(async (done) => {
  users = await addUsersByCount(crowd, 3);

  done();
})

afterAll(async (done) => {
  await Promise.all(users.map( user => crowd.removeUser(user) ));
  done();
})

describe('Testing user functionalities', () => {
  test('updating user attributes', async (done) => {
    await Promise.all(
      users.map( ({ name }) => 
        crowd.updateUserAttributes({ name, attributes: { usertest: '123' } }) 
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

    await crowd.updateUserAttributes(params);

    const attrs = await crowd.getUserAttribues(user);
    expect(attrs.usertest).toEqual('doge');

    done();
  })

  test('removing attribute', async (done) => {
    const { name }= users[1];

    await crowd.removeUserAttribute({ name, attributename: 'usertest' });
    done();
  })

  test('getting user', async (done) => {
    const { name } = getRandomEle(users);

    const noExpand = await crowd.getUser({ name });
    const expand = await crowd.getUser({ name, expand: true });


    const nAttrs = Object.keys(noExpand.attributes || {});
    const eAttrs = Object.keys(expand.attributes || {});

    expect(nAttrs.length).toBe(0);
    expect(eAttrs.length).toBeGreaterThan(0);

    done();
  })

  test('updating user', async (done) => {
    const user = users[0];
    
    user['first-name'] = 'tom';
    user['last-name'] = 'jerry';

    await expect(crowd.updateUser(user)).resolves.toBeFalsy();

    done();
  })

  test('searching users', async (done) => {
    let response = await crowd.searchUsers();
    
    const names = new Set(users.map( ({ name }) => name ));

    response = response.filter( ({ name }) => names.has(name) );

    expect(response.length).toBe(users.length);

    done();
  })

  test('renaming user', async (done) => {
    const user = users[2];
    const oldname = user.name;

    user.name = 'yoda';
    const response = await crowd.renameUser({ name: oldname, newname: user.name });

    expect(response.name).toBe(user.name);

    done();
  })

  test('change password', async (done) => {
    const user = getRandomEle(users);
    const { name, password = '' } = user;
    const newPass = generateRandomString(true);

    await crowd.authenticateUser({ name, password });

    await crowd.updateUserPassword({ name, password: newPass });
    user.password = newPass;

    await crowd.authenticateUser({ name, password: newPass });

    done();
  })

  test('removing password', async (done) => {
    const { name, password = '' } = getRandomEle(users);
    
    await crowd.removeUserPassword({ name });

    await expect(crowd.authenticateUser({ name, password })).rejects.toThrow();

    done();
  })
})