/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y8596rtofpti9u1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1uyyvqyc",
    "name": "category",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "meat",
        "fish",
        "poultry",
        "vegetable",
        "fruit",
        "nut",
        "dairy",
        "grain",
        "legume",
        "spice",
        "seed",
        "herb",
        "oil",
        "fat",
        "other",
        "shellfish",
        "prepared"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y8596rtofpti9u1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1uyyvqyc",
    "name": "category",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 3,
      "values": [
        "meat",
        "fish",
        "s poultry",
        "vegetable",
        "fruit",
        "nut",
        "dairy",
        "grain",
        "legume",
        "spice",
        "seed",
        "herb",
        "oil",
        "fat",
        "other",
        "shellfish",
        "prepared"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
