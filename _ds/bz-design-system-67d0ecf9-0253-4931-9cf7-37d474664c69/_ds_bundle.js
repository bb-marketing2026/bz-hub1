/* @ds-bundle: {"format":3,"namespace":"BluezooDesignSystem_67d0ec","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"ServiceBadge","sourcePath":"components/display/ServiceBadge.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b6ba0f7f940e","components/display/Badge.jsx":"e6e06902461e","components/display/Card.jsx":"01e96a0c2b6d","components/display/ServiceBadge.jsx":"b2669449c166","components/display/Stat.jsx":"7541b76b5006","components/forms/Checkbox.jsx":"0ee191d12816","components/forms/Input.jsx":"8bda1d06ca5b","ui_kits/website/Contact.jsx":"98e7502dcfb7","ui_kits/website/Footer.jsx":"e323be9cd567","ui_kits/website/Header.jsx":"f014c0e5c9ed","ui_kits/website/Home.jsx":"301acb435c9a","ui_kits/website/Insights.jsx":"2530d65ac1c0","ui_kits/website/Services.jsx":"95e561626763","ui_kits/website/services.data.js":"4e4a60d8a066"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BluezooDesignSystem_67d0ec = window.BluezooDesignSystem_67d0ec || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * bluezoo Button
 * Crisp, geometric, calm. Primary = BZ Blue. Accent = BZ Green (teal).
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  accent = 'brand',
  // 'brand' (blue) | 'teal' | service line key
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}) {
  const accents = {
    brand: {
      rest: 'var(--bz-blue-700)',
      hover: 'var(--bz-blue-800)',
      active: 'var(--bz-blue-900)'
    },
    teal: {
      rest: 'var(--bz-teal-600)',
      hover: 'var(--bz-teal-700)',
      active: 'var(--bz-teal-700)'
    },
    governance: {
      rest: 'var(--bz-governance)',
      hover: '#0f6675',
      active: '#0c525e'
    },
    strategy: {
      rest: 'var(--bz-strategy)',
      hover: '#102f45',
      active: '#0c2536'
    },
    risk: {
      rest: 'var(--bz-risk)',
      hover: '#3e5757',
      active: '#344949'
    },
    resilience: {
      rest: 'var(--bz-resilience)',
      hover: '#5a6432',
      active: '#4a5329'
    }
  };
  const a = accents[accent] || accents.brand;
  const sizes = {
    sm: {
      fontSize: '0.875rem',
      padding: '0.4rem 0.85rem',
      gap: '0.4rem'
    },
    md: {
      fontSize: '1rem',
      padding: '0.6rem 1.2rem',
      gap: '0.5rem'
    },
    lg: {
      fontSize: '1.0625rem',
      padding: '0.8rem 1.6rem',
      gap: '0.6rem'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: s.fontSize,
    lineHeight: 1.1,
    padding: s.padding,
    borderRadius: 'var(--radius-md)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: a.rest,
      color: '#fff',
      borderColor: a.rest
    },
    secondary: {
      background: 'transparent',
      color: a.rest,
      borderColor: 'currentColor'
    },
    ghost: {
      background: 'transparent',
      color: a.rest,
      borderColor: 'transparent'
    },
    onDark: {
      background: '#fff',
      color: 'var(--bz-blue-700)',
      borderColor: '#fff'
    }
  };
  const enter = e => {
    if (disabled) return;
    if (variant === 'primary') e.currentTarget.style.background = a.hover;else if (variant === 'ghost') e.currentTarget.style.background = 'var(--bz-grey-100)';else if (variant === 'secondary') {
      e.currentTarget.style.background = a.rest;
      e.currentTarget.style.color = '#fff';
    } else if (variant === 'onDark') e.currentTarget.style.background = 'var(--bz-grey-100)';
  };
  const leave = e => {
    if (disabled) return;
    const v = variants[variant];
    e.currentTarget.style.background = v.background;
    e.currentTarget.style.color = v.color;
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    disabled: disabled,
    onMouseEnter: enter,
    onMouseLeave: leave
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * bluezoo Badge — compact status / category label.
 */
