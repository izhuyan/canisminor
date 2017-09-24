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
      c = a(0),
      r = l(c),
      i = a(105),
      s = a(40),
      _ = a(24),
      g = a(724),
      m = l(g),
      p = a(748),
      b = l(p);
    (t.default = (0, i.connect)(n)(function(e) {
      var t = e.loading,
        a = e.blogPage;
      return (
        t || (0, m.default)(a.title),
        r.default.createElement(
          'div',
          { className: b.default.page },
          t
            ? r.default.createElement(f.default, {
                spinning: t,
                size: 'large',
                style: { width: '100%', lineHeight: '720px' },
              })
            : r.default.createElement(_.Markdown, { data: a }),
          r.default.createElement(
            _.LazyLoad,
            { className: b.default.footer },
            r.default.createElement(
              s.Link,
              { to: '/blog', className: b.default.back },
              r.default.createElement(o.default, { type: 'left' }),
              'Go Back'
            ),
            r.default.createElement(
              'div',
              { className: b.default.tag },
              'Tags:',
              t
                ? ''
                : a.tag.map(function(e, t) {
                    return r.default.createElement('span', { key: t }, e);
                  })
            )
          ),
          r.default.createElement(
            _.LazyLoad,
            null,
            r.default.createElement(_.Comment, null)
          )
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
      showup: 'showup___2Y6GB',
      a: 'a___3ojcI',
      footer: 'footer___iOSay',
      back: 'back___1XpuF',
      tag: 'tag___25bWY',
    };
  },
});
