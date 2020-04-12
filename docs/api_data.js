define({ "api": [
  {
    "type": "GET",
    "url": "/config",
    "title": "config.get",
    "name": "config.get",
    "group": "Config",
    "description": "<p>Returns the cookie configuration for the application. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/cookie-getConfig>[API DOCS]</a></p>",
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
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object housing properties below</p>"
          },
          {
            "group": "Config Response",
            "type": "String",
            "optional": false,
            "field": "response.domain",
            "description": "<p>Domain of Crowd server</p>"
          },
          {
            "group": "Config Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.secure",
            "description": ""
          },
          {
            "group": "Config Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Cookie name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ConfigResponseExample",
          "content": "{\n  domain: '.atlassian.com' ,\n  secure: false,\n  name: 'dev_crowd.token_key'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/config.d.ts",
    "groupTitle": "Config"
  },
  {
    "type": "GET",
    "url": "/config",
    "title": "config.get",
    "name": "config.get",
    "group": "Config",
    "description": "<p>Returns the cookie configuration for the application. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/cookie-getConfig>[API DOCS]</a></p>",
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
            "type": "Object",
            "optional": false,
            "field": "response",
            "description": "<p>Object housing properties below</p>"
          },
          {
            "group": "Config Response",
            "type": "String",
            "optional": false,
            "field": "response.domain",
            "description": "<p>Domain of Crowd server</p>"
          },
          {
            "group": "Config Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.secure",
            "description": ""
          },
          {
            "group": "Config Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Cookie name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ConfigResponseExample",
          "content": "{\n  domain: '.atlassian.com' ,\n  secure: false,\n  name: 'dev_crowd.token_key'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/config.ts",
    "groupTitle": "Config"
  },
  {
    "type": "POST",
    "url": "/group",
    "title": "group.create",
    "name": "create",
    "group": "Group",
    "description": "<p>Creates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const group = await crowd.group.create(CreateGroupRequest)",
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
          "title": "CreateGroupRequest",
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
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/group",
    "title": "group.create",
    "name": "create",
    "group": "Group",
    "description": "<p>Creates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const group = await crowd.group.create(CreateGroupRequest)",
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
          "title": "CreateGroupRequest ",
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
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/group/child-group/direct",
    "title": "group.addChild",
    "name": "group.addChild",
    "group": "Group",
    "description": "<p>Adds a child group to a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addDirectChildGroupMembership>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.addChild(AddChildRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.childname",
            "description": "<p>Name of child group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AddChildRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  childname: 'hartebeest-cohort-95210146b41b9c375A'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/group/child-group/direct",
    "title": "group.addChild",
    "name": "group.addChild",
    "group": "Group",
    "description": "<p>Adds a child group to a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addDirectChildGroupMembership>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.addChild(AddChildRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.childname",
            "description": "<p>Name of child group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AddChildRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  childname: 'hartebeest-cohort-95210146b41b9c375A'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/group/parent-group/direct",
    "title": "group.addParent",
    "name": "group.addParent",
    "group": "Group",
    "description": "<p>Adds a parent group to a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addDirectParentGroupMembership>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.addParent(AddParentRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.parentname",
            "description": "<p>Name of child group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AddParentRequest",
          "content": "{\n  name: 'hartebeest-cohort-95210146b41b9c375A',\n  parentname: 'alpaca-squad-91c4418262ebb7559A'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/group/parent-group/direct",
    "title": "group.addParent",
    "name": "group.addParent",
    "group": "Group",
    "description": "<p>Adds a parent group to a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addDirectParentGroupMembership>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.addParent(AddParentRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.parentname",
            "description": "<p>Name of child group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AddParentRequest",
          "content": "{\n  name: 'hartebeest-cohort-95210146b41b9c375A',\n  parentname: 'alpaca-squad-91c4418262ebb7559A'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/group/user/direct",
    "title": "group.addUser",
    "name": "group.addUser",
    "group": "Group",
    "description": "<p>Adds a user to group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addUserAsDirectGroupMember>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.addUser(AddUserRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.username",
            "description": "<p>User name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AddUserRequest",
          "content": "{\n  name: 'hartebeest-cohort-95210146b41b9c375A',\n  username: 'aemma'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/group/user/direct",
    "title": "group.addUser",
    "name": "group.addUser",
    "group": "Group",
    "description": "<p>Adds a user to group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addUserAsDirectGroupMember>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.addUser(AddUserRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.username",
            "description": "<p>User name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AddUserRequest",
          "content": "{\n  name: 'hartebeest-cohort-95210146b41b9c375A',\n  username: 'aemma'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
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
        "content": "const group = await crowd.group.get(GetGroupRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "GetGroupRequest",
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
    "filename": "src/resources/group.d.ts",
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
        "content": "const group = await crowd.group.get(GetGroupRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "GetGroupRequest",
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
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/group/attribute",
    "title": "group.getAttributes",
    "name": "group.getAttributes",
    "group": "Group",
    "description": "<p>Gets a group's attributes. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getGroupAttributes>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const attributes = await crowd.group.getAttributes(GetAttributesRequest)",
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
          "title": "GetAttributesRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Attributes Response": [
          {
            "group": "Attributes Response",
            "type": "Attributes",
            "optional": false,
            "field": "response",
            "description": "<p>Attributes object in the form { [key: string]: string }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AttributesResponse",
          "content": "{\n  attr1: 'test1',\n  attr2: 'test2\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/group/attribute",
    "title": "group.getAttributes",
    "name": "group.getAttributes",
    "group": "Group",
    "description": "<p>Gets a group's attributes. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getGroupAttributes>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const attributes = await crowd.group.getAttributes(GetAttributesRequest)",
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
          "title": "GetAttributesRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Attributes Response": [
          {
            "group": "Attributes Response",
            "type": "Attributes",
            "optional": false,
            "field": "response",
            "description": "<p>Attributes object in the form { [key: string]: string }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AttributesResponse",
          "content": "{\n  attr1: 'test1',\n  attr2: 'test2\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/group/child-group/[direct|nested]",
    "title": "group.getChildren",
    "name": "group.getChildren",
    "group": "Group",
    "description": "<p>Gets the child groups of a group. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getDirectChildrenOfGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const groups = await crowd.group.getChildren(GetChildrenRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "description": "<p>Expand groups</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.nested",
            "defaultValue": "false",
            "description": "<p>Bring back nested groups, brings back direct by default</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.maxResults",
            "defaultValue": "groups.length",
            "description": "<p>Limits the max results brought back</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.startIndex",
            "defaultValue": "0",
            "description": "<p>Starting index of query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GetChildrenRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  expand: true,\n  nested: true\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Groups Response": [
          {
            "group": "Groups Response",
            "type": "Groups[]",
            "optional": false,
            "field": "Returns",
            "description": "<p>a list of groups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GroupsResponse",
          "content": "[\n  {\n    name: 'hartebeest-cohort-95210146b41b9c375A',\n    active: true,\n    attributes: {}\n  },\n  {\n    name: 'koala-team-c29b0dd79bc188fbcA',\n    active: true,\n    attributes: {}\n  }\n]",
          "type": "Object[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/group/child-group/[direct|nested]",
    "title": "group.getChildren",
    "name": "group.getChildren",
    "group": "Group",
    "description": "<p>Gets the child groups of a group. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getDirectChildrenOfGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const groups = await crowd.group.getChildren(GetChildrenRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "description": "<p>Expand groups</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.nested",
            "defaultValue": "false",
            "description": "<p>Bring back nested groups, brings back direct by default</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.maxResults",
            "defaultValue": "groups.length",
            "description": "<p>Limits the max results brought back</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.startIndex",
            "defaultValue": "0",
            "description": "<p>Starting index of query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GetChildrenRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  expand: true,\n  nested: true\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Groups Response": [
          {
            "group": "Groups Response",
            "type": "Groups[]",
            "optional": false,
            "field": "Returns",
            "description": "<p>a list of groups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GroupsResponse",
          "content": "[\n  {\n    name: 'hartebeest-cohort-95210146b41b9c375A',\n    active: true,\n    attributes: {}\n  },\n  {\n    name: 'koala-team-c29b0dd79bc188fbcA',\n    active: true,\n    attributes: {}\n  }\n]",
          "type": "Object[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/group/membership",
    "title": "group.getMemberships",
    "name": "group.getMemberships",
    "group": "Group",
    "description": "<p>Gets all group memberships. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeDirectGroupMembership>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const memberships = await crowd.group.getMemberships()",
        "type": "javascript"
      }
    ],
    "success": {
      "fields": {
        "Memberships Response": [
          {
            "group": "Memberships Response",
            "type": "Memberships",
            "optional": false,
            "field": "Returns",
            "description": "<p>memberships in form { [groupname: string]: { users: string[], groups: string[] } }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MembershipResponse",
          "content": "{\n  'alpaca-squad-91c4418262ebb7559A': {\n    users: [\n      'aemma'\n    ],\n    groups: [\n      'hartebeest-cohort-95210146b41b9c375A',\n      'koala-team-c29b0dd79bc188fbcA',\n    ]\n  },\n  'gnu-cohort-6fc32ad92454394faA': {\n    users: [],\n    groups: [\n      'alpaca-squad-91c4418262ebb7559A'\n    ]\n  }\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/group/membership",
    "title": "group.getMemberships",
    "name": "group.getMemberships",
    "group": "Group",
    "description": "<p>Gets all group memberships. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeDirectGroupMembership>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const memberships = await crowd.group.getMemberships()",
        "type": "javascript"
      }
    ],
    "success": {
      "fields": {
        "Memberships Response": [
          {
            "group": "Memberships Response",
            "type": "Memberships",
            "optional": false,
            "field": "Returns",
            "description": "<p>memberships in form { [groupname: string]: { users: string[], groups: string[] } }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "MembershipResponse ",
          "content": "{ \n  'alpaca-squad-91c4418262ebb7559A': {\n    users: [\n      'aemma'\n    ],\n    groups: [\n      'hartebeest-cohort-95210146b41b9c375A',\n      'koala-team-c29b0dd79bc188fbcA',\n    ]\n  },\n  'gnu-cohort-6fc32ad92454394faA': { \n    users: [],\n    groups: [ \n      'alpaca-squad-91c4418262ebb7559A'\n    ]\n  }\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/group/parent-group/[direct|nested]",
    "title": "group.getParents",
    "name": "group.getParents",
    "group": "Group",
    "description": "<p>Gets the parent groups of a group. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getDirectParentsOfGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const groups = await crowd.group.getParents(GetParentsRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "description": "<p>Expand groups</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.nested",
            "defaultValue": "false",
            "description": "<p>Bring back nested groups, brings back direct by default</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.maxResults",
            "defaultValue": "groups.length",
            "description": "<p>Limits the max results brought back</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.startIndex",
            "defaultValue": "0",
            "description": "<p>Starting index of query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GetParentsRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  expand: true,\n  nested: true\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Groups Response": [
          {
            "group": "Groups Response",
            "type": "Groups[]",
            "optional": false,
            "field": "Returns",
            "description": "<p>a list of groups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GroupsResponse",
          "content": "[\n  {\n    name: 'whale-cohort-8208b9e1cd22b2f7aA',\n    active: true,\n    attributes: {}\n  },\n  {\n    name: 'skunk-squad-1bab57c561676580fA',\n    active: true,\n    attributes: {}\n  }\n]",
          "type": "Object[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/group/parent-group/[direct|nested]",
    "title": "group.getParents",
    "name": "group.getParents",
    "group": "Group",
    "description": "<p>Gets the parent groups of a group. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getDirectParentsOfGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const groups = await crowd.group.getParents(GetParentsRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "description": "<p>Expand groups</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.nested",
            "defaultValue": "false",
            "description": "<p>Bring back nested groups, brings back direct by default</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.maxResults",
            "defaultValue": "groups.length",
            "description": "<p>Limits the max results brought back</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.startIndex",
            "defaultValue": "0",
            "description": "<p>Starting index of query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GetParentsRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  expand: true,\n  nested: true\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Groups Response": [
          {
            "group": "Groups Response",
            "type": "Groups[]",
            "optional": false,
            "field": "Returns",
            "description": "<p>a list of groups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GroupsResponse",
          "content": "[\n  {\n    name: 'whale-cohort-8208b9e1cd22b2f7aA',\n    active: true,\n    attributes: {}\n  },\n  {\n    name: 'skunk-squad-1bab57c561676580fA',\n    active: true,\n    attributes: {}\n  }\n]",
          "type": "Object[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/group/user/[direct|nested]",
    "title": "group.getUsers",
    "name": "group.getUsers",
    "group": "Group",
    "description": "<p>Gets group users. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getDirectMembersOfGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const users = await crowd.group.getUsers(GetUsersRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.username",
            "description": "<p>Returns specific user if exists</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "description": "<p>Expand users</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.nested",
            "defaultValue": "false",
            "description": "<p>Bring back nested users, brings back direct by default</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.maxResults",
            "defaultValue": "groups.length",
            "description": "<p>Limits the max results brought back</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.startIndex",
            "defaultValue": "0",
            "description": "<p>Starting index of query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GetUsersRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  expand: true,\n  nested: true\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Users Response": [
          {
            "group": "Users Response",
            "type": "User|User[]",
            "optional": false,
            "field": "Returns",
            "description": "<p>either a user or list of users, depends on if username was passed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{Object|Object[]} GroupsResponse",
          "content": "[\n   {\n     name: 'aemma',\n     active: true,\n     'first-name': 'Abigail',\n     'last-name': 'Emma',\n     'display-name': 'Abigail Emma',\n     email: 'aemma@test.com',\n     key: '<key>',\n     attributes: {},\n     'created-date': 1586223686277,\n     'updated-date': 1586482147883\n   },\n   {\n     name: 'ajacob',\n     active: true,\n     'first-name': 'Alexander',\n     'last-name': 'Jacob',\n     'display-name': 'Alexander Jacob',\n     email: 'ajacob@test.com',\n     key: '<key>',\n     attributes: {},\n     'created-date': 1586132987812,\n     'updated-date': 1586132987812\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/group/user/[direct|nested]",
    "title": "group.getUsers",
    "name": "group.getUsers",
    "group": "Group",
    "description": "<p>Gets group users. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-getDirectMembersOfGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const users = await crowd.group.getUsers(GetUsersRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.username",
            "description": "<p>Returns specific user if exists</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "description": "<p>Expand users</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.nested",
            "defaultValue": "false",
            "description": "<p>Bring back nested users, brings back direct by default</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.maxResults",
            "defaultValue": "groups.length",
            "description": "<p>Limits the max results brought back</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.startIndex",
            "defaultValue": "0",
            "description": "<p>Starting index of query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GetUsersRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  expand: true,\n  nested: true\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Users Response": [
          {
            "group": "Users Response",
            "type": "User|User[]",
            "optional": false,
            "field": "Returns",
            "description": "<p>either a user or list of users, depends on if username was passed</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "{Object|Object[]} GroupsResponse",
          "content": "[  \n   {\n     name: 'aemma',\n     active: true,\n     'first-name': 'Abigail',\n     'last-name': 'Emma',\n     'display-name': 'Abigail Emma',\n     email: 'aemma@test.com',\n     key: '<key>',\n     attributes: {},\n     'created-date': 1586223686277,\n     'updated-date': 1586482147883\n   },\n   {\n     name: 'ajacob',\n     active: true,\n     'first-name': 'Alexander',\n     'last-name': 'Jacob',\n     'display-name': 'Alexander Jacob',\n     email: 'ajacob@test.com',\n     key: '<key>',\n     attributes: {},\n     'created-date': 1586132987812,\n     'updated-date': 1586132987812\n   }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/search",
    "title": "group.list",
    "name": "group.list",
    "group": "Group",
    "description": "<p>Search alias. List all groups, full expansion by default. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/search-searchByCql>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const groups = await crowd.group.list()",
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
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "true",
            "description": "<p>Expand groups</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Groups Response": [
          {
            "group": "Groups Response",
            "type": "Group[]",
            "optional": false,
            "field": "response",
            "description": "<p>Returns a list of groups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GroupsResponse",
          "content": "[\n  {\n    name: 'alpaca-squad-91c4418262ebb7559A',\n    active: false,\n    description: 'some description',\n    attributes: { test: 'test' }\n  },\n  {\n    name: 'gnu-cohort-6fc32ad92454394faA',\n    active: true,\n    attributes: {}\n  }\n]",
          "type": "Group[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/search",
    "title": "group.list",
    "name": "group.list",
    "group": "Group",
    "description": "<p>Search alias. List all groups, full expansion by default. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/search-searchByCql>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const groups = await crowd.group.list()",
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
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "true",
            "description": "<p>Expand groups</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Groups Response": [
          {
            "group": "Groups Response",
            "type": "Group[]",
            "optional": false,
            "field": "response",
            "description": "<p>Returns a list of groups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GroupsResponse ",
          "content": "[\n  {\n    name: 'alpaca-squad-91c4418262ebb7559A',\n    active: false,\n    description: 'some description',\n    attributes: { test: 'test' }\n  },\n  {\n    name: 'gnu-cohort-6fc32ad92454394faA',\n    active: true,\n    attributes: {}\n  }\n]",
          "type": "Group[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "DELETE",
    "url": "/group",
    "title": "group.remove",
    "name": "group.remove",
    "group": "Group",
    "description": "<p>Removes a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.remove(RemoveGroupRequest)",
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
          "title": "RemoveGroupRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "DELETE",
    "url": "/group",
    "title": "group.remove",
    "name": "group.remove",
    "group": "Group",
    "description": "<p>Removes a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.remove(RemoveGroupRequest)",
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
          "title": "RemoveGroupRequest ",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "DELETE",
    "url": "/group/attribute",
    "title": "group.removeAttribute",
    "name": "group.removeAttribute",
    "group": "Group",
    "description": "<p>Remove a group attribute. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-deleteGroupAttribute>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.removeAttribute(RemoveAttributeRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.attribute",
            "description": "<p>Attribute to remove</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RemoveAttributeRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  attribute: 'attr1'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "DELETE",
    "url": "/group/attribute",
    "title": "group.removeAttribute",
    "name": "group.removeAttribute",
    "group": "Group",
    "description": "<p>Remove a group attribute. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-deleteGroupAttribute>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.removeAttribute(RemoveAttributeRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.attribute",
            "description": "<p>Attribute to remove</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RemoveAttributeRequest ",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  attribute: 'attr1'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "DELETE",
    "url": "/group/child-group/direct",
    "title": "group.removeChild",
    "name": "group.removeChild",
    "group": "Group",
    "description": "<p>Removes a child group from a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeDirectChildGroupMembership>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.removeChild(RemoveChildRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.childname",
            "description": "<p>Name of child group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RemoveChildRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  childname: 'hartebeest-cohort-95210146b41b9c375A'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "DELETE",
    "url": "/group/child-group/direct",
    "title": "group.removeChild",
    "name": "group.removeChild",
    "group": "Group",
    "description": "<p>Removes a child group from a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeDirectChildGroupMembership>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.removeChild(RemoveChildRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.childname",
            "description": "<p>Name of child group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RemoveChildRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  childname: 'hartebeest-cohort-95210146b41b9c375A'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "DELETE",
    "url": "/group/user/direct",
    "title": "group.removeUser",
    "name": "group.removeUser",
    "group": "Group",
    "description": "<p>Remove user from group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeDirectGroupMembership>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.removeUser(RemoveUserRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.username",
            "description": "<p>User name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RemoveUserRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  username: 'aemma'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "DELETE",
    "url": "/group/user/direct",
    "title": "group.removeUser",
    "name": "group.removeUser",
    "group": "Group",
    "description": "<p>Remove user from group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeDirectGroupMembership>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.removeUser(RemoveUserRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.username",
            "description": "<p>User name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RemoveUserRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  username: 'aemma'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/search",
    "title": "group.search",
    "name": "group.search",
    "group": "Group",
    "description": "<p>Search for groups based on CQL expression. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/search-searchByCql>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const groups = await crowd.group.search(SearchRequest)",
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
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "description": "<p>Expand groups</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.restriction",
            "description": "<p>CQL restriction expression</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.maxResults",
            "defaultValue": "groups.length",
            "description": "<p>Limits the max results brought back</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.startIndex",
            "defaultValue": "0",
            "description": "<p>Starting index of query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SearchRequest",
          "content": "{\n  restriction: 'active=false',\n  expand: true,\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Groups Response": [
          {
            "group": "Groups Response",
            "type": "Group[]",
            "optional": false,
            "field": "Returns",
            "description": "<p>a list of groups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GroupsResponse",
          "content": "[\n  {\n    name: 'alpaca-squad-91c4418262ebb7559A',\n    active: false,\n    description: 'some description',\n    attributes: { test: 'test' }\n  },\n  {\n    name: 'gnu-cohort-6fc32ad92454394faA',\n    active: false,\n    attributes: {}\n  }\n]",
          "type": "Object[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "GET",
    "url": "/search",
    "title": "group.search",
    "name": "group.search",
    "group": "Group",
    "description": "<p>Search for groups based on CQL expression. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/search-searchByCql>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const groups = await crowd.group.search(SearchRequest)",
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
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "description": "<p>Expand groups</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.restriction",
            "description": "<p>CQL restriction expression</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.maxResults",
            "defaultValue": "groups.length",
            "description": "<p>Limits the max results brought back</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.startIndex",
            "defaultValue": "0",
            "description": "<p>Starting index of query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SearchRequest",
          "content": "{\n  restriction: 'active=false',\n  expand: true,\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Groups Response": [
          {
            "group": "Groups Response",
            "type": "Group[]",
            "optional": false,
            "field": "Returns",
            "description": "<p>a list of groups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GroupsResponse",
          "content": "[\n  {\n    name: 'alpaca-squad-91c4418262ebb7559A',\n    active: false,\n    description: 'some description',\n    attributes: { test: 'test' }\n  },\n  {\n    name: 'gnu-cohort-6fc32ad92454394faA',\n    active: false,\n    attributes: {}\n  }\n]",
          "type": "Object[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/group/attribute",
    "title": "group.setAttributes",
    "name": "group.setAttributes",
    "group": "Group",
    "description": "<p>Sets a group's attributes. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-storeGroupAttributes>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.setAttributes(SetAttributesRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "Attributes",
            "optional": false,
            "field": "request.attributes",
            "description": "<p>Object of type { [key: string]: string }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SetAttributesRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  attributes: {\n    attr1: 'test1',\n    attr2: 'test2'\n  }\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "POST",
    "url": "/group/attribute",
    "title": "group.setAttributes",
    "name": "group.setAttributes",
    "group": "Group",
    "description": "<p>Sets a group's attributes. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-storeGroupAttributes>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.group.setAttributes(SetAttributesRequest)",
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
          },
          {
            "group": "Parameter",
            "type": "Attributes",
            "optional": false,
            "field": "request.attributes",
            "description": "<p>Object of type { [key: string]: string }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SetAttributesRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  attributes: {\n    attr1: 'test1',\n    attr2: 'test2' \n  }\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group.ts",
    "groupTitle": "Group"
  },
  {
    "type": "PUT",
    "url": "/group",
    "title": "group.update",
    "name": "group.update",
    "group": "Group",
    "description": "<p>Updates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-updateGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const group = await crowd.group.create(UpdateGroupRequest)",
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
          "title": "UpdateGroupRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  active: true,\n  description: 'some description',\n}",
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
    "filename": "src/resources/group.d.ts",
    "groupTitle": "Group"
  },
  {
    "type": "PUT",
    "url": "/group",
    "title": "group.update",
    "name": "group.update",
    "group": "Group",
    "description": "<p>Updates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-updateGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const group = await crowd.group.create(UpdateGroupRequest)",
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
          "title": "UpdateGroupRequest ",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n  active: true,\n  description: 'some description',\n}",
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
    "filename": "src/resources/group.ts",
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
        "content": "const session = await crowd.session.create(CreateSessionRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "CreateSessionRequest",
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
          "content": "{\n  token: '<token_string>',\n  user: {\n    name: 'aemma',\n    active: true,\n    firstName: 'Abigail',\n    lastName: 'Emma',\n    displayName: 'Abigail Emma',\n    email: 'aemma@test.com',\n    key: '<key_string>',\n    attributes: {},\n    createdDate: 1586223686277,\n    updatedDate: 1586482147883\n  },\n  'created-date': 1586475704136,\n  'expiry-date': 1586510947886\n}",
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
    "filename": "src/resources/session.d.ts",
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
        "content": "const session = await crowd.session.create(CreateSessionRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "CreateSessionRequest",
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
          "content": "{\n  token: '<token_string>',\n  user: {\n    name: 'aemma',\n    active: true,\n    firstName: 'Abigail',\n    lastName: 'Emma',\n    displayName: 'Abigail Emma',\n    email: 'aemma@test.com',\n    key: '<key_string>',\n    attributes: {},\n    createdDate: 1586223686277,\n    updatedDate: 1586482147883\n  },\n  'created-date': 1586475704136,\n  'expiry-date': 1586510947886\n}",
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
    "filename": "src/resources/session.ts",
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
        "content": "const session = await crowd.session.get(GetUserSessionRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "GetUserSessionRequest",
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
          "content": "{\n  token: '<token_string>',\n  user: {\n    name: 'aemma',\n    active: true,\n    firstName: 'Abigail',\n    lastName: 'Emma',\n    displayName: 'Abigail Emma',\n    email: 'aemma@test.com',\n    key: '<key_string>',\n    attributes: {}\n  },\n  createdDate: 1586475704136,\n  expiryDate: 1586510947886\n}",
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
    "filename": "src/resources/session.d.ts",
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
        "content": "const session = await crowd.session.get(GetUserSessionRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "GetUserSessionRequest ",
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
          "content": "{\n  token: '<token_string>',\n  user: {\n    name: 'aemma',\n    active: true,\n    firstName: 'Abigail',\n    lastName: 'Emma',\n    displayName: 'Abigail Emma',\n    email: 'aemma@test.com',\n    key: '<key_string>',\n    attributes: {}\n  },\n  createdDate: 1586475704136,\n  expiryDate: 1586510947886\n}",
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
    "filename": "src/resources/session.ts",
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
        "content": "const session = await crowd.session.remove(RemoveTokenRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "RemoveTokenRequest",
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
    "filename": "src/resources/session.d.ts",
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
        "content": "const session = await crowd.session.remove(RemoveTokenRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "RemoveTokenRequest",
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
    "filename": "src/resources/session.ts",
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
        "content": "const session = await crowd.session.removeAll(RemoveAlTokenRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "RemoveAllTokensRequest",
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
    "filename": "src/resources/session.d.ts",
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
        "content": "const session = await crowd.session.removeAll(RemoveAlTokenRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "RemoveAllTokensRequest",
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
    "filename": "src/resources/session.ts",
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
        "content": "const session = await crowd.session.remove(ValidateSessionRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "ValidateSessionRequest",
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
    "filename": "src/resources/session.d.ts",
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
        "content": "const session = await crowd.session.remove(ValidateSessionRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "ValidateSessionRequest",
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
    "filename": "src/resources/session.ts",
    "groupTitle": "Session"
  },
  {
    "type": "POST",
    "url": "/user/group/direct",
    "title": "user.addGroup",
    "name": "user.addGroup",
    "group": "User",
    "description": "<p>Adds a user to group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addUserToGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.addGroup(AddGroupRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.groupname",
            "description": "<p>Group name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AddGroupRequest",
          "content": "{\n  name: 'aemma',\n  groupname: 'hartebeest-cohort-95210146b41b9c375A'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/group/direct",
    "title": "user.addGroup",
    "name": "user.addGroup",
    "group": "User",
    "description": "<p>Adds a user to group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addUserToGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.addGroup(AddGroupRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.groupname",
            "description": "<p>Group name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AddGroupRequest",
          "content": "{\n  name: 'aemma',\n  groupname: 'hartebeest-cohort-95210146b41b9c375A'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/authentication",
    "title": "user.authenticate",
    "name": "user.authenticate",
    "group": "User",
    "description": "<p>Authenticates a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/authentication-authenticateUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const user = await crowd.user.authenticate(AuthenticationRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AuthenticationRequest",
          "content": "{\n  name: 'aemma',\n  password: '<password>'\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "UserResponseExample",
          "content": "{\n  name: 'aemma',\n  active: true,\n  firstName: 'Abigail',\n  lastName: 'Emma',\n  displayName: 'Abigail Emma',\n  email: 'aemma@test.com',\n  key: '<key>',\n  attributes: {\n    invalidPasswordAttempts: '0',\n    lastActive: '1586482147886',\n    lastAuthenticated: '1586482147882',\n    passwordLastChanged: '1586223686282',\n    requiresPasswordChange: 'false'\n  },\n  createdDate: 1586223686277,\n  updatedDate: 1586482147883\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "User Response": [
          {
            "group": "User Response",
            "type": "User",
            "optional": false,
            "field": "response",
            "description": "<p>Object that houses below properties</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Username</p>"
          },
          {
            "group": "User Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.active",
            "description": "<p>Whether user is active</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.lastName",
            "description": "<p>User last name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.displayName",
            "description": "<p>User display name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.key",
            "description": "<p>User key</p>"
          },
          {
            "group": "User Response",
            "type": "Attributes",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Attributes object, may be empty</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/authentication",
    "title": "user.authenticate",
    "name": "user.authenticate",
    "group": "User",
    "description": "<p>Authenticates a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/authentication-authenticateUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const user = await crowd.user.authenticate(AuthenticationRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.password",
            "description": "<p>User password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AuthenticationRequest",
          "content": "{\n  name: 'aemma',\n  password: '<password>'\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "UserResponseExample ",
          "content": "{\n  name: 'aemma',\n  active: true,\n  firstName: 'Abigail',\n  lastName: 'Emma',\n  displayName: 'Abigail Emma',\n  email: 'aemma@test.com',\n  key: '<key>',\n  attributes: {\n    invalidPasswordAttempts: '0',\n    lastActive: '1586482147886',\n    lastAuthenticated: '1586482147882',\n    passwordLastChanged: '1586223686282',\n    requiresPasswordChange: 'false'\n  },\n  createdDate: 1586223686277,\n  updatedDate: 1586482147883\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "User Response": [
          {
            "group": "User Response",
            "type": "User",
            "optional": false,
            "field": "response",
            "description": "<p>Object that houses below properties</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Username</p>"
          },
          {
            "group": "User Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.active",
            "description": "<p>Whether user is active</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.lastName",
            "description": "<p>User last name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.displayName",
            "description": "<p>User display name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.key",
            "description": "<p>User key</p>"
          },
          {
            "group": "User Response",
            "type": "Attributes",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Attributes object, may be empty</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user",
    "title": "user.create",
    "name": "user.create",
    "group": "User",
    "description": "<p>Creates a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-addUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const user = await crowd.user.create(CreateUserRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "CreateUserRequest",
          "content": "{\n  active: true,\n  name: 'emason-d42445',\n  password: '<password>',\n  firstName: 'Emma',\n  lastName: 'Mason',\n  displayName: 'Emma Mason',\n  email: 'emason-d42445@test.com'\n}",
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
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "false",
            "description": "<p>Expand attributes of user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "UserResponseExample",
          "content": "{\n  name: 'emason-d42445',\n  active: true,\n  firstName: 'Emma',\n  lastName: 'Mason',\n  displayName: 'Emma Mason',\n  email: 'emason-d42445@test.com',\n  key: '<key>',\n  attributes: {\n    invalidPasswordAttempts: '0',\n    passwordLastChanged: '1586619725091',\n    requiresPasswordChange: 'false'\n  },\n  createdDate: 1586619725088,\n  updatedDate: 1586619725088\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "User Response": [
          {
            "group": "User Response",
            "type": "User",
            "optional": false,
            "field": "response",
            "description": "<p>Object that houses below properties</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Username</p>"
          },
          {
            "group": "User Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.active",
            "description": "<p>Whether user is active</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.lastName",
            "description": "<p>User last name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.displayName",
            "description": "<p>User display name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.key",
            "description": "<p>User key</p>"
          },
          {
            "group": "User Response",
            "type": "Attributes",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Attributes object, may be empty</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user",
    "title": "user.create",
    "name": "user.create",
    "group": "User",
    "description": "<p>Creates a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-addUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const user = await crowd.user.create(CreateUserRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "CreateUserRequest",
          "content": "{\n  active: true,\n  name: 'emason-d42445',\n  password: '<password>',\n  firstName: 'Emma',\n  lastName: 'Mason',\n  displayName: 'Emma Mason',\n  email: 'emason-d42445@test.com'\n}",
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
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "false",
            "description": "<p>Expand attributes of user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "UserResponseExample ",
          "content": "{\n  name: 'emason-d42445',\n  active: true,\n  firstName: 'Emma',\n  lastName: 'Mason',\n  displayName: 'Emma Mason',\n  email: 'emason-d42445@test.com',\n  key: '<key>',\n  attributes: {\n    invalidPasswordAttempts: '0',\n    passwordLastChanged: '1586619725091',\n    requiresPasswordChange: 'false'\n  },\n  createdDate: 1586619725088,\n  updatedDate: 1586619725088\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "User Response": [
          {
            "group": "User Response",
            "type": "User",
            "optional": false,
            "field": "response",
            "description": "<p>Object that houses below properties</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Username</p>"
          },
          {
            "group": "User Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.active",
            "description": "<p>Whether user is active</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.lastName",
            "description": "<p>User last name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.displayName",
            "description": "<p>User display name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.key",
            "description": "<p>User key</p>"
          },
          {
            "group": "User Response",
            "type": "Attributes",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Attributes object, may be empty</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user",
    "title": "user.get",
    "name": "user.get",
    "group": "User",
    "description": "<p>Retrieves user from Crowd. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-getUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const user = await crowd.user.get(GetUserRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "GetUserRequest",
          "content": "{\n  name: 'aemma',\n  expand: true\n}",
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
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "false",
            "description": "<p>Expand attributes of user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "UserResponseExample",
          "content": "{\n  name: 'aemma',\n  active: true,\n  firstName: 'Abigail',\n  lastName: 'Emma',\n  displayName: 'Abigail Emma',\n  email: 'aemma@test.com',\n  key: '<key>',\n  attributes: {\n    invalidPasswordAttempts: '0',\n    lastActive: '1586482147886',\n    lastAuthenticated: '1586482147882',\n    passwordLastChanged: '1586223686282',\n    requiresPasswordChange: 'false'\n  },\n  createdDate: 1586223686277,\n  updatedDate: 1586482147883\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "User Response": [
          {
            "group": "User Response",
            "type": "User",
            "optional": false,
            "field": "response",
            "description": "<p>Object that houses below properties</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Username</p>"
          },
          {
            "group": "User Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.active",
            "description": "<p>Whether user is active</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.lastName",
            "description": "<p>User last name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.displayName",
            "description": "<p>User display name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.key",
            "description": "<p>User key</p>"
          },
          {
            "group": "User Response",
            "type": "Attributes",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Attributes object, may be empty</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user",
    "title": "user.get",
    "name": "user.get",
    "group": "User",
    "description": "<p>Retrieves user from Crowd. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-getUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const user = await crowd.user.get(GetUserRequest)",
        "type": "javascript"
      }
    ],
    "parameter": {
      "examples": [
        {
          "title": "GetUserRequest",
          "content": "{\n  name: 'aemma',\n  expand: true\n}",
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
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "false",
            "description": "<p>Expand attributes of user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "UserResponseExample ",
          "content": "{\n  name: 'aemma',\n  active: true,\n  firstName: 'Abigail',\n  lastName: 'Emma',\n  displayName: 'Abigail Emma',\n  email: 'aemma@test.com',\n  key: '<key>',\n  attributes: {\n    invalidPasswordAttempts: '0',\n    lastActive: '1586482147886',\n    lastAuthenticated: '1586482147882',\n    passwordLastChanged: '1586223686282',\n    requiresPasswordChange: 'false'\n  },\n  createdDate: 1586223686277,\n  updatedDate: 1586482147883\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "User Response": [
          {
            "group": "User Response",
            "type": "User",
            "optional": false,
            "field": "response",
            "description": "<p>Object that houses below properties</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Username</p>"
          },
          {
            "group": "User Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.active",
            "description": "<p>Whether user is active</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.lastName",
            "description": "<p>User last name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.displayName",
            "description": "<p>User display name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.key",
            "description": "<p>User key</p>"
          },
          {
            "group": "User Response",
            "type": "Attributes",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Attributes object, may be empty</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/attribute",
    "title": "user.getAttributes",
    "name": "user.getAttributes",
    "group": "User",
    "description": "<p>Gets a user's attributes. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-getUserAttributes>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const attributes = await crowd.user.getAttributes(GetAttributesRequest)",
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
            "description": "<p>User name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GetAttributesRequest",
          "content": "{\n  name: 'aemma',\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Attributes Response": [
          {
            "group": "Attributes Response",
            "type": "Attributes",
            "optional": false,
            "field": "response",
            "description": "<p>Attributes object in the form { [key: string]: string }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AttributesResponse",
          "content": "{\n  attr1: 'test1',\n  attr2: 'test2\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/attribute",
    "title": "user.getAttributes",
    "name": "user.getAttributes",
    "group": "User",
    "description": "<p>Gets a user's attributes. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-getUserAttributes>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const attributes = await crowd.user.getAttributes(GetAttributesRequest)",
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
            "description": "<p>User name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GetAttributesRequest",
          "content": "{\n  name: 'aemma',\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Attributes Response": [
          {
            "group": "Attributes Response",
            "type": "Attributes",
            "optional": false,
            "field": "response",
            "description": "<p>Attributes object in the form { [key: string]: string }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AttributesResponse",
          "content": "{\n  attr1: 'test1',\n  attr2: 'test2\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/group/[direct|nested]",
    "title": "user.getGroups",
    "name": "user.getGroups",
    "group": "User",
    "description": "<p>Gets user's groups. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-getDirectGroups>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const users = await crowd.user.getGroups(GetGroupsRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "false",
            "description": "<p>Expand groups</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.nested",
            "defaultValue": "false",
            "description": "<p>Bring back nested groups, brings back direct by default</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.maxResults",
            "defaultValue": "groups.length",
            "description": "<p>Limits the max results brought back</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.startIndex",
            "defaultValue": "0",
            "description": "<p>Starting index of query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GetGroupsRequest",
          "content": "{\n  name: 'aemma',\n  expand: true,\n  nested: true\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Users Response": [
          {
            "group": "Users Response",
            "type": "Groups[]",
            "optional": false,
            "field": "Returns",
            "description": "<p>a list of groups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GroupsResponse",
          "content": "[\n  {\n    name: 'hartebeest-cohort-95210146b41b9c375A',\n    active: true,\n    attributes: {}\n  },\n  {\n    name: 'koala-team-c29b0dd79bc188fbcA',\n    active: true,\n    attributes: {}\n  }\n]",
          "type": "Object[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/user/group/[direct|nested]",
    "title": "user.getGroups",
    "name": "user.getGroups",
    "group": "User",
    "description": "<p>Gets user's groups. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-getDirectGroups>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const users = await crowd.user.getGroups(GetGroupsRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "false",
            "description": "<p>Expand groups</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.nested",
            "defaultValue": "false",
            "description": "<p>Bring back nested groups, brings back direct by default</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.maxResults",
            "defaultValue": "groups.length",
            "description": "<p>Limits the max results brought back</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.startIndex",
            "defaultValue": "0",
            "description": "<p>Starting index of query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GetGroupsRequest",
          "content": "{\n  name: 'aemma',\n  expand: true,\n  nested: true\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Users Response": [
          {
            "group": "Users Response",
            "type": "Groups[]",
            "optional": false,
            "field": "Returns",
            "description": "<p>a list of groups</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GroupsResponse ",
          "content": "[\n  {\n    name: 'hartebeest-cohort-95210146b41b9c375A',\n    active: true,\n    attributes: {}\n  },\n  {\n    name: 'koala-team-c29b0dd79bc188fbcA',\n    active: true,\n    attributes: {}\n  }\n]",
          "type": "Object[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/search",
    "title": "user.list",
    "name": "user.list",
    "group": "User",
    "description": "<p>Search alias. List all users, full expansion by default. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-searchByCql>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const users = await crowd.user.list()",
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
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "true",
            "description": "<p>Expand users</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Users Response": [
          {
            "group": "Users Response",
            "type": "User[]",
            "optional": false,
            "field": "response",
            "description": "<p>Returns a list of users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UsersResponse",
          "content": "[\n  {\n    name: 'sisabella',\n    active: true,\n    firstName: 'Sophia',\n    lastName: 'Isabella',\n    displayName: 'Sophia Isabella',\n    email: 'sisabella@test.com',\n    key: '<key>',\n    attributes: {\n      invalidPasswordAttempts: '0',\n      passwordLastChanged: '1586132914494',\n      requiresPasswordChange: 'false'\n    },\n    createdDate: 1586132914491,\n    updatedDate: 1586132914491\n  },\n  {\n    name: 'solivia',\n    active: true,\n    firstName: 'Sophia',\n    lastName: 'Olivia',\n    displayName: 'Sophia Olivia',\n    email: 'solivia@test.com',\n    key: '<key>',\n    attributes: {\n      invalidPasswordAttempts: '0',\n      lastActive: '1586312382390',\n      lastAuthenticated: '1586312382388',\n      passwordLastChanged: '1586312349888',\n      requiresPasswordChange: 'false'\n    },\n    createdDate: 1586221772684,\n    updatedDate: 1586312349887\n  }\n]",
          "type": "User[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/search",
    "title": "user.list",
    "name": "user.list",
    "group": "User",
    "description": "<p>Search alias. List all users, full expansion by default. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-searchByCql>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const users = await crowd.user.list()",
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
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "defaultValue": "true",
            "description": "<p>Expand users</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Users Response": [
          {
            "group": "Users Response",
            "type": "User[]",
            "optional": false,
            "field": "response",
            "description": "<p>Returns a list of users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UsersResponse ",
          "content": "[\n  {\n    name: 'sisabella',\n    active: true,\n    firstName: 'Sophia',\n    lastName: 'Isabella',\n    displayName: 'Sophia Isabella',\n    email: 'sisabella@test.com',\n    key: '<key>',\n    attributes: {\n      invalidPasswordAttempts: '0',\n      passwordLastChanged: '1586132914494',\n      requiresPasswordChange: 'false'\n    },\n    createdDate: 1586132914491,\n    updatedDate: 1586132914491\n  },\n  {\n    name: 'solivia',\n    active: true,\n    firstName: 'Sophia',\n    lastName: 'Olivia',\n    displayName: 'Sophia Olivia',\n    email: 'solivia@test.com',\n    key: '<key>',\n    attributes: {\n      invalidPasswordAttempts: '0',\n      lastActive: '1586312382390',\n      lastAuthenticated: '1586312382388',\n      passwordLastChanged: '1586312349888',\n      requiresPasswordChange: 'false'\n    },\n    createdDate: 1586221772684,\n    updatedDate: 1586312349887\n  }\n]",
          "type": "User[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/user",
    "title": "user.remove",
    "name": "user.remove",
    "group": "User",
    "description": "<p>Removes a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-removeUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.remove(CreateUserRequest)",
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
            "description": "<p>User name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CreateUserRequest",
          "content": "{\n  name: 'aemma',\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/user",
    "title": "user.remove",
    "name": "user.remove",
    "group": "User",
    "description": "<p>Removes a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-removeUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.remove(CreateUserRequest)",
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
            "description": "<p>User name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "CreateUserRequest ",
          "content": "{\n  name: 'aemma',\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/user/attribute",
    "title": "user.removeAttribute",
    "name": "user.removeAttribute",
    "group": "User",
    "description": "<p>Remove a user attribute. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-removeUserAttribute>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.deleteAttribute(RemoveAttributeRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.attribute",
            "description": "<p>Attribute to remove</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RemoveAttributeRequest",
          "content": "{\n  name: 'aemma',\n  attribute: 'attr1'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/user/attribute",
    "title": "user.removeAttribute",
    "name": "user.removeAttribute",
    "group": "User",
    "description": "<p>Remove a user attribute. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-removeUserAttribute>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.deleteAttribute(RemoveAttributeRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.attribute",
            "description": "<p>Attribute to remove</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RemoveAttributeRequest ",
          "content": "{\n  name: 'aemma',\n  attribute: 'attr1'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/user/group/direct",
    "title": "user.removeGroup",
    "name": "user.removeGroup",
    "group": "User",
    "description": "<p>Removes user from a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeUserFromGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.removeGroup(RemoveGroupRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.groupname",
            "description": "<p>Group name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RemoveGroupRequest",
          "content": "{\n  name: 'aemma',\n  groupname: 'hartebeest-cohort-95210146b41b9c375A'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/user/group/direct",
    "title": "user.removeGroup",
    "name": "user.removeGroup",
    "group": "User",
    "description": "<p>Removes user from a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-removeUserFromGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.removeGroup(RemoveGroupRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.groupname",
            "description": "<p>Group name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RemoveGroupRequest",
          "content": "{\n  name: 'aemma',\n  groupname: 'hartebeest-cohort-95210146b41b9c375A'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/user/password",
    "title": "user.removePassword",
    "name": "user.removePassword",
    "group": "User",
    "description": "<p>Removes user password. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-deleteUserPassword>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.removePassword(RemovePasswordRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.password",
            "description": "<p>New password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RemovePasswordRequest",
          "content": "{\n  name: 'aemma',\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "DELETE",
    "url": "/user/password",
    "title": "user.removePassword",
    "name": "user.removePassword",
    "group": "User",
    "description": "<p>Removes user password. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-deleteUserPassword>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.removePassword(RemovePasswordRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.password",
            "description": "<p>New password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RemovePasswordRequest ",
          "content": "{\n  name: 'aemma',\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/user/rename",
    "title": "user.rename",
    "name": "user.rename",
    "group": "User",
    "description": "<p>Renames a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-updateUserPassword>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.rename(RenameRequest)",
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
            "description": "<p>Current username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.newName",
            "description": "<p>New username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RenameRequest",
          "content": "{\n  name: 'aemma',\n  newName: 'ddolittle'\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "UserResponseExample",
          "content": "{\n  name: 'ddolittle',\n  active: true,\n  firstName: 'Douglas',\n  lastName: 'Dolittle',\n  displayName: 'Douglas Dolittle',\n  email: 'ddolittle@test.com',\n  key: '<key>',\n  attributes: {},\n  createdDate: 1586619725088,\n  updatedDate: 1586619725088\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "User Response": [
          {
            "group": "User Response",
            "type": "User",
            "optional": false,
            "field": "response",
            "description": "<p>Object that houses below properties</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Username</p>"
          },
          {
            "group": "User Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.active",
            "description": "<p>Whether user is active</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.lastName",
            "description": "<p>User last name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.displayName",
            "description": "<p>User display name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.key",
            "description": "<p>User key</p>"
          },
          {
            "group": "User Response",
            "type": "Attributes",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Attributes object, may be empty</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/user/rename",
    "title": "user.rename",
    "name": "user.rename",
    "group": "User",
    "description": "<p>Renames a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-updateUserPassword>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.rename(RenameRequest)",
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
            "description": "<p>Current username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.newName",
            "description": "<p>New username</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "RenameRequest",
          "content": "{\n  name: 'aemma',\n  newName: 'ddolittle'\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "UserResponseExample ",
          "content": "{\n  name: 'ddolittle',\n  active: true,\n  firstName: 'Douglas',\n  lastName: 'Dolittle',\n  displayName: 'Douglas Dolittle',\n  email: 'ddolittle@test.com',\n  key: '<key>',\n  attributes: {},\n  createdDate: 1586619725088,\n  updatedDate: 1586619725088\n}",
          "type": "Object"
        }
      ],
      "fields": {
        "User Response": [
          {
            "group": "User Response",
            "type": "User",
            "optional": false,
            "field": "response",
            "description": "<p>Object that houses below properties</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.name",
            "description": "<p>Username</p>"
          },
          {
            "group": "User Response",
            "type": "Boolean",
            "optional": false,
            "field": "response.active",
            "description": "<p>Whether user is active</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.lastName",
            "description": "<p>User last name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.displayName",
            "description": "<p>User display name</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.email",
            "description": "<p>User email</p>"
          },
          {
            "group": "User Response",
            "type": "String",
            "optional": false,
            "field": "response.key",
            "description": "<p>User key</p>"
          },
          {
            "group": "User Response",
            "type": "Attributes",
            "optional": false,
            "field": "response.attributes",
            "description": "<p>Attributes object, may be empty</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/search",
    "title": "user.search",
    "name": "user.search",
    "group": "User",
    "description": "<p>Search for users based on CQL expression. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/search-searchByCql>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const users = await crowd.user.search(SearchRequest)",
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
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "description": "<p>Expand users</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.restriction",
            "description": "<p>CQL restriction expression</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.maxResults",
            "defaultValue": "users.length",
            "description": "<p>Limits the max results brought back</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.startIndex",
            "defaultValue": "0",
            "description": "<p>Starting index of query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SearchRequest",
          "content": "{\n  restriction: 'active=false',\n  expand: true,\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Users Response": [
          {
            "group": "Users Response",
            "type": "User[]",
            "optional": false,
            "field": "Returns",
            "description": "<p>a list of users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UsersResponse",
          "content": "[\n  {\n    name: 'sisabella',\n    active: true,\n    firstName: 'Sophia',\n    lastName: 'Isabella',\n    displayName: 'Sophia Isabella',\n    email: 'sisabella@test.com',\n    key: '<key>',\n    attributes: {\n      invalidPasswordAttempts: '0',\n      passwordLastChanged: '1586132914494',\n      requiresPasswordChange: 'false'\n    },\n    createdDate: 1586132914491,\n    updatedDate: 1586132914491\n  },\n  {\n    name: 'solivia',\n    active: true,\n    firstName: 'Sophia',\n    lastName: 'Olivia',\n    displayName: 'Sophia Olivia',\n    email: 'solivia@test.com',\n    key: '<key>',\n    attributes: {\n      invalidPasswordAttempts: '0',\n      lastActive: '1586312382390',\n      lastAuthenticated: '1586312382388',\n      passwordLastChanged: '1586312349888',\n      requiresPasswordChange: 'false'\n    },\n    createdDate: 1586221772684,\n    updatedDate: 1586312349887\n  }\n]]",
          "type": "Object[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/search",
    "title": "user.search",
    "name": "user.search",
    "group": "User",
    "description": "<p>Search for users based on CQL expression. Paginates until all results retrieved automatically. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/search-searchByCql>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const users = await crowd.user.search(SearchRequest)",
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
            "type": "Boolean",
            "optional": true,
            "field": "request.expand",
            "description": "<p>Expand users</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.restriction",
            "description": "<p>CQL restriction expression</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.maxResults",
            "defaultValue": "users.length",
            "description": "<p>Limits the max results brought back</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "request.startIndex",
            "defaultValue": "0",
            "description": "<p>Starting index of query</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SearchRequest",
          "content": "{\n  restriction: 'active=false',\n  expand: true,\n}",
          "type": "Object"
        }
      ]
    },
    "success": {
      "fields": {
        "Users Response": [
          {
            "group": "Users Response",
            "type": "User[]",
            "optional": false,
            "field": "Returns",
            "description": "<p>a list of users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UsersResponse",
          "content": "[\n  {\n    name: 'sisabella',\n    active: true,\n    firstName: 'Sophia',\n    lastName: 'Isabella',\n    displayName: 'Sophia Isabella',\n    email: 'sisabella@test.com',\n    key: '<key>',\n    attributes: {\n      invalidPasswordAttempts: '0',\n      passwordLastChanged: '1586132914494',\n      requiresPasswordChange: 'false'\n    },\n    createdDate: 1586132914491,\n    updatedDate: 1586132914491\n  },\n  {\n    name: 'solivia',\n    active: true,\n    firstName: 'Sophia',\n    lastName: 'Olivia',\n    displayName: 'Sophia Olivia',\n    email: 'solivia@test.com',\n    key: '<key>',\n    attributes: {\n      invalidPasswordAttempts: '0',\n      lastActive: '1586312382390',\n      lastAuthenticated: '1586312382388',\n      passwordLastChanged: '1586312349888',\n      requiresPasswordChange: 'false'\n    },\n    createdDate: 1586221772684,\n    updatedDate: 1586312349887\n  }\n]]",
          "type": "Object[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/attribute",
    "title": "user.setAttributes",
    "name": "user.setAttributes",
    "group": "User",
    "description": "<p>Sets a user's attributes. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-storeUserAttributes>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.setAttributes(SetAttributesRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "Attributes",
            "optional": false,
            "field": "request.attributes",
            "description": "<p>Object of type { [key: string]: string }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SetAttributesRequest",
          "content": "{\n  name: 'aemma',\n  attributes: {\n    attr1: 'test1',\n    attr2: 'test2'\n  }\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/attribute",
    "title": "user.setAttributes",
    "name": "user.setAttributes",
    "group": "User",
    "description": "<p>Sets a user's attributes. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-storeUserAttributes>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.setAttributes(SetAttributesRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "Attributes",
            "optional": false,
            "field": "request.attributes",
            "description": "<p>Object of type { [key: string]: string }</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "SetAttributesRequest",
          "content": "{\n  name: 'aemma',\n  attributes: {\n    attr1: 'test1',\n    attr2: 'test2' \n  }\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/user",
    "title": "user.update",
    "name": "user.update",
    "group": "User",
    "description": "<p>Updates a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-updateUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const user = await crowd.user.update(UpdateUserRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.active",
            "description": "<p>Whether user is active</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.lastName",
            "description": "<p>User last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.displayName",
            "description": "<p>User display name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.email",
            "description": "<p>User email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UpdateUserRequest",
          "content": "{\n  name: 'aemma',\n  active: true,\n  firstName: 'Douglas',\n  lastName: 'Dolittle',\n  displayName: 'Douglas Dolittle',\n  email: 'ddolittle@test.com'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/user",
    "title": "user.update",
    "name": "user.update",
    "group": "User",
    "description": "<p>Updates a user. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/user-updateUser>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const user = await crowd.user.update(UpdateUserRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "request.active",
            "description": "<p>Whether user is active</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.firstName",
            "description": "<p>User first name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.lastName",
            "description": "<p>User last name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.displayName",
            "description": "<p>User display name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "request.email",
            "description": "<p>User email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UpdateUserRequest ",
          "content": "{\n  name: 'aemma',\n  active: true,\n  firstName: 'Douglas',\n  lastName: 'Dolittle',\n  displayName: 'Douglas Dolittle',\n  email: 'ddolittle@test.com'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/user/password",
    "title": "user.updatePassword",
    "name": "user.updatePassword",
    "group": "User",
    "description": "<p>Updates user password. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-updateUserPassword>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.updatePassword(UpdatePasswordRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.password",
            "description": "<p>New password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UpdatePasswordRequest",
          "content": "{\n  name: 'aemma',\n  password: 'newpassword'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.d.ts",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/user/password",
    "title": "user.updatePassword",
    "name": "user.updatePassword",
    "group": "User",
    "description": "<p>Updates user password. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-updateUserPassword>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "await crowd.user.updatePassword(UpdatePasswordRequest)",
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
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "request.password",
            "description": "<p>New password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UpdatePasswordRequest",
          "content": "{\n  name: 'aemma',\n  password: 'newpassword'\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/user.ts",
    "groupTitle": "User"
  }
] });
