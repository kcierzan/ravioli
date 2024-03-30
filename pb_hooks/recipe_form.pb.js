// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../pb_data/types.d.ts" />

onRecordBeforeCreateRequest((e) => {
  console.log(e.record);
  $app.dao().runInTransaction((txDao) => {});
}, 'recipes');
