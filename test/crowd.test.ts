import { getCrowd, addGroupsByCount, addUsersByCount, getRandomEle } from './utils';

const crowd = getCrowd();

let groups: Groups = [];
let users: Users = [];

let group: Group; 
let user: User;

beforeAll(async (done) => {
  groups = await addGroupsByCount(crowd, 3);
  users = await addUsersByCount(crowd, 3);

  group = groups[0];
  user = users[0]

  done();
})

afterAll(async (done) => {
  await users.map( ({ name }) => crowd.removeUser({ name }) );
  await groups.map( ({ name }) => crowd.removeGroup({ name }) );
  
  done();
})

describe('Testing integrations', () => {
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