/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wf4jcrzh4ce82oj",
    "created": "2024-03-27 00:30:35.488Z",
    "updated": "2024-03-27 00:30:35.488Z",
    "name": "styles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hmf93gqz",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("wf4jcrzh4ce82oj");

  return dao.deleteCollection(collection);
})
