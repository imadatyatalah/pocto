import type { NextComponentType, NextPageContext } from "next";

type NextPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
  getLayout?: (component: JSX.Element) => JSX.Element;
  authenticate?: boolean;
};

export type PoctoPage<P = {}, IP = P> = NextPage<P, IP>;
