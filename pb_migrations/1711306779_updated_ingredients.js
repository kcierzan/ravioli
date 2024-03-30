/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y8596rtofpti9u1")

  collection.name = "provisions"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y8596rtofpti9u1")

  collection.name = "ingredients"

  return dao.saveCollection(collection)
})
