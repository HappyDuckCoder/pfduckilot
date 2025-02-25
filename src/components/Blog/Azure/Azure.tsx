"use client";

import React, { useEffect, useState } from "react";
import TocAzure from "./TocAzure";
import SplitText from "@/components/ui/SplitText";

interface AppServiceData {
  [key: string]: Unit;
}

interface Unit {
  title: string;
  objectives?: string[];
  content?: Content;
}

interface Content {
  overview?: string;
  features?: Features;
  limitations?: Limitations;
  app_service_plan?: string;
  components?: string[];
  scaling?: string;
  optimization?: string;
  automated_deployment?: string;
  manual_deployment?: ManualDeployment;
  deployment_slots?: string;
  container_deployment?: string;
}

interface Features {
  scaling?: string;
  packaging?: string;
  cicd?: string;
  balancing?: string;
}

interface Limitations {
  project_sharing?: string;
  storage_speed?: string;
}

interface ManualDeployment {
  git?: string;
  cli?: string;
  zip_deploy?: string;
  ftp?: string;
}

const Azure = () => {
  const [data, setData] = useState<AppServiceData | null>(null);

  useEffect(() => {
    fetch("/json/az.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <section id="hero-section" className="px-7 pb-10 md:pb-40 pt-24">
      <div className="relative container mx-auto flex flex-col md:flex-row justify-between">
        {/* Table of Contents */}
        <TocAzure />

        {/* Nội dung chính */}
        <div className="p-4 max-w-3xl mx-auto">
          <div className="text-center">
            <SplitText
              text="Azure App Service"
              className="text-5xl font-bold text-center mb-6 text-lightColor"
            />
          </div>
          {Object.keys(data).map((key) => (
            <div key={key} className="mb-8 p-4 text-lightColor shadow">
              <h2 className="text-3xl font-semibold">{data[key].title}</h2>
              {data[key].objectives && (
                <ul className="list-disc ml-6 mt-2">
                  {data[key].objectives.map((obj, index) => (
                    <li key={index}>{obj}</li>
                  ))}
                </ul>
              )}
              {data[key].content && (
                <div className="mt-2">
                  {typeof data[key].content === "string" ? (
                    <p>{data[key].content}</p>
                  ) : (
                    Object.entries(data[key].content).map(([subKey, value]) => (
                      <div key={subKey} className="mt-2">
                        <h3 className="text-lg font-medium capitalize">
                          {subKey.replace("_", " ")}
                        </h3>
                        {typeof value === "string" ? (
                          <p>{value}</p>
                        ) : Array.isArray(value) ? (
                          <ul className="list-disc ml-6">
                            {value.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : typeof value === "object" && value !== null ? (
                          <ul className="list-disc ml-6">
                            {Object.entries(value).map(
                              ([subSubKey, subValue]) => (
                                <li key={subSubKey}>
                                  <strong>
                                    {subSubKey.replace("_", " ")}:{" "}
                                  </strong>
                                  {typeof subValue === "string" ? (
                                    subValue
                                  ) : Array.isArray(subValue) ? (
                                    <ul className="list-disc ml-6">
                                      {subValue.map((item, i) => (
                                        <li key={i}>{item}</li>
                                      ))}
                                    </ul>
                                  ) : typeof subValue === "object" &&
                                    subValue !== null ? (
                                    <ul className="list-disc ml-6">
                                      {Object.entries(subValue).map(
                                        ([innerKey, innerValue]) => (
                                          <li key={innerKey}>
                                            <strong>
                                              {innerKey.replace("_", " ")}:
                                            </strong>{" "}
                                            {String(innerValue)}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  ) : (
                                    String(subValue)
                                  )}
                                </li>
                              )
                            )}
                          </ul>
                        ) : (
                          String(value)
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Azure;
