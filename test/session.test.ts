import { getCrowd, addUsersByCount } from './utils';

const crowd = getCrowd();

let user: User;

beforeAll(async (done) => {
  const users = await addUsersByCount(crowd, 1);
  user = users.pop() as User;

  done();
})

afterAll(async (done) => {
  await crowd.removeUser(user);
  done();
})

describe('Testing authentication tokens', () => {
  test('authenticating user', async (done) => {
    await crowd.authenticateUser(user as { name: string, password: string });
    done();
  })

  test('deleting token', async (done) => {
    const { token } = await crowd.getToken(user);
    await crowd.deleteToken(token);

    done();
  })

  test('invalidating token', async(done) => {
    const { token } = await crowd.getToken(user);
    await crowd.invalidateToken(token);

    done();
  })

  test('validating token', async (done) => {
    const { token } = await crowd.getToken(user);
    await crowd.validateToken(token);

    done();
  })

  test('getting session', async (done) => {
    const { token } = await crowd.getToken(user);
    await crowd.getSession(token);

    done();
  })
})