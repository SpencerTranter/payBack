'use strict';

exports.insertIOU = function(db, iou, cb) {
  db.collection('ious').insertOne(iou, (err, result) => {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
}

exports.updateIOU = function(db, iou, cb) {
  db.collection('ious').updateOne(
    { '_id': iou.id },
    {
      $set: {
        title: iou.title,
        description: iou.description,
        dateDue: iou.dateDue
      }
    }, (err, result) => {
      if (err) {
        return cb(err);
      }
      return cb(null, result);
  });
}

exports.deleteURL = function(db, iou, cb) {
  db.collection('ious').remove({ '_id': iou.id }, (err, result) => {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
}

exports.getURLs = function(db, cb) {
  db.collection('ious').find().toArray((err, result) => {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
}

exports.getIOU = function(db, iou, cb) {
  db.collection('ious').findOne({ '_id': iou.id }, (err, result) => {
    if (err) {
      return cb(err);
    }
    return cb(null, result);
  });
}