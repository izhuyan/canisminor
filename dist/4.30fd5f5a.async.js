webpackJsonp([4], {
  625: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      return { loading: e.loading.global, blogToc: e.blogToc };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var u = (a(148), a(149)),
      d = l(u),
      n = (a(150), a(42)),
      r = l(n),
      f = a(0),
      s = l(f),
      c = a(98),
      i = a(34),
      _ = a(99),
      m = l(_),
      g = a(20),
      p = a(627),
      b = l(p),
      E = a(649),
      v = l(E);
    (t.default = (0, c.connect)(o)(function(e) {
      var t = e.loading,
        a = e.blogToc;
      (0, b.default)('Blog');
      var l = function(e, a) {
        return s.default.createElement(
          g.LazyLoad,
          { key: a, offset: -100, className: v.default.post },
          s.default.createElement(g.Markdown, { data: e }),
          s.default.createElement(
            'div',
            { className: v.default.footer },
            t ? '' : s.default.createElement(g.Tags, { data: e.tag }),
            s.default.createElement(
              i.Link,
              {
                to: m.default.join('blog', e.filename),
                className: v.default.readmore,
              },
              'Read More',
              s.default.createElement(r.default, { type: 'right' })
            )
          )
        );
      };
      return s.default.createElement(
        'div',
        { className: v.default.blog },
        s.default.createElement(
          'div',
          { className: v.default.list },
          t ? s.default.createElement(d.default, { size: 'large' }) : a.map(l)
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
  649: function(e, t) {
    e.exports = {
      blog: 'blog___JS5-W',
      list: 'list___1PJtj',
      post: 'post___2txIu',
      footer: 'footer___2MBFf',
      readmore: 'readmore___17XgT',
      tag: 'tag___1fdB-',
      showup: 'showup___1ys9V',
    };
  },
});
