/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1333826038")

  // update collection data
  unmarshal({
    "name": "personnes"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1333826038")

  // update collection data
  unmarshal({
    "name": "personne"
  }, collection)

  return app.save(collection)
})
