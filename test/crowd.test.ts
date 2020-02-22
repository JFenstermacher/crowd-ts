import { CrowdApplication } from '../src/crowd';
import fs from 'fs';

require('dotenv').config({ path: `${__dirname}/.env` });

const USER_TEMPLATE = `${__dirname}/templates/user.template.json`;
const GROUP_TEMPLATE = `${__dirname}/tempaltes/group.template.json`;

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
  }
});

const readJSON = async (filename: string) => fs.promises.readFile(filename)
  .then( bytes => JSON.parse(bytes.toString()) );

const generateUser = function*() {
  for (let i = 1; ; i++) yield {
    active: true,
    name: `${i} testuser`,
    password: CROWD_PASSWORD,
    'first-name': `${i} test`,
    'last-name': 'user',
    'display-name': `${i} test user`,
    email: `${i}test@test.com`
  };
}

const initializeUsers = async () => {
  const users = Array.from({ length: 2 }, () => generateUser().next().value );

  await Promise.all(users.map( user => crowd.addUser(user) ))
}

beforeAll(async () => {
  await initializeUsers();
})

describe('Testing Crowd user functionalities', () => {
  const users = [];

  test('adding user', async () => {
    const user = await readJSON(USER_TEMPLATE);

    await crowd.addUser(user);
  })
  
  test('removing user', async () => {
    const user = await readJSON(USER_TEMPLATE);
    await crowd.removeUser({ username: user.name });
  })
})

// test('update user', async () => {
//   const username = '1testuser';

//   const { 'created-date': cd, 'updated-date': ud, ...user }= await crowd.getUser({ username });

//   user.email = 'testing@testing.com';

//   const response = await crowd.updateUser(user);

//   const update = await crowd.getUser({ username });

//   expect(update.email).toEqual(user.email);
// })