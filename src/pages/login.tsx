import { Input } from "../components/ui/input";

const Login = () => {
  return (
    <section className="min-h-screen w-screen flex justify-center items-center">
      <form className=" bg-gray-200 p-10 flex rounded-[10px] flex-col gap-y-5">
        <h1 className="text-2xl text-center  font-bold">Login Page</h1>
        <Input placeholder="Email" className=" w-[300px] py-5 rounded-[10px]" />
        <Input
          placeholder="Password"
          type="password"
          className=" w-[300px] py-5 rounded-[10px]"
        />
        <button
          type="submit"
          className="w-full bg-linear-to-r  from-cyan-500 to-blue-500 text-white py-2 rounded-[10px] hover:bg-blue-600 transition"
        >
          Login
        </button>

        <p className=" text-[14px]">
          Don't have an account?
          <a
            href="/register"
            className="text-blue-500 ps-1 font-bold underline"
          >
            Register here
          </a>
        </p>
      </form>
    </section>
  );
};

export default Login;
