# crowd-ts
Promise-based typescript library to communicate with an Atlassian Crowd server with Node. This is a wrapper on [CROWD REST Apis](https://https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/).

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
    ...,etc.
  };

  const user = await crowd.addUser(params);

  // Add Group
  const group = await crowd.addGroup({ name: 'testgroup' });

  // Add Group to User
  await crowd.addGroupToUser({ name: group.name, username: user.name });

  // Remove Group from User
  await crowd.removeGroupFromUser({ name: group.name, username: user.name });

  // Returning all users with attributes
  const users = await crowd.searchUsers({ expand: true });

  // Returning all group memberships as JSON
  // Structured as { [groupname: string]: { users: string[], groups: string[] }}
  const memberships = await crowd.getAllMemberships();

})()
```
## API Details
**CrowdApplication(config)**
