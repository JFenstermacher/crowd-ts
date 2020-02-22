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

const initializeUsers = async () => {
  const user = await readJSON(USER_TEMPLATE);

  const users = Array.from({ length: 1 }, (a, i) => ({
    active: true,
    name: `${i}testuser`,
    password: user.password,
    'first-name': `${i} ${user['first-name']}`,
    'last-name': `${i} ${user['last-name']}`,
    'display-name': `${i} ${user['display-name']}`,
    email: user.email
  }));

  await Promise.all(users.map( user => crowd.addUser(user) ))
}

const initializeGroups = async (crowd: CrowdApplication) => {
  const group = await readJSON(`groups.template.json`);
}

beforeAll( async () => {
  await Promise.all([
    initializeUsers(),
  ])
})

test('adding user', async () => {
  const user = await readJSON(USER_TEMPLATE);

  await crowd.addUser(user);
})

test('removing user', async () => {
  const response = await crowd.removeUser({ username: '0testuser'})
})