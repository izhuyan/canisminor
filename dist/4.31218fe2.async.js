webpackJsonp([4], {
  722: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return { loading: e.loading.global, blogToc: e.blogToc };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = (a(106), a(107)),
      u = l(n),
      d = (a(163), a(27)),
      r = l(d),
      f = a(0),
      c = l(f),
      s = a(105),
      i = a(40),
      _ = a(108),
      m = l(_),
      g = a(22),
      p = a(724),
      b = l(p),
      E = a(747),
      v = l(E);
    (t.default = (0, s.connect)(o)(function(e) {
      var t = e.loading,
        a = e.blogToc;
      (0, b.default)('Blog');
      var l = function(e, a) {
        return c.default.createElement(
          g.LazyLoad,
          { key: a, offset: -100, className: v.default.post },
          c.default.createElement(g.Markdown, { data: e }),
          c.default.createElement(
            'div',
            { className: v.default.footer },
            c.default.createElement(
              'div',
              { className: v.default.tag },
              'Tags:',
              t
                ? ''
                : e.tag.map(function(e, t) {
                    return c.default.createElement('span', { key: t }, e);
                  })
            ),
            c.default.createElement(
              i.Link,
              {
                to: m.default.join('blog', e.filename),
                className: v.default.readmore,
              },
              'Read More',
              c.default.createElement(r.default, { type: 'right' })
            )
          )
        );
      };
      return c.default.createElement(
        'div',
        { className: v.default.blog },
        c.default.createElement(
          'div',
          { className: v.default.list },
          t ? c.default.createElement(u.default, { size: 'large' }) : a.map(l)
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
  747: function(e, t) {
    e.exports = {
      blog: 'blog___JS5-W',
      list: 'list___1PJtj',
      post: 'post___2txIu',
      footer: 'footer___2MBFf',
      readmore: 'readmore___17XgT',
      tag: 'tag___1fdB-',
    };
  },
});
