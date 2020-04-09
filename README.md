crowd-ts
======

Promise-based typescript library to communicate with an Atlassian Crowd server with Node. This is a wrapper on [CROWD REST Apis](https://https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/). Takes inspiration from [atlassian-crowd-client](https://github.com/ghengeveld/atlassian-crowd-client).

## Installation
```npm install --save crowd-ts```

## Usage
```
import { CrowdApplication } from 'crowd-ts';

(async () => {
  const crowd = new CrowdApplication({
    baseURL: https://<SERVER>
    auth: {
      username: <APPLICATION_NAME>,
      password: <APPLICATION_PASS>
    },
    concurrency: 10
  })

  // Create a user 
  const params = {
    active: true,
    name: 'testuser',
    'first-name': 'tom',
    'last-name': 'jerry',
    'display-name': 'tom and jerry',
    email: 'test@test.com'
  };

  const user = await crowd.user.add(params);

  params.email = 'update@test.com' // Update a user
  await crowd.user.update(user); //Update User

  // Add Group
  const group = await crowd.group.add({ name: 'testgroup' });

  // Add Group to User
  await crowd.group.addUser({ name: group.name, username: user.name });

  // Remove Group from User
  await crowd.group.removeUser({ name: group.name, username: user.name });

  // Returning all users with attributes
  const users = await crowd.user.list({ expand: true });

  // Returning users fitting some CQL restriction
  const users2 = await crowd.user.search({ restriction: '<restriction>' });

  // Returning list of all groups
  const groups = await crowd.group.list()

  // Returning all group memberships as JSON
  // Structured as { [groupname: string]: { users: string[], groups: string[] }}
  const memberships = await crowd.getAllMemberships();

})()
```
## API Details
**CrowdApplication(config)**
