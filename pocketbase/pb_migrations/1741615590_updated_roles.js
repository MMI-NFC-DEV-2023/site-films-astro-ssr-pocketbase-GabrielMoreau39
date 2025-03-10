/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2105053228")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2780381188",
    "max": 0,
    "min": 0,
    "name": "nom_role",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1333826038",
    "hidden": false,
    "id": "relation3942306658",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "acteur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2105053228")

  // remove field
  collection.fields.removeById("text2780381188")

  // remove field
  collection.fields.removeById("relation3942306658")

  return app.save(collection)
})
