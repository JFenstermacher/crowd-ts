import { randomBytes } from 'crypto';
import { CrowdApplication } from '../src/crowd';
require('dotenv').config({ path: `${__dirname}/.env` });

// I don't know why I'm doing all this...
// I guess I'm just feeling silly.

const getRandomEle = <T>(arr: T[]): T => arr[(Math.random() * arr.length | 0) % arr.length];

const generateUser = function*(): Generator<any, any> {
  const names = [
    'Noah',   'Liam',     'Mason',      'Jacob',      'William',
    'Ethan',  'James',    'Alexander',  'Michael',    'Benjamin',
    'Emma',   'Olivia',   'Sophia',     'Ava',        'Isabella',
    'Mia',    'Abigail',  'Emily',      'Charlotte',  'Harper'
  ];

  const set = new Set();

  for (let n1 = getRandomEle(names), n2 = getRandomEle(names);;) {
    const username = `${n1[0].toLowerCase()}${n2.toLowerCase()}-${generateRandomString().slice(0,6)}`;

    if (set.has(username)) continue;
    yield {
      active: true,
      name: username,
      password: generateRandomString(true),
      'first-name': n1,
      'last-name': n2,
      'display-name': `${n1} ${n2}`,
      email: `${username}@test.com`
    };

    set.add(username);
  }
}

const generateGroup = function*(): Generator<Group, Group> {
  const animals = [
    'otter',      'porcupine',  'lemur',  'orangutan',  'skunk',
    'hartebeest', 'lizard' ,    'gnu',    'horse',      'bull',
    'whale',      'alpaca',     'jerboa', 'koala',      'warthog'
  ];

  const suffixes = [ 'team', 'cohort', 'squad' ];

  for (let a = getRandomEle(animals), s = getRandomEle(suffixes);;) {
    yield { name: `${a}-${s}-${generateRandomString().slice(8)}`, active: true };
  }
}

const generateRandomString = (password = false) => {
  const specials = ['!', '?', '#'];

  let randomString = randomBytes(20).toString('hex').slice(15);

  randomString += 'A';

  return password ? `${randomString}${specials[((Math.random() * 3) | 0) % 3]}` : randomString;
}

const getCrowd = () => {
  const { BASE_URL, CROWD_USERNAME = '', CROWD_PASSWORD = '' } = process.env;

  return new CrowdApplication({
    baseURL: BASE_URL,
    auth: {
      username: CROWD_USERNAME,
      password: CROWD_PASSWORD
    }
  })
}

const addGroupsByCount = async (crowd: CrowdApplication, length: number) => {
  const groups = Array.from({ length }, () => generateGroup().next().value );

  await Promise.all(groups.map( (group) => crowd.group.create(group) ));

  return groups;
}

const addUsersByCount = async(crowd: CrowdApplication, length: number) => {
  const users = Array.from({ length }, () => generateUser().next().value );

  await Promise.all(users.map( (user) => crowd.user.create(user) ));

  return users;
}

export { addGroupsByCount, addUsersByCount, generateRandomString, generateUser, generateGroup, getRandomEle, getCrowd }