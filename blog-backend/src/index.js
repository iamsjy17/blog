require('dotenv').config();

const Koa = require('koa');
const session = require('koa-session');
const serve = require('koa-static');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
const path = require('path');
const api = require('./api');

const { PORT: port = 4000, MONGO_URI: mongoURI, COOKIE_SIGN_KEY: signKey } = process.env;
const staticPath = path.join(__dirname, '../../blog-frontend/build');

const app = new Koa();
const router = new Router();
const ssr = require('./ssr');

mongoose.Promise = global.Promise;
mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((e) => {
    console.error(e);
  });

router.use('/api', api.routes());
router.get('/', ssr);

app.use(bodyParser());

const sessionConfig = {
  maxAge: 86400000 // 하루
};
app.use(session(sessionConfig, app));
app.keys = [signKey];
app.use(router.routes()).use(router.allowedMethods());
app.use(serve(staticPath));
app.use(ssr);

app.listen(port, () => {
  console.log('listening to port 4000');
});
