"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/propiedades", label: "Propiedades" },
  { href: "/nosotros", label: "Nosotros" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-riri-primary text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold">
          Inmobiliaria <span className="text-riri-accent">Riri</span>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-riri-accent">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/login"
              className="rounded-md bg-riri-accent px-3 py-1 font-semibold text-riri-primary"
            >
              Ingresar
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-3 px-4 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/login" onClick={() => setOpen(false)}>
              Ingresar
            </Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      )}
    </header>
  );
}