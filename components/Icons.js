export const CartIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 8h12l-1.2 11.2a1.6 1.6 0 0 1-1.6 1.4H8.8a1.6 1.6 0 0 1-1.6-1.4Z" />
    <path d="M9 8V6.4a3 3 0 0 1 6 0V8" />
  </svg>
);

export const MenuIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);

export const CloseIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const SearchIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="6.4" />
    <path d="m16 16 4.2 4.2" />
  </svg>
);

export const HeartIcon = ({ size = 18, filled = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 20.3 3.9 12.2a5 5 0 0 1 7.1-7.1l1 1 1-1a5 5 0 0 1 7.1 7.1Z" />
  </svg>
);

export const TrashIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13M10 11v6M14 11v6" />
  </svg>
);

export const TruckIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 7h10v9H3zM13 10h4l4 3v3h-8z" />
    <circle cx="7" cy="18" r="1.6" />
    <circle cx="17" cy="18" r="1.6" />
  </svg>
);

export const BadgeIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l2.4 1.8 3-.2.9 2.9 2.4 1.8-1.2 2.7 1.2 2.7-2.4 1.8-.9 2.9-3-.2L12 21l-2.4-1.8-3 .2-.9-2.9L3.3 14l1.2-2.7L3.3 8.6l2.4-1.8.9-2.9 3 .2Z" />
    <path d="m9.2 12.2 2 2 3.6-3.8" />
  </svg>
);

export const ReturnIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 10a8 8 0 1 1 2.3 6.3" />
    <path d="M4 5v5h5" />
  </svg>
);

export const GiftIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 10h16v10H4zM4 10V7h16v3M12 7v13" />
    <path d="M12 7S9.5 3 7.5 4.5 9 8 12 7ZM12 7s2.5-4 4.5-2.5S15 8 12 7Z" />
  </svg>
);
