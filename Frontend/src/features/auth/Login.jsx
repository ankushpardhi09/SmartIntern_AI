import { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = () => {
    // TODO: Implement Google OAuth authentication
    console.log("Google sign-in clicked - implement OAuth flow here");
    // For now, this is a placeholder. In a real implementation, you would:
    // 1. Initialize Google Sign-In
    // 2. Handle the authentication flow
    // 3. Process the user data
  };

  const handleAppleSignIn = () => {
    // TODO: Implement Apple Sign-In authentication
    console.log("Apple sign-in clicked - implement OAuth flow here");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Encrypt password using base64 encoding
    const encryptedPassword = btoa(password);
    
    if (isLogin) {
      // Handle login logic here
      console.log("Login Data:", { email, password: encryptedPassword });
    } else {
      // Handle registration logic here
      console.log("Registration Data:", { firstName, lastName, email, password: encryptedPassword });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full pt-0 pb-0 bg-blue-100 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="leftSection w-full md:w-1/2 relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1681487837141-7aa3cb70a040?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="login"
              className="w-full h-64 md:h-full object-cover rounded-b-xl md:rounded-b-none md:rounded-l-xl"
            />
            <button className="absolute top-4 right-4 opacity-80 bg-white/90 hover:bg-white text-gray-800 px-4 py-2 rounded-full shadow-md transition-colors duration-200 flex items-center gap-2">
              Back to website →
            </button>
          </div>
          <div className="rightSection w-full md:w-1/2 p-8">
            <div className="w-full max-w-md mx-auto">
              <div className="border-b border-gray-300 pb-8 mb-8">
                <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                  {isLogin ? "Sign in to your account" : "Create your account"}
                </h1>
                <p className="text-sm text-gray-600">
                  {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-indigo-600 hover:text-indigo-500 font-medium"
                  >
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-6">
                  {!isLogin && (
                    <>
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
                          onChange={(e) => {
                            setFirstName(e.target.value);
                          }}
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
                          onChange={(e) => {
                            setLastName(e.target.value);
                          }}
                          className="block w-full rounded-md border border-black px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                      </div>
                    </>
                  )}

                  <div className={isLogin ? "sm:col-span-6" : "sm:col-span-4"}>
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
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      className="block w-full rounded-md border border-black px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>

                  <div className={isLogin ? "sm:col-span-6" : "sm:col-span-4"}>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      autoComplete={isLogin ? "current-password" : "new-password"}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className="block w-full rounded-md border border-black px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    {isLogin ? "Sign in" : "Create Account"}
                  </button>
                </div>

                <div className="pt-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="ml-2">Google</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleAppleSignIn}
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
                        />
                      </svg>
                      <span className="ml-2">Apple</span>
                    </button>
                  </div>
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
