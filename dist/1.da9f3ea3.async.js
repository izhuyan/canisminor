webpackJsonp([1], {
  892: function(e, t, n) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function i(e) {
      return { loading: e.loading.global, blogToc: e.projectToc };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = (n(106), n(107)),
      r = o(l),
      u = n(0),
      a = o(u),
      c = n(105),
      d = n(24),
      s = n(896),
      f = o(s),
      p = n(897),
      g = n(917),
      _ = o(g);
    (t.default = (0, c.connect)(i)(function(e) {
      var t = e.loading,
        n = e.blogToc;
      return (
        (0, f.default)('Projects'),
        a.default.createElement(
          'div',
          { className: _.default.project },
          a.default.createElement(d.Title, {
            style: (0, p.Height)(150),
            title: 'Sense & pixels',
            desc: 'wanna see more ? updating soon...',
          }),
          t
            ? a.default.createElement(r.default, {
                spinning: t,
                size: 'large',
                style: { width: '100%', lineHeight: '720px' },
              })
            : a.default.createElement(d.ProList, { content: n })
        )
      );
    })),
      (e.exports = t.default);
  },
  896: function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        document.title = e + ' - CanisMinor';
      }),
      (e.exports = t.default);
  },
  897: function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = function() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return { minHeight: parseInt(window.innerHeight, 10) - e + 'px' };
    };
    t.Height = o;
  },
  917: function(e, t) {
    e.exports = { project: 'project___1iE9X' };
  },
});
