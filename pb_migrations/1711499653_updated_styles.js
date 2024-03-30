/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wf4jcrzh4ce82oj")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_kFhob9W` ON `styles` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wf4jcrzh4ce82oj")

  collection.indexes = []

  return dao.saveCollection(collection)
})
