"use client";

import { useOrganization, useSession, useUser } from "@clerk/nextjs";
import Link from "next/link";

function Row({
  desc,
  value,
  children,
}: {
  desc: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <div className="h-8.5 grid grid-cols-2 items-center relative">
      <span className="text-xs font-semibold block shrink-0">{desc}</span>
      <span className="text-xs font-mono block relative">
        <span className="block truncate w-full">{value}</span>
        {children}
      </span>
    </div>
  );
}

function PointerC({ label }: { label: string }) {
  return (
    <div className="absolute w-fit hidden md:flex items-center gap-5 top-1/2 -translate-y-1/2 left-full">
      <div className="relative">
        <div className="h-px w-26 bg-accent" />
        <div className="size-1 rotate-45 bg-white absolute right-0 top-1/2 -translate-y-1/2" />
      </div>
      <div className="font-mono text-xs px-2.5 py-1 rounded-md">
      <div className="badge badge-primary">{label}</div>  
      </div>
    </div>
  );
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateWithNumbers(date: Date): string {
  return date.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

export function UserDetails() {
  const { user } = useUser();
  const { session } = useSession();
  const { organization } = useOrganization();

  if (!user || !session) return null;

  return (
    <div className="flex flex-col gap-4 py-10 md:justify-center md:items-center mx-auto">
    <div className="breadcrumbs text-sm hidden md:flex self-center">
   <ul>
    <li>
                                         <Link
          href="/"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        Home
      </Link>
    </li>
    <li>
                                         <Link
          href="/dashboard"
        >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
        </svg>
        Dashboard
      </Link>
    </li>
    <li>
      <span className="inline-flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-4 w-4 stroke-current">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
        {user.emailAddresses[0].emailAddress}
      </span>
    </li>
  </ul>
</div>
<div className="divider"></div>
    <div className="rounded-lg relative self-start md:ms-10 w-full md:max-w-90">
      <div className="p-8 rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] bg-base-300 ring-1 ring-gray-950/5">
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="w-full relative flex justify-center">
            <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
    <img src={user.imageUrl} className="rounded-full" />
  </div>
</div>
            
            <div className="absolute w-fit flex items-center gap-5 top-1/2 -translate-x-2.5 -translate-y-1/2 left-full">
              <div className="relative">
                <div className="h-px  w-26" />
                <div className="size-1 rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
              </div>
              <div className="font-mono text-xs px-1.5 py-1 rounded-md">
              </div>
            </div>
          </div>
          {user.firstName && user.lastName ? (
            <h1 className="text-[1.0625rem] font-semibold relative w-full text-center">
              {user.firstName} {user.lastName}
              <div className="absolute w-fit flex items-center gap-5 top-1/2 -translate-x-2.5 -translate-y-1/2 left-full">
                <div className="relative">
                  <div className="h-px bg-[#BFBFC4] w-26" />
                  <div className="size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2" />
                </div>
                <div className="font-mono text-xs px-1.5 py-1 rounded-md ">
                  user.firstName
                </div>
                <div className="font-mono text-xs px-1.5 py-1 rounded-md -translate-x-3">
                  user.lastName
                </div>
              </div>
            </h1>
          ) : (
            <div className="h-4" />
          )}
        </div>

        <div className="px-2.5 bg-base-100  rounded-lg divide-y divide-[#EEEEF0]">
          <Row desc="Email" value={user.emailAddresses[0].emailAddress}>
            <PointerC label="user.emailAddresses[0].emailAddress" />
          </Row>
          <Row desc="Last signed in" value={formatDate(user.lastSignInAt!)}>
            <PointerC label="user.lastSignInAt" />
          </Row>
          <Row desc="Joined on" value={formatDate(user.createdAt!)}>
            <PointerC label="user.createdAt" />
          </Row>
          <Row desc="User ID" value={user.id}>
            <PointerC label="user.user.id" />
          </Row>
        </div>
        <h2 className="mt-6 mb-4 font-semibold text-secondary">
          Session details
        </h2>
        <div className="px-2.5 bg-base-100 rounded-lg divide-y divide-[#EEEEF0]">
          <Row desc="Session ID" value={session.id}>
            <PointerC label="session.id" />
          </Row>
          <Row desc="Status" value={session.status}>
            <PointerC label="session.status" />
          </Row>
          <Row
            desc="Last active"
            value={formatDateWithNumbers(session.lastActiveAt)}
          >
            <PointerC label="session.lastActiveAt" />
          </Row>
          <Row
            desc="Session expiration"
            value={formatDateWithNumbers(session.expireAt)}
          >
            <PointerC label="session.expireAt" />
          </Row>
        </div>
        {organization ? (
          <>
            <h2 className="mt-6 mb-4 text-secondary font-semibold">
              Organization detail
            </h2>
            <div className="px-2.5 bg-base-100 rounded-lg divide-y divide-[#EEEEF0]">
              <Row desc="Organization ID" value={organization.id}>
                <PointerC label="organization.id" />
              </Row>
              <Row desc="Name" value={organization.name}>
                <PointerC label="organization.name" />
              </Row>
              <Row desc="Members" value={String(organization.membersCount)}>
                <PointerC label="organization.membersCount" />
              </Row>
              <Row
                desc="Pending invitations"
                value={String(organization.pendingInvitationsCount)}
              >
                <PointerC label="organization.pendingInvitationsCount" />
              </Row>
            </div>
          </>
        ) : null}
      </div>
    </div>
    </div>
  );
}
