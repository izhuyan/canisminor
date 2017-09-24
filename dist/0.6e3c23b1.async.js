webpackJsonp([0], {
  891: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(24),
      d = a(896),
      o = l(d),
      r = a(898),
      i = l(r),
      f = a(899),
      s = l(f),
      m = a(901),
      _ = l(m),
      v = a(903),
      E = l(v),
      p = a(905),
      b = l(p),
      h = a(907),
      N = l(h),
      x = a(909),
      g = l(x),
      y = a(911),
      M = l(y),
      D = a(913),
      L = l(D),
      w = a(915),
      k = l(w);
    (t.default = function() {
      return (
        (0, o.default)('About'),
        u.default.createElement(
          'div',
          { className: i.default.intro },
          u.default.createElement(s.default, null),
          u.default.createElement(_.default, null),
          u.default.createElement(
            c.LazyLoad,
            null,
            u.default.createElement(E.default, null)
          ),
          u.default.createElement(
            c.LazyLoad,
            null,
            u.default.createElement(b.default, null)
          ),
          u.default.createElement(
            c.LazyLoad,
            null,
            u.default.createElement(N.default, null)
          ),
          u.default.createElement(
            c.LazyLoad,
            null,
            u.default.createElement(g.default, null)
          ),
          u.default.createElement(
            c.LazyLoad,
            null,
            u.default.createElement(M.default, null)
          ),
          u.default.createElement(
            c.LazyLoad,
            null,
            u.default.createElement(L.default, null)
          ),
          u.default.createElement(
            c.LazyLoad,
            null,
            u.default.createElement(k.default, null)
          )
        )
      );
    }),
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
  897: function(e, t, a) {
    'use strict';
    Object.defineProperty(t, '__esModule', { value: !0 });
    var l = function() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return { minHeight: parseInt(window.innerHeight, 10) - e + 'px' };
    };
    t.Height = l;
  },
  898: function(e, t) {
    e.exports = { intro: 'intro___3XAja' };
  },
  899: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(24),
      d = a(897),
      o = a(900),
      r = l(o);
    (t.default = function() {
      return u.default.createElement(c.Title, {
        className: r.default.intro,
        style: (0, d.Height)(150),
        title: 'CanisMinor',
        desc: 'UI / UX Designer & FE Developer',
      });
    }),
      (e.exports = t.default);
  },
  900: function(e, t) {
    e.exports = { intro: 'intro___Jjbtb' };
  },
  901: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(24),
      d = a(897),
      o = a(104),
      r = a(902),
      i = l(r);
    (t.default = function() {
      return u.default.createElement(
        'div',
        { className: i.default.intro, style: (0, d.Height)() },
        u.default.createElement(
          'div',
          { className: i.default.title },
          'Introduciton'
        ),
        u.default.createElement(
          'div',
          { className: i.default.subtitle },
          'UI/UX Designer. FE Developer.'.toUpperCase()
        ),
        u.default.createElement(
          'div',
          { className: i.default.desc },
          'Hi,\u8fd9\u91cc\u662f\u6768\u6631\u5e06\uff0c\u611f\u8c22\u60a8\u82b1\u65f6\u95f4\u6d4f\u89c8\u6211\u7684Resume.\u4ee5\u4e0b\u5c06\u4f1a\u52067\u4e2a\u7248\u5757\u9610\u8ff0\u6211\u7684\u6280\u672f\u6808\u548c\u77e5\u8bc6\u6784\u6210'
        ),
        u.default.createElement(
          'div',
          { className: i.default.doc },
          o.homeToc.map(function(e, t) {
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
  902: function(e, t) {
    e.exports = {
      intro: 'intro___37VAv',
      title: 'title___1i5wn',
      subtitle: 'subtitle___2ccsb',
      desc: 'desc___DfFnU',
      doc: 'doc___K9b3z',
    };
  },
  903: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(24),
      d = a(104),
      o = a(904),
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
          'div',
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
          'div',
          { className: r.default.info },
          u.default.createElement('div', { className: r.default.logo }),
          u.default.createElement(c.Showcase, { content: e })
        )
      );
    }),
      (e.exports = t.default);
  },
  904: function(e, t) {
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
  905: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(79),
      u = l(n),
      c = a(3),
      d = l(c),
      o = a(6),
      r = l(o),
      i = a(4),
      f = l(i),
      s = a(5),
      m = l(s),
      _ = a(0),
      v = l(_),
      E = a(24),
      p = a(104),
      b = a(906),
      h = l(b),
      N = (function(e) {
        function t(e) {
          (0, d.default)(this, t);
          var a = (0, f.default)(
            this,
            (t.__proto__ || (0, u.default)(t)).call(this, e)
          );
          return (a.state = { show: !1 }), (a.onClick = a.onClick.bind(a)), a;
        }
        return (
          (0, m.default)(t, e),
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
                return v.default.createElement(
                  'div',
                  { className: h.default.intro },
                  v.default.createElement(E.DocTitle, {
                    content: p.homeToc[1],
                  }),
                  v.default.createElement(
                    'div',
                    { className: h.default.school },
                    v.default.createElement(E.Icon, {
                      className: h.default.logo,
                      type: 'caa-logo',
                    }),
                    v.default.createElement(
                      'div',
                      { className: h.default.content },
                      v.default.createElement(E.Icon, {
                        className: h.default.title,
                        type: 'caa-text',
                      }),
                      v.default.createElement(
                        'div',
                        { className: h.default.desc },
                        'China Academy of Art',
                        v.default.createElement('br', null),
                        'Top Art School World Ranking: 7th'
                      )
                    )
                  ),
                  v.default.createElement(E.Showcase, { content: e }),
                  this.state.show
                    ? v.default.createElement(
                        'div',
                        { className: h.default.awards },
                        v.default.createElement(E.AwardList, {
                          content: p.awardList,
                        })
                      )
                    : v.default.createElement(
                        'div',
                        { className: h.default.button, onClick: this.onClick },
                        'Show Awards'
                      )
                );
              },
            },
          ]),
          t
        );
      })(v.default.Component);
    (t.default = N), (e.exports = t.default);
  },
  906: function(e, t) {
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
  907: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(24),
      d = a(104),
      o = a(908),
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
  908: function(e, t) {
    e.exports = { intro: 'intro___Jfo98' };
  },
  909: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(24),
      d = a(104),
      o = a(910),
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
            'div',
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
  910: function(e, t) {
    e.exports = {
      intro: 'intro___2l7Di',
      item: 'item___1NdsI',
      box: 'box___2U3v5',
      desc: 'desc___2LHWc',
      btn: 'btn___9V7-I',
    };
  },
  911: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(24),
      d = a(104),
      o = a(912),
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
          'div',
          { className: r.default.box },
          d.vdSkillList.map(e)
        ),
        u.default.createElement(
          'div',
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
  912: function(e, t) {
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
  913: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(24),
      d = a(104),
      o = a(914),
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
          'div',
          { className: r.default.box },
          d.feSkillList.map(e)
        )
      );
    }),
      (e.exports = t.default);
  },
  914: function(e, t) {
    e.exports = {
      intro: 'intro___1N4Wi',
      box: 'box___9CbIU',
      item: 'item___35B-Y',
      icon: 'icon___BhjC7',
    };
  },
  915: function(e, t, a) {
    'use strict';
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = a(0),
      u = l(n),
      c = a(24),
      d = a(104),
      o = a(916),
      r = l(o);
    (t.default = function() {
      return u.default.createElement(
        'div',
        { className: r.default.intro },
        u.default.createElement(c.DocTitle, { content: d.homeToc[6] }),
        u.default.createElement(
          'div',
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
  916: function(e, t) {
    e.exports = {
      intro: 'intro___1nozI',
      box: 'box___2CJvy',
      img: 'img___2VHY5',
    };
  },
});
