import { generateGroup, getCrowd } from './utils';

import { Groups } from '../src';

const crowd = getCrowd(50);
let groups: Groups = [];

describe('Testing adding and querying thousands of groups', () => {
  test('creating tons of groups', async (done) => {
    jest.setTimeout(60000);
    groups = Array.from({ length: 1002 }, () => generateGroup().next().value );

    await Promise.all(groups.map( group => crowd.group.create(group) ));
    done();
  })

  test('listing groups', async(done) => {
    let gs = await crowd.group.list();

    expect(gs.length).toBeGreaterThan(1001);

    gs = await crowd.group.search({ maxResults: 1001 });

    expect(gs.length).toBe(1001);
    done();
  })

  test('removing tons of groups', async (done) => {
    jest.setTimeout(60000)
    await Promise.all(groups.map( group => crowd.group.remove(group) ));

    done();
  })
})