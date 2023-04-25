import Link from "next/link";

const RightSideBar = () => {
  return (
    <div className="p-5 fixed right-0  w-[20%] hidden lg:inline">
      <h1 className="text-blue-600 font-medium">Know about Us.</h1>
      <Link href="/documentation" className="text-sm">Documentation</Link>
    </div>
  );
};

export default RightSideBar;
