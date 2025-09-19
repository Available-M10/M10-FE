import * as React from "react";
import { cn } from "@/lib/utils";

const Tabs = ({ children, ...props }: React.ComponentProps<"div">) => (
  <div {...props}>{children}</div>
);

const TabsList = ({ className, children, ...props }: any) => (
  <div className={cn("flex bg-gray-100 rounded p-2", className)} {...props}>
    {children}
  </div>
);

const TabsTrigger = ({ className, children, ...props }: any) => (
  <button
    className={cn(
      "px-3 py-1 rounded text-gray-600 hover:text-black",
      className
    )}
    {...props}
  >
    {children}
  </button>
);

const TabsContent = ({ className, children, ...props }: any) => (
  <div className={cn("mt-2", className)} {...props}>
    {children}
  </div>
);

export { Tabs, TabsList, TabsTrigger, TabsContent };
