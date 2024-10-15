"use client";
import { describe } from "node:test";
import { useEffect, useState } from "react";

type apiData = {
  username: string;
  description: string;
  __v: number;
  category: {
    business_category: null | string;
    instagram_category: string;
  };
  chartData: {
    audienceActivity: {
      day: string;
      activities: { hour: number; value: number }[];
    }[];

    postPerDates: { date: string; value: number }[];
    commentPerDates: { date: string; value: number }[];
  };
};

type temp = {
  value: number;
  ending: string;
  text: string;
};

export default function IGPResult({ params }: { params: { id: string } }) {
  const [reportdata, setReportData] = useState<null | apiData>(null);

  const tempData: temp[] = [
    {
      value: 2,
      ending: "%",
      text: "Engagement Rate",
    },
    {
      value: 1.68,
      ending: "%",
      text: "Like Rate",
    },
    {
      value: 0.01,
      ending: "%",
      text: "Comment Rate",
    },
    {
      value: 3.61,
      ending: " M",
      text: "Followers",
    },
    {
      value: 946,
      ending: "",
      text: "Following",
    },
    {
      value: 660,
      ending: "",
      text: "Total Post",
    },
    {
      value: 68.8,
      ending: " M",
      text: "Total Video Views",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/fakes");
        const data = await response.json();
        setReportData(data);
        console.log(data);
      } catch (err) {
        console.error("error fetching data", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-32 max-w-[1200px] mx-auto w-full">
      {/* Top Part */}
      <div className="flex justify-between items-center">
        <h3 className="bg-report-bg px-3 py-2 rounded-xl">Done Analyzing</h3>
        <div className="flex gap-2">
          <h3 className="border-lightpurple px-3 py-2 rounded-xl border">
            Export
          </h3>
          <h3 className="border-lightpurple px-3 py-2 rounded-xl border">
            14 OCt 2024 - 14 OCt 2024
          </h3>
          <h3 className="border-lightpurple px-3 py-2 rounded-xl border bg-lightpurple">
            Check For Update
          </h3>
        </div>
      </div>
      {/* header */}
      {reportdata && (
        <div>
          <div className=" mt-10 grid grid-cols-10 gap-6 w-full bg-report-bg px-5 py-5 rounded-xl">
            <div className="w-28 h-28 bg-report-bg col-span-1 mr-5"></div>
            <div className="w-42 col-span-3">
              <h2 className="text-xl font-bold">
                {reportdata.username} | {params.id}
              </h2>
              <h6 className="text-sm text-sub-text">
                {reportdata.description}
              </h6>
            </div>
            <div></div>
            <div className="w-full flex flex-wrap col-span-4 gap-5 justify-center">
              {tempData.map((data: temp, index: number) => (
                <div key={"header" + index}>
                  <div className="flex flex-col items-center text-xs">
                    <h5>{data.value + data.ending}</h5>
                    <h6 className="font-bold text-sub-text">{data.text}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Overview Button */}
          <button className="bg-report-bg text-xl font-bold h-20 flex items-center px-5 py-5 rounded-xl w-full mt-5">Overview</button>
        </div>
      )}
    </div>
  );
}
