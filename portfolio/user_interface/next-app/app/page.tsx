"use client";

import Image from "next/image";
import { ArrowLink, ArrowFilledLink } from "@/components/link";
import MyClientReview from "./my-clients";
import MySponsors from "./sponsors";
import Title, { BigTitle } from "@/components/title";
import { services } from "@/lib/data";
import MyProjects from "./my-projects";
import MyServices from "./my-services";
import { MyIntro } from "./my-intro";


export default function Home() {
  return (
    <div>
      <MyIntro />
      <MyServices />
      <section>
        <MyProjects />
        <MySponsors />
      </section>
      <section>
        <MyClientReview />
      </section>
    </div>
  );
}