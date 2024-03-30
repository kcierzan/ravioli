/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x3ilmvyce0gbxa5")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_uniq_recipe_index` ON `steps` (\n  `recipe`,\n  `index`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("x3ilmvyce0gbxa5")

  collection.indexes = []

  return dao.saveCollection(collection)
})
