import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";

const TabsWrapper = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
      <TabsList>
        <TabsTrigger
          value="account"
          className={activeTab === "account" ? "moon-tab-active" : ""}
        >
          Account
        </TabsTrigger>
        <TabsTrigger
          value="password"
          className={activeTab === "password" ? "moon-tab-active" : ""}
        >
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
};

export default TabsWrapper;
