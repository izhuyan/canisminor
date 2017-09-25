webpackJsonp([0], {
  620: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(625),
      d = l(c),
      o = a(626),
      r = l(o),
      i = a(627),
      f = l(i),
      s = a(629),
      _ = l(s),
      m = a(631),
      E = l(m),
      v = a(633),
      p = l(v),
      b = a(635),
      N = l(b),
      x = a(637),
      h = l(x),
      y = a(639),
      g = l(y),
      L = a(641),
      M = l(L),
      D = a(643),
      k = l(D);
    (t.default = function() {
      return (
        (0, d.default)('About'),
        u.default.createElement(
          'div',
          { className: r.default.intro },
          u.default.createElement(f.default, null),
          u.default.createElement(_.default, null),
          u.default.createElement(E.default, null),
          u.default.createElement(p.default, null),
          u.default.createElement(N.default, null),
          u.default.createElement(h.default, null),
          u.default.createElement(g.default, null),
          u.default.createElement(M.default, null),
          u.default.createElement(k.default, null)
        )
      );
    }),
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
  626: function(e, t) {
    e.exports = { intro: 'intro___3XAja', a: 'a___3aZIN' };
  },
  627: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(20),
      d = a(628),
      o = l(d);
    (t.default = function() {
      return u.default.createElement(c.Title, {
        className: o.default.intro,
        title: 'CanisMinor',
        desc: 'UI / UX Designer & FE Developer',
      });
    }),
      (e.exports = t.default);
  },
  628: function(e, t) {
    e.exports = { intro: 'intro___Jjbtb' };
  },
  629: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(20),
      d = a(97),
      o = a(630),
      r = l(o);
    (t.default = function() {
      return u.default.createElement(
        c.LazyLoad,
        { className: r.default.intro },
        u.default.createElement(
          'div',
          { className: r.default.title },
          'Introduciton'
        ),
        u.default.createElement(
          'div',
          { className: r.default.subtitle },
          'UI/UX Designer. FE Developer.'.toUpperCase()
        ),
        u.default.createElement(
          'div',
          { className: r.default.desc },
          'Hi,\u8fd9\u91cc\u662f\u6768\u6631\u5e06\uff0c\u611f\u8c22\u60a8\u82b1\u65f6\u95f4\u6d4f\u89c8\u6211\u7684Resume.\u4ee5\u4e0b\u5c06\u4f1a\u52067\u4e2a\u7248\u5757\u9610\u8ff0\u6211\u7684\u6280\u672f\u6808\u548c\u77e5\u8bc6\u6784\u6210'
        ),
        u.default.createElement(
          'div',
          { className: r.default.doc },
          d.homeToc.map(function(e, t) {
            return u.default.createElement(c.IntroIcon, {
              key: t,
              type: e.type,
              text: e.text,
            });
          })
        )
      );
    }),
      (e.exports = t.default);
  },
  630: function(e, t) {
    e.exports = {
      intro: 'intro___37VAv',
      title: 'title___1i5wn',
      subtitle: 'subtitle___2ccsb',
      desc: 'desc___DfFnU',
      doc: 'doc___K9b3z',
    };
  },
  631: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(20),
      d = a(97),
      o = a(632),
      r = l(o);
    (t.default = function() {
      var e = [
        { title: 'born:', desc: '1990.9.30' },
        { title: 'mobile:', desc: '153-0585-3008' },
        { title: 'e-mail:', desc: 'i@canisminor.cc' },
      ];
      return u.default.createElement(
        'div',
        { className: r.default.intro },
        u.default.createElement(c.DocTitle, { content: d.homeToc[0] }),
        u.default.createElement(
          c.LazyLoad,
          { className: r.default.avatar },
          u.default.createElement('div', { className: r.default.img }),
          u.default.createElement(
            'div',
            { className: r.default.text },
            u.default.createElement(c.Icon, {
              className: r.default.title,
              type: 'name',
            }),
            u.default.createElement(
              'div',
              { className: r.default.desc },
              '\u73b0\u5c45\u5317\u4eac\uff0cUED\u5168\u6808\u8bbe\u8ba1\u5e08\uff0c\u6bd5\u4e1a\u4e8eCAA\u4e2d\u56fd\u7f8e\u672f\u5b66\u966209\u7ea7\u89c6\u89c9\u4f20\u8fbe\u3002>5\u5e74\u4ece\u4e1a\u7ecf\u9a8c\uff0c\u4e13\u6ce8\u4e8e Design \xbb Code \u8bbe\u8ba1\u6d41\u7a0b\u7ba1\u7406\u548cUI\u539f\u5b50\u8bbe\u8ba1\u6a21\u5f0f(Atomic Design)\u53ca\u81ea\u52a8\u5316\u8bbe\u8ba1\uff0c\u5177\u5907\u6d41\u884c\u524d\u7aef\u6280\u672f\u6808ES6/React/Vue\uff0c\u963f\u91cc\u5f00\u6e90\u9879\u76ee\u91cd\u5ea6\u7528\u6237Antd/Dva/Roadhog\uff0cSketch\u7b2c\u4e09\u65b9\u63d2\u4ef6\u4f5c\u8005\u3002'
            )
          )
        ),
        u.default.createElement(
          c.LazyLoad,
          { className: r.default.info },
          u.default.createElement('div', { className: r.default.logo }),
          u.default.createElement(c.Showcase, { content: e })
        )
      );
    }),
      (e.exports = t.default);
  },
  632: function(e, t) {
    e.exports = {
      intro: 'intro___26I6R',
      avatar: 'avatar___2Gx1I',
      img: 'img___ngrQP',
      text: 'text___1Dx3d',
      title: 'title___1hQ8u',
      desc: 'desc___cDTQU',
      info: 'info___d5IKy',
      logo: 'logo___3D5gx',
    };
  },
  633: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(75),
      u = l(n),
      c = a(7),
      d = l(c),
      o = a(8),
      r = l(o),
      i = a(11),
      f = l(i),
      s = a(12),
      _ = l(s),
      m = a(0),
      E = l(m),
      v = a(20),
      p = a(97),
      b = a(634),
      N = l(b),
      x = (function(e) {
        function t(e) {
          (0, d.default)(this, t);
          var a = (0, f.default)(
            this,
            (t.__proto__ || (0, u.default)(t)).call(this, e)
          );
          return (a.state = { show: !1 }), (a.onClick = a.onClick.bind(a)), a;
        }
        return (
          (0, _.default)(t, e),
          (0, r.default)(t, [
            {
              key: 'onClick',
              value: function() {
                this.setState({ show: !this.state.show });
              },
            },
            {
              key: 'render',
              value: function() {
                var e = [
                  { title: 'MAJOR:', desc: 'Visual Design' },
                  { title: 'DUR:', desc: '2009 \xbb 13' },
                  { title: 'GPA:', desc: '3.58/4' },
                ];
                return E.default.createElement(
                  'div',
                  { className: N.default.intro },
                  E.default.createElement(v.DocTitle, {
                    content: p.homeToc[1],
                  }),
                  E.default.createElement(
                    v.LazyLoad,
                    { className: N.default.school },
                    E.default.createElement(v.Icon, {
                      className: N.default.logo,
                      type: 'caa-logo',
                    }),
                    E.default.createElement(
                      'div',
                      { className: N.default.content },
                      E.default.createElement(v.Icon, {
                        className: N.default.title,
                        type: 'caa-text',
                      }),
                      E.default.createElement(
                        'div',
                        { className: N.default.desc },
                        'China Academy of Art',
                        E.default.createElement('br', null),
                        'Top Art School World Ranking: 7th'
                      )
                    )
                  ),
                  E.default.createElement(
                    v.LazyLoad,
                    null,
                    E.default.createElement(v.Showcase, { content: e }),
                    this.state.show
                      ? E.default.createElement(
                          'div',
                          { className: N.default.awards },
                          E.default.createElement(v.AwardList, {
                            content: p.awardList,
                          })
                        )
                      : E.default.createElement(
                          'div',
                          {
                            className: N.default.button,
                            onClick: this.onClick,
                          },
                          'Show Awards'
                        )
                  )
                );
              },
            },
          ]),
          t
        );
      })(E.default.Component);
    (t.default = x), (e.exports = t.default);
  },
  634: function(e, t) {
    e.exports = {
      intro: 'intro___3bDwP',
      school: 'school___JV61F',
      logo: 'logo___12Rnf',
      content: 'content___2tYmb',
      title: 'title___nC0hJ',
      desc: 'desc___3DBTP',
      awards: 'awards___RrEon',
      button: 'button___3Ukd2',
    };
  },
  635: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(20),
      d = a(97),
      o = a(636),
      r = l(o);
    (t.default = function() {
      return u.default.createElement(
        'div',
        { className: r.default.intro },
        u.default.createElement(c.DocTitle, { content: d.homeToc[2] }),
        u.default.createElement(
          'div',
          null,
          u.default.createElement(c.ExpList, { content: d.expList })
        )
      );
    }),
      (e.exports = t.default);
  },
  636: function(e, t) {
    e.exports = { intro: 'intro___Jfo98' };
  },
  637: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(20),
      d = a(97),
      o = a(638),
      r = l(o);
    (t.default = function() {
      var e = function(e, t) {
          return u.default.createElement('img', {
            alt: 'Spec',
            key: t,
            width: e.width,
            height: e.height || '',
            src: e.src,
          });
        },
        t = function(e, t) {
          return u.default.createElement(
            c.Button,
            { key: t, url: e.url, ghost: t > 0 },
            e.title
          );
        },
        a = function(a, l) {
          return u.default.createElement(
            c.LazyLoad,
            { key: l, className: r.default.item },
            1 === a.img.length
              ? a.img.map(e)
              : u.default.createElement(
                  'div',
                  { className: r.default.box },
                  a.img.map(e)
                ),
            u.default.createElement(
              'div',
              { className: r.default.desc },
              a.desc
            ),
            1 === a.btn.length
              ? a.btn.map(t)
              : u.default.createElement(
                  'div',
                  { className: r.default.btn },
                  a.btn.map(t)
                )
          );
        };
      return u.default.createElement(
        'div',
        { className: r.default.intro },
        u.default.createElement(c.DocTitle, { content: d.homeToc[3] }),
        d.specList.map(a)
      );
    }),
      (e.exports = t.default);
  },
  638: function(e, t) {
    e.exports = {
      intro: 'intro___2l7Di',
      item: 'item___1NdsI',
      box: 'box___2U3v5',
      desc: 'desc___2LHWc',
      btn: 'btn___9V7-I',
    };
  },
  639: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(20),
      d = a(97),
      o = a(640),
      r = l(o);
    (t.default = function() {
      var e = function(e, t) {
        return u.default.createElement(
          'div',
          { className: r.default.card, key: t },
          u.default.createElement(
            'div',
            { className: r.default.title },
            e.title
          ),
          u.default.createElement(
            'div',
            { className: r.default.desc },
            e.item.map(function(e, t) {
              return u.default.createElement('p', { key: t }, e);
            })
          )
        );
      };
      return u.default.createElement(
        'div',
        { className: r.default.intro },
        u.default.createElement(c.DocTitle, { content: d.homeToc[4] }),
        u.default.createElement(
          c.LazyLoad,
          { className: r.default.box },
          d.vdSkillList.map(e)
        ),
        u.default.createElement(
          c.LazyLoad,
          { className: r.default.color },
          u.default.createElement('div', { className: r.default.item }),
          u.default.createElement('div', { className: r.default.item }),
          u.default.createElement('div', { className: r.default.item }),
          u.default.createElement('div', { className: r.default.item })
        )
      );
    }),
      (e.exports = t.default);
  },
  640: function(e, t) {
    e.exports = {
      intro: 'intro___3wTlo',
      box: 'box___82mro',
      card: 'card___3av_M',
      title: 'title___jL6yq',
      desc: 'desc___ANoMv',
      color: 'color___2abVW',
      item: 'item___3X3bA',
    };
  },
  641: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(20),
      d = a(97),
      o = a(642),
      r = l(o);
    (t.default = function() {
      var e = function(e, t) {
        return u.default.createElement(
          'div',
          { className: r.default.item, key: t },
          u.default.createElement(c.SvgIcon, {
            className: r.default.icon,
            type: 'fe-' + e.icon,
          }),
          e.title
        );
      };
      return u.default.createElement(
        'div',
        { className: r.default.intro },
        u.default.createElement(c.DocTitle, { content: d.homeToc[5] }),
        u.default.createElement(
          c.LazyLoad,
          { className: r.default.box },
          d.feSkillList.map(e)
        )
      );
    }),
      (e.exports = t.default);
  },
  642: function(e, t) {
    e.exports = {
      intro: 'intro___1N4Wi',
      box: 'box___9CbIU',
      item: 'item___35B-Y',
      icon: 'icon___BhjC7',
    };
  },
  643: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(20),
      d = a(97),
      o = a(644),
      r = l(o);
    (t.default = function() {
      return u.default.createElement(
        'div',
        { className: r.default.intro },
        u.default.createElement(c.DocTitle, { content: d.homeToc[6] }),
        u.default.createElement(
          c.LazyLoad,
          { className: r.default.box },
          u.default.createElement('img', {
            alt: 'Project',
            className: r.default.img,
            src: 'img/por-1.png',
            width: '940',
          }),
          u.default.createElement(
            c.Button,
            { to: '/project' },
            'Discover project story'
          )
        )
      );
    }),
      (e.exports = t.default);
  },
  644: function(e, t) {
    e.exports = {
      intro: 'intro___1nozI',
      box: 'box___2CJvy',
      img: 'img___2VHY5',
    };
  },
});
