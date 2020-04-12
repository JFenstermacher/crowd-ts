Promise-based typescript library to communicate with an Atlassian Crowd server with Node. Simple, hopefully intuitive namespaced API. Built on top of axios, with built-in rate limiting via p-queue. This is a wrapper on [CROWD REST Apis](https://https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/).

## Installation
```sh
npm install --save crowd-ts
```

## Usage

### Creating Client

The client uses axios and p-queue. An axios instance is created via the config passed to the client. The one configuration property exception being, concurrency. Concurrency is passed to p-queue to allow for ratelimiting if desired, by default, there is no rate limiting. Both the instance and queue are available as properties.
```js
import { CrowdApplication } from 'crowd-ts';

const crowd = new CrowdApplication({
  baseURL: 'https://<SERVER>',
  auth: {
    username: '<APPLICATION_NAME>',
    password: '<APPLICATION_PASS>'
  },
  concurrency: 10 // If rate-limiting desired
});

crowd.instance; // Axios instance reference
crowd.queue; // pQueue instance reference
```

### Basic Usage Examples
```js
(async () => {

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

  // Update a user
  user.email = 'update@test.com';
  await crowd.user.update(user);

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

  // Remove all users
  await Promise.all(users.map( user => crowd.user.remove(user) ));

  // Remove all gorups
  await Promise.all(groups.map( group => crowd.group.remove(group) ));

})()
```
Notes:

* Objects don't map directly to those in the examples shown in the Crowd documentation. I remapped properties with hyphens to allow dot notation.
* Expand sometimes accepts either boolean or string[]. Passing `true` will do full expansion allowed, if you'd like to only expand user or group, you can pass that as a string param


#### Links 

Source: [crowd-ts](https://github.com/JFenstermacher/crowd-ts)

Client documentation: [crowd-ts](https://jfenstermacher.github.io/crowd-ts/)

## Acknowledgements

Takes inspiration from [atlassian-crowd-client](https://github.com/ghengeveld/atlassian-crowd-client) and [node-bitbucket](https://github.com/MunifTanjim/node-bitbucket).