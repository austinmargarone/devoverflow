import Image from "next/image";
import Link from "next/link";

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  logo: string;
  applyLink: string;
  description: string;
  website: string;
}

const JobCard = ({
  title,
  company,
  location,
  logo,
  applyLink,
  description,
  website,

  // eslint-disable-next-line no-undef
}: JobCardProps): JSX.Element => {
  return (
    <div className="card-wrapper background-light900_dark200 light-border flex w-full items-center justify-center rounded-2xl border p-8">
      <div className="w-[25px]">
        {/* <Image src={logo} alt={"employer logo"} width={25} height={25} /> */}
      </div>
      <div className="flex flex-col gap-[.5rem]">
        <div className="flex w-full flex-col justify-between xs:flex-row">
          <div className="flex flex-col md:flex-row">
            <h3 className="h3-bold text-dark200_light900 md:flex">
              {company}
              <h2 className="h3-bold text-dark200_light900 ml-2 md:flex">
                {title}
              </h2>
            </h3>
          </div>
          <div className="my-auto flex items-center justify-center rounded-sm bg-[#F4F6F8] px-[.5rem] pb-[.25rem] dark:bg-[#212734]">
            <p className="body-regular text-dark500_light500 my-auto mt-2 flex w-full items-center justify-center">
              {location}
            </p>
          </div>
        </div>
        <div className="body-regular text-dark500_light700 line-clamp-3">
          {description}
        </div>
        <div className="mt-[.5rem] flex justify-between">
          <div className="flex items-center">
            <Link href={website}>
              <button className="text-dark500_light500">Company Website</button>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href={applyLink}>
              <button className="flex text-[#FF7000]">
                Apply Link
                <span>
                  <Image
                    src={"./assets/icons/arrow-up-right.svg"}
                    alt={"Arrow"}
                    width={15}
                    height={15}
                    className="m-auto ml-[.33rem] flex size-[15px] items-center justify-center"
                  />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
