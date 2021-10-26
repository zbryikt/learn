// Generated by LiveScript 1.6.0
(function(){
  var fs, fsExtra, crypto, expressRateLimit, lderror, aux, session, throttle, mail, action;
  fs = require('fs');
  fsExtra = require('fs-extra');
  crypto = require('crypto');
  expressRateLimit = require('express-rate-limit');
  lderror = require('lderror');
  aux = require('backend/aux');
  session = require('backend/session');
  throttle = require('../../util/throttle');
  mail = require('../../util/mail');
  action = require('../../util/action');
  mail = require('./mail');
  (function(f){
    return module.exports = function(it){
      return f(it);
    };
  })(function(backend){
    var db, config, ref$, api, app, verifyEmail;
    db = backend.db, config = backend.config, ref$ = backend.route, api = ref$.api, app = ref$.app;
    verifyEmail = function(arg$){
      var req, io, user, obj;
      req = arg$.req, io = arg$.io, user = arg$.user;
      obj = {};
      return Promise.resolve().then(function(){
        var time;
        time = new Date();
        obj.key = user.key;
        obj.hex = (user.key + "-") + crypto.randomBytes(30).toString('hex');
        obj.time = time;
        return db.query("delete from mailverifytoken where owner=$1", [obj.key]);
      }).then(function(){
        return db.query("insert into mailverifytoken (owner,token,time) values ($1,$2,$3)", [obj.key, obj.hex, obj.time]);
      }).then(function(){
        return backend.mailQueue.byTemplate('mail-verify', user.username, {
          token: obj.hex
        }, {
          now: true
        });
      });
    };
    api.post('/me/mail/verify', aux.signedin, function(req, res){
      return db.query("select key from users where key = $1 and deleted is not true", [req.user.key]).then(function(r){
        r == null && (r = {});
        if (!(r.rows || (r.rows = [])).length) {
          return lderror.reject(404);
        }
        return verifyEmail({
          req: req,
          user: req.user,
          db: db
        });
      }).then(function(){
        return res.send();
      });
    });
    return app.get('/me/mail/verify/:token', function(req, res){
      var lc, token;
      lc = {};
      if (!(token = req.params.token)) {
        return lderror.reject(400);
      }
      return db.query("select owner,time from mailverifytoken where token = $1", [token]).then(function(r){
        r == null && (r = {});
        if (!(r.rows || (r.rows = [])).length) {
          return lderror.reject(403);
        }
        lc.obj = r.rows[0];
        return db.query("delete from mailverifytoken where owner = $1", [lc.obj.owner]);
      }).then(function(){
        var verified;
        if (new Date().getTime() - new Date(lc.obj.time).getTime() > 1000 * 600) {
          return lderror.reject(1013);
        }
        lc.verified = verified = {
          date: Date.now()
        };
        db.query("update users set verified = $2 where key = $1", [lc.obj.owner, JSON.stringify(verified)]);
        if (req.user && req.user.key === lc.obj.owner) {
          return session.login({
            db: db,
            key: req.user.key,
            req: req
          });
        }
      }).then(function(){
        return db.query("select * from users where key = $1", [lc.obj.owner]).then(function(r){
          var u;
          r == null && (r = {});
          if (!(u = (r.rows || (r.rows = []))[0])) {
            return;
          }
          u.verified = lc.verified;
          return db.query("update sessions set detail = jsonb_set(detail, '{passport,user}', ($1)::jsonb)\nwhere (detail->'passport'->'user'->>'key')::int = $2", [JSON.stringify(u), lc.obj.owner]);
        });
      }).then(function(){
        res.redirect('/dash/auth/mail/verify/done/');
        return null;
      })['catch'](function(e){
        if (e instanceof lderror && e.id === 1013) {
          res.redirect('/dash/auth/mail/verify/expire/');
          return null;
        } else {
          return Promise.reject(e);
        }
      });
    });
  });
}).call(this);