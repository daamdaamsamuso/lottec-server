var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const testObj =[{
  Account: 0,
  BeginDate: "2021-06-03T00:00:00",
  EndDate: "2021-07-31T23:59:00",
  OrderNo: 1,
  ID: "40120210604112850083",
  Title: "DID 2021 테스트",
  ContentsList: [{
      ContentsID: 92601,
      GroupID: "40120210604112850083",
      ItemPositionID: 1,
      ContentsType: 1,
      FileName: "4012021060411285008301.WMV",
      FileSize: 0,
      FileType: "WMV",
      FtpFilePath: null,
      LocalFilePath: null,
      LocalFilePath02: null
  }, {
      ContentsID: 92602,
      GroupID: "40120210604112850083",
      ItemPositionID: 2,
      ContentsType: 2,
      FileName: "4012021060411285008302.JPG",
      FileSize: 0,
      FileType: "JPG",
      FtpFilePath: null,
      LocalFilePath: null,
      LocalFilePath02: null
  }],
  LayoutType: 2,
  SoundPosition: 1
}, {
  Account: 0,
  BeginDate: "2021-06-03T00:00:00",
  EndDate: "2021-07-31T23:59:00",
  OrderNo: 2,
  ID: "40120210604122934867",
  Title: "DID 2021 테스트",
  ContentsList: [{
      ContentsID: 92603,
      GroupID: "40120210604122934867",
      ItemPositionID: 1,
      ContentsType: 1,
      FileName: "4012021060412293486701.WMV",
      FileSize: 0,
      FileType: "WMV",
      FtpFilePath: null,
      LocalFilePath: null,
      LocalFilePath02: null
  }, {
      ContentsID: 92604,
      GroupID: "40120210604122934867",
      ItemPositionID: 2,
      ContentsType: 2,
      FileName: "4012021060412293486702.JPG",
      FileSize: 0,
      FileType: "JPG",
      FtpFilePath: null,
      LocalFilePath: null,
      LocalFilePath02: null
  }],
  LayoutType: 2,
  SoundPosition: 1
}, {
  Account: 0,
  BeginDate: "2021-06-03T00:00:00",
  EndDate: "2021-07-31T23:59:00",
  OrderNo: 3,
  ID: "40120210604123023560",
  Title: "DID 2021 테스트",
  ContentsList: [{
      ContentsID: 92605,
      GroupID: "40120210604123023560",
      ItemPositionID: 1,
      ContentsType: 1,
      FileName: "4012021060412302356001.WMV",
      FileSize: 0,
      FileType: "WMV",
      FtpFilePath: null,
      LocalFilePath: null,
      LocalFilePath02: null
  }, {
      ContentsID: 92606,
      GroupID: "40120210604123023560",
      ItemPositionID: 2,
      ContentsType: 2,
      FileName: "4012021060412302356002.JPG",
      FileSize: 0,
      FileType: "JPG",
      FtpFilePath: null,
      LocalFilePath: null,
      LocalFilePath02: null
  }],
  LayoutType: 2,
  SoundPosition: 1
}]

app.use('/', indexRouter);
app.use('/api',(req,res)=>{
  res.send(testObj);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
module.exports = app;

