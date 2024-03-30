/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5l7ys1cngsodtav")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yudpvm8k",
    "name": "unit",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "wz9vyxhedmnt6ei",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5l7ys1cngsodtav")

  // remove
  collection.schema.removeField("yudpvm8k")

  return dao.saveCollection(collection)
})