function Badge({
  children,
  tone = 'neutral',
  variant = 'soft',
  style = {},
  ...rest
}) {
  const palette = {
    neutral: {
      solid: 'var(--bz-grey-700)',
      soft: 'var(--bz-grey-100)',
      softText: 'var(--bz-grey-700)'
    },
    blue: {
      solid: 'var(--bz-blue-700)',
      soft: 'var(--bz-blue-100)',
      softText: 'var(--bz-blue-700)'
    },
    teal: {
      solid: 'var(--bz-teal-600)',
      soft: 'var(--bz-teal-100)',
      softText: 'var(--bz-teal-700)'
    },
    success: {
      solid: 'var(--bz-success)',
      soft: '#eef0e2',
      softText: '#566030'
    },
    warning: {
      solid: 'var(--bz-warning)',
      soft: '#f6eed7',
      softText: '#7d6217'
    },
    danger: {
      solid: 'var(--bz-danger)',
      soft: '#f6e3e1',
      softText: '#8a342d'
    }
  };
  const p = palette[tone] || palette.neutral;
  const styles = {
    solid: {
      background: p.solid,
      color: '#fff',
      border: '1px solid transparent'
    },
    soft: {
      background: p.soft,
      color: p.softText,
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: p.solid,
      border: `1px solid ${p.solid}`
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.3rem',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
      lineHeight: 1,
      padding: '0.3rem 0.55rem',
      borderRadius: 'var(--radius-sm)',
      ...(styles[variant] || styles.soft),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * bluezoo Card — clean white surface, soft cool shadow.
 * Optional top accent bar tinted by brand or service line.
 */
function Card({
  children,
  variant = 'elevated',
  // 'elevated' | 'outline' | 'flat'
  accent = null,
  // null | 'brand' | 'teal' | service line key
  padding = 'var(--space-6)',
  style = {},
  ...rest
}) {
  const accentColors = {
    brand: 'var(--bz-blue-700)',
    teal: 'var(--bz-teal-600)',
    governance: 'var(--bz-governance)',
    strategy: 'var(--bz-strategy)',
    risk: 'var(--bz-risk)',
    resilience: 'var(--bz-resilience)'
  };
  const variants = {
    elevated: {
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-subtle)'
    },
    outline: {
      boxShadow: 'none',
      border: '1px solid var(--border-default)'
    },
    flat: {
      boxShadow: 'none',
      border: 'none'
    }
  };
  const accentColor = accent ? accentColors[accent] || accentColors.brand : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding,
      position: 'relative',
      overflow: 'hidden',
      ...(variants[variant] || variants.elevated),
      ...(accentColor ? {
        borderTop: `3px solid ${accentColor}`
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/ServiceBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * bluezoo ServiceBadge — a pill that names one of the four service lines,
 * coloured with that line's signature colour.
 */
const SERVICES = {
  governance: {
    color: 'var(--bz-governance)',
    soft: 'var(--bz-blue-100)',
    label: 'Governance'
  },
  strategy: {
    color: 'var(--bz-strategy)',
    soft: 'var(--bz-blue-100)',
    label: 'Strategy'
  },
  risk: {
    color: 'var(--bz-risk)',
    soft: '#e7eceb',
    label: 'Risk'
  },
  resilience: {
    color: 'var(--bz-resilience)',
    soft: '#eef0e2',
    label: 'Resilience'
  }
};
function ServiceBadge({
  service = 'governance',
  variant = 'soft',
  children,
  style = {},
  ...rest
}) {
  const s = SERVICES[service] || SERVICES.governance;
  const variants = {
    solid: {
      background: s.color,
      color: '#fff'
    },
    soft: {
      background: s.soft,
      color: s.color
    },
    dot: {
      background: 'transparent',
      color: 'var(--text-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.45rem',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.75rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      padding: variant === 'dot' ? '0' : '0.35rem 0.7rem',
      borderRadius: 'var(--radius-pill)',
      ...(variants[variant] || variants.soft),
      ...style
    }
  }, rest), variant === 'dot' && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '9px',
      height: '9px',
      borderRadius: '50%',
      background: s.color,
      flex: 'none'
    }
  }), children || s.label);
}
Object.assign(__ds_scope, { ServiceBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ServiceBadge.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * bluezoo Stat — large metric with label, for consulting outcomes & proof points.
 */
function Stat({
  value,
  label,
  sublabel,
  accent = 'brand',
  align = 'left',
  style = {},
  ...rest
}) {
  const colors = {
    brand: 'var(--bz-blue-700)',
    teal: 'var(--bz-teal-600)',
    governance: 'var(--bz-governance)',
    strategy: 'var(--bz-strategy)',
    risk: 'var(--bz-risk)',
    resilience: 'var(--bz-resilience)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-display)',
      fontWeight: 700,
      lineHeight: 1,
      color: colors[accent] || colors.brand,
      letterSpacing: '-0.01em'
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '1rem',
      fontWeight: 700,
      color: 'var(--text-strong)',
      marginTop: '0.5rem'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.875rem',
      color: 'var(--text-muted)',
      marginTop: '0.25rem'
    }
  }, sublabel));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * bluezoo Checkbox — square, brand-blue when checked.
 */
