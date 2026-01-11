import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full bg-blue-100 rounded-lg shadow-lg overflow-hidden">
        <div className="flex gap-10">
          <div className="leftSection w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1681487837141-7aa3cb70a040?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="login"
              className="w-full h-full object-cover rounded-b-xl m-4"
            />
          </div>
          <div className="rightSection w-1/2 p-8">
            <div className="w-full max-w-md mx-auto">
              <div className="border-b border-gray-300 pb-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Create your account
                </h2>
                <p className="text-sm text-gray-600">
                 Already have an account? <a href="#" className="text-indigo-600 hover:text-indigo-500">Sign in</a>
                </p>
              </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First name
                  </label>
                  <input
                    id="first-name"
                    type="text"
                    name="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border border-black px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last name
                  </label>
                  <input
                    id="last-name"
                    type="text"
                    name="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border border-black px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="block w-full rounded-md border border-black px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                  Country
                </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border border-black px-3 py-2 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Street address
                  </label>
                  <input
                    id="street-address"
                    type="text"
                    name="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border border-black px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border border-black px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="region"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    State / Province
                  </label>
                  <input
                    id="region"
                    type="text"
                    name="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border border-black px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    ZIP / Postal code
                  </label>
                  <input
                    id="postal-code"
                    type="text"
                    name="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border border-black px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Create Account
                </button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
