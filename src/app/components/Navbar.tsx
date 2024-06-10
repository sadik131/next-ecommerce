import Menu from "./Menu"
import Image from "next/image"
import SarchBar from "./SarchBar"
import Icon from "./Icon"
import Link from "next/link"

function Navbar() {
  // const handelMenu = () => {

  // }
  return (
    <div className="w-full flex items-center relative h-20 px-4 md:px-8 lg:px-16 xl:px-32">
      {/* mobile menu */}
      <div className="md:hidden flex justify-between h-full items-center">
        <h1 className="text-2xl font-bold">Tube</h1>
        <Menu></Menu>
      </div>
      {/* larg Nav */}
      <div className="flex w-full items-center justify-between">
        <div className="w-1/3">
          <Link href={"/"} className="flex items-center gap-2">
            <Image src={"/logo.png"} height={30} width={30} alt="logo" />
            <h1 className="text-2xl font-bold">Tube</h1>
          </Link>
        </div>
        <div className="w-2/3 flex justify-between gap-4">
          <SarchBar />
          <Icon />
        </div>
      </div>
    </div>
  )
}

export default Navbar