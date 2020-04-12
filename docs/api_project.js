define({
  "name": "crowd-ts",
  "version": "1.0.0",
  "description": "Atlassian Crowd typescript",
  "header": {
    "title": "Introduction",
    "content": "<p>Promise-based typescript library to communicate with an Atlassian Crowd server with Node. Simple, hopefully intuitive namespaced API. Built on top of axios, with built-in rate limiting via p-queue. This is a wrapper on <a href=\"https://https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/\">CROWD REST Apis</a>.</p>\n<h2>Installation</h2>\n<pre class=\"prettyprint lang-sh\">npm install --save crowd-ts\n</pre>\n<h2>Usage</h2>\n<h3>Creating Client</h3>\n<p>The client uses axios and p-queue. An axios instance is via the config passed to the client. The one configuration property exception being, concurrency. Concurrency is passed to p-queue to allow for ratelimiting if desired, by default, there is no rate limiting. Both the instance and queue are available as properties.</p>\n<pre class=\"prettyprint lang-js\">import { CrowdApplication } from 'crowd-ts';\n\nconst crowd = new CrowdApplication({\n  baseURL: 'https://<SERVER>',\n  auth: {\n    username: '<APPLICATION_NAME>',\n    password: '<APPLICATION_PASS>'\n  },\n  concurrency: 10 // If rate-limiting desired\n});\n\ncrowd.instance; // Axios instance reference\ncrowd.queue; // pQueue instance reference\n</pre>\n<h3>Basic Usage Examples</h3>\n<pre class=\"prettyprint lang-js\">(async () => {\n\n  // Create a user \n  const params = {\n    active: true,\n    name: 'testuser',\n    password: 'testpassword',\n    firstName: 'tom',\n    lastName: 'jerry',\n    displayName: 'tom and jerry',\n    email: 'test@test.com'\n  };\n\n  const user = await crowd.user.add(params);\n\n  // Update a user\n  user.email = 'update@test.com';\n  await crowd.user.update(user);\n\n  // Add Group\n  const group = await crowd.group.add({ name: 'testgroup' });\n\n  // Add Group to User\n  await crowd.group.addUser({ name: group.name, username: user.name });\n\n  // Remove Group from User\n  await crowd.group.removeUser({ name: group.name, username: user.name });\n\n  // Returning all users with attributes\n  const users = await crowd.user.list();\n\n  // Add all users to group\n  await Promise.all(users.map( ({ name }) => crowd.user.addGroup({ name, groupname: group.name })));\n\n  // Returning users fitting some CQL restriction\n  const users2 = await crowd.user.search({ restriction: '<restriction>' });\n\n  // Returning list of all groups, just names\n  const groups = await crowd.group.list({ expand: false })\n\n  // Returning all group memberships as JSON\n  // Structured as { [groupname: string]: { users: string[], groups: string[] }}\n  const memberships = await crowd.getMemberships();\n\n})()\n</pre>\n<h4>Links</h4>\n<p>Source: <a href=\"https://github.com/JFenstermacher/crowd-ts\">crowd-ts</a>\nClient documentation: <a href=\"https://jfenstermacher.github.io/crowd-ts/\">crowd-ts</a></p>\n<h2>Acknowledgements</h2>\n<p>Takes inspiration from <a href=\"https://github.com/ghengeveld/atlassian-crowd-client\">atlassian-crowd-client</a> and <a href=\"https://github.com/MunifTanjim/node-bitbucket\">node-bitbucket</a>.</p>\n"
  },
  "template": {
    "withCompare": false
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2020-04-12T04:06:17.110Z",
    "url": "http://apidocjs.com",
    "version": "0.20.1"
  }
});
