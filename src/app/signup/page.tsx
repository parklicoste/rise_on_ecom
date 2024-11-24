"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

interface User {
  name: string;
  email: string;
  password: string;
}

function Page() {
  const Router = useRouter();
  const [user, setUser] = useState<User>({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function signUpHandler() {
    setError(null); // Reset error before starting
    setLoading(true);

    try {
      const response = await axios.post("/api/auth/signup", user);

      if (response.status === 201) {
        setLoading(false);
        Router.push("/login");
      }
    } catch (error: any) {
      setLoading(false);

      // Handle known errors
      if (error.response) {
        const status = error.response.status;

        if (status === 400) {
          setError("Invalid input. Please check your data.");
        } else if (status === 409) {
          setError("Email already exists. Please use another email.");
        } else if (status === 500) {
          setError("Something went wrong. Please try again later.");
        } else {
          setError("An unexpected error occurred.");
        }
      } else {
        setError("Failed to connect to the server.");
      }
    }
  }

  return (
    <div>
      <div className="min-h-screen bg-[#121212]">
        <div className="mx-auto flex w-full items-stretch justify-between gap-10">
          <div className="mt-20 flex w-full flex-col items-start justify-start p-6 md:w-1/2 lg:px-10">
            <div className="w-full">
              <h1 className="mb-2 text-5xl font-extrabold text-white">
                Register
              </h1>
              <p className="text-xs text-slate-400">
                Before we start, please create your account
              </p>
            </div>
            <div className="my-14 flex w-full flex-col items-start justify-start gap-4">
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Full name</label>
                <input
                  placeholder="Enter your full name..."
                  autoComplete="false"
                  required
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  className="w-full border-[1px] border-white p-4 placeholder:text-gray-500"
                />
                <p className="text-xs text-gray-400">
                  Your full name should be between 5 and 20 characters.
                </p>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Email</label>
                <input
                  placeholder="Enter your email..."
                  autoComplete="false"
                  required
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className="w-full border-[1px] border-white p-4 placeholder:text-gray-500"
                />
                <p className="text-xs text-gray-400">
                  Enter a valid email address (e.g., example@domain.com).
                </p>
              </div>
              <div className="flex w-full flex-col items-start justify-start gap-2">
                <label className="text-xs text-slate-200">Password</label>
                <input
                  placeholder="Enter a password..."
                  autoComplete="false"
                  type="password"
                  required
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  className="w-full border-[1px] border-white p-4 placeholder:text-gray-500"
                />
                <p className="text-xs text-gray-400">
                  Your password should be between 10 and 30 characters.
                </p>
              </div>

              <button
                onClick={signUpHandler}
                disabled={loading}
                className="w-full bg-[#ae7aff] p-3 text-center font-bold text-black shadow-[5px_5px_0px_0px_#4f4e4e] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px_#4f4e4e]"
              >
                {loading ? "Loading..." : "Create Account"}
              </button>
              <p className="my-14 text-sm font-light text-white">
                Already registered?{" "}
                <Link href="/login">
                  <span className="cursor-pointer font-bold hover:underline">
                    Sign in to your account
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="fixed right-0 z-20 hidden h-screen w-1/2 md:block">
            <img
              className="h-full w-full object-cover"
              src="https://images.pexels.com/photos/4049876/pexels-photo-4049876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="register_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
