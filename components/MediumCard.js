import Image from "next/image";

const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out ">
      <div className="relative h-80 w-80 mr-3">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>

      <h2 className="text-2xl mt-3">{title}</h2>
    </div>
  );
};

export default MediumCard;
