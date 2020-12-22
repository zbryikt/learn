// Generated by LiveScript 1.3.1
var lc;
lc = {};
lc.z = new zmgr({
  init: 1000
});
ldCover.setZmgr(lc.z);
ldLoader.setZmgr(lc.z);
ldc.register('authpanel', ['auth'], function(arg$){
  var auth, that, ap, cover, ldcv;
  auth = arg$.auth;
  if (that = lc.authpanel) {
    return that;
  }
  lc.authpanel = ap = new authpanel({
    root: '.authpanel',
    auth: auth
  });
  cover = ld$.parent(lc.authpanel.root, '.ldcv');
  if (cover) {
    ldcv = new ldCover({
      root: cover
    });
  }
  auth.setUi({
    authpanel: function(v, opt){
      ap['switch'](opt.tab);
      if (ldcv != null) {
        return ldcv.get(v);
      }
    }
  });
  lc.auth.on('change', function(){
    return ldcv.set();
  });
  return ap;
});
ldc.register('auth', ['ldcvmgr'], function(arg$){
  var ldcvmgr, that;
  ldcvmgr = arg$.ldcvmgr;
  if (that = lc.auth) {
    return that;
  }
  lc.auth = new auth({
    ui: {
      timeout: function(){
        return ldcvmgr.toggle('timeout');
      }
    }
  });
  lc.auth.on('error', function(){
    return ldcvmgr.toggle('error');
  });
  lc.auth.on('logout', function(){
    return ldcvmgr.toggle('logout');
  });
  lc.auth.fetch();
  return lc.auth;
});
ldc.register('ldcvmgr', [], function(){
  return lc.ldcvmgr || (lc.ldcvmgr = new ldcvmgr());
});
ldc.register('loader', [], function(){
  return lc.ldld || (lc.ldld = new ldLoader({
    className: 'ldld full',
    autoZ: true,
    atomic: false
  }));
});
ldc.register('notify', [], function(){
  return lc.notify || (lc.notify = new ldnotify());
});
ldc.register('error', ['ldcvmgr'], function(arg$){
  var ldcvmgr, ret;
  ldcvmgr = arg$.ldcvmgr;
  ret = function(opt){
    opt == null && (opt = {});
    return function(e){
      var code;
      console.log(e);
      code = e ? +(code || e.id || e.code) : null;
      if (code && !isNaN(code)) {
        if (in$(code, opt.ignore || [999])) {
          return;
        }
        if (opt.custom && opt.custom[code]) {
          return opt.custom[code](e);
        }
        if ((ret['default'] || (ret['default'] = {}))[code]) {
          return ret['default'][code](e);
        }
      }
      ldcvmgr.toggle('error');
      return console.log(e);
    };
  };
  return ret;
});
function in$(x, xs){
  var i = -1, l = xs.length >>> 0;
  while (++i < l) if (x === xs[i]) return true;
  return false;
}