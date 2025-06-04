import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
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
        <div className="mt-2">Make changes to your account here.</div>
      </TabsContent>
      <TabsContent value="password">
        <div className="mt-2">Change your password here.</div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsWrapper;
