/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wz9vyxhedmnt6ei")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_uniq_name` ON `units` (`name`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wz9vyxhedmnt6ei")

  collection.indexes = []

  return dao.saveCollection(collection)
})
