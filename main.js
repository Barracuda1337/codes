shortcut = {
    all_shortcuts: {},
    add: function (d, e, f) {
        var g = {
            type: "keydown",
            propagate: !1,
            disable_in_input: !1,
            target: document,
            keycode: !1
        };
        if (f) {
            for (var h in g) {
                "undefined" == typeof f[h] && (f[h] = g[h])
            }
        } else {
            f = g
        };
        g = f.target, "string" == typeof f.target && (g = document.getElementById(f.target)), d = d.toLowerCase(), h = function (a) {
            a = a || window.event;
            if (f.disable_in_input) {
                va;
                h;
                a.target ? h = a.target : a.srcElement && (h = a.srcElement), 3 == h.nodeType && (h = h.parentNode);
                if ("INPUT" == h.tagName || "TEXTAREA" == h.tagName) {
                    return
                }
            };
            a.keyCode ? code = a.keyCode : a.which && (code = a.which), h = String.fromCharCode(code).toLowerCase(), 188 == code && (h = ","), 190 == code && (h = ".");
            var b = d.split("+"),
                _0x87f9x7 = 0,
                _0x87f9x8 = {
                    "`": "~",
                    1: "!",
                    2: "@",
                    3: "#",
                    4: "$",
                    5: "%",
                    6: "^",
                    7: "&",
                    8: "*",
                    9: "(",
                    0: ")",
                    "-": "_",
                    "=": "+",
                    ";": ":",
                    "\'": "\"",
                    ",": "<",
                    ".": ">",
                    "/": "?",
                    "\\": "|"
                },
                _0x87f9x9 = {
                    esc: 27,
                    escape: 27,
                    tab: 9,
                    space: 32,
                    "return": 13,
                    enter: 13,
                    backspace: 8,
                    scrolllock: 145,
                    scroll_lock: 145,
                    scroll: 145,
                    capslock: 20,
                    caps_lock: 20,
                    caps: 20,
                    numlock: 144,
                    num_lock: 144,
                    num: 144,
                    pause: 19,
                    "break": 19,
                    insert: 45,
                    home: 36,
                    "delete": 46,
                    end: 35,
                    pageup: 33,
                    page_up: 33,
                    pu: 33,
                    pagedown: 34,
                    page_down: 34,
                    pd: 34,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40,
                    f1: 112,
                    f2: 113,
                    f3: 114,
                    f4: 115,
                    f5: 116,
                    f6: 117,
                    f7: 118,
                    f8: 119,
                    f9: 120,
                    f10: 121,
                    f11: 122,
                    f12: 123
                },
                _0x87f9xa = !1,
                _0x87f9xb = !1,
                _0x87f9xc = !1,
                _0x87f9xd = !1,
                _0x87f9xe = !1,
                _0x87f9xf = !1,
                _0x87f9x10 = !1,
                _0x87f9x11 = !1;
            a.ctrlKey && (_0x87f9xd = !0), a.shiftKey && (_0x87f9xb = !0), a.altKey && (_0x87f9xf = !0), a.metaKey && (_0x87f9x11 = !0);
            for (var c = 0; k = b[c], c < b.length; c++) {
                "ctrl" == k || "control" == k ? (_0x87f9x7++, _0x87f9xc = !0) : "shift" == k ? (_0x87f9x7++, _0x87f9xa = !0) : "alt" == k ? (_0x87f9x7++, _0x87f9xe = !0) : "meta" == k ? (_0x87f9x7++, _0x87f9x10 = !0) : 1 < k.length ? _0x87f9x9[k] == code && _0x87f9x7++ : f.keycode ? f.keycode == code && _0x87f9x7++ : h == k ? _0x87f9x7++ : _0x87f9x8[h] && a.shiftKey && (h = _0x87f9x8[h], h == k && _0x87f9x7++)
            };
            if (_0x87f9x7 == b.length && _0x87f9xd == _0x87f9xc && _0x87f9xb == _0x87f9xa && _0x87f9xf == _0x87f9xe && _0x87f9x11 == _0x87f9x10 && (e(a), !f.propagate)) {
                return a.cancelBubble = !0, a.returnValue = !1, a.stopPropagation && (a.stopPropagation(), a.preventDefault()), !1
            }
        }, this.all_shortcuts[d] = {
            callback: h,
            target: g,
            event: f.type
        }, g.addEventListener ? g.addEventListener(f.type, h, !1) : g.attachEvent ? g.attachEvent("on" + f.type, h) : g["on" + f.type] = h
    },
    remove: function (a) {
        var a = a.toLowerCase(),
            _0x87f9x2 = this.all_shortcuts[a];
        delete this.all_shortcuts[a];
        if (_0x87f9x2) {
            var a = _0x87f9x2.event,
                _0x87f9x3 = _0x87f9x2.target,
                _0x87f9x2 = _0x87f9x2.callback;
            _0x87f9x3.detachEvent ? _0x87f9x3.detachEvent("on" + a, _0x87f9x2) : _0x87f9x3.removeEventListener ? _0x87f9x3.removeEventListener(a, _0x87f9x2, !1) : _0x87f9x3["on" + a] = !1
        }
    }
}, shortcut.add("Ctrl+U", function () {
    top.location.href = "http://niadzgn.blogspot.com"
})
