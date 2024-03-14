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
  job_salary: string;
  job_posted_at_datetime_utc: string;
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

  return (
    <>
      <section>
        <h1 className="h1-bold text-dark100_light900">Saved Questions</h1>
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
          <div className="grid grid-cols-1 gap-5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {loading ? (
              <div>Loading...</div>
            ) : isDataEmpty ? (
              <div>No jobs found</div>
            ) : (
              allJobs.map((job) => (
                <JobCard
                  key={job.job_id}
                  title={job.job_title}
                  company={job.employer_name}
                  location={`${job.job_city}, ${job.job_state}`}
                  salary={job.job_salary}
                  date={job.job_posted_at_datetime_utc}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
