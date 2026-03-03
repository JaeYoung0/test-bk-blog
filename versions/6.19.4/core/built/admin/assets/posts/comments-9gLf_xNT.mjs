import { D as T, j as e, u as R, q as _, b as A, n as P, T as Ne, E as ts, F as O, G as Q, H as ye, J as rs, a as I, o as B, N as H, p as K, e as ns, Z as ne } from "./index-Cr7pONoj.mjs";
import { u as as, F as is, T as ee, a as se, b as te, d as re, c as os } from "./filters-BOzuY_fv.mjs";
import { u as ls, g as cs, a as ds, b as us, M as $, c as ms } from "./use-scroll-restoration-BsI5B4fH.mjs";
import { u as ps, g as hs } from "./posts-CRiBkqxa.mjs";
import { u as fs, U as ke, d as xs, D as bs, a as gs, E as js, b as vs, c as W } from "./dropdown-menu-uWe6MnwA.mjs";
import { a as Cs, c as Ns, F as ae, b as we, D as ie, M as ys, H as _e, R as ks, E as Se } from "./reply-BmuST6km.mjs";
import { C as ws, F as _s, c as Ss, a as Ps, E as Pe, M as Re } from "./search-qGecLIYP.mjs";
import { P as Rs, C as Es, X as Ts, g as oe, i as le, j as ce, k as de, l as Is, m as ue } from "./dialog-B8wFkz_u.mjs";
import { H as ge, u as Ls } from "./use-infinite-virtual-scroll-DN7vL_a2.mjs";
import { M as Ds } from "./main-layout-BqiEnIE5.mjs";
import { d as Fs, P as me, b as Ms, h as Ee, f as je, c as $s, B as S, C as zs } from "./heading-eNl0HQ4y.mjs";
import { L as U } from "./loading-indicator-PS-AyPMj.mjs";
import { d as Os, b as Te, c as pe } from "./hooks-CBG95Unn.mjs";
import { E as Bs, S as Hs } from "./separator-Bs9v0qlT.mjs";
import { E as Ie } from "./empty-indicator-Bu5ew_PQ.mjs";
import { S as As, b as Us, c as Vs, d as qs } from "./sheet-DWYoU37e.mjs";
var Y = "Checkbox", [Ws] = Fs(Y), [Qs, he] = Ws(Y);
function Gs(s) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: i,
    defaultChecked: n,
    disabled: a,
    form: o,
    name: l,
    onCheckedChange: c,
    required: d,
    value: m = "on",
    // @ts-expect-error
    internal_do_not_use_render: u
  } = s, [x, h] = Ms({
    prop: r,
    defaultProp: n ?? !1,
    onChange: c,
    caller: Y
  }), [f, j] = R(null), [g, v] = R(null), b = _(!1), N = f ? !!o || !!f.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), C = {
    checked: x,
    disabled: a,
    setChecked: h,
    control: f,
    setControl: j,
    name: l,
    form: o,
    value: m,
    hasConsumerStoppedPropagationRef: b,
    required: d,
    defaultChecked: L(n) ? !1 : n,
    isFormControl: N,
    bubbleInput: g,
    setBubbleInput: v
  };
  return /* @__PURE__ */ e.jsx(
    Qs,
    {
      scope: t,
      ...C,
      children: Ks(u) ? u(C) : i
    }
  );
}
var Le = "CheckboxTrigger", De = T(
  ({ __scopeCheckbox: s, onKeyDown: t, onClick: r, ...i }, n) => {
    const {
      control: a,
      value: o,
      disabled: l,
      checked: c,
      required: d,
      setControl: m,
      setChecked: u,
      hasConsumerStoppedPropagationRef: x,
      isFormControl: h,
      bubbleInput: f
    } = he(Le, s), j = Ee(n, m), g = _(c);
    return A(() => {
      const v = a == null ? void 0 : a.form;
      if (v) {
        const b = () => u(g.current);
        return v.addEventListener("reset", b), () => v.removeEventListener("reset", b);
      }
    }, [a, u]), /* @__PURE__ */ e.jsx(
      me.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": L(c) ? "mixed" : c,
        "aria-required": d,
        "data-state": Oe(c),
        "data-disabled": l ? "" : void 0,
        disabled: l,
        value: o,
        ...i,
        ref: j,
        onKeyDown: je(t, (v) => {
          v.key === "Enter" && v.preventDefault();
        }),
        onClick: je(r, (v) => {
          u((b) => L(b) ? !0 : !b), f && h && (x.current = v.isPropagationStopped(), x.current || v.stopPropagation());
        })
      }
    );
  }
);
De.displayName = Le;
var fe = T(
  (s, t) => {
    const {
      __scopeCheckbox: r,
      name: i,
      checked: n,
      defaultChecked: a,
      required: o,
      disabled: l,
      value: c,
      onCheckedChange: d,
      form: m,
      ...u
    } = s;
    return /* @__PURE__ */ e.jsx(
      Gs,
      {
        __scopeCheckbox: r,
        checked: n,
        defaultChecked: a,
        disabled: l,
        required: o,
        onCheckedChange: d,
        name: i,
        form: m,
        value: c,
        internal_do_not_use_render: ({ isFormControl: x }) => /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(
            De,
            {
              ...u,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          x && /* @__PURE__ */ e.jsx(
            ze,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
fe.displayName = Y;
var Fe = "CheckboxIndicator", Me = T(
  (s, t) => {
    const { __scopeCheckbox: r, forceMount: i, ...n } = s, a = he(Fe, r);
    return /* @__PURE__ */ e.jsx(
      Rs,
      {
        present: i || L(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ e.jsx(
          me.span,
          {
            "data-state": Oe(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...n,
            ref: t,
            style: { pointerEvents: "none", ...s.style }
          }
        )
      }
    );
  }
);
Me.displayName = Fe;
var $e = "CheckboxBubbleInput", ze = T(
  ({ __scopeCheckbox: s, ...t }, r) => {
    const {
      control: i,
      hasConsumerStoppedPropagationRef: n,
      checked: a,
      defaultChecked: o,
      required: l,
      disabled: c,
      name: d,
      value: m,
      form: u,
      bubbleInput: x,
      setBubbleInput: h
    } = he($e, s), f = Ee(r, h), j = as(a), g = fs(i);
    A(() => {
      const b = x;
      if (!b) return;
      const N = window.HTMLInputElement.prototype, k = Object.getOwnPropertyDescriptor(
        N,
        "checked"
      ).set, p = !n.current;
      if (j !== a && k) {
        const E = new Event("click", { bubbles: p });
        b.indeterminate = L(a), k.call(b, L(a) ? !1 : a), b.dispatchEvent(E);
      }
    }, [x, j, a, n]);
    const v = _(L(a) ? !1 : a);
    return /* @__PURE__ */ e.jsx(
      me.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: o ?? v.current,
        required: l,
        disabled: c,
        name: d,
        value: m,
        form: u,
        ...t,
        tabIndex: -1,
        ref: f,
        style: {
          ...t.style,
          ...g,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
ze.displayName = $e;
function Ks(s) {
  return typeof s == "function";
}
function L(s) {
  return s === "indeterminate";
}
function Oe(s) {
  return L(s) ? "indeterminate" : s ? "checked" : "unchecked";
}
const Ys = Ne(
  "inline-flex items-center rounded-sm border px-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground/70",
        destructive: "border-transparent bg-destructive/20 text-destructive",
        success: "border-transparent bg-green/20 text-green",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Xs({ className: s, variant: t, ...r }) {
  return /* @__PURE__ */ e.jsx("div", { className: P(Ys({ variant: t }), s), ...r });
}
const Be = T(({ className: s, ...t }, r) => /* @__PURE__ */ e.jsx(
  fe,
  {
    ref: r,
    className: P(
      "grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      s
    ),
    ...t,
    children: /* @__PURE__ */ e.jsx(
      Me,
      {
        className: P("grid place-content-center text-current"),
        children: /* @__PURE__ */ e.jsx(Es, { className: "size-4" })
      }
    )
  }
));
Be.displayName = fe.displayName;
var Zs = Symbol.for("react.lazy"), G = ts[" use ".trim().toString()];
function Js(s) {
  return typeof s == "object" && s !== null && "then" in s;
}
function He(s) {
  return s != null && typeof s == "object" && "$$typeof" in s && s.$$typeof === Zs && "_payload" in s && Js(s._payload);
}
// @__NO_SIDE_EFFECTS__
function et(s) {
  const t = /* @__PURE__ */ st(s), r = T((i, n) => {
    let { children: a, ...o } = i;
    He(a) && typeof G == "function" && (a = G(a._payload));
    const l = O.toArray(a), c = l.find(rt);
    if (c) {
      const d = c.props.children, m = l.map((u) => u === c ? O.count(d) > 1 ? O.only(null) : Q(d) ? d.props.children : null : u);
      return /* @__PURE__ */ e.jsx(t, { ...o, ref: n, children: Q(d) ? ye(d, void 0, m) : null });
    }
    return /* @__PURE__ */ e.jsx(t, { ...o, ref: n, children: a });
  });
  return r.displayName = `${s}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function st(s) {
  const t = T((r, i) => {
    let { children: n, ...a } = r;
    if (He(n) && typeof G == "function" && (n = G(n._payload)), Q(n)) {
      const o = at(n), l = nt(a, n.props);
      return n.type !== rs && (l.ref = i ? $s(i, o) : o), ye(n, l);
    }
    return O.count(n) > 1 ? O.only(null) : null;
  });
  return t.displayName = `${s}.SlotClone`, t;
}
var tt = Symbol("radix.slottable");
function rt(s) {
  return Q(s) && typeof s.type == "function" && "__radixId" in s.type && s.type.__radixId === tt;
}
function nt(s, t) {
  const r = { ...t };
  for (const i in t) {
    const n = s[i], a = t[i];
    /^on[A-Z]/.test(i) ? n && a ? r[i] = (...l) => {
      const c = a(...l);
      return n(...l), c;
    } : n && (r[i] = n) : i === "style" ? r[i] = { ...n, ...a } : i === "className" && (r[i] = [n, a].filter(Boolean).join(" "));
  }
  return { ...s, ...r };
}
function at(s) {
  var i, n;
  let t = (i = Object.getOwnPropertyDescriptor(s.props, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? s.ref : (t = (n = Object.getOwnPropertyDescriptor(s, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? s.props.ref : s.props.ref || s.ref);
}
var it = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ot = it.reduce((s, t) => {
  const r = /* @__PURE__ */ et(`Primitive.${t}`), i = T((n, a) => {
    const { asChild: o, ...l } = n, c = o ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ e.jsx(c, { ...l, ref: a });
  });
  return i.displayName = `Primitive.${t}`, { ...s, [t]: i };
}, {}), lt = "Label", Ae = T((s, t) => /* @__PURE__ */ e.jsx(
  ot.label,
  {
    ...s,
    ref: t,
    onMouseDown: (r) => {
      var n;
      r.target.closest("button, input, select, textarea") || ((n = s.onMouseDown) == null || n.call(s, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
Ae.displayName = lt;
var Ue = Ae;
const ct = Ne(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Ve = T(({ className: s, ...t }, r) => /* @__PURE__ */ e.jsx(
  Ue,
  {
    ref: r,
    className: P(ct(), s),
    ...t
  }
));
Ve.displayName = Ue.displayName;
const dt = ({ children: s, className: t, ...r }) => /* @__PURE__ */ e.jsx("section", { className: P("flex gap-6 flex-col p-4 lg:p-8 size-full grow", t), ...r, children: s });
function ve({
  knownItems: s,
  useSearch: t,
  useGetById: r,
  filters: i,
  filterFieldName: n,
  searchFieldName: a,
  toOption: o
}) {
  const [l, c] = R(""), { data: d, isLoading: m } = t(l), u = I(() => {
    const b = i.find((N) => N.field === n);
    return b != null && b.values[0] ? String(b.values[0]) : "";
  }, [i, n]), x = I(() => !u || s.some((N) => N.id === u) ? !1 : !((d == null ? void 0 : d[a]) ?? []).some((N) => N.id === u), [u, s, d, a]), { data: h, isLoading: f } = r(u || "", {
    enabled: x,
    defaultErrorHandler: !1
  }), j = m || f, g = B((b) => o(b), [o]);
  return {
    options: I(() => {
      var k;
      const b = (d == null ? void 0 : d[a]) ?? [], N = {};
      for (const p of s)
        N[p.id] = g(p);
      for (const p of b)
        N[p.id] = g(p);
      const C = (k = h == null ? void 0 : h[a]) == null ? void 0 : k[0];
      return C != null && C.id && (N[C.id] = g(C)), u && !(u in N) && (N[u] = { value: u, label: `ID: ${u}` }), Object.values(N);
    }, [s, d, a, h, u, g]),
    isLoading: j,
    searchValue: l,
    onSearchChange: c
  };
}
function ut(s, t, r, i) {
  var n = this, a = _(null), o = _(0), l = _(0), c = _(null), d = _([]), m = _(), u = _(), x = _(s), h = _(!0);
  x.current = s;
  var f = typeof window < "u", j = !t && t !== 0 && f;
  if (typeof s != "function") throw new TypeError("Expected a function");
  t = +t || 0;
  var g = !!(r = r || {}).leading, v = !("trailing" in r) || !!r.trailing, b = "maxWait" in r, N = "debounceOnServer" in r && !!r.debounceOnServer, C = b ? Math.max(+r.maxWait || 0, t) : null;
  A(function() {
    return h.current = !0, function() {
      h.current = !1;
    };
  }, []);
  var k = I(function() {
    var p = function(y) {
      var w = d.current, F = m.current;
      return d.current = m.current = null, o.current = y, l.current = l.current || y, u.current = x.current.apply(F, w);
    }, E = function(y, w) {
      j && cancelAnimationFrame(c.current), c.current = j ? requestAnimationFrame(y) : setTimeout(y, w);
    }, Z = function(y) {
      if (!h.current) return !1;
      var w = y - a.current;
      return !a.current || w >= t || w < 0 || b && y - o.current >= C;
    }, z = function(y) {
      return c.current = null, v && d.current ? p(y) : (d.current = m.current = null, u.current);
    }, M = function y() {
      var w = Date.now();
      if (g && l.current === o.current && V(), Z(w)) return z(w);
      if (h.current) {
        var F = t - (w - a.current), q = b ? Math.min(F, C - (w - o.current)) : F;
        E(y, q);
      }
    }, V = function() {
      i && i({});
    }, D = function() {
      if (f || N) {
        var y = Date.now(), w = Z(y);
        if (d.current = [].slice.call(arguments), m.current = n, a.current = y, w) {
          if (!c.current && h.current) return o.current = a.current, E(M, t), g ? p(a.current) : u.current;
          if (b) return E(M, t), p(a.current);
        }
        return c.current || E(M, t), u.current;
      }
    };
    return D.cancel = function() {
      var y = c.current;
      y && (j ? cancelAnimationFrame(c.current) : clearTimeout(c.current)), o.current = 0, d.current = a.current = m.current = c.current = null, y && i && i({});
    }, D.isPending = function() {
      return !!c.current;
    }, D.flush = function() {
      return c.current ? z(Date.now()) : u.current;
    }, D;
  }, [g, b, t, C, v, j, f, N, i]);
  return k;
}
function mt(s, t) {
  return s === t;
}
function qe(s, t, r) {
  var i = mt, n = _(s), a = R({})[1], o = ut(B(function(c) {
    n.current = c, a({});
  }, [a]), t, r, a), l = _(s);
  return i(l.current, s) || (o(s), l.current = s), [n.current, o];
}
function pt(s) {
  const [t] = qe(s, 200);
  return ls({
    searchParams: {
      ...t && { search: t },
      limit: "100",
      order: "created_at DESC"
    }
  });
}
function ht(s) {
  const [t] = qe(s, 200), r = t ? `title:~'${t.replace(/'/g, "\\'")}'` : "";
  return ps({
    searchParams: {
      ...r && { filter: r },
      limit: "100",
      fields: "id,title",
      order: "published_at DESC"
    }
  });
}
const ft = ({
  knownPosts: s,
  knownMembers: t,
  filters: r,
  onFiltersChange: i
}) => {
  const n = ve({
    knownItems: s,
    useSearch: ht,
    useGetById: hs,
    searchFieldName: "posts",
    filters: r,
    filterFieldName: "post",
    toOption: (d) => ({
      value: d.id,
      label: d.title || "(Untitled)"
    })
  }), a = ve({
    knownItems: t,
    useSearch: pt,
    useGetById: cs,
    searchFieldName: "members",
    filters: r,
    filterFieldName: "author",
    toOption: (d) => ({
      value: d.id,
      label: d.name || "Unknown name",
      detail: d.email ?? "(Unknown email)"
    })
  }), o = I(
    () => [
      {
        key: "author",
        label: "Author",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(ke, { className: "size-4" }),
        options: a.options,
        isLoading: a.options.length === 0 && a.isLoading,
        onSearchChange: a.onSearchChange,
        searchValue: a.searchValue,
        searchable: !0,
        className: "w-80",
        popoverContentClassName: "w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "post",
        label: "Post",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(Cs, { className: "size-4" }),
        options: n.options,
        isLoading: n.options.length === 0 && n.isLoading,
        onSearchChange: n.onSearchChange,
        searchValue: n.searchValue,
        searchable: !0,
        className: "w-full max-w-80",
        popoverContentClassName: "w-full max-w-[calc(100vw-32px)] max-w-80",
        operators: [
          { value: "is", label: "is" },
          { value: "is_not", label: "is not" }
        ]
      },
      {
        key: "body",
        label: "Text",
        type: "text",
        icon: /* @__PURE__ */ e.jsx(Ns, { className: "size-4" }),
        placeholder: "Search comment text...",
        operators: [
          { value: "contains", label: "contains" },
          { value: "not_contains", label: "does not contain" }
        ],
        defaultOperator: "contains",
        className: "w-full max-w-48",
        popoverContentClassName: "w-full max-w-48"
      },
      {
        key: "status",
        label: "Status",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(xs, { className: "size-4" }),
        options: [
          { value: "published", label: "Published" },
          { value: "hidden", label: "Hidden" }
        ],
        operators: [
          { value: "is", label: "is" }
        ],
        searchable: !1,
        hideOperatorSelect: !0
      },
      {
        key: "reported",
        label: "Reported",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(ae, { className: "size-4" }),
        options: [
          { value: "true", label: "Yes" },
          { value: "false", label: "No" }
        ],
        operators: [
          { value: "is", label: "is" }
        ],
        searchable: !1,
        hideOperatorSelect: !0
      },
      {
        key: "created_at",
        label: "Date",
        type: "date",
        className: "w-full max-w-32",
        icon: /* @__PURE__ */ e.jsx(ws, { className: "size-4" }),
        operators: [
          { value: "is", label: "is" },
          { value: "before", label: "before" },
          { value: "after", label: "after" }
        ]
      }
    ],
    [n, a]
  ), l = r.length > 0, c = P(
    "flex flex-row",
    !l && "[grid-area:actions] pt-5 justify-start sm:justify-end sm:pt-0",
    l && "col-start-1 col-end-4 row-start-3 pt-5"
  );
  return /* @__PURE__ */ e.jsx("div", { className: c, children: /* @__PURE__ */ e.jsx(
    is,
    {
      addButtonIcon: l ? /* @__PURE__ */ e.jsx(_s, {}) : /* @__PURE__ */ e.jsx(Ss, {}),
      addButtonText: l ? "Add filter" : "Filter",
      allowMultiple: !1,
      className: `[&>button]:order-last ${l ? "[&>button]:border-none" : "w-auto"}`,
      clearButtonClassName: "font-normal text-muted-foreground",
      clearButtonIcon: /* @__PURE__ */ e.jsx(Ts, {}),
      clearButtonText: "Clear",
      fields: o,
      filters: r,
      keyboardShortcut: "f",
      popoverAlign: l ? "start" : "end",
      showClearButton: l,
      showSearchInput: !1,
      onChange: i
    }
  ) });
}, xt = ({ children: s }) => /* @__PURE__ */ e.jsxs(ge, { className: "relative !pb-6 md:sticky", variant: "inline-nav", children: [
  /* @__PURE__ */ e.jsx(ge.Title, { children: "Comments" }),
  s
] }), bt = ({ children: s }) => /* @__PURE__ */ e.jsx(Ds, { children: /* @__PURE__ */ e.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col", "data-testid": "comments-page", children: s }) }) });
function gt({ onClick: s, expanded: t }) {
  return /* @__PURE__ */ e.jsxs(
    S,
    {
      className: "shrink-0 gap-0.5 self-start p-0 text-base hover:bg-transparent",
      variant: "ghost",
      onClick: s,
      children: [
        t ? "Show less" : "Show more",
        t ? /* @__PURE__ */ e.jsx(Ps, {}) : /* @__PURE__ */ e.jsx(zs, {})
      ]
    }
  );
}
function We({ item: s }) {
  const t = _(null), [r, i] = R(!1), [n, a] = R(!1);
  return A(() => {
    if (n)
      return;
    const o = () => {
      t.current && i(t.current.scrollHeight > t.current.clientHeight);
    };
    return o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o);
  }, [s.html, n]), /* @__PURE__ */ e.jsx("div", { className: "mt-1 flex flex-col gap-2", children: /* @__PURE__ */ e.jsxs("div", { className: `flex max-w-full flex-col items-start ${s.status === "hidden" && "opacity-50"}`, children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: s.html || "" },
        ref: t,
        className: P(
          "prose flex-1 text-base max-w-[80ch] balance leading-[1.5em] [&_*]:leading-[1.5em] [&_*]:text-base [&_*]:font-normal [&_blockquote]:border-l-[3px] [&_blockquote]:border-foreground [&_blockquote]:p-0 [&_blockquote]:pl-3 [&_blockquote_p]:mt-0 [&_a]:underline",
          n ? "-mb-1 [&_p]:mb-[0.85em]" : "line-clamp-2 [&_p]:m-0 [&_blockquote+p]:mt-1 mb-1"
        )
      }
    ),
    r && /* @__PURE__ */ e.jsx(gt, { expanded: n, onClick: () => a(!n) })
  ] }) });
}
const X = "CommentsResponseType", jt = Os({
  dataType: X,
  path: "/comments/",
  defaultNextPageParams: (s, t) => {
    var r, i;
    return (r = s.meta) != null && r.pagination.next ? {
      ...t,
      page: (((i = s.meta) == null ? void 0 : i.pagination.next) || 1).toString()
    } : void 0;
  },
  returnData: (s) => {
    const { pages: t } = s, r = t.flatMap((n) => n.comments), i = t[t.length - 1].meta;
    return {
      comments: r,
      meta: i,
      isEnd: i ? i.pagination.pages === i.pagination.page : !0
    };
  }
}), Qe = (s) => jt({
  ...s,
  searchParams: {
    limit: "100",
    order: "created_at desc",
    include: "member,post,parent",
    ...s == null ? void 0 : s.searchParams
  }
}), Ge = Te({
  method: "PUT",
  path: ({ id: s }) => `/comments/${s}/`,
  body: ({ id: s }) => ({
    comments: [{
      id: s,
      status: "hidden"
    }]
  }),
  invalidateQueries: {
    dataType: X
  }
}), Ke = Te({
  method: "PUT",
  path: ({ id: s }) => `/comments/${s}/`,
  body: ({ id: s }) => ({
    comments: [{
      id: s,
      status: "published"
    }]
  }),
  invalidateQueries: {
    dataType: X
  }
}), vt = pe({
  dataType: X,
  path: (s) => `/comments/${s}/`,
  defaultSearchParams: {
    include: "member,post,count.replies,count.direct_replies,count.likes,count.reports,parent,in_reply_to"
  }
}), Ct = pe({
  dataType: "CommentReportsResponseType",
  path: (s) => `/comments/${s}/reports/`
}), Nt = (s, t) => Ct(s, { ...t }), yt = pe({
  dataType: "CommentLikesResponseType",
  path: (s) => `/comments/${s}/likes/`,
  defaultSearchParams: {
    include: "member",
    limit: "100",
    order: "created_at desc"
  }
}), kt = (s, t) => yt(s, { ...t }), wt = (s, t) => Qe({
  ...t,
  searchParams: {
    filter: `(parent_id:${s}+in_reply_to_id:null),in_reply_to_id:${s}`,
    order: "created_at asc",
    include: "member,post,count.direct_replies,count.likes,count.reports,parent,in_reply_to",
    limit: "100"
  }
});
function _t(s) {
  const t = new Date(s);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  }).format(t).replace(/(\d+),(\s+\d{4})/, "$1$2");
}
function Ye({
  memberName: s,
  memberId: t,
  createdAt: r,
  isHidden: i,
  canComment: n,
  onAuthorClick: a,
  postTitle: o,
  onPostClick: l,
  className: c
}) {
  return /* @__PURE__ */ e.jsxs("div", { className: P("flex items-baseline gap-4", c), children: [
    /* @__PURE__ */ e.jsxs("div", { className: P(
      "mb-1 flex min-w-0 items-center gap-x-1 text-sm",
      i && "opacity-50"
    ), children: [
      /* @__PURE__ */ e.jsx("div", { className: "whitespace-nowrap", children: t && a ? /* @__PURE__ */ e.jsx(
        S,
        {
          className: "flex h-auto items-center gap-1.5 truncate p-0 font-semibold text-primary hover:opacity-70",
          variant: "link",
          onClick: a,
          children: s || "Unknown"
        }
      ) : /* @__PURE__ */ e.jsx("span", { className: "block truncate font-semibold", children: s || "Unknown" }) }),
      n === !1 && /* @__PURE__ */ e.jsx(ee, { children: /* @__PURE__ */ e.jsxs(se, { children: [
        /* @__PURE__ */ e.jsx(te, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { "data-testid": "commenting-disabled-indicator", children: /* @__PURE__ */ e.jsx(
          we,
          {
            className: "size-3.5 text-muted-foreground"
          }
        ) }) }),
        /* @__PURE__ */ e.jsx(re, { children: "Comments disabled" })
      ] }) }),
      /* @__PURE__ */ e.jsx(ie, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
      /* @__PURE__ */ e.jsx("div", { className: "shrink-0 whitespace-nowrap", children: r && /* @__PURE__ */ e.jsx(ee, { children: /* @__PURE__ */ e.jsxs(se, { children: [
        /* @__PURE__ */ e.jsx(te, { asChild: !0, children: /* @__PURE__ */ e.jsx("span", { className: "cursor-default text-sm text-muted-foreground", children: H(r) }) }),
        /* @__PURE__ */ e.jsx(re, { children: _t(r) })
      ] }) }) }),
      o && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
        /* @__PURE__ */ e.jsx("div", { className: "shrink-0 text-muted-foreground", children: "on" }),
        /* @__PURE__ */ e.jsx("div", { className: "min-w-0 truncate", children: l ? /* @__PURE__ */ e.jsx(
          S,
          {
            className: "block h-auto w-full cursor-pointer truncate p-0 text-left font-medium text-gray-800 hover:opacity-70 dark:text-gray-400",
            variant: "link",
            onClick: l,
            children: o
          }
        ) : /* @__PURE__ */ e.jsx("span", { className: "font-medium text-gray-800 dark:text-gray-400", children: o }) })
      ] })
    ] }),
    i && /* @__PURE__ */ e.jsx(Xs, { variant: "secondary", children: "Hidden" })
  ] });
}
function St({
  open: s,
  memberName: t,
  onOpenChange: r,
  onConfirm: i
}) {
  const [n, a] = R(!1), o = (c) => {
    c || a(!1), r(c);
  }, l = () => {
    i(n), a(!1);
  };
  return /* @__PURE__ */ e.jsx(oe, { open: s, onOpenChange: o, children: /* @__PURE__ */ e.jsxs(le, { className: "gap-5", children: [
    /* @__PURE__ */ e.jsxs(ce, { children: [
      /* @__PURE__ */ e.jsx(de, { children: "Disable comments" }),
      /* @__PURE__ */ e.jsxs(Is, { children: [
        t || "This member",
        " won't be able to comment in the future. You can re-enable commenting anytime."
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ e.jsx(
        Be,
        {
          checked: n,
          id: "hide-comments",
          onCheckedChange: (c) => a(c === !0)
        }
      ),
      /* @__PURE__ */ e.jsx(Ve, { htmlFor: "hide-comments", children: "Hide all previous comments" })
    ] }),
    /* @__PURE__ */ e.jsxs(ue, { children: [
      /* @__PURE__ */ e.jsx(S, { variant: "outline", onClick: () => o(!1), children: "Cancel" }),
      /* @__PURE__ */ e.jsx(S, { onClick: l, children: "Disable comments" })
    ] })
  ] }) });
}
function Xe({
  comment: s
}) {
  const { mutate: t } = ds(), { mutate: r } = us(), [i, n] = R(!1), { id: a, post: o, member: l } = s, c = o == null ? void 0 : o.url, d = l == null ? void 0 : l.id, m = l == null ? void 0 : l.can_comment, u = (h) => {
    d && (t({
      id: d,
      reason: `Disabled from comment ${a}`,
      hideComments: h
    }), n(!1));
  }, x = () => {
    d && r({ id: d });
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(bs, { children: [
      /* @__PURE__ */ e.jsx(gs, { asChild: !0, children: /* @__PURE__ */ e.jsx(
        S,
        {
          className: "relative z-10 text-gray-800 hover:bg-secondary [&_svg]:size-4",
          size: "sm",
          variant: "ghost",
          children: /* @__PURE__ */ e.jsx(js, {})
        }
      ) }),
      /* @__PURE__ */ e.jsxs(vs, { align: "start", children: [
        c && /* @__PURE__ */ e.jsx(W, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `${c}#ghost-comments-${a}`, rel: "noopener noreferrer", target: "_blank", children: [
          /* @__PURE__ */ e.jsx(Bs, { className: "size-4" }),
          "View on post"
        ] }) }),
        d && /* @__PURE__ */ e.jsx(W, { asChild: !0, children: /* @__PURE__ */ e.jsxs("a", { href: `#/members/${d}`, children: [
          /* @__PURE__ */ e.jsx(ke, { className: "size-4" }),
          "View member"
        ] }) }),
        d && (m !== !1 ? /* @__PURE__ */ e.jsxs(W, { onClick: () => n(!0), children: [
          /* @__PURE__ */ e.jsx(we, { className: "size-4" }),
          "Disable commenting"
        ] }) : /* @__PURE__ */ e.jsxs(W, { onClick: x, children: [
          /* @__PURE__ */ e.jsx(ys, { className: "size-4" }),
          "Enable commenting"
        ] }))
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(
      St,
      {
        memberName: l == null ? void 0 : l.name,
        open: i,
        onConfirm: u,
        onOpenChange: n
      }
    )
  ] });
}
function Pt({ comment: s, open: t, onOpenChange: r }) {
  var c, d, m, u, x;
  const { data: i, isLoading: n } = kt(s.id, { enabled: t }), a = (i == null ? void 0 : i.comment_likes) ?? [], o = ((c = s.count) == null ? void 0 : c.likes) ?? 0, l = o - a.length;
  return /* @__PURE__ */ e.jsx(oe, { open: t, onOpenChange: r, children: /* @__PURE__ */ e.jsxs(le, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ e.jsx(ce, { children: /* @__PURE__ */ e.jsxs(de, { children: [
      o,
      " ",
      o === 1 ? "like" : "likes"
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ e.jsx(
        $,
        {
          avatarImage: (d = s.member) == null ? void 0 : d.avatar_image,
          className: "shrink-0",
          memberId: (m = s.member) == null ? void 0 : m.id
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 font-semibold", children: ((u = s.member) == null ? void 0 : u.name) || "Unknown" }),
          /* @__PURE__ */ e.jsx(ie, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: s.created_at && H(s.created_at) }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ e.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: ((x = s.post) == null ? void 0 : x.title) || "Unknown post" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: s.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ e.jsx(U, { size: "md" }) }) : /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-3 pb-1", children: [
      a.map((h) => {
        var f, j, g;
        return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ e.jsxs("div", { className: "relative shrink-0", children: [
              /* @__PURE__ */ e.jsx(
                $,
                {
                  avatarImage: (f = h.member) == null ? void 0 : f.avatar_image,
                  memberId: (j = h.member) == null ? void 0 : j.id
                }
              ),
              /* @__PURE__ */ e.jsx("div", { className: "absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-pink-500 text-white", children: /* @__PURE__ */ e.jsx(_e, { className: "size-2.5", fill: "currentColor" }) })
            ] }),
            /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: ((g = h.member) == null ? void 0 : g.name) || "Deleted member" })
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: H(h.created_at) })
        ] }, h.id);
      }),
      l > 0 && /* @__PURE__ */ e.jsxs("div", { className: "pt-1 text-center text-sm text-muted-foreground", children: [
        "and ",
        l,
        " more"
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsx(S, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function Rt({ comment: s, open: t, onOpenChange: r }) {
  var l, c, d, m, u;
  const { data: i, isLoading: n } = Nt(s.id, { enabled: t }), a = (i == null ? void 0 : i.comment_reports) ?? [], o = ((l = s.count) == null ? void 0 : l.reports) ?? a.length;
  return /* @__PURE__ */ e.jsx(oe, { open: t, onOpenChange: r, children: /* @__PURE__ */ e.jsxs(le, { "aria-describedby": void 0, children: [
    /* @__PURE__ */ e.jsx(ce, { children: /* @__PURE__ */ e.jsxs(de, { children: [
      o,
      " ",
      o === 1 ? "report" : "reports"
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "overflow-hidden rounded-md border p-3", children: /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-start gap-3", children: [
      /* @__PURE__ */ e.jsx(
        $,
        {
          avatarImage: (c = s.member) == null ? void 0 : c.avatar_image,
          className: "shrink-0",
          memberId: (d = s.member) == null ? void 0 : d.id
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col overflow-hidden", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 items-center gap-1 text-sm", children: [
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 font-semibold", children: ((m = s.member) == null ? void 0 : m.name) || "Unknown" }),
          /* @__PURE__ */ e.jsx(ie, { className: "shrink-0 text-muted-foreground/50", size: 16 }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: s.created_at && H(s.created_at) }),
          /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-muted-foreground", children: "on" }),
          /* @__PURE__ */ e.jsx("span", { className: "min-w-0 truncate font-medium text-gray-800 dark:text-gray-400", children: ((u = s.post) == null ? void 0 : u.title) || "Unknown post" })
        ] }),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            dangerouslySetInnerHTML: { __html: s.html || "" },
            className: "prose mt-2 line-clamp-2 text-sm [&_*]:text-sm [&_*]:leading-[1.5em] [&_p]:m-0"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ e.jsx("div", { className: "-mx-1 max-h-64 overflow-y-auto px-1", children: n ? /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-4", children: /* @__PURE__ */ e.jsx(U, { size: "md" }) }) : /* @__PURE__ */ e.jsx("div", { className: "flex flex-col gap-3 pb-1", children: a.map((x) => {
      var h, f, j;
      return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "relative shrink-0", children: [
            /* @__PURE__ */ e.jsx(
              $,
              {
                avatarImage: (h = x.member) == null ? void 0 : h.avatar_image,
                memberId: (f = x.member) == null ? void 0 : f.id
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "absolute -bottom-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-red text-white", children: /* @__PURE__ */ e.jsx(ae, { className: "size-2.5", fill: "currentColor" }) })
          ] }),
          /* @__PURE__ */ e.jsx("span", { className: "font-medium", children: ((j = x.member) == null ? void 0 : j.name) || "Deleted member" })
        ] }),
        /* @__PURE__ */ e.jsx("span", { className: "shrink-0 text-sm text-muted-foreground", children: H(x.created_at) })
      ] }, x.id);
    }) }) }),
    /* @__PURE__ */ e.jsx(ue, { children: /* @__PURE__ */ e.jsx(S, { onClick: () => r(!1), children: "OK" }) })
  ] }) });
}
function J({ icon: s, count: t, label: r, to: i, onClick: n, className: a, testId: o }) {
  const l = P("flex items-center gap-1 text-xs text-gray-800", a), c = /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    s,
    /* @__PURE__ */ e.jsx("span", { children: ns(t) })
  ] }), d = i || n;
  return /* @__PURE__ */ e.jsx(ee, { children: /* @__PURE__ */ e.jsxs(se, { children: [
    /* @__PURE__ */ e.jsx(te, { asChild: !0, children: i ? /* @__PURE__ */ e.jsx(
      ne,
      {
        className: P(l, "cursor-pointer hover:opacity-70"),
        "data-testid": o,
        to: i,
        onClick: (m) => {
          m.stopPropagation();
        },
        children: c
      }
    ) : n ? /* @__PURE__ */ e.jsx(
      "button",
      {
        className: P(l, "cursor-pointer hover:opacity-70"),
        "data-testid": o,
        type: "button",
        onClick: (m) => {
          m.stopPropagation(), n();
        },
        children: c
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: l, "data-testid": o, children: c }) }),
    /* @__PURE__ */ e.jsx(re, { children: d ? `View ${r.toLowerCase()}` : r })
  ] }) });
}
function xe(s, t) {
  if (!t)
    return;
  const r = new URLSearchParams(s);
  return r.set("thread", `is:${t}`), `?${r.toString()}`;
}
function Ze({
  comment: s,
  className: t
}) {
  var f, j, g, v, b;
  const [r] = K(), [i, n] = R(!1), [a, o] = R(!1), l = xe(r, s.id), c = ((f = s.count) == null ? void 0 : f.direct_replies) ?? ((j = s.count) == null ? void 0 : j.replies) ?? ((g = s.replies) == null ? void 0 : g.length) ?? 0, d = ((v = s.count) == null ? void 0 : v.likes) ?? 0, m = ((b = s.count) == null ? void 0 : b.reports) ?? 0, u = c > 0, x = d > 0, h = m > 0;
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs("div", { className: P("flex items-center gap-6", t), children: [
      /* @__PURE__ */ e.jsx(
        J,
        {
          count: c,
          icon: /* @__PURE__ */ e.jsx(ks, { size: 16, strokeWidth: 1.5 }),
          label: "Replies",
          testId: "replies-metric",
          to: u ? l : void 0
        }
      ),
      /* @__PURE__ */ e.jsx(
        J,
        {
          count: d,
          icon: /* @__PURE__ */ e.jsx(_e, { size: 16, strokeWidth: 1.5 }),
          label: "Likes",
          onClick: x ? () => n(!0) : void 0
        }
      ),
      /* @__PURE__ */ e.jsx(
        J,
        {
          className: h ? "font-semibold text-red" : void 0,
          count: m,
          icon: /* @__PURE__ */ e.jsx(ae, { size: 16, strokeWidth: 1.5 }),
          label: "Reports",
          onClick: h ? () => o(!0) : void 0
        }
      )
    ] }),
    /* @__PURE__ */ e.jsx(
      Pt,
      {
        comment: s,
        open: i,
        onOpenChange: n
      }
    ),
    /* @__PURE__ */ e.jsx(
      Rt,
      {
        comment: s,
        open: a,
        onOpenChange: o
      }
    )
  ] });
}
function Et({ hasReplies: s }) {
  return s ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "mb-2 h-full w-px grow rounded bg-gradient-to-b from-muted-foreground/20 from-70% to-transparent",
      "data-testid": "replies-line"
    }
  ) : null;
}
function Je({ comment: s, isReply: t = !1, isSelectedComment: r = !1, selectedCommentId: i }) {
  var d, m, u, x, h, f, j, g;
  const [n] = K(), { mutate: a } = Ge(), { mutate: o } = Ke(), l = (((d = s.replies) == null ? void 0 : d.length) ?? 0) > 0 || (((m = s.count) == null ? void 0 : m.direct_replies) ?? ((u = s.count) == null ? void 0 : u.replies) ?? 0) > 0, c = !l || t ? "mb-7" : "mb-0";
  return /* @__PURE__ */ e.jsxs("div", { className: `flex w-full flex-row ${c}`, children: [
    /* @__PURE__ */ e.jsxs("div", { className: "mr-2 flex shrink-0 flex-col items-center justify-start md:mr-3", children: [
      /* @__PURE__ */ e.jsx(
        $,
        {
          avatarImage: (x = s.member) == null ? void 0 : x.avatar_image,
          className: "mb-3 shrink-0 md:mb-4",
          isHidden: s.status === "hidden",
          memberId: (h = s.member) == null ? void 0 : h.id
        }
      ),
      /* @__PURE__ */ e.jsx(Et, { hasReplies: l && !t })
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "grow", children: /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: "w-full",
        "data-testid": `comment-thread-row-${s.id}`,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col", children: [
            /* @__PURE__ */ e.jsx(
              Ye,
              {
                canComment: (f = s.member) == null ? void 0 : f.can_comment,
                createdAt: s.created_at,
                isHidden: s.status === "hidden",
                memberId: (j = s.member) == null ? void 0 : j.id,
                memberName: (g = s.member) == null ? void 0 : g.name
              }
            ),
            s.in_reply_to_snippet && r && /* @__PURE__ */ e.jsxs("div", { className: `mb-1 line-clamp-1 text-sm ${s.status === "hidden" && "opacity-50"}`, children: [
              /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
              " ",
              /* @__PURE__ */ e.jsx(
                ne,
                {
                  className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                  "data-testid": "replied-to-link",
                  to: xe(n, s.in_reply_to_id || s.parent_id) || "",
                  onClick: (v) => {
                    v.stopPropagation();
                  },
                  children: s.in_reply_to_snippet
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx(We, { item: s }),
            /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex flex-row flex-wrap items-center gap-3", children: [
              s.status === "published" && /* @__PURE__ */ e.jsxs(S, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => a({ id: s.id }), children: [
                /* @__PURE__ */ e.jsx(Se, {}),
                /* @__PURE__ */ e.jsx("span", { className: "max-md:hidden", children: "Hide" })
              ] }),
              s.status === "hidden" && /* @__PURE__ */ e.jsxs(S, { className: "text-gray-800", size: "sm", variant: "outline", onClick: () => o({ id: s.id }), children: [
                /* @__PURE__ */ e.jsx(Pe, {}),
                /* @__PURE__ */ e.jsx("span", { className: "max-md:hidden", children: "Show" })
              ] }),
              /* @__PURE__ */ e.jsx(
                Ze,
                {
                  comment: s
                }
              ),
              /* @__PURE__ */ e.jsx(
                Xe,
                {
                  comment: s
                }
              )
            ] })
          ] }),
          l && s.replies && /* @__PURE__ */ e.jsx("div", { className: "-ml-2 mb-4 mt-7 pl-2 md:-ml-3 md:mb-0 md:mt-8 md:pl-3", children: s.replies.map((v) => /* @__PURE__ */ e.jsx(
            Je,
            {
              comment: v,
              isReply: !0,
              selectedCommentId: i
            },
            v.id
          )) })
        ]
      }
    ) })
  ] });
}
const Tt = ({
  selectedComment: s,
  replies: t,
  selectedCommentId: r,
  fetchNextPage: i,
  hasNextPage: n,
  isFetchingNextPage: a
}) => {
  const o = { ...s, replies: t };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", "data-testid": "comment-thread-list", children: [
    /* @__PURE__ */ e.jsx(
      Je,
      {
        comment: o,
        isSelectedComment: !0,
        selectedCommentId: r
      }
    ),
    n && /* @__PURE__ */ e.jsx("div", { className: "flex justify-center pb-4", children: /* @__PURE__ */ e.jsx(
      S,
      {
        disabled: a,
        variant: "outline",
        onClick: () => i(),
        children: a ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(U, { size: "sm" }),
          "Loading..."
        ] }) : "Load more replies"
      }
    ) })
  ] });
}, It = ({
  commentId: s,
  open: t,
  onOpenChange: r
}) => {
  var g;
  const {
    data: i,
    isLoading: n,
    isError: a,
    fetchNextPage: o,
    hasNextPage: l,
    isFetchingNextPage: c
  } = wt(s ?? "", {
    enabled: t && !!s
  }), { data: d, isLoading: m, isError: u } = vt(s ?? "", {
    enabled: t && !!s
  }), x = n || m, h = u || a && !d, f = (g = d == null ? void 0 : d.comments) == null ? void 0 : g[0], j = (i == null ? void 0 : i.comments) || [];
  return /* @__PURE__ */ e.jsx(As, { open: t, onOpenChange: r, children: /* @__PURE__ */ e.jsxs(Us, { className: "overflow-y-auto px-6 pt-0 sm:max-w-[600px]", children: [
    /* @__PURE__ */ e.jsx(Vs, { className: "sticky top-0 z-40 -mx-6 bg-background/60 p-6 backdrop-blur", children: /* @__PURE__ */ e.jsx(qs, { className: "text-md", children: "Thread" }) }),
    (f == null ? void 0 : f.post) && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ e.jsx("h3", { className: "line-clamp-1 text-xl font-semibold text-foreground", children: f.post.title }),
          f.post.excerpt && /* @__PURE__ */ e.jsx("p", { className: "mt-1 line-clamp-2 text-sm text-muted-foreground", children: f.post.excerpt })
        ] }),
        f.post.feature_image && /* @__PURE__ */ e.jsx(
          "img",
          {
            alt: f.post.title || "Post feature image",
            className: "hidden aspect-video h-18 shrink-0 rounded object-cover lg:block",
            src: f.post.feature_image
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx(Hs, { className: "-mx-6 my-6 w-auto" })
    ] }),
    /* @__PURE__ */ e.jsx("div", { children: x ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ e.jsx(U, { size: "lg" }) }) : h || !f ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center py-8", children: /* @__PURE__ */ e.jsx(
      Ie,
      {
        actions: /* @__PURE__ */ e.jsx(S, { variant: "outline", onClick: () => r(!1), children: "Back to comments" }),
        description: "This thread may have been deleted or doesn't exist.",
        title: "Thread not found",
        children: /* @__PURE__ */ e.jsx(Re, {})
      }
    ) }) : /* @__PURE__ */ e.jsx(
      Tt,
      {
        fetchNextPage: o,
        hasNextPage: l,
        isFetchingNextPage: c,
        replies: j,
        selectedComment: f,
        selectedCommentId: s ?? ""
      }
    ) })
  ] }) });
}, Ce = ({ height: s }) => /* @__PURE__ */ e.jsx("div", { "aria-hidden": "true", className: "flex", children: /* @__PURE__ */ e.jsx("div", { className: "flex", style: { height: s } }) }), Lt = T(function(t, r) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: r,
      ...t,
      "aria-hidden": "true",
      className: "relative flex flex-col",
      children: /* @__PURE__ */ e.jsx("div", { className: "relative z-10 h-24 animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function Dt({
  items: s,
  totalItems: t,
  hasNextPage: r,
  isFetchingNextPage: i,
  fetchNextPage: n,
  onAddFilter: a,
  isLoading: o
}) {
  const l = _(null), [c, d] = K(), [m, u] = R(!1), [x, h] = R(null), { mutate: f } = Ge(), { mutate: j } = Ke(), g = (C) => {
    if (u(C), !C) {
      const k = new URLSearchParams(c);
      k.delete("thread"), d(k, { replace: !0 });
    }
  };
  A(() => {
    const C = c.get("thread");
    if (C) {
      const k = C.match(/^is:(.+)$/);
      if (k && k[1]) {
        const p = k[1];
        h(p), u(!0);
      } else
        u(!1), h(null);
    } else
      u(!1), h(null);
  }, [c]), ms({ parentRef: l, isLoading: o });
  const { visibleItems: v, spaceBefore: b, spaceAfter: N } = Ls({
    items: s,
    totalItems: t,
    hasNextPage: r,
    isFetchingNextPage: i,
    fetchNextPage: n,
    parentRef: l
  });
  return /* @__PURE__ */ e.jsxs("div", { ref: l, className: "overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "flex flex-col",
        "data-testid": "comments-list",
        children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ e.jsx(Ce, { height: b }),
          v.map(({ key: C, virtualItem: k, item: p, props: E }) => {
            var z, M, V, D, y, w, F, q, be;
            return k.index > s.length - 1 ? /* @__PURE__ */ e.jsx(Lt, { ...E }, C) : /* @__PURE__ */ e.jsxs(
              "div",
              {
                ...E,
                className: "grid w-full grid-cols-1 items-start justify-between gap-4 border-b p-3 hover:bg-muted/50 md:p-5 lg:grid-cols-[minmax(0,1fr)_144px]",
                "data-testid": "comment-list-row",
                onClick: () => {
                  m && g(!1);
                },
                children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ e.jsx(
                      $,
                      {
                        avatarImage: (z = p.member) == null ? void 0 : z.avatar_image,
                        isHidden: p.status === "hidden",
                        memberId: (M = p.member) == null ? void 0 : M.id
                      }
                    ),
                    /* @__PURE__ */ e.jsxs("div", { className: "flex min-w-0 flex-col", children: [
                      /* @__PURE__ */ e.jsx(
                        Ye,
                        {
                          canComment: (V = p.member) == null ? void 0 : V.can_comment,
                          createdAt: p.created_at,
                          isHidden: p.status === "hidden",
                          memberId: (D = p.member) == null ? void 0 : D.id,
                          memberName: (y = p.member) == null ? void 0 : y.name,
                          postTitle: (w = p.post) == null ? void 0 : w.title,
                          onAuthorClick: (F = p.member) != null && F.id ? () => a("author", p.member.id) : void 0,
                          onPostClick: (q = p.post) != null && q.id ? () => a("post", p.post.id) : void 0
                        }
                      ),
                      p.in_reply_to_snippet && /* @__PURE__ */ e.jsxs("div", { className: `mb-1 line-clamp-1 max-w-3xl text-sm ${p.status === "hidden" && "opacity-50"}`, children: [
                        /* @__PURE__ */ e.jsx("span", { className: "text-muted-foreground", children: "Replied to:" }),
                        " ",
                        /* @__PURE__ */ e.jsx(
                          ne,
                          {
                            className: "text-sm font-normal text-muted-foreground hover:text-foreground",
                            "data-testid": "replied-to-link",
                            to: xe(c, p.in_reply_to_id || p.parent_id) || "",
                            onClick: (ss) => {
                              ss.stopPropagation();
                            },
                            children: p.in_reply_to_snippet
                          }
                        )
                      ] }),
                      /* @__PURE__ */ e.jsx(We, { item: p }),
                      /* @__PURE__ */ e.jsxs("div", { className: "mt-4 flex flex-row flex-nowrap items-center gap-3", children: [
                        p.status === "published" && /* @__PURE__ */ e.jsxs(S, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => f({ id: p.id }), children: [
                          /* @__PURE__ */ e.jsx(Se, {}),
                          "Hide"
                        ] }),
                        p.status === "hidden" && /* @__PURE__ */ e.jsxs(S, { className: "text-foreground", size: "sm", variant: "outline", onClick: () => j({ id: p.id }), children: [
                          /* @__PURE__ */ e.jsx(Pe, {}),
                          "Show"
                        ] }),
                        /* @__PURE__ */ e.jsx(
                          Ze,
                          {
                            className: "ml-2",
                            comment: p
                          }
                        ),
                        /* @__PURE__ */ e.jsx(
                          Xe,
                          {
                            comment: p
                          }
                        )
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { children: (be = p.post) != null && be.feature_image ? /* @__PURE__ */ e.jsx(
                    "img",
                    {
                      alt: p.post.title || "Post feature image",
                      className: `hidden aspect-video w-36 rounded object-cover lg:block ${p.status === "hidden" && "opacity-50"}`,
                      src: p.post.feature_image
                    }
                  ) : null })
                ]
              },
              C
            );
          }),
          /* @__PURE__ */ e.jsx(Ce, { height: N })
        ] })
      }
    ),
    /* @__PURE__ */ e.jsx(
      It,
      {
        commentId: x,
        open: m,
        onOpenChange: g
      }
    )
  ] });
}
const es = ["id", "status", "created_at", "body", "post", "author", "reported"];
function Ft(s) {
  const t = [];
  for (const r of s)
    if (r.values[0])
      switch (r.field) {
        case "id":
          t.push(`id:'${r.values[0]}'`);
          break;
        case "status":
          t.push(`status:${r.values[0]}`);
          break;
        case "created_at":
          if (r.operator === "before" && r.values[0])
            t.push(`created_at:<'${r.values[0]}'`);
          else if (r.operator === "after" && r.values[0])
            t.push(`created_at:>'${r.values[0]}'`);
          else if (r.operator === "is" && r.values[0]) {
            const a = String(r.values[0]), o = (/* @__PURE__ */ new Date(a + "T00:00:00")).toISOString(), l = (/* @__PURE__ */ new Date(a + "T23:59:59.999")).toISOString();
            t.push(`created_at:>='${o}'+created_at:<='${l}'`);
          }
          break;
        case "body":
          const n = r.values[0].replace(/'/g, "\\'");
          r.operator === "contains" ? t.push(`html:~'${n}'`) : r.operator === "not_contains" && t.push(`html:-~'${n}'`);
          break;
        case "post":
          r.operator === "is_not" ? t.push(`post_id:-${r.values[0]}`) : t.push(`post_id:${r.values[0]}`);
          break;
        case "author":
          r.operator === "is_not" ? t.push(`member_id:-${r.values[0]}`) : t.push(`member_id:${r.values[0]}`);
          break;
        case "reported":
          r.values[0] === "true" ? t.push("count.reports:>0") : r.values[0] === "false" && t.push("count.reports:0");
          break;
      }
  return t.length ? t.join("+") : void 0;
}
function Mt(s) {
  if (!s)
    return null;
  const t = s.indexOf(":");
  return t <= 0 ? null : {
    operator: s.substring(0, t),
    value: s.substring(t + 1)
  };
}
function $t(s) {
  const t = [];
  for (const [r, i] of s.entries()) {
    if (!es.includes(r) || !i)
      continue;
    const n = Mt(i);
    n && t.push({
      id: r,
      field: r,
      operator: n.operator,
      values: [n.value]
    });
  }
  return t;
}
function zt(s) {
  const t = new URLSearchParams();
  for (const r of s)
    if (es.includes(r.field) && r.values[0] !== void 0) {
      const i = `${r.operator}:${String(r.values[0])}`;
      t.set(r.field, i);
    }
  return t;
}
function Ot() {
  const [s, t] = K(), r = I(() => $t(s), [s]), i = B((l, c = {}) => {
    const d = typeof l == "function" ? l(r) : l, m = zt(d), u = c.replace ?? !0;
    t(m, { replace: u });
  }, [r, t]), n = B(({ replace: l = !0 } = {}) => {
    t(new URLSearchParams(), { replace: l });
  }, [t]), a = I(() => Ft(r), [r]), o = I(() => r.length === 1 && r[0].field === "id", [r]);
  return { filters: r, nql: a, setFilters: i, clearFilters: n, isSingleIdFilter: o };
}
function Bt({ comments: s }) {
  return I(() => {
    var i, n, a;
    const t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
    for (const o of s)
      (i = o.post) != null && i.id && ((n = o.post) != null && n.title) && t.set(o.post.id, {
        id: o.post.id,
        title: o.post.title
      }), (a = o.member) != null && a.id && r.set(o.member.id, {
        id: o.member.id,
        name: o.member.name,
        email: o.member.email
      });
    return {
      knownPosts: Array.from(t.values()),
      knownMembers: Array.from(r.values())
    };
  }, [s]);
}
const rr = () => {
  var g, v;
  const { filters: s, nql: t, setFilters: r, clearFilters: i, isSingleIdFilter: n } = Ot(), a = B((b, N, C = "is") => {
    r((k) => [...k.filter((E) => E.field !== b), os(b, C, [N])], { replace: !1 });
  }, [r]), {
    data: o,
    isError: l,
    isFetching: c,
    isFetchingNextPage: d,
    isRefetching: m,
    fetchNextPage: u,
    hasNextPage: x
  } = Qe({
    searchParams: t ? { filter: t } : {},
    keepPreviousData: !0
  }), { knownPosts: h, knownMembers: f } = Bt({ comments: (o == null ? void 0 : o.comments) ?? [] }), j = c && !d && !m;
  return /* @__PURE__ */ e.jsxs(bt, { children: [
    /* @__PURE__ */ e.jsx(xt, { children: !n && /* @__PURE__ */ e.jsx(
      ft,
      {
        filters: s,
        knownMembers: f,
        knownPosts: h,
        onFiltersChange: r
      }
    ) }),
    /* @__PURE__ */ e.jsx(dt, { children: j ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(U, { size: "lg" }) }) : l ? /* @__PURE__ */ e.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading comments" }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ e.jsx(S, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : o != null && o.comments.length ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(
        Dt,
        {
          fetchNextPage: u,
          hasNextPage: x,
          isFetchingNextPage: d,
          isLoading: c && !d,
          items: (o == null ? void 0 : o.comments) ?? [],
          totalItems: ((v = (g = o == null ? void 0 : o.meta) == null ? void 0 : g.pagination) == null ? void 0 : v.total) ?? 0,
          onAddFilter: a
        }
      ),
      n && /* @__PURE__ */ e.jsx("div", { className: "flex justify-center py-8", children: /* @__PURE__ */ e.jsx(S, { variant: "outline", onClick: () => i({ replace: !1 }), children: "Show all comments" }) })
    ] }) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(
      Ie,
      {
        title: "No comments yet",
        children: /* @__PURE__ */ e.jsx(Re, {})
      }
    ) }) })
  ] });
};
export {
  rr as default
};
//# sourceMappingURL=comments-9gLf_xNT.mjs.map
