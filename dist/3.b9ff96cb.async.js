webpackJsonp([3], {
  624: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function n(e) {
      return { loading: e.loading.global, blogPage: e.blogPage };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u = (a(250), a(54)),
      o = l(u),
      d = (a(248), a(249)),
      f = l(d),
      c = a(0),
      r = l(c),
      i = a(96),
      s = a(34),
      g = a(20),
      _ = a(625),
      m = l(_),
      p = a(648),
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
            : r.default.createElement(g.Markdown, { data: a }),
          r.default.createElement(
            g.LazyLoad,
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
            g.LazyLoad,
            null,
            r.default.createElement(g.Comment, null)
          )
        )
      );
    })),
      (e.exports = t.default);
  },
  625: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        document.title = e + ' - CanisMinor';
      }),
      (e.exports = t.default);
  },
  648: function(e, t) {
    e.exports = {
      page: 'page___2Bi8b',
      a: 'a___3ojcI',
      footer: 'footer___iOSay',
      back: 'back___1XpuF',
      tag: 'tag___25bWY',
    };
  },
});
