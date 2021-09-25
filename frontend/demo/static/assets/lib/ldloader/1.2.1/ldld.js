(function(){
  var ldloader;
  ldloader = function(opt){
    var this$ = this;
    opt == null && (opt = {});
    this.opt = import$({
      activeClass: 'running',
      baseZ: 4000,
      autoZ: false,
      className: '',
      atomic: true
    }, opt);
    ['root', 'container'].map(function(n){
      if (opt[n]) {
        return this$[n] = (Array.isArray(opt[n])
          ? opt[n]
          : [opt[n]]).map(function(it){
          var ret;
          ret = typeof it === 'string' ? document.querySelector(it) : it;
          if (!ret) {
            console.warn("[ldloader] warning: no node found for " + it);
          }
          return ret;
        });
      }
    });
    if (!this.container) {
      this.container = this.root
        ? this.root.map(function(it){
          return it.parentNode;
        })
        : [document.body];
    }
    if (!this.root) {
      this.root = this.container.map(function(it){
        var node;
        node = document.createElement("div");
        it.appendChild(node);
        return node;
      });
    }
    this.root.map(function(it){
      it.classList.add.apply(it.classList, (this$.opt.className || '').split(' ').filter(function(it){
        return it;
      }));
      it.classList.remove(opt.activeClass);
      if (opt.inactiveClass) {
        return it.classList.add(opt.inactiveClass);
      }
    });
    this.running = false;
    this.count = 0;
    return this;
  };
  ldloader.prototype = import$(Object.create(Object.prototype), {
    isOn: function(){
      return this.running;
    },
    on: function(delay){
      delay == null && (delay = 0);
      return this.toggle(true, delay);
    },
    off: function(delay, force){
      delay == null && (delay = 0);
      force == null && (force = false);
      return this.toggle(false, delay, force);
    },
    cancel: function(v){
      clearTimeout(this.handle);
      if (v != null) {
        return this.toggle(v);
      }
    },
    flash: function(dur, delay){
      var this$ = this;
      dur == null && (dur = 1000);
      delay == null && (delay = 0);
      return this.toggle(true, delay).then(function(){
        return this$.toggle(false, dur + delay);
      });
    },
    render: function(){
      var runid, _, ret, this$ = this;
      if (!(this.running && this.opt.ctrl && this.opt.ctrl.step)) {
        return this.render.runid = -1;
      }
      this.render.runid = runid = Math.random();
      this.render.start = 0;
      if (this.opt.ctrl.init) {
        this.root.map(function(it){
          return this$.opt.ctrl.init.call(it);
        });
      }
      _ = function(t){
        if (!this$.render.start) {
          this$.render.start = t;
        }
        this$.root.map(function(it){
          return this$.opt.ctrl.step.call(it, t - this$.render.start);
        });
        if (this$.render.runid === runid) {
          return requestAnimationFrame(function(it){
            return _(it);
          });
        } else if (this$.opt.ctrl.done) {
          return this$.root.map(function(it){
            return this$.opt.ctrl.done.call(it, t - this$.render.start);
          });
        }
      };
      return ret = requestAnimationFrame(function(it){
        return _(it);
      });
    },
    toggle: function(v, delay, force){
      var d, this$ = this;
      delay == null && (delay = 0);
      force == null && (force = false);
      d = !(v != null)
        ? this.root[0].classList.contains(this.opt.activeClass) ? -1 : 1
        : v
          ? 1
          : -1;
      if (this.handle) {
        this.cancel();
      }
      if (delay) {
        return new Promise(function(res, rej){
          return this$.handle = setTimeout(function(){
            return this$.toggle(v).then(function(){
              return res();
            });
          }, delay);
        });
      }
      return new Promise(function(res, rej){
        var ref$, running, idx;
        this$.count = (ref$ = this$.count + d) > 0 ? ref$ : 0;
        if (!force && !this$.opt.atomic && (this$.count >= 2 || (this$.count === 1 && d < 0))) {
          return res();
        }
        this$.root.map(function(it){
          it.classList.toggle(this$.opt.activeClass, d > 0);
          if (this$.opt.inactiveClass) {
            return it.classList.toggle(this$.opt.inactiveClass, d < 0);
          }
        });
        this$.running = running = this$.root[0].classList.contains(this$.opt.activeClass);
        if (this$.opt.ctrl) {
          this$.render();
        }
        if (!this$.opt.autoZ) {
          return res();
        }
        if (running) {
          if (ldloader.zmgr) {
            this$.z = ldloader.zmgr.add(this$.opt.baseZ);
          } else {
            this$.z = ((ref$ = ldloader.zstack)[ref$.length - 1] || this$.opt.baseZ) + 1;
            ldloader.zstack.push(z);
          }
          this$.root.map(function(it){
            return it.style.zIndex = this$.z;
          });
        } else {
          if (ldloader.zmgr) {
            ldloader.zmgr.remove(this$.z);
          } else {
            if ((idx = ldloader.zstack.indexOf(this$.z)) < 0) {
              return res();
            }
            ldloader.zstack.splice(idx, 1);
          }
          this$.root.map(function(it){
            return it.style.zIndex = "";
          });
        }
        return res();
      });
    }
  });
  import$(ldloader, {
    zstack: [],
    setZmgr: function(it){
      return this.zmgr = it;
    }
  });
  if (typeof module != 'undefined' && module !== null) {
    module.exports = ldloader;
  } else {
    window.ldloader = window.ldLoader = ldloader;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);