import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { Home, Pencil, MessageSquareText, Book } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Navbar = async () => {
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        {/* Tasto "Home" */}
        <Link
          href="/"
          className={`${buttonVariants({
            variant: "link",
          })} flex items-center gap-1`}
        >
          <Home /> Home
        </Link>

        {/* Mostra i link solo su schermi medi o più grandi */}
        <div className="hidden md:flex gap-4">
          <Link
            href="/contatti"
            className={buttonVariants({ variant: "link" })}
          >
            <MessageSquareText /> Scrivimi
          </Link>

          {/* Dropdown Menu per Attività */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Menu delle Attività"
                className={`${buttonVariants({
                  variant: "link",
                })} flex items-center gap-1`}
              >
                <Pencil />
                Attività
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem asChild>
                <Link aria-label="Link Sicurezza" href="/attivita/sicurezza">
                  Sicurezza
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  href="/attivita/progettazione"
                  aria-label="Link Progettazione"
                >
                  Progettazione
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link
                  aria-label="Link Direzione Lavori"
                  href="/attivita/direzione_lavori"
                >
                  Direzione Lavori
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link aria-label="Link Catasto" href="/attivita/catasto">
                  Catasto
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            aria-label="Su di me"
            href="/about"
            className={buttonVariants({ variant: "link" })}
          >
            <Book /> Su di me
          </Link>
        </div>

        {/* Menu Mobile */}
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
