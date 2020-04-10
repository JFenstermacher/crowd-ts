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
    "name": "create",
    "group": "Group",
    "description": "<p>Creates a group. Refer to the CROWD documentation <a href=https://docs.atlassian.com/atlassian-crowd/4.0.0/REST/#usermanagement/1/group-addGroup>[API DOCS]</a></p>",
    "examples": [
      {
        "title": "Async/await",
        "content": "const session = await crowd.group.create(CreateGroupRequest)",
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
    "filename": "src/resources/group/client.d.ts",
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
        "content": "const session = await crowd.group.create(CreateGroupRequest)",
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
        "content": "const session = await crowd.group.get(GetGroupRequest)",
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
        "content": "const session = await crowd.group.get(GetGroupRequest)",
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
    "filename": "src/resources/group/client.ts",
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
        "content": "const session = await crowd.group.getAttributes(GetAttributesRequest)",
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
      "examples": [
        {
          "title": "AttributesResponse",
          "content": "{\n  attr1: 'test1',\n  attr2: 'test2\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group/client.d.ts",
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
        "content": "const session = await crowd.group.getAttributes(GetAttributesRequest)",
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
      "examples": [
        {
          "title": "AttributesResponse",
          "content": "{\n  attr1: 'test1',\n  attr2: 'test2\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group/client.ts",
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
        "content": "const session = await crowd.group.remove(CreateGroupRequest)",
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
          "title": "CreateGroupRequest",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group/client.d.ts",
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
        "content": "const session = await crowd.group.remove(CreateGroupRequest)",
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
          "title": "CreateGroupRequest ",
          "content": "{\n  name: 'alpaca-squad-91c4418262ebb7559A',\n}",
          "type": "Object"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/resources/group/client.ts",
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
        "content": "const session = await crowd.group.setAttributes(SetAttributesRequest)",
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
    "filename": "src/resources/group/client.d.ts",
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
        "content": "const session = await crowd.group.setAttributes(SetAttributesRequest)",
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
    "filename": "src/resources/group/client.ts",
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
        "content": "const session = await crowd.group.create(UpdateGroupRequest)",
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
    "filename": "src/resources/group/client.d.ts",
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
        "content": "const session = await crowd.group.create(UpdateGroupRequest)",
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
    "filename": "src/resources/session/client.ts",
    "groupTitle": "Session"
  }
] });
