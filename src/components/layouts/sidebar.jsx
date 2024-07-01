import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  ShoppingCart,
  Users,
  Video,
  Phone,
  MoreHorizontal,
  Paperclip,
  Send,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router-dom";

function SidebarLayout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[320px_1fr] lg:grid-cols-[400px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <a href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">ChatApp</span>
            </a>
          </div>
          <div className="p-4">
            <Input placeholder="Search contacts..." icon={<Search />} />
          </div>
          <ScrollArea className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <CircleUser className="h-4 w-4" />
                Contact 1
              </a>
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <CircleUser className="h-4 w-4" />
                Contact 2
              </a>
              {/* Add more contacts here */}
            </nav>
          </ScrollArea>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <div className="flex items-center gap-3">
            <CircleUser className="h-8 w-8" />
            <div>
              <div className="font-semibold">Contact Name</div>
              <div className="text-xs text-muted-foreground">Online</div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Video className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Info</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex flex-1 flex-col">
          <ScrollArea className="flex-1 p-4">
            <div className="flex flex-col gap-3">
              <div className="self-start rounded-lg bg-primary text-white p-3">
                Hello, how are you?
              </div>
              <div className="self-end rounded-lg bg-muted p-3">
                I'm good, thank you!
              </div>
              {/* Add more messages here */}
            </div>
          </ScrollArea>
          <div className="border-t p-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Paperclip className="h-5 w-5" />
              </Button>
              <Input placeholder="Type a message..." className="flex-1" />
              <Button variant="primary" size="icon">
                <Send className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SidebarLayout;