define({
  "name": "crowd-ts",
  "version": "1.0.0",
  "description": "Crowd typescript",
  "header": {
    "title": "Atlassian Crowd Typescript",
    "content": "<p>Promise-based typescript library to communicate with an Atlassian Crowd server with Node. This is a wrapper on <a href=\"https://https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/\">CROWD REST Apis</a>. Takes inspiration from <a href=\"https://github.com/ghengeveld/atlassian-crowd-client\">atlassian-crowd-client</a>.</p>\n<h2>Installation</h2>\n<p><code>npm install --save crowd-ts</code></p>\n<h2>Usage</h2>\n<pre class=\"prettyprint\">import { CrowdApplication } from 'crowd-ts';\n\n(async () => {\n  const crowd = new CrowdApplication({\n    baseURL: https://<SERVER>\n    auth: {\n      username: <APPLICATION_NAME>,\n      password: <APPLICATION_PASS>\n    },\n    concurrency: 10\n  })\n\n  // Create a user \n  const params = {\n    active: true,\n    name: 'testuser',\n    'first-name': 'tom',\n    'last-name': 'jerry',\n    'display-name': 'tom and jerry',\n    email: 'test@test.com'\n  };\n\n  const user = await crowd.user.add(params);\n\n  params.email = 'update@test.com' // Update a user\n  await crowd.user.update(user); //Update User\n\n  // Add Group\n  const group = await crowd.group.add({ name: 'testgroup' });\n\n  // Add Group to User\n  await crowd.group.addUser({ name: group.name, username: user.name });\n\n  // Remove Group from User\n  await crowd.group.removeUser({ name: group.name, username: user.name });\n\n  // Returning all users with attributes\n  const users = await crowd.user.list({ expand: true });\n\n  // Returning users fitting some CQL restriction\n  const users2 = await crowd.user.search({ restriction: '<restriction>' });\n\n  // Returning list of all groups\n  const groups = await crowd.group.list()\n\n  // Returning all group memberships as JSON\n  // Structured as { [groupname: string]: { users: string[], groups: string[] }}\n  const memberships = await crowd.getAllMemberships();\n\n})()\n</code></pre>\n"
  },
  "sampleUrl": false,
  "defaultVersion": "0.0.0",
  "apidoc": "0.3.0",
  "generator": {
    "name": "apidoc",
    "time": "2020-04-10T02:17:51.143Z",
    "url": "http://apidocjs.com",
    "version": "0.20.1"
  }
});