import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/DropdownMenu";
import { MessageSquareText, Pencil, Book, Menu } from "lucide-react";
import { buttonVariants } from "./ui/Button";

const MobileMenu = () => {
  return (
    <div className="flex md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            aria-label="Menu delle attività"
            className={`${buttonVariants({
              variant: "ghost",
            })} flex items-center`}
          >
            <Menu />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="end">
          <DropdownMenuItem asChild>
            <Link aria-label="Scrivimi" href="/contatti">
              <MessageSquareText className="mr-2" />
              Scrivimi
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link aria-label="Attività" href="/attivita">
              <Pencil className="mr-2" />
              Attività
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link aria-label="Su di me" href="/about">
              <Book className="mr-2" />
              Su di me
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileMenu;
