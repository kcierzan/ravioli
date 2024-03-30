/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4lcfnn9o208m6u")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_yOngrcp` ON `recipes` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v4lcfnn9o208m6u")

  collection.indexes = []

  return dao.saveCollection(collection)
})
