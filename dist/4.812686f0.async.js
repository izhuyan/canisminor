webpackJsonp([4], {
  894: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function n(e) {
      return { loading: e.loading.global, blogToc: e.blogToc };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var o = (a(287), a(288)),
      r = l(o),
      u = (a(106), a(107)),
      d = l(u),
      f = (a(163), a(27)),
      c = l(f),
      i = a(0),
      s = l(i),
      _ = a(105),
      m = a(39),
      g = a(108),
      p = l(g),
      b = a(24),
      w = a(896),
      E = l(w),
      v = a(919),
      M = l(v);
    (t.default = (0, _.connect)(n)(function(e) {
      var t = e.loading,
        a = e.blogToc;
      (0, E.default)('Blog');
      var l = [
        {
          title: 'post',
          dataIndex: 'title',
          className: M.default.post,
          render: function(e, a) {
            return s.default.createElement(
              'div',
              null,
              s.default.createElement(b.Markdown, { data: a }),
              s.default.createElement(
                'div',
                { className: M.default.footer },
                s.default.createElement(
                  'div',
                  { className: M.default.tag },
                  'Tags:',
                  t
                    ? ''
                    : a.tag.map(function(e, t) {
                        return s.default.createElement('span', { key: t }, e);
                      })
                ),
                s.default.createElement(
                  m.Link,
                  {
                    to: p.default.join('blog', a.filename),
                    className: M.default.readmore,
                  },
                  'Read More',
                  s.default.createElement(c.default, { type: 'right' })
                )
              )
            );
          },
        },
      ];
      return s.default.createElement(
        'div',
        { className: M.default.blog },
        t
          ? s.default.createElement(d.default, {
              spinning: t,
              size: 'large',
              style: { width: '100%', lineHeight: '720px' },
            })
          : s.default.createElement(r.default, {
              className: M.default.table,
              rowClassName: function() {
                return M.default.row;
              },
              showHeader: !1,
              columns: l,
              dataSource: a,
              rowKey: function(e) {
                return e.filename;
              },
            })
      );
    })),
      (e.exports = t.default);
  },
  896: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 }),
      (t.default = function(e) {
        document.title = e + ' - CanisMinor';
      }),
      (e.exports = t.default);
  },
  919: function(e, t) {
    e.exports = {
      blog: 'blog___JS5-W',
      table: 'table___3Om_t',
      row: 'row___2wpkm',
      post: 'post___2txIu',
      footer: 'footer___2MBFf',
      readmore: 'readmore___17XgT',
      tag: 'tag___1fdB-',
    };
  },
});
