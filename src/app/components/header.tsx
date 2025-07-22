import { Heart, ShoppingCart } from "lucide-react";
import { NavigationBar } from "./navigation-bar";
import Link from "next/link";

export function Header() {
  return (
    <header className="space-y-4 border-b border-orange-500 py-3 pt-10">
      <div className="flex items-center justify-between px-14">
        <h1 className="text-4xl font-bold text-orange-500">Reload Store</h1>

        <div className="flex w-[60%] items-center gap-4">
          <input
            type="text"
            className="text-muted-foreground w-[80%] rounded-sm bg-white px-4 py-2 outline-orange-500 focus:outline-2"
          />
          <div>
            <Link href={"/login"}>
              <p>Entrar / Cadastrar</p>
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button>
            <Heart />
          </button>
          <div className="h-6 w-[1px] bg-zinc-500" />
          <button>
            <ShoppingCart />
          </button>
        </div>
      </div>
      <NavigationBar />
    </header>
  );
}
