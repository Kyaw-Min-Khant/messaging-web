import { Input } from "@/components/ui/input";

const Register = () => {
  return (
    <section className="min-h-screen w-screen flex justify-center items-center">
      <form className=" bg-gray-200 p-10 flex rounded-[10px] flex-col gap-y-5">
        <h1 className="text-2xl text-center  font-bold">Register Page</h1>
        <Input
          placeholder="Username"
          className=" w-[300px] py-5 rounded-[10px]"
        />
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
          Sign Up
        </button>

        <p className=" text-[14px]">
          Already have an account?
          <a href="/login" className="text-blue-500 ps-1 font-bold underline">
            Login here
          </a>
        </p>
      </form>
    </section>
  );
};
export default Register;
