// Generated by LiveScript 1.3.1
(function(){
  var main, x$;
  main = {};
  x$ = main;
  x$.han = /^[\u4e00-\u9fa5]{0,}$/;
  x$.id = /^[a-zA-Z][0-9]{9}$/;
  x$.mobile = /^[0-9]{4}-?[0-9]{3}-?[0-9]{3}$/;
  x$.vatid = /^[0-9]{8}$/;
  x$.zipcode = /^[0-9]{3}|[0-9]{5,6}$/;
  x$.email = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.[a-z]{2,}|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
  x$.url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
  if (typeof module != 'undefined' && module !== null) {
    module.exports = main;
  } else if (typeof window != 'undefined' && window !== null) {
    window.curegex = main;
  }
}).call(this);