function Checkbox({
  label,
  checked,
  defaultChecked,
  id,
  style = {},
  ...rest
}) {
  const cbId = id || (label ? `bz-cb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.55rem',
      fontFamily: 'var(--font-sans)',
      fontSize: '0.95rem',
      color: 'var(--text-body)',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '18px',
      height: '18px',
      margin: 0,
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-xs)',
      background: 'var(--bz-white)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)'
    },
    onChange: e => {
      const on = e.currentTarget.checked;
      e.currentTarget.style.background = on ? 'var(--bz-blue-700)' : 'var(--bz-white)';
      e.currentTarget.style.borderColor = on ? 'var(--bz-blue-700)' : 'var(--border-strong)';
      e.currentTarget.style.backgroundImage = on ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E\")" : 'none';
      e.currentTarget.style.backgroundSize = '12px';
      e.currentTarget.style.backgroundRepeat = 'no-repeat';
      e.currentTarget.style.backgroundPosition = 'center';
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * bluezoo text Input — labelled field with optional hint / error.
 */
function Input({
  label,
  hint,
  error,
  id,
  size = 'md',
  type = 'text',
  style = {},
  ...rest
}) {
  const inputId = id || (label ? `bz-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const sizes = {
    sm: {
      fontSize: '0.875rem',
      padding: '0.45rem 0.65rem'
    },
    md: {
      fontSize: '1rem',
      padding: '0.6rem 0.8rem'
    },
    lg: {
      fontSize: '1.0625rem',
      padding: '0.75rem 0.95rem'
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.35rem',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: '0.875rem',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: s.fontSize,
      padding: s.padding,
      color: 'var(--text-body)',
      background: 'var(--bz-white)',
      border: `1.5px solid ${error ? 'var(--bz-danger)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)'
    },
    onFocus: e => {
      e.currentTarget.style.borderColor = error ? 'var(--bz-danger)' : 'var(--bz-blue-600)';
      e.currentTarget.style.boxShadow = `0 0 0 3px ${error ? 'rgba(158,59,52,.18)' : 'var(--ring-focus)'}`;
    },
    onBlur: e => {
      e.currentTarget.style.borderColor = error ? 'var(--bz-danger)' : 'var(--border-default)';
      e.currentTarget.style.boxShadow = 'none';
    },
    "aria-invalid": !!error
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--bz-danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.78rem',
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
// bluezoo marketing site — Contact (interactive form)
function Contact({
  navigate
}) {
  const {
    Button,
    Input,
    Checkbox,
    Card,
    ServiceBadge
  } = window.BluezooDesignSystem_67d0ec;
  const services = window.BZ_SERVICES;
  const [sent, setSent] = React.useState(false);
  const [interest, setInterest] = React.useState('governance');
  const wrap = {
    maxWidth: 'var(--container-lg)',
    margin: '0 auto',
    padding: '0 var(--space-6)'
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'var(--space-9) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bz-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-4)'
    }
  }, "Let's talk."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.1rem',
      color: 'var(--text-muted)',
      maxWidth: 420
    }
  }, "Tell us a little about the decision in front of you. We'll come back within one business day to arrange a 30-minute consult."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, services.map(s => /*#__PURE__*/React.createElement(ServiceBadge, {
    key: s.key,
    service: s.key,
    variant: "soft"
  })))), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "var(--space-7)"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 'var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-circle-2",
    style: {
      width: 48,
      height: 48,
      color: 'var(--bz-resilience)'
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '16px 0 8px',
      color: 'var(--text-strong)'
    }
  }, "Thank you \u2014 message received."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: '0 0 var(--space-5)'
    }
  }, "A bluezoo advisor will be in touch within one business day."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Jordan Lee",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    type: "email",
    placeholder: "you@company.com",
    required: true
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Organisation",
    placeholder: "Acme Pty Ltd"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: '0.875rem',
      fontWeight: 700,
      color: 'var(--text-strong)',
      display: 'block',
      marginBottom: '0.5rem'
    }
  }, "I'm interested in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, services.map(s => /*#__PURE__*/React.createElement("button", {
    type: "button",
    key: s.key,
    onClick: () => setInterest(s.key),
    style: {
      border: `1.5px solid ${interest === s.key ? s.color : 'var(--border-default)'}`,
      background: interest === s.key ? s.color : 'transparent',
      color: interest === s.key ? '#fff' : 'var(--text-muted)',
      borderRadius: 'var(--radius-pill)',
      padding: '0.4rem 0.9rem',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.85rem',
      transition: 'all var(--dur-base) var(--ease-standard)'
    }
  }, s.name)))), /*#__PURE__*/React.createElement(Input, {
    label: "How can we help?",
    placeholder: "A sentence or two about the challenge\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the monthly bluezoo briefing",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    style: {
      marginTop: 'var(--space-2)'
    }
  }, "Request a consult")))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// bluezoo marketing site — footer
function Footer({
  navigate
}) {
  const cols = [{
    h: 'Services',
    items: ['Governance', 'Strategy', 'Risk', 'Resilience']
  }, {
    h: 'Company',
    items: ['About', 'Our approach', 'Insights', 'Careers']
  }, {
    h: 'Connect',
    items: ['Contact', 'LinkedIn', 'Newsletter']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bz-blue-900)',
      color: 'rgba(255,255,255,0.8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--space-6) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "bluezoo",
    style: {
      height: 40,
      marginBottom: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '0.9rem',
      maxWidth: 280,
      lineHeight: 1.6,
      color: 'rgba(255,255,255,0.65)'
    }
  }, "Governance, strategy, risk and resilience advisory for boards and executive teams.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.5)',
      marginBottom: 'var(--space-4)'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem'
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'rgba(255,255,255,0.78)',
      fontSize: '0.9rem',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-7)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid rgba(255,255,255,0.12)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.82rem',
      color: 'rgba(255,255,255,0.5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 bluezoo. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// bluezoo marketing site — top navigation header
function Header({
  route,
  navigate,
  dark = false
}) {
  const links = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'services',
    label: 'Services'
  }, {
    id: 'insights',
    label: 'Insights'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const {
    Button
  } = window.BluezooDesignSystem_67d0ec;
  const onBrand = dark;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: onBrand ? 'var(--bz-blue-900)' : 'rgba(255,255,255,0.92)',
      backdropFilter: 'saturate(180%) blur(8px)',
      borderBottom: `1px solid ${onBrand ? 'rgba(255,255,255,0.12)' : 'var(--border-subtle)'}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-xl)',
      margin: '0 auto',
      padding: '0 var(--space-6)',
      height: 76,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      navigate('home');
    },
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-primary.png",
    alt: "bluezoo",
    style: {
      height: 38,
      display: onBrand ? 'none' : 'block'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-white.png",
    alt: "bluezoo",
    style: {
      height: 38,
      display: onBrand ? 'block' : 'none'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      navigate(l.id);
    },
    style: {
      fontSize: '0.95rem',
      fontWeight: 700,
      color: route === l.id ? onBrand ? '#fff' : 'var(--bz-blue-700)' : onBrand ? 'rgba(255,255,255,0.75)' : 'var(--text-muted)',
      textDecoration: 'none',
      borderBottom: route === l.id ? `2px solid ${onBrand ? '#fff' : 'var(--bz-teal-600)'}` : '2px solid transparent',
      paddingBottom: 4
    }
  }, l.label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: onBrand ? 'onDark' : 'primary',
    onClick: () => navigate('contact')
  }, "Book a consult"))));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
