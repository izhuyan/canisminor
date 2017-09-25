webpackJsonp([1], {
  621: function(e, t, n) {
    'use strict';
    function o(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e) {
      return { loading: e.loading.global, blogToc: e.projectToc };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u = (n(148), n(149)),
      a = o(u),
      c = n(0),
      i = o(c),
      r = n(98),
      s = n(20),
      d = n(625),
      f = o(d),
      p = n(645),
      _ = o(p);
    (t.default = (0, r.connect)(l)(function(e) {
      var t = e.loading,
        n = e.blogToc;
      return (
        (0, f.default)('Projects'),
        i.default.createElement(
          'div',
          { className: _.default.project },
          i.default.createElement(s.Title, {
            title: 'Sense & pixels',
            desc: 'wanna see more ? updating soon...',
          }),
          t
            ? i.default.createElement(a.default, {
                spinning: t,
                size: 'large',
                style: { width: '100%', lineHeight: '720px' },
              })
            : i.default.createElement(s.ProList, { content: n })
        )
      );
    })),
      (e.exports = t.default);
  },
  625: function(e, t, n) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        document.title = e + ' - CanisMinor';
      }),
      (e.exports = t.default);
  },
  645: function(e, t) {
    e.exports = { project: 'project___1iE9X', showup: 'showup___32q7b' };
  },
});
