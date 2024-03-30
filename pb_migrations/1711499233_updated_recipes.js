/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4lcfnn9o208m6u")

  // remove
  collection.schema.removeField("qh55zgxk")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4lcfnn9o208m6u")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
