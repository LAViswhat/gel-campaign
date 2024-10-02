!(function o(n, i, a) {
  function l(r, e) {
    if (!i[r]) {
      if (!n[r]) {
        var t = "function" == typeof require && require;
        if (!e && t) return t(r, !0);
        if (s) return s(r, !0);
        throw new Error("Cannot find module '" + r + "'");
      }
      e = i[r] = { exports: {} };
      n[r][0].call(
        e.exports,
        function (e) {
          var t = n[r][1][e];
          return l(t || e);
        },
        e,
        e.exports,
        o,
        n,
        i,
        a
      );
    }
    return i[r].exports;
  }
  for (
    var s = "function" == typeof require && require, e = 0;
    e < a.length;
    e++
  )
    l(a[e]);
  return l;
})(
  {
    1: [
      function (e, t, r) {
        "use strict";
        var a,
          o = e("@babel/runtime/helpers/interopRequireDefault"),
          l = e("./modules/helpers"),
          s = e("./modules/screenChanger"),
          c = o(e("./modules/popup-window"));
        (a = jQuery),
          document.addEventListener("DOMContentLoaded", function () {
            new s.ScreenChecker(".js-screen").init({
              threshold: 0.5,
              className: null,
            });
            var i = new c.default();
            i.init(),
              document.body.addEventListener("submit", function (e) {
                var o,
                  n,
                  t = e.target.dataset.role;
                console.log("1"),
                  "mail" === t &&
                    (e.preventDefault(),
                    (o = e.target) &&
                      ((n = document.querySelector(".js-notice")),
                      (t = new FormData(o)),
                      fetch("mail.php", { method: "POST", body: t })
                        .then(function (e) {
                          return e.json();
                        })
                        .then(function (e) {
                          var t, r;
                          console.log(e),
                            "popup" ===
                            (null == (t = o.dataset) ? void 0 : t.type)
                              ? ((r = o.querySelector(".btn")),
                                !0 === e.success
                                  ? (r.classList.add("success"),
                                    (r.innerText = "Successfully sent!"))
                                  : (r.classList.add("error"),
                                    (r.innerText = "Send error!")),
                                setTimeout(function (e) {
                                  i.forceCloseAllPopup(),
                                    o.reset(),
                                    r.classList.remove("success", "error"),
                                    (r.innerText = "Sent");
                                }, 2e3))
                              : (!0 === e.success
                                  ? (o.reset(),
                                    (n.innerHTML =
                                      '<p class="notice-success">'.concat(
                                        e.message,
                                        "</p>"
                                      )))
                                  : (n.innerHTML =
                                      '<p class="notice-error">'.concat(
                                        e.message,
                                        "</p>"
                                      )),
                                setTimeout(function (e) {
                                  n.innerHTML = "";
                                }, 3e3));
                        })));
              });
            var r = document.querySelectorAll(".js-flag"),
              o = document.querySelector(".js-header"),
              n = document.querySelector(".js-hamburger"),
              e =
                (r &&
                  r.forEach(function (e) {
                    e.addEventListener("click", function (e) {
                      e.preventDefault(),
                        document.body.classList.add("scroll-flag"),
                        r.forEach(function (e) {
                          e.classList.remove("active"),
                            e.classList.remove("line");
                        });
                      var t = e.target.dataset.href;
                      e.target.classList.add("active"),
                        e.target.classList.add("line"),
                        o &&
                          n &&
                          (o.classList.remove("open"),
                          n.classList.remove("active")),
                        (e = document.getElementById("#".concat(t))),
                        window.scroll({
                          behavior: "smooth",
                          left: 0,
                          top: e.offsetTop,
                        }),
                        setTimeout(function (e) {
                          document.body.classList.remove("scroll-flag");
                        }, 1500);
                    });
                  }),
                document.querySelectorAll(".down-btn"));
            e &&
              e.forEach(function (e) {
                e.addEventListener("click", function (e) {
                  e.preventDefault(), e.target.classList.toggle("active");
                  (e = e.target.closest("section")),
                    (e = e && e.querySelectorAll(".js-hidden"));
                  a(e).slideToggle();
                });
              }),
              (window.position_link = []),
              r &&
                r.forEach(function (e) {
                  var t = e.dataset.href,
                    t = document.getElementById("#".concat(t));
                  window.position_link.push({ pos: t.offsetTop, el: e });
                }),
              window.addEventListener("scroll", function (e) {
                var t = window.scrollY;
                document.body.classList.contains("scroll-flag") ||
                  (window.position_link &&
                    window.position_link.forEach(function (e) {
                      t + 100 < window.position_link[0].pos
                        ? (r.forEach(function (e) {
                            e.classList.remove("active"),
                              e.classList.remove("line");
                          }),
                          window.position_link[0].el.classList.add("active"),
                          window.position_link[0].el.classList.add("line"))
                        : t + 100 >= e.pos &&
                          (r.forEach(function (e) {
                            e.classList.remove("active"),
                              e.classList.remove("line");
                          }),
                          e.el.classList.add("active"),
                          e.el.classList.add("line"));
                    })),
                  150 < t
                    ? o.classList.add("fixed")
                    : o.classList.remove("fixed");
              }),
              document.body.addEventListener("click", function (e) {
                switch (e.target.dataset.role) {
                  case "hamburger":
                    e.preventDefault(),
                      e.target.classList.toggle("active"),
                      e.target.classList.contains("active")
                        ? o.classList.add("open")
                        : o.classList.remove("open");
                    break;
                  case "example":
                    e.preventDefault();
                }
              }),
              document.body.addEventListener(
                "keyup",
                (0, l.debounce)(function (e) {
                  e.target.dataset.role;
                }, 1e3)
              );
          });
      },
      {
        "./modules/helpers": 2,
        "./modules/popup-window": 3,
        "./modules/screenChanger": 4,
        "@babel/runtime/helpers/interopRequireDefault": 10,
      },
    ],
    2: [
      function (e, t, r) {
        "use strict";
        var o = e("@babel/runtime/helpers/interopRequireDefault"),
          a =
            (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.anchorLinkScroll = function (e) {
              var t =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
              if (!e)
                throw Error(
                  '"anchorLinkScroll function - "You didn\'t add correct selector for anchor links'
                );
              e = document.querySelectorAll(e);
              e &&
                (0, i.default)(e).forEach(function (e) {
                  e.addEventListener("click", function (e) {
                    e.preventDefault();
                    (e =
                      "A" === e.target.nodeName
                        ? e.target.getAttribute("href")
                        : e.target.dataset.href),
                      (e = document.querySelector(e));
                    e &&
                      window.scroll({
                        behavior: "smooth",
                        left: 0,
                        top: e.offsetTop,
                      }),
                      t && t();
                  });
                });
            }),
            (r.check_and_login_user = void 0),
            (r.closest_polyfill = function () {
              window.Element &&
                !Element.prototype.closest &&
                (Element.prototype.closest = function (e) {
                  var t,
                    r = (this.document || this.ownerDocument).querySelectorAll(
                      e
                    ),
                    o = this;
                  do {
                    for (t = r.length; 0 <= --t && r.item(t) !== o; );
                  } while (t < 0 && (o = o.parentElement));
                  return o;
                });
            }),
            (r.debounce = r.copyToClipboard = void 0),
            (r.equalHeights = l),
            (r.equalHeights_inrow = function (e, t) {
              if (!e || !t)
                throw Error(
                  '"equalHeights_inrow function - "You didn\'t add required parameters'
                );
              for (
                var r = (0, i.default)(document.querySelectorAll(e)),
                  o = r.length,
                  n = 0;
                n <= o / t;
                n++
              )
                l(r.slice(n * t, n * t + t));
              return e;
            }),
            (r.fadeIn = function (r, e) {
              if (!r)
                throw Error(
                  '"fadeIn function - "You didn\'t add required parameters'
                );
              (r.style.opacity = 0),
                (r.style.display = e || "block"),
                (function e() {
                  var t = parseFloat(r.style.opacity);
                  1 < (t += 0.1) ||
                    ((r.style.opacity = t), requestAnimationFrame(e));
                })();
            }),
            (r.fadeOut = function (t) {
              if (!t)
                throw Error(
                  '"fadeOut function - "You didn\'t add required parameters'
                );
              (t.style.opacity = 1),
                (function e() {
                  (t.style.opacity -= 0.1) < 0
                    ? (t.style.display = "none")
                    : requestAnimationFrame(e);
                })();
            }),
            (r.getProjectData = void 0),
            (r.isInViewport = function (e) {
              var t =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : 100;
              if (!e)
                throw Error(
                  '"isInViewport function - "You didn\'t add required parameters'
                );
              var r = window.scrollY || window.pageYOffset,
                t = e.getBoundingClientRect().top + t + r,
                o = r,
                r = r + window.innerHeight,
                n = t,
                t = t + e.clientHeight;
              return (o <= t && t <= r) || (n <= r && o <= n);
            }),
            (r.searchFunction = void 0),
            (r.trimParagraph = function () {
              (0, i.default)(document.querySelectorAll("p")).forEach(function (
                e
              ) {
                e.innerHTML = e.innerHTML.trim();
              });
            }),
            (r.validateField = void 0),
            o(e("@babel/runtime/regenerator"))),
          n = o(e("@babel/runtime/helpers/asyncToGenerator")),
          i = o(e("@babel/runtime/helpers/toConsumableArray"));
        function l(e) {
          var t =
            1 < arguments.length && void 0 !== arguments[1]
              ? arguments[1]
              : "max";
          if (!e)
            throw Error(
              '"equalHeights function - "You didn\'t add required parameters'
            );
          var r = [],
            o = Array.isArray(e)
              ? e
              : (0, i.default)(document.querySelectorAll(e)),
            n =
              (o.forEach(function (e) {
                e.style.height = "auto";
              }),
              o.forEach(function (e) {
                r.push(e.offsetHeight);
              }),
              ("max" === t ? Math.max : Math.min).apply(0, r));
          return (
            o.forEach(function (e) {
              e.style.height = n + "px";
            }),
            e
          );
        }
        o(e("smoothscroll-polyfill")).default.polyfill();
        function s() {
          var e =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : null;
          if (!e || !t)
            throw Error(
              '"validateField function - "You didn\'t add required parameters'
            );
          var r = /^.+$/,
            o = !1;
          switch (e) {
            case "name":
              o = /^[a-zA-Zа-яА-Я\s]{2,30}$/.test(t);
              break;
            case "phone":
              o = /^[0-9\+]{6,13}$/.test(t);
              break;
            case "postal":
              o = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i.test(t);
              break;
            case "email":
              o = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t);
              break;
            case "price":
            case "aim":
            case "date":
            case "subject":
              o = r.test(t);
          }
          return o;
        }
        (r.debounce = function (r) {
          var o,
            n =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : 1e3;
          if (r)
            return function () {
              var e = arguments,
                t = this;
              clearTimeout(o),
                (o = setTimeout(function () {
                  return r.apply(t, e);
                }, n));
            };
          throw Error(
            '"debounce function - "You didn\'t add required parameters'
          );
        }),
          (r.copyToClipboard = function (e, t) {
            if (!e || !t)
              throw Error(
                '"copyToClipboard function - "You didn\'t add required parameters'
              );
            var r = document.createElement("textarea");
            (r.value = t.value), document.body.appendChild(r), r.select();
            try {
              document.execCommand("copy") &&
                (e.classList.add("copied"),
                setTimeout(function () {
                  e.classList.remove("copied");
                }, 3e3));
            } catch (e) {
              console.log("Oops, unable to copy");
            }
            document.body.removeChild(r);
          });
        r.validateField = s;
        o = (function () {
          var t = (0, n.default)(
            a.default.mark(function e(t) {
              var r, o, n, i;
              return a.default.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      throw Error(
                        '"check_and_login_user" function - You didn\'t add required parameters'
                      );
                    case 2:
                      if (
                        ((n = t["login-email-phone"]),
                        (r = t["submit-btn"]),
                        (o = n.nextElementSibling),
                        (i = s("email", n.value)),
                        (n = s("phone", n.value)),
                        i || n || !o)
                      ) {
                        e.next = 10;
                        break;
                      }
                      return (
                        (o.innerHTML =
                          var_from_php.string_translation.email_phone_not_valid),
                        e.abrupt("return")
                      );
                    case 10:
                      r && r.classList.add("loading"),
                        o && (o.innerHTML = ""),
                        (i = new FormData(t)).append(
                          "action",
                          "check_and_login_user"
                        ),
                        fetch(var_from_php.ajax_url, {
                          method: "POST",
                          body: i,
                        })
                          .then(function (e) {
                            return e.json();
                          })
                          .then(function (e) {
                            r && r.classList.remove("loading"),
                              e.success &&
                                (window.location.href =
                                  var_from_php.account_url);
                          });
                    case 15:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (e) {
            return t.apply(this, arguments);
          };
        })();
        (r.check_and_login_user = o),
          (r.getProjectData = function (e, t) {
            var r = e.value,
              o = new FormData(),
              n = e.closest("form");
            o.append("action", "get_project_data"),
              o.append("project_id", r),
              fetch(var_from_php.ajax_url, { method: "POST", body: o })
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  e.success &&
                    ((n["start-date"].value = e.data.start_date),
                    (n["end-date"].value = e.data.end_date),
                    (n["project-description"].value =
                      e.data.project_description),
                    t && t());
                });
          });
        r.searchFunction = function (e, t) {
          var r = new FormData();
          r.append("action", "search_projects"),
            r.append("search_value", e),
            fetch(var_from_php.ajax_url, { method: "POST", body: r })
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                e.success || t(""),
                  t(
                    (e = e.data) && Array.isArray(e)
                      ? e
                          .map(function (e) {
                            return '\n\t\t\t\t\t\t<div class="project-list__row">\n\t\t\t\t\t        <div class="project-list__column">\n\t\t\t\t\t            <span>'
                              .concat(
                                e.name,
                                '</span>\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <div class="project-list__column">\n\t\t\t\t\t            <span>'
                              )
                              .concat(
                                e.numberEmployees,
                                '</span>\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <div class="project-list__column">\n\t\t\t\t\t            <span>'
                              )
                              .concat(
                                e.startDate,
                                '\'</span>\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <div class="project-list__column">\n\t\t\t\t\t            <span>'
                              )
                              .concat(
                                e.endDate,
                                '\'</span>\n\t\t\t\t\t        </div>\n\t\t\t\t\t        <div class="project-list__column">\n\t\t\t\t\t            <span>'
                              )
                              .concat(
                                e.description,
                                "'</span>\n\t\t\t\t\t        </div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t"
                              );
                          })
                          .join("")
                      : ""
                  );
              });
        };
      },
      {
        "@babel/runtime/helpers/asyncToGenerator": 7,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/toConsumableArray": 13,
        "@babel/runtime/regenerator": 15,
        "smoothscroll-polyfill": 17,
      },
    ],
    3: [
      function (e, t, r) {
        "use strict";
        var o = e("@babel/runtime/helpers/interopRequireDefault"),
          n =
            (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.default = void 0),
            o(e("@babel/runtime/helpers/toConsumableArray"))),
          i = o(e("@babel/runtime/helpers/classCallCheck")),
          a = o(e("@babel/runtime/helpers/createClass")),
          l = e("./helpers");
        r.default = (function () {
          function e() {
            (0, i.default)(this, e),
              (this.body = document.querySelector("body")),
              (this.html = document.querySelector("html"));
          }
          return (
            (0, a.default)(e, [
              {
                key: "forceCloseAllPopup",
                value: function () {
                  (0, n.default)(document.querySelectorAll(".popup")).forEach(
                    function (e) {
                      (0, l.fadeOut)(e);
                      e = e.querySelector(".wpcf7-mail-sent-ok");
                      e && (e.style.display = "none");
                    }
                  ),
                    this.body.classList.remove("popup-opened"),
                    this.html.classList.remove("popup-opened");
                },
              },
              {
                key: "openOnePopup",
                value: function () {
                  var e = this,
                    t =
                      0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    r =
                      1 < arguments.length && void 0 !== arguments[1]
                        ? arguments[1]
                        : 1e3;
                  this.forceCloseAllPopup(),
                    setTimeout(function () {
                      e.body.classList.add("popup-opened"),
                        e.html.classList.add("popup-opened"),
                        (0, l.fadeIn)(document.querySelector(t));
                    }, r);
                },
              },
              {
                key: "openPopup",
                value: function () {
                  var o = this;
                  this.body.addEventListener("click", function (e) {
                    if (
                      !(0, n.default)(e.target.classList).includes(
                        "js-open-popup-activator"
                      )
                    )
                      return !1;
                    e.preventDefault();
                    var t,
                      r =
                        "A" === e.target.nodeName
                          ? e.target.getAttribute("href")
                          : e.target.dataset.href,
                      r = document.querySelector(r);
                    r &&
                      (t = r.querySelector("form input.subject")) &&
                      (t.value = e.target.dataset.subject),
                      o.body.classList.add("popup-opened"),
                      o.html.classList.add("popup-opened"),
                      (0, l.fadeIn)(r);
                  });
                },
              },
              {
                key: "closePopup",
                value: function () {
                  var t = this;
                  this.body.addEventListener("click", function (e) {
                    if (
                      !(0, n.default)(e.target.classList).includes(
                        "js-popup-close"
                      )
                    )
                      return !1;
                    e.preventDefault(), t.forceCloseAllPopup();
                  }),
                    document.addEventListener("keydown", function (e) {
                      27 === e.keyCode && t.forceCloseAllPopup();
                    });
                },
              },
              {
                key: "init",
                value: function () {
                  this.openPopup(), this.closePopup();
                },
              },
            ]),
            e
          );
        })();
      },
      {
        "./helpers": 2,
        "@babel/runtime/helpers/classCallCheck": 8,
        "@babel/runtime/helpers/createClass": 9,
        "@babel/runtime/helpers/interopRequireDefault": 10,
        "@babel/runtime/helpers/toConsumableArray": 13,
      },
    ],
    4: [
      function (e, t, r) {
        "use strict";
        var o = e("@babel/runtime/helpers/interopRequireDefault"),
          n =
            (Object.defineProperty(r, "__esModule", { value: !0 }),
            (r.ScreenChecker = void 0),
            o(e("@babel/runtime/helpers/classCallCheck"))),
          i = o(e("@babel/runtime/helpers/createClass"));
        r.ScreenChecker = (function () {
          function t(e) {
            (0, n.default)(this, t),
              (this.blocks = document.querySelectorAll(e));
          }
          return (
            (0, i.default)(t, [
              {
                key: "init",
                value: function (e) {
                  if (
                    (console.log(
                      e.threshold,
                      isFinite(e.threshold),
                      isFinite(e.rootMargin)
                    ),
                    e.threshold && !isFinite(e.threshold))
                  )
                    return console.error("threshold not number"), !1;
                  var e = {
                      rootMargin: "".concat(e.margin || 0, "px"),
                      threshold: e.threshold || 0.5,
                    },
                    t = new IntersectionObserver(function (e, t) {
                      e.forEach(function (e) {
                        e.isIntersecting &&
                          ((e = e.target).classList.add("effect-activated"),
                          t.unobserve(e));
                      });
                    }, e);
                  this.blocks.forEach(function (e) {
                    t.observe(e);
                  });
                },
              },
            ]),
            t
          );
        })();
      },
      {
        "@babel/runtime/helpers/classCallCheck": 8,
        "@babel/runtime/helpers/createClass": 9,
        "@babel/runtime/helpers/interopRequireDefault": 10,
      },
    ],
    5: [
      function (e, t, r) {
        (t.exports = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
          return o;
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    6: [
      function (e, t, r) {
        var o = e("./arrayLikeToArray.js");
        (t.exports = function (e) {
          if (Array.isArray(e)) return o(e);
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      { "./arrayLikeToArray.js": 5 },
    ],
    7: [
      function (e, t, r) {
        function s(e, t, r, o, n, i, a) {
          try {
            var l = e[i](a),
              s = l.value;
          } catch (e) {
            return void r(e);
          }
          l.done ? t(s) : Promise.resolve(s).then(o, n);
        }
        (t.exports = function (l) {
          return function () {
            var e = this,
              a = arguments;
            return new Promise(function (t, r) {
              var o = l.apply(e, a);
              function n(e) {
                s(o, t, r, n, i, "next", e);
              }
              function i(e) {
                s(o, t, r, n, i, "throw", e);
              }
              n(void 0);
            });
          };
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    8: [
      function (e, t, r) {
        (t.exports = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    9: [
      function (e, t, r) {
        function o(e, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(e, o.key, o);
          }
        }
        (t.exports = function (e, t, r) {
          return (
            t && o(e.prototype, t),
            r && o(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            e
          );
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    10: [
      function (e, t, r) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    11: [
      function (e, t, r) {
        (t.exports = function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    12: [
      function (e, t, r) {
        (t.exports = function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {},
    ],
    13: [
      function (e, t, r) {
        var o = e("./arrayWithoutHoles.js"),
          n = e("./iterableToArray.js"),
          i = e("./unsupportedIterableToArray.js"),
          a = e("./nonIterableSpread.js");
        (t.exports = function (e) {
          return o(e) || n(e) || i(e) || a();
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      {
        "./arrayWithoutHoles.js": 6,
        "./iterableToArray.js": 11,
        "./nonIterableSpread.js": 12,
        "./unsupportedIterableToArray.js": 14,
      },
    ],
    14: [
      function (e, t, r) {
        var o = e("./arrayLikeToArray.js");
        (t.exports = function (e, t) {
          if (e) {
            if ("string" == typeof e) return o(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            return "Map" ===
              (r = "Object" === r && e.constructor ? e.constructor.name : r) ||
              "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? o(e, t)
              : void 0;
          }
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      { "./arrayLikeToArray.js": 5 },
    ],
    15: [
      function (e, t, r) {
        t.exports = e("regenerator-runtime");
      },
      { "regenerator-runtime": 16 },
    ],
    16: [
      function (e, t, r) {
        t = (function (a) {
          "use strict";
          var s,
            e = Object.prototype,
            c = e.hasOwnProperty,
            t = "function" == typeof Symbol ? Symbol : {},
            o = t.iterator || "@@iterator",
            r = t.asyncIterator || "@@asyncIterator",
            n = t.toStringTag || "@@toStringTag";
          function i(e, t, r) {
            return (
              Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            i({}, "");
          } catch (e) {
            i = function (e, t, r) {
              return (e[t] = r);
            };
          }
          function l(e, t, r, o) {
            var n,
              i,
              a,
              l,
              t = t && t.prototype instanceof v ? t : v,
              t = Object.create(t.prototype),
              o = new j(o || []);
            return (
              (t._invoke =
                ((n = e),
                (i = r),
                (a = o),
                (l = f),
                function (e, t) {
                  if (l === p) throw new Error("Generator is already running");
                  if (l === h) {
                    if ("throw" === e) throw t;
                    return k();
                  }
                  for (a.method = e, a.arg = t; ; ) {
                    var r = a.delegate;
                    if (r) {
                      r = (function e(t, r) {
                        var o = t.iterator[r.method];
                        if (o === s) {
                          if (((r.delegate = null), "throw" === r.method)) {
                            if (
                              t.iterator.return &&
                              ((r.method = "return"),
                              (r.arg = s),
                              e(t, r),
                              "throw" === r.method)
                            )
                              return m;
                            (r.method = "throw"),
                              (r.arg = new TypeError(
                                "The iterator does not provide a 'throw' method"
                              ));
                          }
                          return m;
                        }
                        o = u(o, t.iterator, r.arg);
                        if ("throw" === o.type)
                          return (
                            (r.method = "throw"),
                            (r.arg = o.arg),
                            (r.delegate = null),
                            m
                          );
                        o = o.arg;
                        if (!o)
                          return (
                            (r.method = "throw"),
                            (r.arg = new TypeError(
                              "iterator result is not an object"
                            )),
                            (r.delegate = null),
                            m
                          );
                        {
                          if (!o.done) return o;
                          (r[t.resultName] = o.value),
                            (r.next = t.nextLoc),
                            "return" !== r.method &&
                              ((r.method = "next"), (r.arg = s));
                        }
                        r.delegate = null;
                        return m;
                      })(r, a);
                      if (r) {
                        if (r === m) continue;
                        return r;
                      }
                    }
                    if ("next" === a.method) a.sent = a._sent = a.arg;
                    else if ("throw" === a.method) {
                      if (l === f) throw ((l = h), a.arg);
                      a.dispatchException(a.arg);
                    } else "return" === a.method && a.abrupt("return", a.arg);
                    l = p;
                    r = u(n, i, a);
                    if ("normal" === r.type) {
                      if (((l = a.done ? h : d), r.arg !== m))
                        return { value: r.arg, done: a.done };
                    } else
                      "throw" === r.type &&
                        ((l = h), (a.method = "throw"), (a.arg = r.arg));
                  }
                })),
              t
            );
          }
          function u(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          a.wrap = l;
          var f = "suspendedStart",
            d = "suspendedYield",
            p = "executing",
            h = "completed",
            m = {};
          function v() {}
          function y() {}
          function b() {}
          var t = {},
            g =
              (i(t, o, function () {
                return this;
              }),
              Object.getPrototypeOf),
            g = g && g(g(T([]))),
            w =
              (g && g !== e && c.call(g, o) && (t = g),
              (b.prototype = v.prototype = Object.create(t)));
          function _(e) {
            ["next", "throw", "return"].forEach(function (t) {
              i(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function L(a, l) {
            var t;
            this._invoke = function (r, o) {
              function e() {
                return new l(function (e, t) {
                  !(function t(e, r, o, n) {
                    var i,
                      e = u(a[e], a, r);
                    if ("throw" !== e.type)
                      return (r = (i = e.arg).value) &&
                        "object" == typeof r &&
                        c.call(r, "__await")
                        ? l.resolve(r.__await).then(
                            function (e) {
                              t("next", e, o, n);
                            },
                            function (e) {
                              t("throw", e, o, n);
                            }
                          )
                        : l.resolve(r).then(
                            function (e) {
                              (i.value = e), o(i);
                            },
                            function (e) {
                              return t("throw", e, o, n);
                            }
                          );
                    n(e.arg);
                  })(r, o, e, t);
                });
              }
              return (t = t ? t.then(e, e) : e());
            };
          }
          function x(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function E(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function j(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(x, this),
              this.reset(!0);
          }
          function T(t) {
            if (t) {
              var r,
                e = t[o];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length))
                return (
                  (r = -1),
                  ((e = function e() {
                    for (; ++r < t.length; )
                      if (c.call(t, r))
                        return (e.value = t[r]), (e.done = !1), e;
                    return (e.value = s), (e.done = !0), e;
                  }).next = e)
                );
            }
            return { next: k };
          }
          function k() {
            return { value: s, done: !0 };
          }
          return (
            i(w, "constructor", (y.prototype = b)),
            i(b, "constructor", y),
            (y.displayName = i(b, n, "GeneratorFunction")),
            (a.isGeneratorFunction = function (e) {
              e = "function" == typeof e && e.constructor;
              return (
                !!e &&
                (e === y || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (a.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, b)
                  : ((e.__proto__ = b), i(e, n, "GeneratorFunction")),
                (e.prototype = Object.create(w)),
                e
              );
            }),
            (a.awrap = function (e) {
              return { __await: e };
            }),
            _(L.prototype),
            i(L.prototype, r, function () {
              return this;
            }),
            (a.AsyncIterator = L),
            (a.async = function (e, t, r, o, n) {
              void 0 === n && (n = Promise);
              var i = new L(l(e, t, r, o), n);
              return a.isGeneratorFunction(t)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            _(w),
            i(w, n, "Generator"),
            i(w, o, function () {
              return this;
            }),
            i(w, "toString", function () {
              return "[object Generator]";
            }),
            (a.keys = function (r) {
              var e,
                o = [];
              for (e in r) o.push(e);
              return (
                o.reverse(),
                function e() {
                  for (; o.length; ) {
                    var t = o.pop();
                    if (t in r) return (e.value = t), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (a.values = T),
            (j.prototype = {
              constructor: j,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = s),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = s),
                  this.tryEntries.forEach(E),
                  !e)
                )
                  for (var t in this)
                    "t" === t.charAt(0) &&
                      c.call(this, t) &&
                      !isNaN(+t.slice(1)) &&
                      (this[t] = s);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var o = this;
                function e(e, t) {
                  return (
                    (i.type = "throw"),
                    (i.arg = r),
                    (o.next = e),
                    t && ((o.method = "next"), (o.arg = s)),
                    !!t
                  );
                }
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                  var n = this.tryEntries[t],
                    i = n.completion;
                  if ("root" === n.tryLoc) return e("end");
                  if (n.tryLoc <= this.prev) {
                    var a = c.call(n, "catchLoc"),
                      l = c.call(n, "finallyLoc");
                    if (a && l) {
                      if (this.prev < n.catchLoc) return e(n.catchLoc, !0);
                      if (this.prev < n.finallyLoc) return e(n.finallyLoc);
                    } else if (a) {
                      if (this.prev < n.catchLoc) return e(n.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < n.finallyLoc) return e(n.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    c.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var n = o;
                    break;
                  }
                }
                var i = (n =
                  n &&
                  ("break" === e || "continue" === e) &&
                  n.tryLoc <= t &&
                  t <= n.finallyLoc
                    ? null
                    : n)
                  ? n.completion
                  : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  n
                    ? ((this.method = "next"), (this.next = n.finallyLoc), m)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  m
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), E(r), m;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                  var r,
                    o,
                    n = this.tryEntries[t];
                  if (n.tryLoc === e)
                    return (
                      "throw" === (r = n.completion).type &&
                        ((o = r.arg), E(n)),
                      o
                    );
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, t, r) {
                return (
                  (this.delegate = {
                    iterator: T(e),
                    resultName: t,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = s),
                  m
                );
              },
            }),
            a
          );
        })("object" == typeof t ? t.exports : {});
        try {
          regeneratorRuntime = t;
        } catch (e) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function("r", "regeneratorRuntime = r")(t);
        }
      },
      {},
    ],
    17: [
      function (e, t, r) {
        !(function () {
          "use strict";
          function e() {
            var e,
              o,
              l,
              s,
              r,
              t,
              c = window,
              u = document;
            function f(e, t) {
              (this.scrollLeft = e), (this.scrollTop = t);
            }
            function n(e) {
              if (
                null === e ||
                "object" != typeof e ||
                void 0 === e.behavior ||
                "auto" === e.behavior ||
                "instant" === e.behavior
              )
                return !0;
              if ("object" == typeof e && "smooth" === e.behavior) return !1;
              throw new TypeError(
                "behavior member of ScrollOptions " +
                  e.behavior +
                  " is not a valid value for enumeration ScrollBehavior."
              );
            }
            function i(e, t) {
              return "Y" === t
                ? e.clientHeight + r < e.scrollHeight
                : "X" === t
                ? e.clientWidth + r < e.scrollWidth
                : void 0;
            }
            function a(e, t) {
              e = c.getComputedStyle(e, null)["overflow" + t];
              return "auto" === e || "scroll" === e;
            }
            function d(e) {
              for (
                ;
                e !== u.body &&
                !1 ===
                  ((r = void 0),
                  (r = i((t = e), "Y") && a(t, "Y")),
                  (t = i(t, "X") && a(t, "X")),
                  r || t);

              )
                e = e.parentNode || e.host;
              var t, r;
              return e;
            }
            function p(e) {
              var t,
                r = (s() - e.startTime) / o;
              (r = r = 1 < r ? 1 : r),
                (r = 0.5 * (1 - Math.cos(Math.PI * r))),
                (t = e.startX + (e.x - e.startX) * r),
                (r = e.startY + (e.y - e.startY) * r),
                e.method.call(e.scrollable, t, r),
                (t === e.x && r === e.y) ||
                  c.requestAnimationFrame(p.bind(c, e));
            }
            function h(e, t, r) {
              var o,
                n,
                i,
                a = s(),
                e =
                  e === u.body
                    ? ((n = (o = c).scrollX || c.pageXOffset),
                      (i = c.scrollY || c.pageYOffset),
                      l.scroll)
                    : ((n = (o = e).scrollLeft), (i = e.scrollTop), f);
              p({
                scrollable: o,
                method: e,
                startTime: a,
                startX: n,
                startY: i,
                x: t,
                y: r,
              });
            }
            ("scrollBehavior" in u.documentElement.style &&
              !0 !== c.__forceSmoothScrollPolyfill__) ||
              ((e = c.HTMLElement || c.Element),
              (o = 468),
              (l = {
                scroll: c.scroll || c.scrollTo,
                scrollBy: c.scrollBy,
                elementScroll: e.prototype.scroll || f,
                scrollIntoView: e.prototype.scrollIntoView,
              }),
              (s =
                c.performance && c.performance.now
                  ? c.performance.now.bind(c.performance)
                  : Date.now),
              (t = c.navigator.userAgent),
              (r = new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(t)
                ? 1
                : 0),
              (c.scroll = c.scrollTo =
                function () {
                  void 0 !== arguments[0] &&
                    (!0 === n(arguments[0])
                      ? l.scroll.call(
                          c,
                          void 0 !== arguments[0].left
                            ? arguments[0].left
                            : "object" != typeof arguments[0]
                            ? arguments[0]
                            : c.scrollX || c.pageXOffset,
                          void 0 !== arguments[0].top
                            ? arguments[0].top
                            : void 0 !== arguments[1]
                            ? arguments[1]
                            : c.scrollY || c.pageYOffset
                        )
                      : h.call(
                          c,
                          u.body,
                          void 0 !== arguments[0].left
                            ? ~~arguments[0].left
                            : c.scrollX || c.pageXOffset,
                          void 0 !== arguments[0].top
                            ? ~~arguments[0].top
                            : c.scrollY || c.pageYOffset
                        ));
                }),
              (c.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (n(arguments[0])
                    ? l.scrollBy.call(
                        c,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      )
                    : h.call(
                        c,
                        u.body,
                        ~~arguments[0].left + (c.scrollX || c.pageXOffset),
                        ~~arguments[0].top + (c.scrollY || c.pageYOffset)
                      ));
              }),
              (e.prototype.scroll = e.prototype.scrollTo =
                function () {
                  if (void 0 !== arguments[0])
                    if (!0 === n(arguments[0])) {
                      if (
                        "number" == typeof arguments[0] &&
                        void 0 === arguments[1]
                      )
                        throw new SyntaxError("Value could not be converted");
                      l.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : "object" != typeof arguments[0]
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : void 0 !== arguments[1]
                          ? ~~arguments[1]
                          : this.scrollTop
                      );
                    } else {
                      var e = arguments[0].left,
                        t = arguments[0].top;
                      h.call(
                        this,
                        this,
                        void 0 === e ? this.scrollLeft : ~~e,
                        void 0 === t ? this.scrollTop : ~~t
                      );
                    }
                }),
              (e.prototype.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (!0 === n(arguments[0])
                    ? l.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      )
                    : this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      }));
              }),
              (e.prototype.scrollIntoView = function () {
                var e, t, r;
                !0 === n(arguments[0])
                  ? l.scrollIntoView.call(
                      this,
                      void 0 === arguments[0] || arguments[0]
                    )
                  : ((t = (e = d(this)).getBoundingClientRect()),
                    (r = this.getBoundingClientRect()),
                    e !== u.body
                      ? (h.call(
                          this,
                          e,
                          e.scrollLeft + r.left - t.left,
                          e.scrollTop + r.top - t.top
                        ),
                        "fixed" !== c.getComputedStyle(e).position &&
                          c.scrollBy({
                            left: t.left,
                            top: t.top,
                            behavior: "smooth",
                          }))
                      : c.scrollBy({
                          left: r.left,
                          top: r.top,
                          behavior: "smooth",
                        }));
              }));
          }
          "object" == typeof r && void 0 !== t
            ? (t.exports = { polyfill: e })
            : e();
        })();
      },
      {},
    ],
  },
  {},
  [1]
);
