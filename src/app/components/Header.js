"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ cartCount = 0 }) {
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const anyOverlayOpen = isSearchOpen || isMenuOpen;

  // Lock body scroll while overlays are open
  useEffect(() => {
    if (anyOverlayOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      return () => {
        const y = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(y || "0") * -1);
      };
    }
  }, [anyOverlayOpen]);

  return (
    <>
      {/* Sticky, translucent bar with safe-area padding */}
      <header
        className="
          sticky top-0 z-50
          bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70
          border-b border-neutral-200
          pt-[env(safe-area-inset-top)]
        "
      >
        <div className="h-14 px-4 flex items-center justify-between">
          <Link href="/" className="shrink-0" aria-label="UGR home">
            <Image
              src="/ugr-logo.svg"
              alt="UGR"
              width={56}
              height={22}
              priority
              className="h-[22px] w-auto"
            />
          </Link>

          <nav className="flex items-center gap-1">
            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className="
                p-2 rounded-xl
                hover:bg-neutral-100 active:bg-neutral-200
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400
              "
            >
              <Image src="/icons/search.svg" alt="" width={24} height={24} />
            </button>

            {/* Cart with badge */}
            <Link
              href="/cart"
              aria-label={`Cart${cartCount ? ` with ${cartCount} items` : ""}`}
              className="
                relative p-2 rounded-xl
                hover:bg-neutral-100 active:bg-neutral-200
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400
              "
            >
              <Image src="/icons/cart.svg" alt="" width={24} height={24} />
              {cartCount > 0 && (
                <span
                  className="
                    absolute -right-0.5 -top-0.5
                    min-w-[18px] h-[18px] px-1
                    rounded-full bg-red-500 text-white
                    text-[10px] font-semibold leading-[18px] text-center
                    shadow
                  "
                  aria-live="polite"
                >
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Hamburger */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="
                p-2 rounded-xl
                hover:bg-neutral-100 active:bg-neutral-200
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400
              "
            >
              <Image src="/icons/menu.svg" alt="" width={24} height={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* SEARCH OVERLAY */}
      {isSearchOpen && (
        <SearchOverlay onClose={() => setSearchOpen(false)} />
      )}

      {/* MENU DRAWER */}
      <MenuDrawer open={isMenuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

/* ---------- Search Overlay ---------- */
function SearchOverlay({ onClose }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search"
      className="fixed inset-0 z-[60]"
    >
      <button
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Close search"
      />
      <div className="absolute inset-x-0 top-0 pt-[env(safe-area-inset-top)] bg-white rounded-b-2xl shadow-lg">
        <div className="px-4 pt-3 pb-4">
          <div className="flex items-center gap-2 rounded-2xl bg-neutral-100 px-3 h-12">
            <Image src="/icons/search.svg" alt="" width={20} height={20} />
            <input
              ref={inputRef}
              type="search"
              placeholder="Search parts, brands, or vehicles"
              className="w-full bg-transparent outline-none text-[15px] placeholder:text-neutral-400"
            />
            <button
              onClick={onClose}
              className="rounded-xl p-2 -mr-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
              aria-label="Close"
            >
              <Image src="/icons/close.svg" alt="" width={20} height={20} />
            </button>
          </div>

          {/* Suggestions / recent — stub for now */}
          <div className="mt-3">
            <p className="text-xs text-neutral-500 mb-2">Popular searches</p>
            <div className="flex flex-wrap gap-2">
              {["blow off valves", "intake", "catch can"].map((t) => (
                <button
                  key={t}
                  className="text-sm rounded-full bg-neutral-100 px-3 h-8 hover:bg-neutral-200"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Menu Drawer ---------- */
function MenuDrawer({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && open && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[60] transition-[visibility] ${
        open ? "visible" : "invisible"
      }`}
      aria-hidden={!open}
    >
      <button
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
        aria-label="Close menu"
      />
      <aside
        className={`absolute right-0 top-0 h-full w-[88%] max-w-[420px]
          bg-white pt-[env(safe-area-inset-top)] shadow-xl
          transition-transform duration-300 will-change-transform
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        <div className="h-14 px-4 flex items-center justify-between border-b">
          <span className="text-sm font-semibold">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2 rounded-xl hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
          >
            <Image src="/icons/close.svg" alt="" width={22} height={22} />
          </button>
        </div>

        <nav className="px-2 py-2">
          <MenuItem href="/categories">Shop by Category</MenuItem>
          <MenuItem href="/vehicles">Shop by Vehicle</MenuItem>
          <MenuItem href="/new">New Arrivals</MenuItem>
          <MenuItem href="/best-sellers">Best Sellers</MenuItem>
          <MenuItem href="/support">Support</MenuItem>
          <div className="h-4" />
          <MenuItem href="/account">Account</MenuItem>
          <MenuItem href="/orders">Orders</MenuItem>
        </nav>
      </aside>
    </div>
  );
}

function MenuItem({ href, children }) {
  return (
    <Link
      href={href}
      className="
        flex items-center justify-between
        rounded-xl px-3 h-12
        text-[15px]
        hover:bg-neutral-100 active:bg-neutral-200
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400
      "
    >
      <span>{children}</span>
      <Image src="/icons/chevron-right.svg" alt="" width={18} height={18} />
    </Link>
  );
}
