/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y8596rtofpti9u1",
    "created": "2024-03-24 18:54:58.077Z",
    "updated": "2024-03-24 18:54:58.077Z",
    "name": "ingredients",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wrblhtki",
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
        "id": "1uyyvqyc",
        "name": "category",
        "type": "select",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 3,
          "values": [
            "meat",
            "fish",
            "s poultry",
            "vegetable",
            "fruit",
            "nut",
            "dairy",
            "grain",
            "legume",
            "spice",
            "seed",
            "herb",
            "oil",
            "fat",
            "other",
            "shellfish",
            "prepared"
          ]
        }
      },
      {
        "system": false,
        "id": "gruicnhe",
        "name": "perishable",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "072f35pz",
        "name": "refrigerate",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("y8596rtofpti9u1");

  return dao.deleteCollection(collection);
})
