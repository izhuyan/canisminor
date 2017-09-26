webpackJsonp([3], {
  626: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function n(e) {
      return { loading: e.loading.global, blogPage: e.blogPage };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u = (a(150), a(42)),
      o = l(u),
      d = (a(148), a(149)),
      f = l(d),
      r = a(0),
      c = l(r),
      i = a(98),
      s = a(34),
      g = a(20),
      _ = a(627),
      p = l(_),
      m = a(650),
      b = l(m);
    (t.default = (0, i.connect)(n)(function(e) {
      var t = e.loading,
        a = e.blogPage;
      return (
        t || (0, p.default)(a.title),
        c.default.createElement(
          'div',
          { className: b.default.page },
          t
            ? c.default.createElement(f.default, {
                spinning: t,
                size: 'large',
                style: { width: '100%', lineHeight: '720px' },
              })
            : c.default.createElement(g.Markdown, { data: a }),
          c.default.createElement(
            g.LazyLoad,
            { className: b.default.footer },
            c.default.createElement(
              s.Link,
              { to: '/blog', className: b.default.back },
              c.default.createElement(o.default, { type: 'left' }),
              'Go Back'
            ),
            t ? '' : c.default.createElement(g.Tags, { data: a.tag })
          ),
          c.default.createElement(
            g.LazyLoad,
            null,
            c.default.createElement(g.Comment, null)
          )
        )
      );
    })),
      (e.exports = t.default);
  },
  627: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        document.title = e + ' - CanisMinor';
      }),
      (e.exports = t.default);
  },
  650: function(e, t) {
    e.exports = {
      page: 'page___2Bi8b',
      showup: 'showup___2Y6GB',
      footer: 'footer___iOSay',
      back: 'back___1XpuF',
    };
  },
});
