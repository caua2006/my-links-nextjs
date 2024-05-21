"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function Card() {
    const networks = ['Github', 'Frontend Mentor','Linkedln','Twitter','Instagram']
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#1f1f1f] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-20 sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          Cauã Carvalho
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-[#c5f82a] text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Los Angeles, USA
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/102489942.jfif"
            height="200"
            width="200"
            className=" w-full object-cover rounded-full group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col items-center gap-3
          mt-20">

            {networks.map((network)=>  (
                <CardItem
                translateZ={20}
                as="button"
                className="w-full px-4 py-2 bg-[#333333] rounded-xl  text-white text-xs font-bold hover:bg-[#c5f82a]"
              >
                {network}
              </CardItem>
            ))}
          
          
        </div>
      </CardBody>
    </CardContainer>
  );
}
