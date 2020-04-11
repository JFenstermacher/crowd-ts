Promise-based typescript library to communicate with an Atlassian Crowd server with Node. Simple, hopefully intuitive namespaced API. Built on top of axios, with built-in concurrency via p-queue. This is a wrapper on [CROWD REST Apis](https://https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/). Takes inspiration from [atlassian-crowd-client](https://github.com/ghengeveld/atlassian-crowd-client).

## Installation
```npm install --save crowd-ts```

## Basic Usage
```
import { CrowdApplication } from 'crowd-ts';

(async () => {
  const crowd = new CrowdApplication({
    baseURL: 'https://<SERVER>'
    auth: {
      username: '<APPLICATION_NAME>',
      password: '<APPLICATION_PASS>'
    },
    concurrency: 10
  })

  // Create a user 
  const params = {
    active: true,
    name: 'testuser',
    password: 'testpassword',
    firstName: 'tom',
    lastName: 'jerry',
    displayName: 'tom and jerry',
    email: 'test@test.com'
  };

  const user = await crowd.user.add(params);

  user.email = 'update@test.com' // Update a user
  await crowd.user.update(user); //Update User

  // Add Group
  const group = await crowd.group.add({ name: 'testgroup' });

  // Add Group to User
  await crowd.group.addUser({ name: group.name, username: user.name });

  // Remove Group from User
  await crowd.group.removeUser({ name: group.name, username: user.name });

  // Returning all users with attributes
  const users = await crowd.user.list();

  // Add all users to group
  await Promise.all(users.map( ({ name }) => crowd.user.addGroup({ name, groupname: group.name })));

  // Returning users fitting some CQL restriction
  const users2 = await crowd.user.search({ restriction: '<restriction>' });

  // Returning list of all groups, just names
  const groups = await crowd.group.list({ expand: false })

  // Returning all group memberships as JSON
  // Structured as { [groupname: string]: { users: string[], groups: string[] }}
  const memberships = await crowd.getMemberships();

})()
```