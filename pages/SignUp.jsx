import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
export default function SignUp() {

  const [IdCard, setIdCard] = useState('');
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleCreateUser = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/newAcc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ IdCard, Fname, Lname, Password, Email }),
      });

      if (res.ok) {
        setMessage('User created successfully');
      } else {
        const errorData = await res.json();
        setMessage(`Error: ${errorData.error}`);
      }
    } catch (error) {
      setMessage('Failed to create user');
    }
  };


  return (
    <section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <Link className="block text-blue-600" href="/">
          <span className="sr-only">Home</span>
          <Image src='/logo.svg' alt='logo'
                  width={100} height={60} />
        </Link>

        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Welcome 
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
        Welcome to our seamless appointment booking platform! Connect with your preferred doctor and schedule your next visit with ease. Experience hassle-free healthcare at your fingertips.
        </p>

        <form onSubmit={handleCreateUser} className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Fname" className="block text-sm font-medium text-gray-700">
              First Name
            </label>

            <input
              type="text"
              value={Fname}
              onChange={(e) => setFname(e.target.value)}
              placeholder="Enter First Name"
              required
              id="Fname"
              name="Fname"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Lname" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>

            <input
              type="text"
              value={Lname}
              onChange={(e) => setLname(e.target.value)}
              placeholder="Enter Last Name"
              required
              id="Lname"
              name="Lname"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="IdCard" className="block text-sm font-medium text-gray-700">
              Id Card Number
            </label>

            <input
              type="text"
              value={IdCard}
              onChange={(e) => setIdCard(e.target.value)}
              placeholder="Enter ID Card"
              required
              id="IdCard"
              name="IdCard"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

            <input
              type="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
              id="Email"
              name="Email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
              id="Password"
              name="Password"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>


          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm text-gray-700">
                I want to receive emails about events, product updates and company announcements.
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" className="text-gray-700 underline"> terms and conditions </a>
              and
              <a href="#" className="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Create an account
                </button>
            
            

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <a href="/LogIn" className="text-gray-700 underline">Log in</a>.
            </p>
          </div>
        </form>
        {message && <p>{message}</p>}
      </div>
    </main>
  </div>
</section>
  )
}

