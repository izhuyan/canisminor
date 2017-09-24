webpackJsonp([3], {
  723: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function n(e) {
      return { loading: e.loading.global, blogPage: e.blogPage };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u = (a(163), a(27)),
      o = l(u),
      d = (a(106), a(107)),
      f = l(d),
      r = a(0),
      c = l(r),
      i = a(105),
      s = a(40),
      g = a(24),
      _ = a(724),
      m = l(_),
      p = a(748),
      b = l(p);
    (t.default = (0, i.connect)(n)(function(e) {
      var t = e.loading,
        a = e.blogPage;
      return (
        t || (0, m.default)(a.title),
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
            'div',
            { className: b.default.footer },
            c.default.createElement(
              s.Link,
              { to: '/blog', className: b.default.back },
              c.default.createElement(o.default, { type: 'left' }),
              'Go Back'
            ),
            c.default.createElement(
              'div',
              { className: b.default.tag },
              'Tags:',
              t
                ? ''
                : a.tag.map(function(e, t) {
                    return c.default.createElement('span', { key: t }, e);
                  })
            )
          ),
          c.default.createElement(g.Comment, null)
        )
      );
    })),
      (e.exports = t.default);
  },
  724: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        document.title = e + ' - CanisMinor';
      }),
      (e.exports = t.default);
  },
  748: function(e, t) {
    e.exports = {
      page: 'page___2Bi8b',
      footer: 'footer___iOSay',
      back: 'back___1XpuF',
      tag: 'tag___25bWY',
    };
  },
});
