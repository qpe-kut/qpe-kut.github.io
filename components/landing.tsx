"use client";

import Cover from "@/components/cover";
import Domains from "@/components/domains";
import Members from "@/components/members";
import Guide from "@/components/guide";

import { Container } from "@/components/styles/container";

export default function Landing(): JSX.Element {
  return (
    <div className="space-y-20 mb-20">
      <Cover />
      <Container className="">
        <Domains />
        <Members />
        <Guide />
      </Container>
    </div>
  );
}
