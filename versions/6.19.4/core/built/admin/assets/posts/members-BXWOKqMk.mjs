import { u as z, j as e, o as E, $, n as we, a as O, a0 as oe, q as $e, D as Oe, p as Ie } from "./index-Cr7pONoj.mjs";
import { B as L } from "./heading-eNl0HQ4y.mjs";
import { g as Q, i as Z, j as q, k as ee, m as se, l as Fe, X as ze } from "./dialog-B8wFkz_u.mjs";
import { S as _e, a as Ne, b as Se, c as ke, f as Ce } from "./select-DiJwZHym.mjs";
import { D as Ae, a as Re, E as Ue, b as Be, c as Y, f as ce, U as De } from "./dropdown-menu-uWe6MnwA.mjs";
import { a as re, e as Ve, d as Le } from "./hooks-CBG95Unn.mjs";
import { d as Ke, e as Ye, M as We, c as He, f as Ge } from "./use-scroll-restoration-BsI5B4fH.mjs";
import { D as Xe, T as Me, f as Je, h as Qe, N as Ze, d as de, c as qe, a as es, b as ss, C as as, A as ts, g as ls, S as ue, e as pe, P as rs, M as ns, U as me } from "./users-J8FcX1Id.mjs";
import { T as is } from "./tags-CcbbZKAW.mjs";
import { F as os } from "./filters-BOzuY_fv.mjs";
import { a as cs, u as Te, g as G } from "./settings-DLsjFr5N.mjs";
import { M as te, U as ds, g as us } from "./get-site-timezone--CtXRVG8.mjs";
import { E as ps, C as ms, M as hs, F as fs, c as bs } from "./search-qGecLIYP.mjs";
import { u as xs } from "./posts-CRiBkqxa.mjs";
import { H as J, u as gs } from "./use-infinite-virtual-scroll-DN7vL_a2.mjs";
import { E as he } from "./empty-indicator-Bu5ew_PQ.mjs";
import { L as js } from "./loading-indicator-PS-AyPMj.mjs";
function vs({
  open: a,
  labels: s,
  memberCount: t,
  onOpenChange: l,
  onConfirm: o,
  isLoading: r = !1
}) {
  const [n, i] = z(""), c = (d) => {
    d || i(""), l(d);
  }, u = () => {
    n && o(n);
  };
  return /* @__PURE__ */ e.jsx(Q, { open: a, onOpenChange: c, children: /* @__PURE__ */ e.jsxs(Z, { className: "gap-5", children: [
    /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsxs(ee, { children: [
      "Add label to ",
      t.toLocaleString(),
      " ",
      t === 1 ? "member" : "members"
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: "Select label" }),
      /* @__PURE__ */ e.jsxs(_e, { value: n, onValueChange: i, children: [
        /* @__PURE__ */ e.jsx(Ne, { children: /* @__PURE__ */ e.jsx(Se, { placeholder: "Select a label..." }) }),
        /* @__PURE__ */ e.jsx(ke, { children: s.map((d) => /* @__PURE__ */ e.jsx(Ce, { value: d.id, children: d.name }, d.id)) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(se, { children: [
      /* @__PURE__ */ e.jsx(L, { variant: "outline", onClick: () => c(!1), children: "Cancel" }),
      /* @__PURE__ */ e.jsx(
        L,
        {
          disabled: !n || r,
          onClick: u,
          children: r ? "Adding..." : "Add label"
        }
      )
    ] })
  ] }) });
}
function ys({
  open: a,
  labels: s,
  memberCount: t,
  onOpenChange: l,
  onConfirm: o,
  isLoading: r = !1
}) {
  const [n, i] = z(""), c = (d) => {
    d || i(""), l(d);
  }, u = () => {
    n && o(n);
  };
  return /* @__PURE__ */ e.jsx(Q, { open: a, onOpenChange: c, children: /* @__PURE__ */ e.jsxs(Z, { className: "gap-5", children: [
    /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsxs(ee, { children: [
      "Remove label from ",
      t.toLocaleString(),
      " ",
      t === 1 ? "member" : "members"
    ] }) }),
    /* @__PURE__ */ e.jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ e.jsx("label", { className: "text-sm font-medium", children: "Select label" }),
      /* @__PURE__ */ e.jsxs(_e, { value: n, onValueChange: i, children: [
        /* @__PURE__ */ e.jsx(Ne, { children: /* @__PURE__ */ e.jsx(Se, { placeholder: "Select a label..." }) }),
        /* @__PURE__ */ e.jsx(ke, { children: s.map((d) => /* @__PURE__ */ e.jsx(Ce, { value: d.id, children: d.name }, d.id)) })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(se, { children: [
      /* @__PURE__ */ e.jsx(L, { variant: "outline", onClick: () => c(!1), children: "Cancel" }),
      /* @__PURE__ */ e.jsx(
        L,
        {
          disabled: !n || r,
          onClick: u,
          children: r ? "Removing..." : "Remove label"
        }
      )
    ] })
  ] }) });
}
function ws({
  open: a,
  memberCount: s,
  onOpenChange: t,
  onConfirm: l,
  isLoading: o = !1
}) {
  return /* @__PURE__ */ e.jsx(Q, { open: a, onOpenChange: t, children: /* @__PURE__ */ e.jsxs(Z, { className: "gap-5", children: [
    /* @__PURE__ */ e.jsxs(q, { children: [
      /* @__PURE__ */ e.jsx(ee, { children: "Unsubscribe members" }),
      /* @__PURE__ */ e.jsxs(Fe, { children: [
        "Are you sure you want to unsubscribe ",
        s.toLocaleString(),
        " ",
        s === 1 ? "member" : "members",
        " from all newsletters? They will no longer receive any email newsletters from you."
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs(se, { children: [
      /* @__PURE__ */ e.jsx(L, { variant: "outline", onClick: () => t(!1), children: "Cancel" }),
      /* @__PURE__ */ e.jsx(
        L,
        {
          disabled: o,
          variant: "destructive",
          onClick: l,
          children: o ? "Unsubscribing..." : "Unsubscribe"
        }
      )
    ] })
  ] }) });
}
function _s({
  open: a,
  memberCount: s,
  onOpenChange: t,
  onConfirm: l,
  onExportBackup: o,
  isLoading: r = !1
}) {
  const [n, i] = z(!1), c = (d) => {
    d || i(!1), t(d);
  }, u = async () => {
    if (!(s < 1 || r || n))
      try {
        i(!0), await o(), l();
      } catch {
      } finally {
        i(!1);
      }
  };
  return /* @__PURE__ */ e.jsx(Q, { open: a, onOpenChange: c, children: /* @__PURE__ */ e.jsxs(Z, { className: "gap-5", children: [
    /* @__PURE__ */ e.jsx(q, { children: /* @__PURE__ */ e.jsx(ee, { children: "Delete selected members?" }) }),
    /* @__PURE__ */ e.jsx("div", { className: "text-sm", children: s > 0 ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsxs("p", { children: [
        "You're about to delete ",
        /* @__PURE__ */ e.jsxs("strong", { children: [
          s.toLocaleString(),
          " ",
          s === 1 ? "member" : "members"
        ] }),
        ". This is permanent! All Ghost data will be deleted, this will have no effect on subscriptions in Stripe."
      ] }),
      /* @__PURE__ */ e.jsx("p", { className: "mt-4", children: "A backup of your selection will be automatically downloaded to your device before deletion." })
    ] }) : /* @__PURE__ */ e.jsx("p", { children: "No members are selected." }) }),
    /* @__PURE__ */ e.jsxs(se, { children: [
      /* @__PURE__ */ e.jsx(L, { variant: "outline", onClick: () => c(!1), children: "Cancel" }),
      /* @__PURE__ */ e.jsx(
        L,
        {
          disabled: r || n || s < 1,
          variant: "destructive",
          onClick: u,
          children: r || n ? "Deleting..." : "Download backup & delete members"
        }
      )
    ] })
  ] }) });
}
const Ns = "LabelsResponseType", Ee = re({
  dataType: Ns,
  path: "/labels/"
});
async function fe(a) {
  const s = new URLSearchParams({ limit: "all" });
  a && s.set("filter", a);
  const t = (/* @__PURE__ */ new Date()).toJSON().substring(0, 10);
  await Ve(`/members/upload/?${s}`, `members.${t}.csv`);
}
const Ss = ({
  isFiltered: a,
  memberCount: s,
  nql: t,
  canBulkDelete: l
}) => {
  const { data: o } = Ee({}), r = (o == null ? void 0 : o.labels) || [], { mutate: n, isLoading: i } = Ke(), { mutate: c, isLoading: u } = Ye(), [d, m] = z(!1), [f, g] = z(!1), [h, v] = z(!1), [y, w] = z(!1), _ = E(async () => {
    try {
      await fe(t);
    } catch (S) {
      throw $.error("Export failed", {
        description: "There was a problem downloading your member data. Please check your connection and try again.",
        duration: 8e3
      }), S;
    }
  }, [t]), k = E((S) => {
    n({
      filter: t || "",
      all: !t,
      action: {
        type: "addLabel",
        meta: { label: { id: S } }
      }
    }, {
      onSuccess: () => {
        m(!1), $.success("Label added successfully");
      },
      onError: () => {
        $.error("Failed to add label", {
          description: "There was a problem applying this label. Please try again.",
          duration: 8e3
        });
      }
    });
  }, [n, t]), j = E((S) => {
    n({
      filter: t || "",
      all: !t,
      action: {
        type: "removeLabel",
        meta: { label: { id: S } }
      }
    }, {
      onSuccess: () => {
        g(!1), $.success("Label removed successfully");
      },
      onError: () => {
        $.error("Failed to remove label", {
          description: "There was a problem removing this label. Please try again.",
          duration: 8e3
        });
      }
    });
  }, [n, t]), N = E(() => {
    n({
      filter: t || "",
      all: !t,
      action: {
        type: "unsubscribe"
      }
    }, {
      onSuccess: () => {
        v(!1), $.success("Members unsubscribed successfully");
      },
      onError: () => {
        $.error("Failed to unsubscribe members", {
          description: "There was a problem unsubscribing these members. Please try again.",
          duration: 8e3
        });
      }
    });
  }, [n, t]), C = E(() => {
    c({
      filter: t || "",
      all: !t
    }, {
      onSuccess: () => {
        w(!1), $.success("Members deleted successfully");
      },
      onError: () => {
        $.error("Failed to delete members", {
          description: "There was a problem deleting these members. Please try again.",
          duration: 8e3
        });
      }
    });
  }, [c, t]), b = E(async () => {
    try {
      await fe(t);
    } catch (S) {
      throw $.error("Export failed", {
        description: "There was a problem downloading your backup. Please check your connection and try again.",
        duration: 8e3
      }), S;
    }
  }, [t]);
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(Ae, { children: [
      /* @__PURE__ */ e.jsx(Re, { asChild: !0, children: /* @__PURE__ */ e.jsx(L, { variant: "outline", children: /* @__PURE__ */ e.jsx(Ue, { className: "size-4" }) }) }),
      /* @__PURE__ */ e.jsxs(Be, { align: "end", children: [
        /* @__PURE__ */ e.jsxs(Y, { onClick: _, children: [
          /* @__PURE__ */ e.jsx(Xe, { className: "mr-2 size-4" }),
          a ? `Export ${s.toLocaleString()} members` : "Export all members"
        ] }),
        t && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
          /* @__PURE__ */ e.jsx(ce, {}),
          /* @__PURE__ */ e.jsxs(Y, { onClick: () => m(!0), children: [
            /* @__PURE__ */ e.jsx(is, { className: "mr-2 size-4" }),
            "Add label to ",
            s.toLocaleString(),
            " members"
          ] }),
          /* @__PURE__ */ e.jsxs(Y, { onClick: () => g(!0), children: [
            /* @__PURE__ */ e.jsx(Me, { className: "mr-2 size-4" }),
            "Remove label from ",
            s.toLocaleString(),
            " members"
          ] }),
          /* @__PURE__ */ e.jsxs(Y, { onClick: () => v(!0), children: [
            /* @__PURE__ */ e.jsx(Je, { className: "mr-2 size-4" }),
            "Unsubscribe ",
            s.toLocaleString(),
            " members"
          ] }),
          /* @__PURE__ */ e.jsx(ce, {}),
          /* @__PURE__ */ e.jsxs(
            Y,
            {
              className: "text-destructive focus:text-destructive",
              disabled: !l,
              onClick: () => w(!0),
              children: [
                /* @__PURE__ */ e.jsx(Qe, { className: "mr-2 size-4" }),
                "Delete ",
                s.toLocaleString(),
                " members"
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ e.jsx(L, { asChild: !0, children: /* @__PURE__ */ e.jsx("a", { className: "font-bold", href: "#/members/new", children: "New member" }) }),
    /* @__PURE__ */ e.jsx(
      vs,
      {
        isLoading: i,
        labels: r,
        memberCount: s,
        open: d,
        onConfirm: k,
        onOpenChange: m
      }
    ),
    /* @__PURE__ */ e.jsx(
      ys,
      {
        isLoading: i,
        labels: r,
        memberCount: s,
        open: f,
        onConfirm: j,
        onOpenChange: g
      }
    ),
    /* @__PURE__ */ e.jsx(
      ws,
      {
        isLoading: i,
        memberCount: s,
        open: h,
        onConfirm: N,
        onOpenChange: v
      }
    ),
    /* @__PURE__ */ e.jsx(
      _s,
      {
        isLoading: u,
        memberCount: s,
        open: y,
        onConfirm: C,
        onExportBackup: b,
        onOpenChange: w
      }
    )
  ] });
}, ks = ({ children: a, className: s, ...t }) => /* @__PURE__ */ e.jsx("section", { className: we("flex gap-6 flex-col p-4 lg:p-8 size-full grow", s), ...t, children: a }), Cs = "NewslettersResponseType", Ls = Le({
  dataType: Cs,
  path: "/newsletters/",
  defaultSearchParams: { include: "count.active_members,count.posts", limit: "50" },
  defaultNextPageParams: (a, s) => {
    var t;
    return {
      ...s,
      page: (((t = a.meta) == null ? void 0 : t.pagination.next) || 1).toString()
    };
  },
  returnData: (a) => {
    const { pages: s } = a, t = s.flatMap((o) => o.newsletters), l = s[s.length - 1].meta;
    return {
      newsletters: t,
      meta: l,
      isEnd: l ? l.pagination.pages === l.pagination.page : !0
    };
  }
}), Ms = "OffersResponseType", Ts = re({
  dataType: Ms,
  path: "/offers/",
  // offers endpoint doesn't support limit or pagination so we exclude the default ?limit=20
  defaultSearchParams: {}
}), Es = "TiersResponseType", Ps = Le({
  dataType: Es,
  path: "/tiers/",
  defaultNextPageParams: (a, s) => {
    var t;
    return {
      ...s,
      page: (((t = a.meta) == null ? void 0 : t.pagination.next) || 1).toString()
    };
  },
  returnData: (a) => {
    const { pages: s } = a, t = s.flatMap((o) => o.tiers), l = s[s.length - 1].meta;
    return {
      tiers: t,
      meta: l,
      isEnd: l ? l.pagination.pages === l.pagination.page : !0
    };
  }
}), $s = [
  { value: "paid", label: "Paid" },
  { value: "free", label: "Free" },
  { value: "comped", label: "Complimentary" }
], Os = [
  { value: "subscribed", label: "Subscribed" },
  { value: "unsubscribed", label: "Unsubscribed" },
  { value: "email-disabled", label: "Email disabled" }
], Is = [
  { value: "subscribed", label: "Subscribed to at least one" },
  { value: "unsubscribed", label: "Unsubscribed from all" },
  { value: "email-disabled", label: "Email disabled" }
], Fs = [
  { value: "month", label: "Monthly" },
  { value: "year", label: "Yearly" }
], zs = [
  { value: "active", label: "Active" },
  { value: "trialing", label: "Trialing" },
  { value: "canceled", label: "Canceled" },
  { value: "unpaid", label: "Unpaid" },
  { value: "past_due", label: "Past Due" },
  { value: "incomplete", label: "Incomplete" },
  { value: "incomplete_expired", label: "Incomplete - Expired" }
], T = [
  { value: "is", label: "is" },
  { value: "is-not", label: "is not" }
], be = [
  { value: "is", label: "is" },
  { value: "contains", label: "contains" },
  { value: "does-not-contain", label: "does not contain" },
  { value: "starts-with", label: "starts with" },
  { value: "ends-with", label: "ends with" }
], X = [
  { value: "is-less", label: "before" },
  { value: "is-or-less", label: "on or before" },
  { value: "is-greater", label: "after" },
  { value: "is-or-greater", label: "on or after" }
], le = [
  { value: "is", label: "is" },
  { value: "is-greater", label: "is greater than" },
  { value: "is-less", label: "is less than" }
], As = [
  { value: "1", label: "More like this" },
  { value: "0", label: "Less like this" }
];
function Rs({
  labels: a = [],
  tiers: s = [],
  newsletters: t = [],
  hasMultipleTiers: l = !1,
  paidMembersEnabled: o = !1,
  emailAnalyticsEnabled: r = !1,
  labelsOptions: n = [],
  tiersOptions: i = [],
  onLabelsSearchChange: c,
  labelsSearchValue: u,
  labelsLoading: d = !1,
  onTiersSearchChange: m,
  tiersSearchValue: f,
  tiersLoading: g = !1,
  offersOptions: h = [],
  hasOffers: v = !1,
  postResourceOptions: y = [],
  onPostResourceSearchChange: w,
  postResourceSearchValue: _,
  postResourceLoading: k = !1,
  emailResourceOptions: j = [],
  onEmailResourceSearchChange: N,
  emailResourceSearchValue: C,
  emailResourceLoading: b = !1,
  membersTrackSources: S = !1,
  emailTrackOpens: K = !1,
  emailTrackClicks: W = !1,
  audienceFeedbackEnabled: A = !1,
  siteTimezone: R = "Etc/UTC"
}) {
  return O(() => {
    const U = [], P = new Date((/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: R })).toISOString().split("T")[0], M = [];
    if (M.push({
      key: "name",
      label: "Name",
      type: "text",
      icon: /* @__PURE__ */ e.jsx(De, { className: "size-4" }),
      placeholder: "Enter name...",
      operators: be,
      defaultOperator: "is",
      className: "w-48"
    }), M.push({
      key: "email",
      label: "Email",
      type: "text",
      icon: /* @__PURE__ */ e.jsx(te, { className: "size-4" }),
      placeholder: "Enter email...",
      operators: be,
      defaultOperator: "is",
      className: "w-64"
    }), (a.length > 0 || n.length > 0) && M.push({
      key: "label",
      label: "Label",
      type: "multiselect",
      icon: /* @__PURE__ */ e.jsx(Me, { className: "size-4" }),
      options: n.length > 0 ? n : a.map((p) => ({
        value: p.slug,
        label: p.name
      })),
      defaultOperator: "is_any_of",
      hideOperatorSelect: !0,
      autoCloseOnSelect: !0,
      searchable: !0,
      onSearchChange: c,
      searchValue: u,
      isLoading: d,
      className: "w-64"
    }), t.length <= 1 && M.push({
      key: "subscribed",
      label: "Newsletter subscription",
      type: "select",
      icon: /* @__PURE__ */ e.jsx(te, { className: "size-4" }),
      options: Os,
      operators: T,
      searchable: !1
    }), M.push({
      key: "last_seen_at",
      label: "Last seen",
      type: "date",
      icon: /* @__PURE__ */ e.jsx(ps, { className: "size-4" }),
      operators: X,
      defaultOperator: "is-or-less",
      defaultValue: P,
      className: "w-40"
    }), M.push({
      key: "created_at",
      label: "Created",
      type: "date",
      icon: /* @__PURE__ */ e.jsx(ms, { className: "size-4" }),
      operators: X,
      defaultOperator: "is-or-less",
      defaultValue: P,
      className: "w-40"
    }), S && M.push({
      key: "signup",
      label: "Signed up on post/page",
      type: "select",
      icon: /* @__PURE__ */ e.jsx(ds, { className: "size-4" }),
      options: y,
      operators: T,
      searchable: !0,
      onSearchChange: w,
      searchValue: _,
      isLoading: k,
      placeholder: "Select a post or page...",
      className: "w-64"
    }), U.push({
      group: "Basic",
      fields: M
    }), t.length > 1) {
      const p = [];
      p.push({
        key: "subscribed",
        label: "All newsletters",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(te, { className: "size-4" }),
        options: Is,
        operators: T,
        searchable: !1
      }), t.forEach((I) => {
        p.push({
          key: `newsletters.${I.slug}`,
          label: I.name,
          type: "select",
          icon: /* @__PURE__ */ e.jsx(Ze, { className: "size-4" }),
          options: [
            { value: "subscribed", label: "Subscribed" },
            { value: "unsubscribed", label: "Unsubscribed" }
          ],
          operators: [{ value: "is", label: "is" }],
          searchable: !1,
          hideOperatorSelect: !0
        });
      }), U.push({
        group: "Newsletters",
        fields: p
      });
    }
    if (o) {
      const p = [];
      l && p.push({
        key: "tier_id",
        label: "Membership tier",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(de, { className: "size-4" }),
        options: i.length > 0 ? i : s.map((I) => ({
          value: I.id,
          label: I.name
        })),
        operators: T,
        searchable: !0,
        onSearchChange: m,
        searchValue: f,
        isLoading: g,
        className: "w-64"
      }), p.push({
        key: "status",
        label: "Member status",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(qe, { className: "size-4" }),
        options: $s,
        operators: T,
        searchable: !1
      }), p.push({
        key: "subscriptions.plan_interval",
        label: "Billing period",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(es, { className: "size-4" }),
        options: Fs,
        operators: T,
        searchable: !1
      }), p.push({
        key: "subscriptions.status",
        label: "Stripe subscription status",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(de, { className: "size-4" }),
        options: zs,
        operators: T,
        searchable: !1
      }), p.push({
        key: "subscriptions.start_date",
        label: "Paid start date",
        type: "date",
        icon: /* @__PURE__ */ e.jsx(ss, { className: "size-4" }),
        operators: X,
        defaultOperator: "is-or-less",
        defaultValue: P,
        className: "w-40"
      }), p.push({
        key: "subscriptions.current_period_end",
        label: "Next billing date",
        type: "date",
        icon: /* @__PURE__ */ e.jsx(as, { className: "size-4" }),
        operators: X,
        defaultOperator: "is-or-less",
        defaultValue: P,
        className: "w-40"
      }), S && p.push({
        key: "conversion",
        label: "Subscription started on post/page",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(ts, { className: "size-4" }),
        options: y,
        operators: T,
        searchable: !0,
        onSearchChange: w,
        searchValue: _,
        isLoading: k,
        placeholder: "Select a post or page...",
        className: "w-64"
      }), v && p.push({
        key: "offer_redemptions",
        label: "Offer",
        type: "multiselect",
        icon: /* @__PURE__ */ e.jsx(ls, { className: "size-4" }),
        options: h,
        defaultOperator: "is_any_of",
        hideOperatorSelect: !0,
        autoCloseOnSelect: !0,
        searchable: !0,
        className: "w-64"
      }), U.push({
        group: "Subscription",
        fields: p
      });
    }
    if (r) {
      const p = [];
      p.push({
        key: "email_count",
        label: "Emails sent (all time)",
        type: "number",
        icon: /* @__PURE__ */ e.jsx(ue, { className: "size-4" }),
        operators: le,
        defaultOperator: "is",
        defaultValue: 0,
        min: 0,
        className: "w-24"
      }), p.push({
        key: "email_opened_count",
        label: "Emails opened (all time)",
        type: "number",
        icon: /* @__PURE__ */ e.jsx(pe, { className: "size-4" }),
        operators: le,
        defaultOperator: "is",
        defaultValue: 0,
        min: 0,
        className: "w-24"
      }), K && p.push({
        key: "email_open_rate",
        label: "Open rate (all time)",
        type: "number",
        icon: /* @__PURE__ */ e.jsx(rs, { className: "size-4" }),
        operators: le,
        defaultOperator: "is",
        defaultValue: 0,
        min: 0,
        max: 100,
        suffix: "%",
        className: "w-24"
      }), p.push({
        key: "emails.post_id",
        label: "Sent email",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(ue, { className: "size-4" }),
        options: j,
        operators: T,
        searchable: !0,
        onSearchChange: N,
        searchValue: C,
        isLoading: b,
        placeholder: "Select an email...",
        className: "w-64"
      }), K && p.push({
        key: "opened_emails.post_id",
        label: "Opened email",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(pe, { className: "size-4" }),
        options: j,
        operators: T,
        searchable: !0,
        onSearchChange: N,
        searchValue: C,
        isLoading: b,
        placeholder: "Select an email...",
        className: "w-64"
      }), W && p.push({
        key: "clicked_links.post_id",
        label: "Clicked email",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(ns, { className: "size-4" }),
        options: j,
        operators: T,
        searchable: !0,
        onSearchChange: N,
        searchValue: C,
        isLoading: b,
        placeholder: "Select an email...",
        className: "w-64"
      }), A && p.push({
        key: "newsletter_feedback",
        label: "Responded with feedback",
        type: "select",
        icon: /* @__PURE__ */ e.jsx(hs, { className: "size-4" }),
        options: j,
        operators: As,
        defaultOperator: "1",
        searchable: !0,
        onSearchChange: N,
        searchValue: C,
        isLoading: b,
        placeholder: "Select an email...",
        className: "w-64"
      }), U.push({
        group: "Email",
        fields: p
      });
    }
    return U;
  }, [
    a,
    s,
    t,
    l,
    o,
    r,
    n,
    i,
    c,
    u,
    d,
    m,
    f,
    g,
    h,
    v,
    y,
    w,
    _,
    k,
    j,
    N,
    C,
    b,
    S,
    K,
    W,
    A,
    R
  ]);
}
const Us = "PagesResponseType", Bs = re({
  dataType: Us,
  path: "/pages/"
});
function xe(a, s) {
  return s ? `${a}+title:~'${s.replace(/'/g, "\\'")}'` : a;
}
function ge(a) {
  const [s, t] = z(""), l = a === "post", o = xe(
    l ? "status:published" : "(status:published,status:sent)+newsletter_id:-null",
    s
  ), { data: r, isLoading: n } = xs({
    searchParams: {
      filter: o,
      limit: "25",
      fields: "id,title",
      order: "published_at DESC"
    }
  }), { data: i, isLoading: c } = Bs({
    searchParams: {
      filter: xe("status:published", s),
      limit: "25",
      fields: "id,title",
      order: "published_at DESC"
    },
    enabled: l
  }), u = O(() => {
    const m = (r == null ? void 0 : r.posts) || [];
    if (!l)
      return m.map((h) => ({
        value: h.id,
        label: h.title
      }));
    const f = (i == null ? void 0 : i.pages) || [], g = [];
    for (const h of m)
      g.push({ value: h.id, label: h.title });
    for (const h of f)
      g.push({ value: h.id, label: h.title, detail: "Page" });
    return g;
  }, [r, i, l]), d = E((m) => {
    t(m);
  }, []);
  return {
    options: u,
    isLoading: n || l && c,
    searchValue: s,
    onSearchChange: d
  };
}
function Ds(a) {
  const s = /* @__PURE__ */ new Map(), t = [], l = [];
  for (const o of a)
    o.redemption_type === "retention" && (o.cadence === "month" ? t.push(o.id) : o.cadence === "year" && l.push(o.id));
  return t.length > 0 && s.set("retention:month", t), l.length > 0 && s.set("retention:year", l), s;
}
function Vs(a, s, t) {
  const l = [];
  for (const o of a)
    s && o.redemption_type === "retention" || l.push({ value: o.id, label: o.name });
  return s && (t.has("retention:month") && l.push({ value: "retention:month", label: "Monthly Retention" }), t.has("retention:year") && l.push({ value: "retention:year", label: "Yearly Retention" })), l;
}
const je = ({
  filters: a,
  onFiltersChange: s
}) => {
  var M, p, I, ne, ie;
  const { data: t } = Ee({ searchParams: { limit: "100" } }), { data: l } = Ps({ searchParams: { limit: "100" } }), { data: o } = Ts({}), { data: r } = Ls({ searchParams: { limit: "100" } }), { data: n } = cs({}), { data: i } = Te({}), c = (n == null ? void 0 : n.settings) || [], u = G(c, "paid_members_enabled") === !0, d = ((M = i == null ? void 0 : i.config) == null ? void 0 : M.emailAnalytics) === !0, m = G(c, "members_track_sources") === !0, f = G(c, "email_track_opens") === !0, g = G(c, "email_track_clicks") === !0, h = ((I = (p = i == null ? void 0 : i.config) == null ? void 0 : p.labs) == null ? void 0 : I.audienceFeedback) === !0, v = ((ie = (ne = i == null ? void 0 : i.config) == null ? void 0 : ne.labs) == null ? void 0 : ie.retentionOffers) === !0, y = us(c), w = (t == null ? void 0 : t.labels) || [], _ = (l == null ? void 0 : l.tiers) || [], k = (r == null ? void 0 : r.newsletters) || [], j = (o == null ? void 0 : o.offers) || [], N = _.filter((x) => x.type === "paid" && x.active), C = N.length > 1, b = O(() => v ? Ds(j) : /* @__PURE__ */ new Map(), [j, v]), S = O(() => Vs(j, v, b), [j, v, b]), K = O(() => b.size === 0 ? a : a.map((x) => {
    if (x.field !== "offer_redemptions")
      return x;
    const H = [...x.values], F = [], D = /* @__PURE__ */ new Set();
    for (const [B, V] of b)
      V.length > 0 && V.every((ae) => H.includes(ae)) && (F.push(B), V.forEach((ae) => D.add(ae)));
    for (const B of H)
      D.has(B) || F.push(B);
    return { ...x, values: F };
  }), [a, b]), W = E((x) => {
    if (b.size === 0) {
      s(x);
      return;
    }
    const H = x.map((F) => {
      if (F.field !== "offer_redemptions")
        return F;
      const D = [];
      for (const B of F.values) {
        const V = b.get(B);
        V ? D.push(...V) : D.push(B);
      }
      return { ...F, values: [...new Set(D)] };
    });
    s(H);
  }, [s, b]), A = ge("post"), R = ge("email"), U = Rs({
    labels: w,
    tiers: N,
    newsletters: k.filter((x) => x.status === "active"),
    hasMultipleTiers: C,
    paidMembersEnabled: u,
    emailAnalyticsEnabled: d,
    labelsOptions: w.map((x) => ({ value: x.slug, label: x.name })),
    tiersOptions: N.map((x) => ({ value: x.id, label: x.name })),
    offersOptions: S,
    hasOffers: j.length > 0,
    postResourceOptions: A.options,
    onPostResourceSearchChange: A.onSearchChange,
    postResourceSearchValue: A.searchValue,
    postResourceLoading: A.isLoading,
    emailResourceOptions: R.options,
    onEmailResourceSearchChange: R.onSearchChange,
    emailResourceSearchValue: R.searchValue,
    emailResourceLoading: R.isLoading,
    membersTrackSources: m,
    emailTrackOpens: f,
    emailTrackClicks: g,
    audienceFeedbackEnabled: h,
    siteTimezone: y
  }), P = a.length > 0;
  return /* @__PURE__ */ e.jsx(
    os,
    {
      addButtonIcon: P ? /* @__PURE__ */ e.jsx(fs, {}) : /* @__PURE__ */ e.jsx(bs, {}),
      addButtonText: P ? "Add filter" : "Filter",
      allowMultiple: !0,
      className: `[&>button]:order-last ${P ? "[&>button]:border-none" : "w-auto"}`,
      clearButtonClassName: "font-normal text-muted-foreground",
      clearButtonIcon: /* @__PURE__ */ e.jsx(ze, {}),
      clearButtonText: "Clear",
      fields: U,
      filters: K,
      keyboardShortcut: "f",
      popoverAlign: P ? "start" : "end",
      showClearButton: P,
      showSearchInput: !1,
      onChange: W
    }
  );
}, Ks = ({
  children: a,
  totalMembers: s,
  isLoading: t
}) => /* @__PURE__ */ e.jsxs(J, { className: "relative !pb-6 md:sticky", variant: "inline-nav", children: [
  /* @__PURE__ */ e.jsxs(J.Title, { children: [
    "Members ",
    !t && /* @__PURE__ */ e.jsx("span", { className: "font-normal text-muted-foreground", children: s.toLocaleString() })
  ] }),
  a
] }), Ys = ({ children: a }) => /* @__PURE__ */ e.jsx("div", { className: "size-full", children: /* @__PURE__ */ e.jsx("div", { className: "relative flex size-full flex-col", children: /* @__PURE__ */ e.jsx("div", { className: "grid w-full grow", children: /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col", "data-testid": "members-page", children: a }) }) }) });
function Ws(a) {
  if (!a)
    return { text: "Unknown", isKnown: !1 };
  try {
    const s = JSON.parse(a);
    return s.country ? s.country_code === "US" && s.region ? { text: `${s.region}, US`, isKnown: !0 } : { text: s.country, isKnown: !0 } : { text: "Unknown", isKnown: !1 };
  } catch {
    return { text: "Unknown", isKnown: !1 };
  }
}
function Hs(a) {
  switch (a) {
    case "paid":
      return "Paid";
    case "comped":
      return "Complimentary";
    default:
      return "Free";
  }
}
function Gs({ item: a }) {
  return /* @__PURE__ */ e.jsxs("div", { className: "flex items-center gap-3", children: [
    /* @__PURE__ */ e.jsx(
      We,
      {
        avatarImage: a.avatar_image,
        className: "size-10 min-w-10 md:size-10 md:min-w-10",
        memberId: a.id
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ e.jsx("div", { className: "truncate font-medium", children: a.name || a.email || "Anonymous" }),
      a.name && a.email && /* @__PURE__ */ e.jsx("div", { className: "truncate text-sm text-muted-foreground", "data-testid": "member-email", children: a.email })
    ] })
  ] });
}
function Xs({ status: a, tiers: s }) {
  const t = s == null ? void 0 : s.map((l) => l.name).join(", ");
  return /* @__PURE__ */ e.jsx("div", { className: "flex justify-end lg:justify-start", children: /* @__PURE__ */ e.jsxs("div", { className: "min-w-0", children: [
    /* @__PURE__ */ e.jsx("div", { className: "text-sm", children: Hs(a) }),
    t && /* @__PURE__ */ e.jsx("div", { className: "truncate text-xs text-muted-foreground", children: t })
  ] }) });
}
function Js({ emailOpenRate: a }) {
  return /* @__PURE__ */ e.jsx("div", { className: "hidden text-sm text-muted-foreground lg:block", children: a != null ? `${Math.round(a)}%` : "N/A" });
}
function Qs({ geolocation: a }) {
  const s = Ws(a);
  return /* @__PURE__ */ e.jsx("div", { className: `hidden truncate text-sm lg:block ${s.isKnown ? "text-foreground" : "text-muted-foreground"}`, children: s.text });
}
function Zs({ createdAt: a }) {
  return /* @__PURE__ */ e.jsxs("div", { className: "hidden lg:block", children: [
    /* @__PURE__ */ e.jsx("div", { className: "text-sm", children: oe.utc(a).format("D MMM YYYY") }),
    /* @__PURE__ */ e.jsx("div", { className: "text-xs text-muted-foreground", children: oe.utc(a).fromNow() })
  ] });
}
function qs({ item: a, gridCols: s, showEmailOpenRate: t, onClick: l, ...o }) {
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      ...o,
      className: `grid w-full cursor-pointer grid-cols-[minmax(0,1fr)_7rem] items-center gap-2 border-b px-4 py-3 hover:bg-muted/50 lg:gap-4 ${s}`,
      "data-testid": "members-list-item",
      onClick: () => l(a.id),
      children: [
        /* @__PURE__ */ e.jsx(Gs, { item: a }),
        /* @__PURE__ */ e.jsx(Xs, { status: a.status, tiers: a.tiers }),
        t && /* @__PURE__ */ e.jsx(Js, { emailOpenRate: a.email_open_rate }),
        /* @__PURE__ */ e.jsx(Qs, { geolocation: a.geolocation }),
        /* @__PURE__ */ e.jsx(Zs, { createdAt: a.created_at })
      ]
    }
  );
}
const ve = ({ height: a }) => /* @__PURE__ */ e.jsx("div", { "aria-hidden": "true", className: "flex", children: /* @__PURE__ */ e.jsx("div", { className: "flex", style: { height: a } }) }), ea = Oe(function(s, t) {
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: t,
      ...s,
      "aria-hidden": "true",
      className: "relative flex flex-col",
      children: /* @__PURE__ */ e.jsx("div", { className: "relative z-10 h-[72px] animate-pulse", children: /* @__PURE__ */ e.jsx("div", { className: "h-full rounded-md bg-muted", "data-testid": "loading-placeholder" }) })
    }
  );
});
function sa({
  items: a,
  totalItems: s,
  hasNextPage: t,
  isFetchingNextPage: l,
  fetchNextPage: o,
  isLoading: r,
  showEmailOpenRate: n = !0,
  onRowClick: i
}) {
  const c = $e(null);
  He({ parentRef: c, isLoading: r });
  const { visibleItems: u, spaceBefore: d, spaceAfter: m } = gs({
    items: a,
    totalItems: s,
    hasNextPage: t,
    isFetchingNextPage: l,
    fetchNextPage: o,
    parentRef: c,
    estimateSize: () => 72
    // Approximate row height
  }), f = (y) => {
    i ? i(y) : window.location.hash = `/members/${y}`;
  }, v = n ? "lg:grid-cols-[3fr_1fr_1fr_1.5fr_1.5fr]" : "lg:grid-cols-[3fr_1fr_1.5fr_1.5fr]";
  return /* @__PURE__ */ e.jsx("div", { ref: c, className: "overflow-hidden", children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", "data-testid": "members-list", children: [
    /* @__PURE__ */ e.jsxs("div", { className: `sticky top-0 z-10 hidden border-b bg-background lg:grid lg:gap-4 lg:px-4 lg:py-3 ${v}`, children: [
      /* @__PURE__ */ e.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-gray-700", children: "Member" }),
      /* @__PURE__ */ e.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-gray-700", children: "Status" }),
      n && /* @__PURE__ */ e.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-gray-700", children: "Open rate" }),
      /* @__PURE__ */ e.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-gray-700", children: "Location" }),
      /* @__PURE__ */ e.jsx("div", { className: "text-xs font-medium uppercase tracking-wide text-gray-700", children: "Created" })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ e.jsx(ve, { height: d }),
      u.map(({ key: y, virtualItem: w, item: _, props: k }) => w.index > a.length - 1 ? /* @__PURE__ */ e.jsx(ea, { ...k }, y) : /* @__PURE__ */ e.jsx(
        qs,
        {
          ...k,
          gridCols: v,
          item: _,
          showEmailOpenRate: n,
          onClick: f
        },
        y
      )),
      /* @__PURE__ */ e.jsx(ve, { height: m })
    ] })
  ] }) });
}
const aa = [
  // Basic filters
  "name",
  "email",
  "label",
  "subscribed",
  "last_seen_at",
  "created_at",
  "signup",
  // Newsletter filters (dynamic, prefixed with newsletters.slug:)
  "newsletters",
  // Subscription filters
  "tier_id",
  "status",
  "subscriptions.plan_interval",
  "subscriptions.status",
  "subscriptions.start_date",
  "subscriptions.current_period_end",
  "conversion",
  // Email filters
  "email_count",
  "email_opened_count",
  "email_open_rate",
  "emails.post_id",
  "opened_emails.post_id",
  "clicked_links.post_id",
  "newsletter_feedback",
  // Optional
  "offer_redemptions"
], Pe = /* @__PURE__ */ new Set(["label", "offer_redemptions"]);
function ta(a) {
  return "'" + a.replace(/'/g, "\\'") + "'";
}
function la(a) {
  return {
    "is-less": "<",
    "is-or-less": "<=",
    is: "",
    "is-not": "-",
    "is-greater": ">",
    "is-or-greater": ">=",
    contains: "~",
    "does-not-contain": "-~",
    "starts-with": "~^",
    "ends-with": "~$",
    // Shade filter operators (mapped to our internal names)
    before: "<",
    after: ">",
    is_not: "-",
    is_any_of: "",
    is_not_any_of: "-",
    greater_than: ">",
    less_than: "<",
    equals: "",
    not_equals: "-"
  }[a] ?? "";
}
function ra(a) {
  const s = [];
  for (const t of a) {
    if (!t.values[0] && t.values[0] !== 0)
      continue;
    const l = t.field, o = t.operator, r = t.values[0], n = la(o);
    if (l.startsWith("newsletters.")) {
      const i = l.replace("newsletters.", "");
      String(r) === "subscribed" ? s.push(`(newsletters.slug:${i}+email_disabled:0)`) : s.push(`(newsletters.slug:-${i},email_disabled:1)`);
      continue;
    }
    switch (l) {
      case "name":
      case "email": {
        const i = ta(String(r));
        s.push(`${l}:${n}${i}`);
        break;
      }
      case "label":
      case "tier_id":
      case "offer_redemptions": {
        if (Array.isArray(t.values) && t.values.length > 0) {
          const i = "[" + t.values.join(",") + "]";
          s.push(`${l}:${n}${i}`);
        } else r && s.push(`${l}:${n}${r}`);
        break;
      }
      case "status": {
        s.push(`status:${n}${r}`);
        break;
      }
      case "subscribed": {
        r === "email-disabled" ? o === "is" ? s.push("(email_disabled:1)") : s.push("(email_disabled:0)") : o === "is" || o === "is_any_of" ? r === "subscribed" ? s.push("(subscribed:true+email_disabled:0)") : s.push("(subscribed:false+email_disabled:0)") : r === "subscribed" ? s.push("(subscribed:false,email_disabled:1)") : s.push("(subscribed:true,email_disabled:1)");
        break;
      }
      case "newsletters": {
        const [i, c] = String(r).split(":");
        c === "subscribed" || o === "is" && c !== "unsubscribed" ? s.push(`(newsletters.slug:${i}+email_disabled:0)`) : s.push(`(newsletters.slug:-${i},email_disabled:1)`);
        break;
      }
      case "last_seen_at":
      case "created_at":
      case "subscriptions.start_date":
      case "subscriptions.current_period_end": {
        const i = String(r);
        s.push(`${l}:${n}'${i}'`);
        break;
      }
      case "email_count":
      case "email_opened_count":
      case "email_open_rate": {
        s.push(`${l}:${n}${r}`);
        break;
      }
      case "subscriptions.plan_interval": {
        s.push(`subscriptions.plan_interval:${n}${r}`);
        break;
      }
      case "subscriptions.status": {
        s.push(`subscriptions.status:${n}${r}`);
        break;
      }
      case "signup":
      case "conversion":
      case "emails.post_id":
      case "opened_emails.post_id":
      case "clicked_links.post_id": {
        s.push(`${l}:${n}'${r}'`);
        break;
      }
      case "newsletter_feedback": {
        const i = o;
        s.push(`(feedback.post_id:'${r}'+feedback.score:${i})`);
        break;
      }
      default:
        typeof r == "string" && r.includes(" ") ? s.push(`${l}:${n}'${r}'`) : s.push(`${l}:${n}${r}`);
    }
  }
  return s.length ? s.join("+") : void 0;
}
function na(a) {
  if (!a)
    return null;
  const s = a.indexOf(":");
  return s <= 0 ? null : {
    operator: a.substring(0, s),
    value: a.substring(s + 1)
  };
}
function ia(a) {
  const s = [];
  for (const [t, l] of a.entries()) {
    if (t === "search" || !t.startsWith("newsletters.") && !aa.includes(t) || !l)
      continue;
    const r = na(l);
    if (r) {
      const n = Pe.has(t) ? r.value.split(",") : [r.value];
      s.push({
        id: t,
        field: t,
        operator: r.operator,
        values: n
      });
    }
  }
  return s;
}
function ye(a, s) {
  const t = new URLSearchParams();
  for (const l of a)
    if (l.values[0] !== void 0) {
      const o = l.field, r = Pe.has(o) && l.values.length > 1 ? l.values.map((i) => String(i)).join(",") : String(l.values[0]), n = `${l.operator}:${r}`;
      t.set(o, n);
    }
  return s && t.set("search", s), t;
}
function oa() {
  const [a, s] = Ie(), t = O(() => ia(a), [a]), l = O(() => a.get("search") ?? "", [a]), o = E((u, d = {}) => {
    const m = typeof u == "function" ? u(t) : u, f = a.get("search") ?? void 0, g = ye(m, f), h = d.replace ?? !0;
    s(g, { replace: h });
  }, [t, a, s]), r = E((u, d = {}) => {
    const m = ye(t, u || void 0), f = d.replace ?? !0;
    s(m, { replace: f });
  }, [t, s]), n = E(({ replace: u = !0 } = {}) => {
    s(new URLSearchParams(), { replace: u });
  }, [s]), i = O(() => ra(t), [t]), c = t.length > 0 || l.length > 0;
  return { filters: t, nql: i, search: l, setFilters: o, setSearch: r, clearFilters: n, isFiltered: c };
}
const ca = [
  "subscriptions.plan_interval",
  "subscriptions.status",
  "subscriptions.start_date",
  "subscriptions.current_period_end",
  "conversion",
  "offer_redemptions"
], Ca = () => {
  var j, N, C;
  const { filters: a, nql: s, setFilters: t, isFiltered: l, clearFilters: o } = oa(), { data: r } = Te(), n = ((j = r == null ? void 0 : r.config) == null ? void 0 : j.emailAnalytics) === !0, i = O(() => !a.some((b) => ca.includes(b.field)), [a]), c = O(() => {
    if (s)
      return {
        include: "labels,tiers",
        limit: "50",
        order: "created_at desc",
        filter: s
      };
  }, [s]), {
    data: u,
    isError: d,
    isFetching: m,
    isFetchingNextPage: f,
    isRefetching: g,
    fetchNextPage: h,
    hasNextPage: v
  } = Ge({
    searchParams: c,
    keepPreviousData: !0
  }), y = m && !f && !g, w = ((C = (N = u == null ? void 0 : u.meta) == null ? void 0 : N.pagination) == null ? void 0 : C.total) ?? 0, _ = a.length > 0, k = we(
    "flex flex-row",
    !_ && "items-center gap-2",
    _ && "col-span-full row-start-4 pt-5"
  );
  return /* @__PURE__ */ e.jsxs(Ys, { children: [
    /* @__PURE__ */ e.jsxs(
      Ks,
      {
        isLoading: y,
        totalMembers: w,
        children: [
          /* @__PURE__ */ e.jsx(J.Actions, { children: /* @__PURE__ */ e.jsxs(J.ActionGroup, { children: [
            !_ && /* @__PURE__ */ e.jsx(
              je,
              {
                filters: a,
                onFiltersChange: t
              }
            ),
            /* @__PURE__ */ e.jsx(
              Ss,
              {
                canBulkDelete: i,
                isFiltered: l,
                memberCount: w,
                nql: s
              }
            )
          ] }) }),
          _ && /* @__PURE__ */ e.jsx("div", { className: k, children: /* @__PURE__ */ e.jsx(
            je,
            {
              filters: a,
              onFiltersChange: t
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ e.jsx(ks, { children: y ? /* @__PURE__ */ e.jsx("div", { className: "flex h-full items-center justify-center", children: /* @__PURE__ */ e.jsx(js, { size: "lg" }) }) : d ? /* @__PURE__ */ e.jsxs("div", { className: "mb-16 flex h-full flex-col items-center justify-center", children: [
      /* @__PURE__ */ e.jsx("h2", { className: "mb-2 text-xl font-medium", children: "Error loading members" }),
      /* @__PURE__ */ e.jsx("p", { className: "mb-4 text-muted-foreground", children: "Please reload the page to try again" }),
      /* @__PURE__ */ e.jsx(L, { onClick: () => window.location.reload(), children: "Reload page" })
    ] }) : u != null && u.members.length ? /* @__PURE__ */ e.jsx(
      sa,
      {
        fetchNextPage: h,
        hasNextPage: v,
        isFetchingNextPage: f,
        isLoading: m && !f,
        items: u.members,
        showEmailOpenRate: n,
        totalItems: w
      }
    ) : /* @__PURE__ */ e.jsx("div", { className: "flex h-full flex-col items-center justify-center", children: l ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx(he, { title: "No members match the current filter", children: /* @__PURE__ */ e.jsx(me, {}) }),
      /* @__PURE__ */ e.jsx(
        L,
        {
          className: "mt-4",
          variant: "outline",
          onClick: () => o({ replace: !1 }),
          children: "Show all members"
        }
      )
    ] }) : /* @__PURE__ */ e.jsx(he, { title: "No members yet", children: /* @__PURE__ */ e.jsx(me, {}) }) }) })
  ] });
};
export {
  Ca as default
};
//# sourceMappingURL=members-BXWOKqMk.mjs.map
