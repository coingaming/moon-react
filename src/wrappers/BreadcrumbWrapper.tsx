import { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
} from "@/components/breadcrumb";

const BreadcrumbWrapper = () => {
  const [activeHref, setActiveHref] = useState("/components");

  const items = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumb", href: "/components/breadcrumb" },
  ];

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <BreadcrumbItem key={item.href}>
            {activeHref === item.href ? (
              <BreadcrumbPage>{item.label}</BreadcrumbPage>
            ) : (
              <BreadcrumbLink
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveHref(item.href);
                }}
              >
                {item.label}
              </BreadcrumbLink>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbWrapper;
