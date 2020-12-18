// Generated by LiveScript 1.6.0
(function(){
  var main;
  main = function(opt){
    var root, this$ = this;
    root = opt.root;
    this.root = root = typeof root === 'string'
      ? document.querySelector(root)
      : root ? root : null;
    this.root.addEventListener('click', function(e){
      var n, p;
      n = e.target;
      while (n && n !== this$.root && (!n.matches || (n.matches && !n.matches('.ldfd-toggle')))) {
        n = n.parentNode;
      }
      if (!(n && n !== this$.root)) {
        return;
      }
      p = n;
      while (p = p.nextSibling) {
        if (p.classList && p.classList.contains('ldfd-menu')) {
          break;
        }
      }
      if (p) {
        return this$.toggle(p);
      }
    });
    return this;
  };
  main.prototype = import$(Object.create(Object.prototype), {
    fit: function(menu){
      return this.toggle(menu, menu.parentNode.classList.contains('show'), true);
    },
    toggle: function(menu, v, force){
      var ison, ch, sh;
      ison = menu.parentNode.classList.contains('show');
      if ((v = v != null
        ? v
        : !ison) === ison && !force) {
        return;
      }
      ch = getComputedStyle(menu).height || 0;
      menu.style.height = "";
      menu.offsetHeight;
      sh = menu.scrollHeight;
      menu.style.height = ch;
      menu.offsetHeight;
      menu.style.height = (!v ? 0 : sh) + "px";
      menu.parentNode.classList.toggle('show', v);
      return v;
    }
  });
  window.ldfolder = main;
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
