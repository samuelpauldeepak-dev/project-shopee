import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>Home</div>
      <div>
        <Image
          width={200}
          height={100}
          src={"/images/logo-black-crop.png"}
          alt="logo"
        />
      </div>
    </div>
  );
}
