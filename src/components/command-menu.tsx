"use client";

import { useEffect, useState, useCallback } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { CommandIcon } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);

  useEffect(() => {
    // Check for Mac only on the client side
    setIsMac(window.navigator.userAgent.indexOf("Mac") > -1);

    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handlePrint = useCallback(() => {
    setOpen(false);
    setTimeout(() => window.print(), 100);
  }, []);

  const handleLinkOpen = useCallback((url: string) => {
    setOpen(false);
    setTimeout(() => window.open(url, "_blank"), 100);
  }, []);

  return (
    <>
      <p className="fixed bottom-0 left-0 right-0 hidden border-t border-t-muted bg-white p-1 text-center text-sm text-muted-foreground print:hidden xl:block">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>+J
        </kbd>{" "}
        to open the command menu
      </p>
      <Button
        onClick={() => setOpen((open) => !open)}
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 flex rounded-full shadow-2xl print:hidden xl:hidden"
      >
        <CommandIcon className="my-6 size-6" />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <div
              role="button"
              tabIndex={0}
              onClick={handlePrint}
              className="cursor-pointer"
            >
              <CommandItem onSelect={handlePrint} className="cursor-pointer">
                <span>Print</span>
              </CommandItem>
            </div>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <div
                key={url}
                role="button"
                tabIndex={0}
                onClick={() => handleLinkOpen(url)}
                className="cursor-pointer"
              >
                <CommandItem
                  onSelect={() => handleLinkOpen(url)}
                  className="cursor-pointer"
                >
                  <span>{title}</span>
                </CommandItem>
              </div>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>
    </>
  );
};
