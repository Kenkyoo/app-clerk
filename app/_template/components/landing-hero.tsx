import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from 'next/image'
import bg from '../images/background.jpg'

export function LandingHero() {
  return (

<div className="hero min-h-screen relative">
  <Image
    src={bg}
    alt="Background"
    fill
    className="object-cover -z-10"
    priority
  />
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">App with Clerk</h1>
      <p className="mb-5">
            Auth examples with many providers... socials, emails, resend, magic, etc. Some examples: facebook, apple, google, github, microsoft... Click on the button for start and testing the auth providers.
      </p>
               <SignedIn>
            <Link href="/dashboard" className="btn btn-primary">
              Dashboard
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <button className="btn btn-primary">Sign in</button>
            </SignInButton>
          </SignedOut>
    </div>
  </div>
</div>
  );
}
