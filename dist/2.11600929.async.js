webpackJsonp([2], {
  622: function(t, e, u) {
    'use strict';
    function n(t) {
      return t && t.__esModule ? t : { default: t };
    }
    Object.defineProperty(e, '__esModule', { value: !0 });
    var a = u(0),
      c = n(a),
      l = u(20),
      o = u(625),
      s = n(o),
      i = u(646),
      d = n(i);
    (e.default = function() {
      return (
        (0, s.default)('Contact'),
        c.default.createElement(
          'div',
          { className: d.default.contact },
          c.default.createElement(l.Title, {
            className: d.default.title,
            title: "Let's talk",
            desc: 'u can comment with github accounts',
          }),
          c.default.createElement(l.Comment, null)
        )
      );
    }),
      (t.exports = e.default);
  },
  625: function(t, e, u) {
    'use strict';
    Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function(t) {
        document.title = t + ' - CanisMinor';
      }),
      (t.exports = e.default);
  },
  646: function(t, e) {
    t.exports = {
      contact: 'contact___31C1A',
      title: 'title___3kcwr',
      showup: 'showup___3s9OT',
    };
  },
});
