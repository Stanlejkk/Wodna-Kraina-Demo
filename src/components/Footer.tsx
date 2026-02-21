import Link from "next/link";
import { EUBanner } from "./EUBanner";

const footerLinks = [
  { href: "/o-nas", label: "O Nas" },
  { href: "/gatunki-ryb", label: "Gatunki Ryb" },
  { href: "/oplaty", label: "Opłaty i Rezerwacja" },
  { href: "/galeria", label: "Galeria" },
  { href: "/regulamin", label: "Regulamin" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="relative z-[1] border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-accent text-2xl">~</span>
              <span className="font-heading text-2xl font-semibold text-foreground">
                Wodna Kraina
              </span>
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Łowisko wędkarskie w sercu natury. 150 hektarów ciszy,
              25+ lat tradycji, dolina Wisły.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-accent mb-4">
              Nawigacja
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-accent mb-4">
              Kontakt
            </h3>
            <div className="space-y-3 text-sm text-foreground/60">
              <p>ul. Stawowa 9, 08-470 Wilga</p>
              <p>
                Tel:{" "}
                <a
                  href="tel:+48512464846"
                  className="text-foreground hover:text-accent transition-colors"
                >
                  512 464 846
                </a>
              </p>
              <p>NIP: 8262217408 (MMW Sp. z o.o.)</p>
              <div className="pt-2">
                <p className="text-foreground/80 font-medium">Godziny otwarcia:</p>
                <p>Pn-Nd: 08:00 - 21:00</p>
                <p>Dla karpiarzy: 24h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40">
            &copy; 2026 MMW Sp. z o.o. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-foreground/40">
            Wodna Kraina &ndash; Łowisko Wędkarskie, Wilga
          </p>
        </div>
      </div>

      <EUBanner />
    </footer>
  );
}
