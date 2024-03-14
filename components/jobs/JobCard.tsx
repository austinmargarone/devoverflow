interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  date: string;
}

const JobCard = ({
  title,
  company,
  location,
  salary,
  date,
  // eslint-disable-next-line no-undef
}: JobCardProps): JSX.Element => {
  return (
    <div className="rounded-lg bg-black p-4 shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <h3 className="text-gray-500">{company}</h3>
      <p className="text-gray-500">Location: {location}</p>
      <p className="text-gray-500">Salary: {salary}</p>
      <p className="text-gray-500">Date: {date}</p>
    </div>
  );
};

export default JobCard;
