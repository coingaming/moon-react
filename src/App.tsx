import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

import { Button } from "./components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import "../assets/css/moon-base.css";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./components/ui/drawer";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import { Combobox } from "./components/ui/combobox";
import {
  Authenticator,
  AuthenticatorGroup,
  AuthenticatorSlot,
} from "./components/ui/authenticator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/ui/breadcrumb";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./components/ui/pagination";
import PaginationWrapper from "./wrappers/PaginationWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import TabsWrapper from "./wrappers/TabsWrapper";
import { Checkbox } from "./components/ui/checkbox";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { DataTable } from "./components/ui/data-table/data-table";
import { columns } from "./components/ui/data-table/columns";
import { MOCK_DATA } from "./components/ui/data-table/mockData";

function App() {
  return (
    <>
      <div>
        {/* <h2>Accordion</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
        <div>
          <h3>Button</h3>
          <Button>Click me</Button>
        </div>

        <hr className="mt-5" />

        <div className="mt-5">
          <h3 className="mb-5">Dropdown</h3>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">Open</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/*  <hr className="mt-5" />
      <div className="mt-5">
        <h3>Dialog</h3>
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div> */}

      {/*
      <hr className="mt-5" />
      <div className="mt-5">
        <h3>Drawer</h3>
        <Drawer>
          <DrawerTrigger>Open</DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div> */}

      <hr className="mt-5" />

      <div className="mt-5">
        <h3 className="mb-5">Alert</h3>
        <Alert variant="info">
          {/* <Terminal className="h-4 w-4" /> */}
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>

      {/*  <div className="mt-5">
        <h3>Authenticator</h3>
        <Authenticator maxLength={6}>
          <AuthenticatorGroup>
            <AuthenticatorSlot index={0} />
            <AuthenticatorSlot index={1} />
            <AuthenticatorSlot index={2} />
            <AuthenticatorSlot index={3} />
            <AuthenticatorSlot index={4} />
            <AuthenticatorSlot index={5} />
          </AuthenticatorGroup>
        </Authenticator>
      </div> */}

      <hr className="mt-5" />

      <div className="mt-5">
        <h3 className="mb-5">Breadcrumb</h3>

        <div className="flex justify-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              {/* <BreadcrumbSeparator /> */}

              <BreadcrumbItem className="moon-breadcrumb-item-active">
                {" "}
                {/* moon-breadcrumb-item-active seems not to be present in the final compilation */}
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              {/* <BreadcrumbSeparator /> */}
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <hr className="mt-5" />
      <div className="mt-5">
        <h3 className="mb-5">Pagination</h3>
        <div className="flex justify-center">
          <PaginationWrapper />
        </div>
      </div>

      <hr className="mt-5" />
      <div className="mt-5">
        <h3 className="mb-5">Tabs</h3>
        <div className="flex justify-center">
          <TabsWrapper />
        </div>
      </div>
      <hr className="mt-5" />

      <hr className="mt-5" />
      <div className="mt-5">
        <h3 className="mb-5">Checkbox</h3>
        <div className="flex justify-center">
          <Checkbox />
        </div>
      </div>

      {/* <hr className="mt-5" />
      <div className="mt-5">
        <h3 className="mb-5">Select</h3>
        <div className="flex justify-center">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div> */}

      <hr className="mt-5" />
      <div className="mt-5">
        <h3 className="mb-5">Input</h3>
        <div className="flex justify-center">
          <Input />
        </div>
      </div>

      <hr className="mt-5" />
      <div className="mt-5">
        <h3 className="mb-5">Table</h3>
        <div className="flex justify-center">
          <DataTable columns={columns} data={MOCK_DATA} />
        </div>
      </div>
    </>
  );
}

export default App;
