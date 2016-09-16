'use strict';

exports.insertIOU = function(db, iou, cb) {
  db.collection('ious').insertOne(iou, (err, result) => {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
}