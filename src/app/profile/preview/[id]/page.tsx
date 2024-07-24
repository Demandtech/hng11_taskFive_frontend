"use client";
import LinkCard from "@/components/preview/LinkCard";
import Review from "@/components/preview/Review";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  console.log({ id: params.id });

  return (
    <div className="bg-white">
      <div className="sm:bg-purple p-3 sm:min-h-[350px] rounded-b-3xl">
        <div className="bg-white gap-5 flex justify-between p-3 rounded-xl mb-3">
          <Link
            className="border text-purple whitespace-nowrap w-full sm:w-auto border-purple px-6 flex items-center rounded-lg"
            href="/profile"
          >
            Back to Editor
          </Link>
          <Button
            className="text-white w-full sm:w-auto"
            variant="solid"
            color="primary"
          >
            Share Link
          </Button>
        </div>
      </div>
      <div className="px-14 py-12 rounded-3xl bg-white max-w-sm mx-auto sm:-translate-y-32 shadow-cardShadow">
        <Review />
      </div>
    </div>
  );
};

export default Page;
