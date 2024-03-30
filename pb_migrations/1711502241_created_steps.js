/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "x3ilmvyce0gbxa5",
    "created": "2024-03-27 01:17:21.693Z",
    "updated": "2024-03-27 01:17:21.693Z",
    "name": "steps",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tfbwaiql",
        "name": "recipe",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "v4lcfnn9o208m6u",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "0jm1ld5u",
        "name": "description",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ueyunho5",
        "name": "type",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "preparation",
            "cooking"
          ]
        }
      },
      {
        "system": false,
        "id": "gftr46op",
        "name": "index",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x3ilmvyce0gbxa5");

  return dao.deleteCollection(collection);
})
