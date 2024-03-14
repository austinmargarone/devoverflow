"use client";

import React, { useState, useEffect } from "react";
import JobCard from "@/components/jobs/JobCard";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { QuestionFilters } from "@/constants/filters";
import { fetchJobs } from "@/utils";

interface Job {
  job_id: string;
  job_title: string;
  employer_name: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_salary: string;
  job_posted_at_datetime_utc: string;
  employer_logo: string;
  job_apply_link: string;
  job_description: string;
  employer_website: string;
}

export default function Page() {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const jobsData = await fetchJobs();
        const jobsArray = jobsData.data;
        setAllJobs(jobsArray);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const isDataEmpty = !Array.isArray(allJobs) || allJobs.length === 0;

  console.log(allJobs);

  return (
    <>
      <section>
        <h1 className="h1-bold text-dark100_light900">Jobs</h1>
        <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
          <LocalSearchbar
            route="/"
            iconPosition="left"
            imgSrc="/assets/icons/search.svg"
            placeholder="Job Title, Company or Keywords"
            otherClasses="flex-1"
          />

          <Filter
            filters={QuestionFilters}
            otherClasses="min-h-[56px] sm:min-w-[170px]"
          />
        </div>
      </section>
      <section>
        <div className="mt-10">
          <div className="flex w-full flex-col gap-10">
            {loading ? (
              <div className="text-dark500_light500">Loading...</div>
            ) : isDataEmpty ? (
              <div className="text-dark500_light500">No jobs found</div>
            ) : (
              allJobs.map((job) => (
                <JobCard
                  key={job.job_id}
                  title={job.job_title || "Title Not Available"}
                  company={job.employer_name || "Company Not Available"}
                  location={`${job.job_city || ""}, ${job.job_state || ""}, ${job.job_country || ""}`}
                  logo={
                    job.employer_logo || "https://example.com/default-logo.png"
                  } // Provide a default logo URL
                  applyLink={job.job_apply_link || "#"} // Provide a default apply link
                  description={
                    job.job_description || "Description Not Available"
                  }
                  website={job.employer_website || "Website Not Available"}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
