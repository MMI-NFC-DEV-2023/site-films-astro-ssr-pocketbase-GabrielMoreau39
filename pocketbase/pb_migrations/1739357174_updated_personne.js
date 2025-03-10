/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1333826038")

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select3130199401",
    "maxSelect": 1,
    "name": "profession",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "scenariste",
      "producteur",
      "acteur",
      "realisateur"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1333826038")

  // remove field
  collection.fields.removeById("select3130199401")

  return app.save(collection)
})
