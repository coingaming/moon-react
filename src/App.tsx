import "./App.css";

import { Button } from "./components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import "../assets/css/moon-base.css";
import { Alert, AlertDescription, AlertTitle } from "./components/ui/alert";
import PaginationWrapper from "./wrappers/PaginationWrapper";
import BreadcrumbWrapper from "./wrappers/BreadcrumbWrapper";
import TabsWrapper from "./wrappers/TabsWrapper";
import { Checkbox } from "./components/ui/checkbox";
import { Input } from "./components/ui/input";

import { columns } from "./components/ui/data-table/columns";
import { MOCK_DATA } from "./components/ui/data-table/mockData";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import { Textarea } from "./components/ui/textarea";
import DialogWrapper from "./wrappers/DialogWrapper";
import {
  MoonCarousel,
  MoonCarouselContent,
  MoonCarouselItem,
  MoonCarouselNext,
  MoonCarouselPrev,
} from "./components/ui/carousel";
import {
  Authenticator,
  AuthenticatorGroup,
  AuthenticatorSlot,
} from "./components/ui/authenticator";
import { DataTable } from "./components/ui/data-table/data-table";

function App() {
  return (
    <>
      <div>
        <div>
          <h3>Button</h3>
          <div className="">
            <div>
              <Button size="xs" disabled>
                Click me
              </Button>
            </div>
            <div className="mt-2">
              <Button size="sm" variant="soft">
                Click me
              </Button>
            </div>

            <div className="mt-2">
              <Button variant="outline">Click me</Button>
            </div>

            <div className="mt-2">
              <Button size="lg" variant="ghost">
                Click me
              </Button>
            </div>

            <div className="mt-2">
              <Button size="xl">Click me</Button>
            </div>
          </div>
        </div>

        <hr className="mt-5" />

        <div className="mt-5">
          <h3 className="mb-5">Dropdown</h3>
          <DropdownMenu>
            <DropdownMenuTrigger className="moon-button moon-button-outline">
              Open
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="mt-5">
        <h3 className="mb-5">Alert</h3>
        <Alert variant="info">
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>

        <Alert variant="caution">
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>

        <Alert variant="neutral">
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>

        <Alert variant="negative">
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and dependencies to your app using the cli.
          </AlertDescription>
        </Alert>
      </div>
      <hr className="mt-5" />
      <div className="mt-5">
        <h3 className="mb-5">Breadcrumb</h3>

        <div className="flex justify-center">
          <BreadcrumbWrapper />
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
      <div className="mt-5">
        <h3 className="mb-5">Checkbox</h3>
        <div className="flex justify-center">
          <Checkbox />
        </div>
      </div>

      <hr className="mt-5" />

      <div className="mt-5">
        <h3 className="mb-5">Input</h3>
        <div className="flex justify-center">
          <Input />
        </div>
      </div>

      <hr className="mt-5" />
      <div className="mt-5">
        <h3 className="mb-5">Authenticator</h3>
        <div className="flex justify-center">
          {
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
          }
        </div>
      </div>

      <hr className="mt-5" />

      <div className="mt-5">
        <h3 className="mb-5">Dialog</h3>
        <div className="flex justify-center">
          <DialogWrapper />
        </div>
      </div>

      <hr className="mt-5" />

      <div className="mt-5">
        <h3 className="mb-5">Carousel</h3>
        <div className="flex justify-center">
          <MoonCarousel>
            <MoonCarouselContent>
              <MoonCarouselPrev />
              <MoonCarouselItem>
                <div className="flex items-center justify-center h-space-160 w-2xs bg-brand-subtle text-brand">
                  Item 1
                </div>
              </MoonCarouselItem>
              <MoonCarouselItem>
                <div className="flex items-center justify-center h-space-160 w-2xs bg-brand-subtle text-brand">
                  Item 2
                </div>
              </MoonCarouselItem>
              <MoonCarouselItem>
                <div className="flex items-center justify-center h-space-160 w-2xs bg-brand-subtle text-brand">
                  Item 3
                </div>
              </MoonCarouselItem>
              <MoonCarouselItem>
                <div className="flex items-center justify-center h-space-160 w-2xs bg-brand-subtle text-brand">
                  Item 4
                </div>
                <div className="flex items-center justify-center h-space-160 w-2xs bg-brand-subtle text-brand">
                  Item 5
                </div>
              </MoonCarouselItem>
              <MoonCarouselNext />
            </MoonCarouselContent>
          </MoonCarousel>
        </div>
      </div>

      <hr className="mt-5" />

      <div className="mt-5">
        <h3 className="mb-5">Textarea</h3>
        <div className="flex justify-center">
          <Textarea />
        </div>
      </div>
      <hr className="mt-5" />
      <div className="mt-5">
        <h3 className="mb-5">Basic Table</h3>
        <div className="flex justify-center">
          <Table size="lg">
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV001</TableCell>
                <TableCell>Paid</TableCell>
                <TableCell>Credit Card</TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="mt-5">
        <h3 className="mb-5">Data Table</h3>
        <div className="flex justify-center">
          <DataTable data={MOCK_DATA} columns={columns} />
        </div>
      </div>
    </>
  );
}

export default App;
