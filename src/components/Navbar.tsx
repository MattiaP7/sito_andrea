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
            className={buttonVariants({ variant: "ghost" })}
          >
            <MessageSquareText /> Scrivimi
          </Link>

          {/* Dropdown Menu per Attività */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`${buttonVariants({
                  variant: "ghost",
                })} flex items-center gap-1`}
              >
                <Pencil />
                Attività
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/attivita/sicurezza-cantieri">
                  Sicurezza Cantiere
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/attivita/sicurezza-lavoro">
                  Sicurezza Luoghi di lavoro
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/attivita/progettazione">Progettazione</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/attivita/direzione_lavori">Direzione Lavori</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/attivita/catasto">Catasto</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className={buttonVariants({ variant: "ghost" })}>
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
