import React from 'react';
import { Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Scenario", "Infratech Builders", "Other Companies"];

const TABLE_ROWS = [
  {
    name: "Quote",
    job: "Detailed quotation with 100% transparency",
    date: "The approximate estimate may differ after the finish",
  },
  {
    name: "Delivery",
    job: "On-time delivery in 45 days",
    date: "No timelines",
  },
  {
    name: "Work updates",
    job: "Regular updates from your project manager on the WhatsApp",
    date: "You need to follow up on project updates",
  },
  {
    name: "Materials & Fittings",
    job: " ISI-certified best quality plywood and fittings",
    date: "Locally purchased materials",
  },
  {
    name: "Project Designs ",
    job: "100% Unique designs with a lot of options",
    date: "Default designs for all houses",
  },
  {
    name: "Warranty",
    job: "10 years warranty",
    date: "No warranty claim",
  },
  {
    name: "Support",
    job: "24/7 Support team",
    date: "No one picks up your call",
  },
  {
    name: "Service",
    job: "Lifetime Service Support ",
    date: " Usually one month",
  },
  {
    name: "Cleaning",
    job: "All taken care of by us",
    date: "Your Responsible",
  },
];

const Homeinteriorstable = () => {
  return (
    <div className="flex justify-center">
      <table className="border border-black w-full max-w-4xl table-auto text-center mx-4">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th
                key={head}
                className={`border-b border-black bg-blue-gray-50 p-4 ${index !== TABLE_HEAD.length - 1 ? 'border-r border-blue-gray-100' : ''}`}
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold leading-none opacity-100"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, job, date }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-black";

            return (
              <tr key={name}>
                <td className={`${classes} border-r border-black`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {name}
                  </Typography>
                </td>
                <td className={`${classes} border-r border-black text-left`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <span role="img" aria-label="green-tick">✅</span> {job}
                  </Typography>
                </td>
                <td className={`${classes} text-left`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <span role="img" aria-label="red-cross">❌</span> {date}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Homeinteriorstable;
