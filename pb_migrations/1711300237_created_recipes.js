/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "v4lcfnn9o208m6u",
    "created": "2024-03-24 17:10:37.191Z",
    "updated": "2024-03-24 17:10:37.191Z",
    "name": "recipes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a0j1ori2",
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
      },
      {
        "system": false,
        "id": "qh55zgxk",
        "name": "style",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 3,
          "values": [
            "american",
            "asian",
            "chinese",
            "japanese",
            "southern",
            "italian",
            "french",
            "mexican",
            "spanish",
            "german",
            "cuban"
          ]
        }
      },
      {
        "system": false,
        "id": "hzr5gnhp",
        "name": "prep_time_minutes",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "owamxvtc",
        "name": "serves",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "noDecimal": true
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
  const collection = dao.findCollectionByNameOrId("v4lcfnn9o208m6u");

  return dao.deleteCollection(collection);
})
