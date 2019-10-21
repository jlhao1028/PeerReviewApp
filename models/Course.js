'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

var courseSchema = Schema( {
  name: String,
  ownerId: ObjectId,
  coursePin: Number,
  createdAt: Date,
  gradeSheet: mongoose.Schema.Types.Mixed,
  gradesUpdateTime: Date
} );

module.exports = mongoose.model( 'Course', courseSchema );
