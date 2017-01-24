var app = require('koa')();
var json = require('koa-json');
var router = require('koa-router')();
var cors = require('koa-cors');
var bodyParser = require('koa-bodyparser');

app.use(json());
app.use(bodyParser());
app.use(cors({
  origin: '*'
}));
app
  .use(router.routes())
  .use(router.allowedMethods());

let defects = [{ id: 0, date: '2017-02-07', address: 'Поляковское шоссе', status: 'Отправлено' }];

router
  .get('/defects', function *(next) {
    this.body = defects;
  })
  .post('/defects', function *(next) {
    defects = this.request.body;
    this.body = { error: null };
  })
  .put('/users/:id', function *(next) {
    // ...
  })
  .del('/users/:id', function *(next) {
    // ...
  });

app.listen(3000);