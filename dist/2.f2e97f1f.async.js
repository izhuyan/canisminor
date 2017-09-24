webpackJsonp([2], {
  721: function(t, e, n) {
    'use strict';
    function u(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, '__esModule', { value: !0 });
    var a = n(0),
      c = u(a),
      l = n(22),
      o = n(724),
      i = u(o),
      d = n(746),
      f = u(d);
    (e.default = function() {
      return (
        (0, i.default)('Contact'),
        c.default.createElement(
          'div',
          { className: f.default.contact },
          c.default.createElement(l.Title, {
            className: f.default.title,
            title: "Let's talk",
            desc: 'u can comment with github accounts',
          }),
          c.default.createElement(l.Comment, null)
        )
      );
    }),
      (t.exports = e.default);
  },
  724: function(t, e, n) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function(t) {
        document.title = t + ' - CanisMinor';
      }),
      (t.exports = e.default);
  },
  746: function(t, e) {
    t.exports = { contact: 'contact___31C1A', title: 'title___3kcwr' };
  },
});
