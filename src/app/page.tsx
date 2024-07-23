"use client";
import DashboardLayout from "@/app/layouts/DashboardLayout";
import EmptyLink from "@/components/linkpage/EmptyLink";
import LinkPageHeader from "@/components/linkpage/LinkPageHeader";
import Links from "@/components/linkpage/Links";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="h-full overflow-y-auto bg-white rounded-xl p-6 sm:p-10">
        <LinkPageHeader />

        <div className="min-h-[calc(100vh-474px)] flex flex-col md:min-h-[calc(100vh-465px)]">
          {/* <EmptyLink /> */}
          <Links />
        </div>
        <div className="flex justify-end border-t border-borders mt-10 pt-5">
          <Button
            color="primary"
            className="text-white w-full sm:w-auto hover:bg-purpleHover hover:shadow-inputHover"
            size="lg"
            // isDisabled={true}
          >
            Save
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
