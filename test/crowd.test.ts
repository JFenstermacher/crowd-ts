import { CrowdApplication } from '../src/crowd';
import { generateRandomString, generateUser, generateGroup, getRandomEle } from './utils';
import { doesNotMatch } from 'assert';

require('dotenv').config({ path: `${__dirname}/.env` });

type Environment = {
  BASE_URL: string,
  CROWD_USERNAME: string,
  CROWD_PASSWORD: string
}

const { BASE_URL, CROWD_USERNAME, CROWD_PASSWORD } = process.env as Environment;

const crowd = new CrowdApplication({
  baseURL: BASE_URL,
  auth: {
    username: CROWD_USERNAME,
    password: CROWD_PASSWORD
  },
  concurrency: 5
});

const groups = Array.from({ length: 10 }, () => generateGroup().next().value );
const users = Array.from({ length: 10 }, () => generateUser().next().value );

beforeAll(async (done) => {
  await users.map( user => crowd.addUser(user) )
  await groups.map( group => crowd.addGroup(group) );

  done();
})
afterAll(async (done) => {
  await users.map( ({ name }) => crowd.removeUser({ name }) );
  await groups.map( ({ name }) => crowd.removeGroup({ name }) );
  
  done();
})

describe('Testing Crowd group functionalities', () => {
  test('setting a group attributes', async (done) => {
    const params = groups.map( ({ name }) => ({ 
      name,
      attributes: {
        test: generateRandomString()
      }
    }));

    await Promise.all(params.map( p => crowd.updateGroupAttributes(p) ))
      .catch( err => {
        console.log(err);
        throw err;
      });

    done();
  })

  test('getting crowd group', async (done) => {
    const group = getRandomEle(groups);

    const [noExpansion, withExpansion]= await Promise.all([
      crowd.getGroup({ name: group.name }),
      crowd.getGroup({ name: group.name, expand: true })
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

    await crowd.updateGroupAttributes(params);

    const response = await crowd.getGroupAttributes({ name: group.name });

    expect(response).toMatchObject(params.attributes);

    done();
  })

  test('removing a group attribute', async (done) => {
    const { name } = getRandomEle(groups);
    const attributename = 'test';

    await crowd.removeGroupAttribute({ name, attributename });

    const response = await crowd.getGroupAttributes({ name });

    expect(Object.keys(response)).not.toContain(attributename);

    done();
  })

  test('removing group', async (done) => {
    const {name } = groups.pop() as Group;

    await expect(crowd.removeGroup({ name })).resolves.toBeFalsy();

    done();
  })

  test('removing a group that does not exist', async (done) => {
    const name = 'goobly-goobly';

    await expect(crowd.removeGroup({ name })).rejects.toThrow();

    done();
  })

  test('adding group child', async (done) => {
    const [g1, g2, g3] = groups.slice(0,3);

    await Promise.all([
      crowd.addGroupChild({ name: g1.name, childname: g2.name }),
      crowd.addGroupChild({ name: g2.name, childname: g3.name })
    ]);

    done();
  })

  test('getting group children', async (done) => {
    const [g1,g2,g3] = groups.slice(0,3);

    const direct = expect(crowd.getGroupChildren({ name: g1.name }))
      .resolves.toMatchObject([{ name: g2.name }]);
    const nested = expect(crowd.getGroupChildren({ name: g1.name, nested: true }))
      .resolves.toMatchObject([{ name: g2.name }, { name: g3.name }]);

    await Promise.all([direct, nested]);

    done();
  })

  test('getting group parents', async (done) => {
    const [g1,g2,g3] = groups.slice(0,3);

    const direct = expect(crowd.getGroupParents({ name: g3.name }))
      .resolves.toMatchObject([{ name: g2.name }]);
    
    const nested = expect(crowd.getGroupParents({ name: g3.name, nested: true }))
      .resolves.toContainEqual({ name: g1.name });

    await Promise.all([direct, nested]);

    done();
  })

  test('removing group child', async (done) => {
    const [{ name },{ name: childname }] = groups.slice(1,3);

    await expect(crowd.removeGroupChild({ name, childname })).resolves.toBeFalsy();
    await expect(crowd.getGroupChildren({ name })).resolves.toMatchObject([]);

    done();
  })

  test('removing group child that does not exist', async (done) => {
    const [{ name }, { name: childname }] = groups.slice(1,3);

    await expect(crowd.removeGroupChild({ name, childname })).rejects.toThrow();

    done();
  })

  test('adding group parent', async (done) => {
    const [g1, g2] = groups.slice(1,3);

    await expect(crowd.addParentGroup({ name: g2.name, parentname: g1.name })).resolves.toBeFalsy();
    await expect(crowd.getGroupParents({ name: g2.name })).resolves.toContainEqual({ name: g1.name })

    done();
  })

  test('updating a group', async (done) => {
    const group: Group = getRandomEle(groups);

    group.description = 'desc';

    const response = await crowd.updateGroup({ name: group.name, ...group });

    expect(response.description).toMatch(group.description);

    done();
  })

  test('pulling full membership', async (done) => {
    const names = groups.map( ({ name }) => name );
    let memberships = await crowd.getAllMemberships();

    memberships = Object.assign({}, ...names.map( (name) => ({ [name]: memberships[name] })));
    expect(Object.keys(memberships).length).toBe(groups.length);

    done();
  })
  
  test('searching groups', async (done) => {
    const names = new Set(groups.map( ({ name }) => name ));

    let response = await crowd.searchGroups();

    response = response.filter( ({ name }) => names.has(name) );

    expect(response.length).toBe(groups.length);

    done();
  })
})

describe('Testing crowd user functionalities', () => {
  test('updating user attributes', async (done) => {
    await Promise.all(
      users.map( ({ name }) => 
        crowd.updateUserAttributes({ name, attributes: { usertest: '123' } }) 
      )
    );

    done();
  })

  test('updating existing attribute', async (done) => {
    const { name } = users[0];

    const params = {
      name,
      attributes: {
        usertest: 'doge'
      }
    };

    await crowd.updateUserAttributes(params);

    const attrs = await crowd.getUserAttribues({ name });
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
    delete user.password;
    
    user['first-name'] = 'tom';
    user['last-name'] = 'jerry';
    user['active'] = false;

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
    const { name, password } = user;
    const newPass = generateRandomString(true);

    await crowd.authenticateUser({ name, password });

    await crowd.updateUserPassword({ name, password: newPass });
    user.password = newPass;

    await crowd.authenticateUser({ name, password: newPass });

    done();
  })

  test('removing password', async (done) => {
    const { name, password } = getRandomEle(users);
    
    await crowd.removeUserPassword({ name }).catch( err => err );

    await expect(crowd.authenticateUser({ name, password })).rejects.toThrow();

    done();
  })
})

describe('Testing integrations between groups and users', () => {
  const group = getRandomEle(groups);
  const user = getRandomEle(users);

  test('adding users to group (via groups)', async (done) => {
    await Promise.all(users.map( ({ name }) => crowd.addGroupToUser({ name: group.name, username: name })));

    done();
  })

  test('getting group users', async (done) => {
    const response = await crowd.getGroupUsers({ name: group.name });

    expect(response.length).toBe(users.length);

    done();
  })

  test('removing users from group', async (done) => {
    await Promise.all(users.map( ({ name }) => crowd.removeGroupFromUser({ name: group.name, username: name })));

    const response = await crowd.getGroupUsers({ name: group.name });

    expect(response.length).toBe(0);

    done();
  })

  test('adding groups to user', async (done) => {
    await Promise.all(groups.map( ({ name }) => crowd.addGroupToUser({ name, username: user.name }) ));

    done();
  })

  test('get user groups', async (done) => {
    const response = await crowd.getUserGroups({ name: user.name });

    expect(response.length).toBe(groups.length);

    done();
  })
})