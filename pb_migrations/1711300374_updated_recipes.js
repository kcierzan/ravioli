/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4lcfnn9o208m6u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x3dxqomi",
    "name": "cooking_time_minutes",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4lcfnn9o208m6u")

  // remove
  collection.schema.removeField("x3dxqomi")

  return dao.saveCollection(collection)
})
