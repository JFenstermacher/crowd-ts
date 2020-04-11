import { getCrowd, addUsersByCount } from './utils';

const crowd = getCrowd();

let user: any;

beforeAll(async (done) => {
  const users = await addUsersByCount(crowd, 1);
  user = users[0];

  done();
})

afterAll(async (done) => {
  await crowd.user.remove(user);
  done();
})

describe('Testing authentication tokens', () => {
  test('authenticating user', async (done) => {
    await crowd.user.authenticate(user as { name: string, password: string });
    done();
  })

  test('deleting token', async (done) => {
    await crowd.session.create(user as any);
    await crowd.session.removeAll(user);

    done();
  })

  test('invalidating token', async(done) => {
    const { token } = await crowd.session.create(user as any);
    await crowd.session.remove({ token });

    done();
  })

  test('getting session', async (done) => {
    const { token } = await crowd.session.create(user as any);
    await crowd.session.get({ token });

    done();
  })
})