/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "msu1j3xpnk088xn",
    "created": "2024-03-27 00:33:32.365Z",
    "updated": "2024-03-27 00:33:32.365Z",
    "name": "recipe_styles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1bt7xtik",
        "name": "recipe",
        "type": "relation",
        "required": false,
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
        "id": "zmi5aymz",
        "name": "style",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "wf4jcrzh4ce82oj",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_uniq_recipe_style` ON `recipe_styles` (\n  `recipe`,\n  `style`\n)"
    ],
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
  const collection = dao.findCollectionByNameOrId("msu1j3xpnk088xn");

  return dao.deleteCollection(collection);
})
