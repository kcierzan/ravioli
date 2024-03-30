/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wz9vyxhedmnt6ei",
    "created": "2024-03-24 19:08:42.952Z",
    "updated": "2024-03-24 19:08:42.952Z",
    "name": "units",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y5loyxyr",
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
        "id": "7mecykjh",
        "name": "system",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "metric",
            "imperial"
          ]
        }
      },
      {
        "system": false,
        "id": "lr4memaw",
        "name": "meaure",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "mass",
            "volume"
          ]
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
  const collection = dao.findCollectionByNameOrId("wz9vyxhedmnt6ei");

  return dao.deleteCollection(collection);
})