// bluezoo marketing site — Home
function Home({
  navigate
}) {
  const {
    Button,
    Card,
    Stat,
    ServiceBadge
  } = window.BluezooDesignSystem_67d0ec;
  const services = window.BZ_SERVICES;
  const wrap = {
    maxWidth: 'var(--container-xl)',
    margin: '0 auto',
    padding: '0 var(--space-6)'
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg, var(--bz-blue-900) 0%, var(--bz-blue-700) 100%)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: 'var(--space-9) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.15fr 0.85fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--bz-teal-400)',
      marginBottom: 'var(--space-4)'
    }
  }, "Governance \xB7 Strategy \xB7 Risk \xB7 Resilience"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-hero)',
      color: '#fff',
      lineHeight: 1.05,
      margin: '0 0 var(--space-5)',
      letterSpacing: '-0.01em'
    }
  }, "Steady counsel for an uncertain world."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.25rem',
      color: 'rgba(255,255,255,0.82)',
      maxWidth: 520,
      margin: '0 0 var(--space-6)'
    }
  }, "bluezoo helps boards and executives make confident decisions \u2014 and build organisations that endure."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => navigate('contact')
  }, "Book a consult"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: () => navigate('services'),
    style: {
      color: '#fff'
    }
  }, "Explore services \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark-white.png",
    alt: "",
    style: {
      width: '100%',
      maxWidth: 340,
      opacity: 0.96
    }
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'var(--space-9) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bz-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Four service lines"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-display)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, "One partner, four disciplines")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-5)'
    }
  }, services.map(s => /*#__PURE__*/React.createElement(Card, {
    key: s.key,
    variant: "elevated",
    accent: s.key,
    padding: "var(--space-5)",
    onClick: () => navigate('services', s.key),
    style: {
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/${s.animal}`,
    alt: s.name,
    style: {
      height: 96,
      objectFit: 'contain',
      objectPosition: 'center top',
      marginBottom: 'var(--space-3)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 6px',
      color: s.color,
      fontSize: 'var(--fs-h2)'
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '0.9rem',
      color: 'var(--text-muted)'
    }
  }, s.blurb))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bz-grey-50)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: 'var(--space-8) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "20+",
    label: "Years advising boards",
    align: "center",
    accent: "brand"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "98%",
    label: "Audit pass rate",
    sublabel: "across 40+ engagements",
    align: "center",
    accent: "governance"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "3.4\xD7",
    label: "Faster recovery",
    sublabel: "median incident response",
    align: "center",
    accent: "resilience"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "120+",
    label: "Organisations served",
    align: "center",
    accent: "strategy"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'var(--space-9) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.1fr',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bz-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Our approach"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontSize: '1.6rem',
      lineHeight: 1.4,
      fontStyle: 'italic',
      color: 'var(--text-body)',
      borderLeft: '3px solid var(--bz-teal-600)',
      paddingLeft: 'var(--space-5)',
      margin: 0
    }
  }, "\u201CWe don't hand over a report and leave. We sit alongside your people until the change holds.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: '0.9rem',
      color: 'var(--text-muted)'
    }
  }, "\u2014 bluezoo engagement principle")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, [['target', 'Outcome-led', 'Every engagement is anchored to a decision you need to make.'], ['users', 'Alongside you', 'Embedded teams that transfer capability, not dependency.'], ['bar-chart-3', 'Evidence-based', 'Findings grounded in data, benchmarks and lived practice.'], ['award', 'Quietly rigorous', 'Defensible work that stands up to a regulator or a board.']].map(([icon, h, b]) => /*#__PURE__*/React.createElement(Card, {
    key: h,
    variant: "outline",
    padding: "var(--space-5)"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 26,
      height: 26,
      color: 'var(--bz-teal-600)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '12px 0 6px',
      fontSize: '1.05rem'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '0.88rem',
      color: 'var(--text-muted)'
    }
  }, b))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bz-teal-600)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: 'var(--space-8) var(--space-6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: '2rem',
      margin: '0 0 6px'
    }
  }, "Ready to make the next decision with confidence?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'rgba(255,255,255,0.85)',
      fontSize: '1.05rem'
    }
  }, "Book a 30-minute consult \u2014 no slides, just a conversation.")), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    onClick: () => navigate('contact')
  }, "Get in touch"))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Insights.jsx
try { (() => {
// bluezoo marketing site — Insights (article listing)
function Insights({
  navigate
}) {
  const {
    Card,
    ServiceBadge,
    Button
  } = window.BluezooDesignSystem_67d0ec;
  const wrap = {
    maxWidth: 'var(--container-xl)',
    margin: '0 auto',
    padding: '0 var(--space-6)'
  };
  const featured = {
    service: 'resilience',
    kicker: 'Operational resilience',
    title: 'Beyond the plan: building resilience your people actually use',
    excerpt: 'Most continuity plans fail the first time they are needed. We look at what separates organisations that recover quickly from those that stall.',
    read: '8 min read'
  };
  const posts = [{
    service: 'governance',
    title: 'The board pack is broken. Here is how to fix it.',
    read: '5 min'
  }, {
    service: 'strategy',
    title: 'Operating models that survive contact with reality',
    read: '6 min'
  }, {
    service: 'risk',
    title: 'Risk appetite: from a statement to a daily habit',
    read: '4 min'
  }, {
    service: 'resilience',
    title: 'What a good crisis simulation looks like',
    read: '7 min'
  }, {
    service: 'governance',
    title: 'Assurance mapping without the spreadsheet sprawl',
    read: '5 min'
  }, {
    service: 'strategy',
    title: 'Turning strategy into ninety-day commitments',
    read: '6 min'
  }];
  const svcColor = k => (window.BZ_SERVICES.find(s => s.key === k) || {}).color;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: 'var(--space-8) var(--space-6) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bz-eyebrow",
    style: {
      marginBottom: 10
    }
  }, "Insights"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display)',
      color: 'var(--text-heading)',
      margin: 0,
      maxWidth: 720
    }
  }, "Practical thinking on governance, strategy, risk & resilience"))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'var(--space-7) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    padding: "0",
    style: {
      overflow: 'hidden',
      marginBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: svcColor(featured.service),
      minHeight: 280,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-resilience.png",
    alt: "",
    style: {
      height: 170,
      filter: 'brightness(0) invert(1)',
      opacity: 0.92
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(ServiceBadge, {
    service: featured.service
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '14px 0 12px',
      fontSize: '1.9rem',
      color: 'var(--text-strong)',
      lineHeight: 1.2
    }
  }, featured.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-5)',
      color: 'var(--text-muted)',
      fontSize: '1.02rem'
    }
  }, featured.excerpt), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    accent: "resilience"
  }, "Read article"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.85rem',
      color: 'var(--text-subtle)'
    }
  }, featured.read))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-5)'
    }
  }, posts.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: "outline",
    padding: "0",
    style: {
      overflow: 'hidden',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: svcColor(p.service)
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(ServiceBadge, {
    service: p.service,
    variant: "dot"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: '1.15rem',
      color: 'var(--text-strong)',
      lineHeight: 1.3
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      fontSize: '0.82rem',
      color: 'var(--text-subtle)'
    }
  }, p.read, " read")))))));
}
window.Insights = Insights;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Insights.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
// bluezoo marketing site — Services (with optional focused line)
function Services({
  navigate,
  focus
}) {
  const {
    Button,
    Card,
    ServiceBadge,
    Badge
  } = window.BluezooDesignSystem_67d0ec;
  const services = window.BZ_SERVICES;
  const [active, setActive] = React.useState(focus || 'governance');
  React.useEffect(() => {
    if (focus) setActive(focus);
  }, [focus]);
  const s = services.find(x => x.key === active) || services[0];
  const wrap = {
    maxWidth: 'var(--container-xl)',
    margin: '0 auto',
    padding: '0 var(--space-6)'
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: s.color,
      color: '#fff',
      transition: 'background var(--dur-slow) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: 'var(--space-8) var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '0.78rem',
      fontWeight: 700,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.75)',
      marginBottom: 'var(--space-3)'
    }
  }, s.tag, " \xB7 Service line"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display)',
      color: '#fff',
      margin: '0 0 var(--space-4)'
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '1.25rem',
      color: 'rgba(255,255,255,0.9)',
      maxWidth: 520,
      margin: '0 0 var(--space-5)'
    }
  }, s.blurb), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    onClick: () => navigate('contact')
  }, "Talk to a ", s.name.toLowerCase(), " lead")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-5)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/${s.animal}`,
    alt: s.name,
    style: {
      height: 180
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)',
      position: 'sticky',
      top: 76,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: 'flex',
      gap: 'var(--space-2)',
      padding: 'var(--space-3) var(--space-6)'
    }
  }, services.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.key,
    onClick: () => setActive(x.key),
    style: {
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      padding: '0.5rem 1.1rem',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '0.9rem',
      background: active === x.key ? x.color : 'var(--bz-grey-100)',
      color: active === x.key ? '#fff' : 'var(--text-muted)',
      transition: 'all var(--dur-base) var(--ease-standard)'
    }
  }, x.name)))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: 'var(--space-8) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "bz-eyebrow",
    style: {
      color: s.color,
      marginBottom: 10
    }
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--fs-h1)',
      color: 'var(--text-strong)',
      marginBottom: 'var(--space-4)'
    }
  }, "Where ", s.name.toLowerCase(), " engagements focus"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--space-3)'
    }
  }, s.points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      padding: 'var(--space-3) 0',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: s.color,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--text-body)'
    }
  }, p))))), /*#__PURE__*/React.createElement(Card, {
    variant: "elevated",
    accent: s.key,
    padding: "var(--space-6)"
  }, /*#__PURE__*/React.createElement(ServiceBadge, {
    service: s.key
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '14px 0 10px',
      fontSize: 'var(--fs-h2)'
    }
  }, "A typical engagement"), /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      paddingLeft: '1.1rem',
      display: 'grid',
      gap: 'var(--space-3)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Diagnose"), " \u2014 understand the decision and the evidence base."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Design"), " \u2014 co-create the framework, model or plan."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Embed"), " \u2014 work alongside your people until it holds."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Assure"), " \u2014 test, measure and hand over with confidence.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "teal",
    variant: "soft"
  }, "4\u201312 weeks"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    variant: "outline"
  }, "Board-ready"))))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/services.data.js
