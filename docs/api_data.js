define({ "api": [
  {
    "type": "GET",
    "url": "/config",
    "title": "config.get",
    "name": "config.get",
    "group": "Config",
    "description": "<p>Returns the cookie configuration for the application. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/config-getConfig>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const config = await crowd.config.get();",
        "type": "javascript"
      }
    ],
    "success": {
      "fields": {
        "Config Response": [
          {
            "group": "Config Response",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": ""
          },
          {
            "group": "Config Response",
            "type": "Boolean",
            "optional": false,
            "field": "secure",
            "description": ""
          },
          {
            "group": "Config Response",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/config/client.d.ts",
    "groupTitle": "Config"
  },
  {
    "type": "GET",
    "url": "/config",
    "title": "config.get",
    "name": "config.get",
    "group": "Config",
    "description": "<p>Returns the cookie configuration for the application. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/config-getConfig>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const config = await crowd.config.get();",
        "type": "javascript"
      }
    ],
    "success": {
      "fields": {
        "Config Response": [
          {
            "group": "Config Response",
            "type": "String",
            "optional": false,
            "field": "domain",
            "description": ""
          },
          {
            "group": "Config Response",
            "type": "Boolean",
            "optional": false,
            "field": "secure",
            "description": ""
          },
          {
            "group": "Config Response",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/config/client.ts",
    "groupTitle": "Config"
  },
  {
    "type": "POST",
    "url": "/group",
    "title": "group.create",
    "name": "group.create",
    "group": "Group",
    "description": "<p>Creates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.group.create(createGroupRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.active",
            "description": "<p>Whether group is active</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.description",
            "description": "<p>Group description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "createGroupRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  active: true,\n  description: 'some description',\n  expand: true\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "GroupResponseExample",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  active: false,\n  description: 'some description',\n  attributes: {}\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Group Response": [
          {
            "group": "Group Response",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Group Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Group Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.active",
            "description": "<p>Whether group is active</p>"
          },
          {
            "group": "Group Response",
            "type": "String",
            "optional": false,
            "field": "response.description",
            "description": "<p>Group description</p>"
          },
          {
            "group": "Group Response",
            "type": "Attributes",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Group attributes object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/group/client.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/group",
    "title": "group.create",
    "name": "group.create",
    "group": "Group",
    "description": "<p>Creates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.group.create(createGroupRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing properties below</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.name",
            "description": "<p>Group name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "createGroupRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  active: true,\n  description: 'some description',\n  expand: true\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group/client.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/group",
    "title": "group.create",
    "name": "group.create",
    "group": "Group",
    "description": "<p>Creates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.group.create(createGroupRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.active",
            "description": "<p>Whether group is active</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.description",
            "description": "<p>Group description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "createGroupRequest ",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  active: true,\n  description: 'some description',\n  expand: true\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "GroupResponseExample ",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  active: false,\n  description: 'some description',\n  attributes: {}\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Group Response": [
          {
            "group": "Group Response",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Group Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Group Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.active",
            "description": "<p>Whether group is active</p>"
          },
          {
            "group": "Group Response",
            "type": "String",
            "optional": false,
            "field": "response.description",
            "description": "<p>Group description</p>"
          },
          {
            "group": "Group Response",
            "type": "Attributes",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Group attributes object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/group/client.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/group",
    "title": "group.create",
    "name": "group.create",
    "group": "Group",
    "description": "<p>Creates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.group.create(createGroupRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing properties below</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.name",
            "description": "<p>Group name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "createGroupRequest ",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  active: true,\n  description: 'some description',\n  expand: true\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group/client.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/group",
    "title": "group.get",
    "name": "group.get",
    "group": "Group",
    "description": "<p>Retrieves group from Crowd. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.group.get(getGroupRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "getGroupRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  expand: true\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "false",
            "description": "<p>Expand attributes of group</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "GroupResponseExample",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  active: false,\n  description: 'some description',\n  attributes: { test: 'test' }\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Group Response": [
          {
            "group": "Group Response",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Group Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Group Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.active",
            "description": "<p>Whether group is active</p>"
          },
          {
            "group": "Group Response",
            "type": "String",
            "optional": false,
            "field": "response.description",
            "description": "<p>Group description</p>"
          },
          {
            "group": "Group Response",
            "type": "Attributes",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Group attributes object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/group/client.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/group",
    "title": "group.get",
    "name": "group.get",
    "group": "Group",
    "description": "<p>Retrieves group from Crowd. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.group.get(getGroupRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "getGroupRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  expand: true\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "false",
            "description": "<p>Expand attributes of group</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "GroupResponseExample ",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  active: false,\n  description: 'some description',\n  attributes: { test: 'test' }\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Group Response": [
          {
            "group": "Group Response",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Group Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Group name</p>"
          },
          {
            "group": "Group Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.active",
            "description": "<p>Whether group is active</p>"
          },
          {
            "group": "Group Response",
            "type": "String",
            "optional": false,
            "field": "response.description",
            "description": "<p>Group description</p>"
          },
          {
            "group": "Group Response",
            "type": "Attributes",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Group attributes object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/group/client.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/session",
    "title": "session.create",
    "name": "session.create",
    "group": "Session",
    "description": "<p>Allows you to create session token for user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-authenticateUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.session.create(createSessionRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "createSessionRequest",
          "content": "{\n  name: 'testuser',\n  password: 'testpassword',\n  validationFactors: {\n    remote_address: '127.0.0.1'\n  }\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "request.validationFactors",
            "description": "<p>Factors to validate application user against</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.validate",
            "description": "<p>Whether to validate user password</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.duration",
            "description": "<p>The duration in seconds that token is valid</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "false",
            "description": "<p>Expands user object in response</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SessionResponseExample",
          "content": "{\n  token: '<token_string>',\n  user: {\n    name: 'aemma',\n    active: true,\n    'first-name': 'Abigail',\n    'last-name': 'Emma',\n    'display-name': 'Abigail Emma',\n    email: 'aemma@test.com',\n    key: '<key_string>',\n    attributes: {},\n    'created-date': 1586223686277,\n    'updated-date': 1586482147883\n  },\n  'created-date': 1586475704136,\n  'expiry-date': 1586510947886\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Session Response": [
          {
            "group": "Session Response",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Session Response",
            "type": "String",
            "optional": false,
            "field": "response.token",
            "description": "<p>Token string</p>"
          },
          {
            "group": "Session Response",
            "type": "Number",
            "optional": false,
            "field": "response.created-date",
            "description": "<p>Token creation timestamp</p>"
          },
          {
            "group": "Session Response",
            "type": "Number",
            "optional": false,
            "field": "response.expiry-date",
            "description": "<p>Token expiration timestamp</p>"
          },
          {
            "group": "Session Response",
            "type": "User",
            "optional": false,
            "field": "response.user",
            "description": "<p>[Expandable] User object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/session/client.d.ts",
    "groupTitle": "Session"
  },
  {
    "type": "POST",
    "url": "/session",
    "title": "session.create",
    "name": "session.create",
    "group": "Session",
    "description": "<p>Allows you to create session token for user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-authenticateUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.session.create(createSessionRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "createSessionRequest",
          "content": "{\n  name: 'testuser',\n  password: 'testpassword',\n  validationFactors: {\n    remote_address: '127.0.0.1'\n  }\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "request.validationFactors",
            "description": "<p>Factors to validate application user against</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.validate",
            "description": "<p>Whether to validate user password</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.duration",
            "description": "<p>The duration in seconds that token is valid</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "false",
            "description": "<p>Expands user object in response</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SessionResponseExample",
          "content": "{\n  token: '<token_string>',\n  user: {\n    name: 'aemma',\n    active: true,\n    'first-name': 'Abigail',\n    'last-name': 'Emma',\n    'display-name': 'Abigail Emma',\n    email: 'aemma@test.com',\n    key: '<key_string>',\n    attributes: {},\n    'created-date': 1586223686277,\n    'updated-date': 1586482147883\n  },\n  'created-date': 1586475704136,\n  'expiry-date': 1586510947886\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Session Response": [
          {
            "group": "Session Response",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Session Response",
            "type": "String",
            "optional": false,
            "field": "response.token",
            "description": "<p>Token string</p>"
          },
          {
            "group": "Session Response",
            "type": "Number",
            "optional": false,
            "field": "response.created-date",
            "description": "<p>Token creation timestamp</p>"
          },
          {
            "group": "Session Response",
            "type": "Number",
            "optional": false,
            "field": "response.expiry-date",
            "description": "<p>Token expiration timestamp</p>"
          },
          {
            "group": "Session Response",
            "type": "User",
            "optional": false,
            "field": "response.user",
            "description": "<p>[Expandable] User object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/session/client.ts",
    "groupTitle": "Session"
  },
  {
    "type": "GET",
    "url": "/session/{token}",
    "title": "session.get",
    "name": "session.get",
    "group": "Session",
    "description": "<p>Gets a user session. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-getSession>[API DOCS]</a></p> <p>Return values listed with [Depends] are dependent on whether you include the expand attribute in request object</p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.session.get(getUserSessionRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "getUserSessionRequest",
          "content": "{\n  token: '<token_string>',\n  expand: true\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.token",
            "description": "<p>Token of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "false",
            "description": "<p>Expands user object</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SessionResponseExample",
          "content": "{\n  token: '<token_string>',\n  user: {\n    name: 'aemma',\n    active: true,\n    'first-name': 'Abigail',\n    'last-name': 'Emma',\n    'display-name': 'Abigail Emma',\n    email: 'aemma@test.com',\n    key: '<key_string>',\n    attributes: {}\n  },\n  'created-date': 1586475704136,\n  'expiry-date': 1586510947886\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Session Response": [
          {
            "group": "Session Response",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Session Response",
            "type": "String",
            "optional": false,
            "field": "response.token",
            "description": "<p>Token string</p>"
          },
          {
            "group": "Session Response",
            "type": "Number",
            "optional": false,
            "field": "response.created-date",
            "description": "<p>Token creation timestamp</p>"
          },
          {
            "group": "Session Response",
            "type": "Number",
            "optional": false,
            "field": "response.expiry-date",
            "description": "<p>Token expiration timestamp</p>"
          },
          {
            "group": "Session Response",
            "type": "User",
            "optional": false,
            "field": "response.user",
            "description": "<p>[Expandable] User object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/session/client.d.ts",
    "groupTitle": "Session"
  },
  {
    "type": "GET",
    "url": "/session/{token}",
    "title": "session.get",
    "name": "session.get",
    "group": "Session",
    "description": "<p>Gets a user session. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-getSession>[API DOCS]</a></p> <p>Return values listed with [Depends] are dependent on whether you include the expand attribute in request object</p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.session.get(getUserSessionRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "getUserSessionRequest ",
          "content": "{\n  token: '<token_string>',\n  expand: true\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.token",
            "description": "<p>Token of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "false",
            "description": "<p>Expands user object</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "SessionResponseExample",
          "content": "{\n  token: '<token_string>',\n  user: {\n    name: 'aemma',\n    active: true,\n    'first-name': 'Abigail',\n    'last-name': 'Emma',\n    'display-name': 'Abigail Emma',\n    email: 'aemma@test.com',\n    key: '<key_string>',\n    attributes: {}\n  },\n  'created-date': 1586475704136,\n  'expiry-date': 1586510947886\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Session Response": [
          {
            "group": "Session Response",
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Response object</p>"
          },
          {
            "group": "Session Response",
            "type": "String",
            "optional": false,
            "field": "response.token",
            "description": "<p>Token string</p>"
          },
          {
            "group": "Session Response",
            "type": "Number",
            "optional": false,
            "field": "response.created-date",
            "description": "<p>Token creation timestamp</p>"
          },
          {
            "group": "Session Response",
            "type": "Number",
            "optional": false,
            "field": "response.expiry-date",
            "description": "<p>Token expiration timestamp</p>"
          },
          {
            "group": "Session Response",
            "type": "User",
            "optional": false,
            "field": "response.user",
            "description": "<p>[Expandable] User object</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/session/client.ts",
    "groupTitle": "Session"
  },
  {
    "type": "DELETE",
    "url": "/session/{token}",
    "title": "session.remove",
    "name": "session.remove",
    "group": "Session",
    "description": "<p>Remove all a session token associated with user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-deleteTokensForUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.session.remove(removeAllTokenRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "removeAllTokensRequest",
          "content": "{\n  token: '<some_token_string>'\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.token",
            "description": "<p>Token string</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/session/client.d.ts",
    "groupTitle": "Session"
  },
  {
    "type": "DELETE",
    "url": "/session/{token}",
    "title": "session.remove",
    "name": "session.remove",
    "group": "Session",
    "description": "<p>Remove all a session token associated with user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-deleteTokensForUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.session.remove(removeAllTokenRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "removeAllTokensRequest",
          "content": "{\n  token: '<some_token_string>'\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.token",
            "description": "<p>Token string</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/session/client.ts",
    "groupTitle": "Session"
  },
  {
    "type": "DELETE",
    "url": "/session",
    "title": "session.removeAll",
    "name": "session.removeAll",
    "group": "Session",
    "description": "<p>Remove all session tokens associated with user, unless exclusion given. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-invalidateToken>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.session.removeAll(req)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Remove All Tokens Example",
          "content": "{\n  name: 'testuser'\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>[Required] Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.name",
            "description": "<p>[Required] Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.exclude",
            "description": "<p>Excluded token string</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/session/client.d.ts",
    "groupTitle": "Session"
  },
  {
    "type": "DELETE",
    "url": "/session",
    "title": "session.removeAll",
    "name": "session.removeAll",
    "group": "Session",
    "description": "<p>Remove all session tokens associated with user, unless exclusion given. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-invalidateToken>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.session.removeAll(req)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "Remove All Tokens Example",
          "content": "{\n  name: 'testuser'\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>[Required] Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.name",
            "description": "<p>[Required] Username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.exclude",
            "description": "<p>Excluded token string</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/session/client.ts",
    "groupTitle": "Session"
  },
  {
    "type": "POST",
    "url": "/session/{token}",
    "title": "session.validate",
    "name": "session.validate",
    "group": "Session",
    "description": "<p>Validates a user token. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-validateToken>[API DOCS]</a></p> <p><span style=\"color: red;\">NOTE: This method is not working currently</span></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.session.remove(validateSessionRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "validateSessionRequest",
          "content": "{\n  name: '<token_string>',\n  validationFactors: {\n    remote_address: '127.0.0.1'\n  }\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.token",
            "description": "<p>Token string</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "request.validationFactors",
            "description": "<p>Factors to validate user token against</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/session/client.d.ts",
    "groupTitle": "Session"
  },
  {
    "type": "POST",
    "url": "/session/{token}",
    "title": "session.validate",
    "name": "session.validate",
    "group": "Session",
    "description": "<p>Validates a user token. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/session-validateToken>[API DOCS]</a></p> <p><span style=\"color: red;\">NOTE: This method is not working currently</span></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.session.remove(validateSessionRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "validateSessionRequest",
          "content": "{\n  name: '<token_string>',\n  validationFactors: {\n    remote_address: '127.0.0.1'\n  }\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "request",
            "description": "<p>Object housing below properties</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.token",
            "description": "<p>Token string</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "request.validationFactors",
            "description": "<p>Factors to validate user token against</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/session/client.ts",
    "groupTitle": "Session"
  }
] });
