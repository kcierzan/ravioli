/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wz9vyxhedmnt6ei")

  // update
  collection.schema.addField(new SchemaField({
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
        "imperial",
        "nonstandard"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wz9vyxhedmnt6ei")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
