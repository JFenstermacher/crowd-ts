import { randomBytes } from 'crypto';

// I don't know why I'm doing all this...
// I guess I'm just feeling silly.

const getRandomEle = <T>(arr: T[]): T => arr[(Math.random() * arr.length | 0) % arr.length];

const generateUser = function*(): Generator<User & { password: string }, User & { password: string }> {
  const names = [
    'Noah',   'Liam',     'Mason',      'Jacob',      'William',
    'Ethan',  'James',    'Alexander',  'Michael',    'Benjamin',
    'Emma',   'Olivia',   'Sophia',     'Ava',        'Isabella',
    'Mia',    'Abigail',  'Emily',      'Charlotte',  'Harper'
  ];

  const set = new Set();

  for (let n1 = getRandomEle(names), n2 = getRandomEle(names);;) {
    const username = `${n1[0].toLowerCase()}${n2.toLowerCase()}`;

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

export { generateRandomString, generateUser, generateGroup, getRandomEle }