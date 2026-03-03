import { d as E, b as l, c as P, a as S } from "./hooks-CBG95Unn.mjs";
import { j as i, n as w, _ as j, u as k, q as Q, b as u } from "./index-Cr7pONoj.mjs";
import { U as B } from "./dropdown-menu-uWe6MnwA.mjs";
import { g as C } from "./use-infinite-virtual-scroll-DN7vL_a2.mjs";
const m = "MembersResponseType", N = S({
  dataType: m,
  path: "/members/"
}), _ = P({
  dataType: m,
  path: (e) => `/members/${e}/`
}), q = l({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/disable`,
  body: ({ reason: e, hideComments: t }) => ({
    reason: e,
    hide_comments: t
  }),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), I = l({
  method: "POST",
  path: ({ id: e }) => `/members/${e}/commenting/enable`,
  body: () => ({}),
  invalidateQueries: {
    dataType: "CommentsResponseType"
  }
}), L = E({
  dataType: m,
  path: "/members/",
  defaultSearchParams: {
    include: "labels,tiers",
    limit: "50",
    order: "created_at desc"
  },
  defaultNextPageParams: (e, t) => {
    var s;
    if ((s = e.meta) != null && s.pagination.next)
      return {
        ...t,
        page: e.meta.pagination.next.toString()
      };
  },
  returnData: (e) => {
    const { pages: t } = e, s = t.flatMap((a) => a.members), r = t[t.length - 1].meta;
    return {
      members: s,
      meta: r,
      isEnd: r ? r.pagination.pages === r.pagination.page : !0
    };
  }
}), U = l({
  method: "PUT",
  path: () => "/members/bulk/",
  body: ({ action: e }) => ({
    bulk: {
      action: e.type,
      meta: e.meta || {}
    }
  }),
  searchParams: ({ filter: e, all: t }) => {
    if (!t && !e)
      throw new Error("Bulk edit requires either a filter or all flag");
    const s = {};
    return t ? s.all = "true" : s.filter = e, s;
  },
  invalidateQueries: { dataType: m }
}), $ = l({
  method: "DELETE",
  path: () => "/members/",
  searchParams: ({ filter: e, all: t }) => {
    if (!t && !e)
      throw new Error("Bulk delete requires either a filter or all flag");
    const s = {};
    return t ? s.all = "true" : s.filter = e, s;
  },
  invalidateQueries: { dataType: m }
});
function A({ avatarImage: e, memberId: t, isHidden: s, className: r }) {
  return /* @__PURE__ */ i.jsxs("div", { className: w(
    "relative flex size-6 min-w-6 items-center justify-center overflow-hidden rounded-full bg-accent md:size-8 md:min-w-8",
    s && "opacity-50",
    r
  ), children: [
    t && e && /* @__PURE__ */ i.jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ i.jsx("img", { alt: "Member avatar", src: e }) }),
    /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsx(B, { className: "!size-3 text-muted-foreground md:!size-4", size: 12 }) })
  ] });
}
const f = /* @__PURE__ */ new Map();
function O({ parentRef: e, enabled: t = !0, isLoading: s = !1 }) {
  const r = j(), [a, b] = k(null), d = Q(null);
  u(() => {
    if (!t || !e.current)
      return;
    const n = C(e.current);
    b(n);
  }, [t, e]), u(() => {
    if (!t || !a)
      return;
    const n = r.pathname + r.search, o = () => {
      const c = a.scrollTop;
      f.set(n, c);
    };
    return a.addEventListener("scroll", o), () => a.removeEventListener("scroll", o);
  }, [t, r.pathname, r.search, a]), u(() => {
    const n = r.pathname + r.search, o = f.get(n);
    if (!(!t || !a || s)) {
      if (o !== void 0 && d.current !== n) {
        let c = 0;
        const g = 3, p = () => {
          if (c += 1, !a)
            return;
          const y = a.scrollTop, M = a.scrollHeight, T = a.clientHeight, h = M - T;
          if (o > h && c < g) {
            setTimeout(p, 100);
            return;
          }
          if (Math.abs(o - y) > 5) {
            const x = Math.min(o, h);
            a.scrollTop = x;
          }
        }, v = setTimeout(p, 150);
        return () => clearTimeout(v);
      }
      d.current = n;
    }
  }, [t, r.pathname, r.search, a, s]);
}
export {
  A as M,
  q as a,
  I as b,
  O as c,
  U as d,
  $ as e,
  L as f,
  _ as g,
  N as u
};
//# sourceMappingURL=use-scroll-restoration-BsI5B4fH.mjs.map
