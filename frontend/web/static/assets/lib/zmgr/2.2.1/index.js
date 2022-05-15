(function(){
  var zmgr;
  zmgr = function(opt){
    opt == null && (opt = {});
    this.opt = opt;
    this.stack = [];
    this.step = opt.step || 1;
    if (opt.init != null) {
      this.init = opt.init;
    }
    this._g = import$(import$({}, zmgr.layer), opt.layer || {});
    this._v = {};
    this._s = {};
    return this;
  };
  zmgr.prototype = import$(Object.create(Object.prototype), {
    scope: function(n, s){
      var this$ = this;
      return {
        add: function(_n, _s){
          return this$.add(_n != null ? _n : n, _s != null ? _s : s);
        },
        remove: function(_n, _v){
          return this$.remove(_n != null ? _n : n, _v);
        }
      };
    },
    add: function(v, s){
      var n, ref$;
      s == null && (s = 0);
      if (!(v != null) || typeof v === 'number') {
        if (!(v != null)) {
          v = this.init;
        }
        if (this.init != null) {
          v = this.step > 0
            ? Math.max(this.init, v)
            : Math.min(this.init, v);
        }
        if (!(this.value != null)) {
          this.value = v;
        }
        v = this.step > 0
          ? Math.max(this.value, v)
          : Math.min(this.value, v);
        v = v + (this.step > 0
          ? 1
          : -1) * Math.max(Math.abs(this.step), Math.abs(s));
        this.stack.push(v);
        this.value = v;
        return v;
      } else {
        n = v;
        v = (this.step > 0
          ? Math.max
          : Math.min)(this._g[n], this._v[n] || this._g[n]);
        v = v + (this.step > 0
          ? 1
          : -1) * Math.max(Math.abs(this.step), Math.abs(s));
        ((ref$ = this._s)[n] || (ref$[n] = [])).push(v);
        this._v[n] = v;
        return v;
      }
    },
    remove: function(n, v){
      var i, ref$;
      if (typeof n === 'number') {
        if (!~(i = this.stack.indexOf(n))) {
          return;
        }
        this.stack.splice(i, 1);
        return this.value = (ref$ = this.stack)[ref$.length - 1];
      } else {
        if (!(i = ((ref$ = this._s)[n] || (ref$[n] = [])).indexOf(v))) {
          return;
        }
        ((ref$ = this._s)[n] || (ref$[n] = [])).splice(i, 1);
        return this._v[n] = (ref$ = this._s)[ref$.length - 1];
      }
    }
  });
  zmgr.layer = {
    notify: 5000,
    splash: 4000,
    modal: 3000,
    fixed: 2000,
    float: 1000,
    base: 1
  };
  zmgr.notify = 'notify';
  zmgr.splash = 'splash';
  zmgr.modal = 'modal';
  zmgr.fixed = 'fixed';
  zmgr.float = 'float';
  zmgr.base = 'base';
  if (typeof module != 'undefined' && module !== null) {
    module.exports = zmgr;
  } else if (typeof window != 'undefined' && window !== null) {
    window.zmgr = zmgr;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