try { (() => {
// Shared service-line data for the bluezoo site
window.BZ_SERVICES = [{
  key: 'governance',
  name: 'Governance',
  animal: 'logo-governance.png',
  color: 'var(--bz-governance)',
  tag: 'Elephant',
  blurb: 'Board effectiveness, frameworks and assurance that stand up to scrutiny.',
  points: ['Board & committee reviews', 'Governance frameworks', 'Assurance mapping', 'Policy architecture']
}, {
  key: 'strategy',
  name: 'Strategy',
  animal: 'logo-strategy.png',
  color: 'var(--bz-strategy)',
  tag: 'Lion',
  blurb: 'Clear direction and operating models that turn ambition into delivery.',
  points: ['Corporate strategy', 'Operating-model design', 'Capability planning', 'Strategy execution']
}, {
  key: 'risk',
  name: 'Risk',
  animal: 'logo-risk.png',
  color: 'var(--bz-risk)',
  tag: 'Fox',
  blurb: 'Sharper sight of the risks that matter, and the controls to manage them.',
  points: ['Enterprise risk', 'Controls & compliance', 'Risk appetite', 'Internal audit support']
}, {
  key: 'resilience',
  name: 'Resilience',
  animal: 'logo-resilience.png',
  color: 'var(--bz-resilience)',
  tag: 'Hummingbird',
  blurb: 'The capacity to anticipate, withstand, adapt and recover — by design.',
  points: ['Business continuity', 'Crisis & incident response', 'Operational resilience', 'Recovery testing']
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/services.data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceBadge = __ds_scope.ServiceBadge;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

})();
