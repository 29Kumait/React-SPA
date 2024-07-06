import { useState, useEffect } from "react";

const defaultData = { views: [], count: 0, uniques: 0 };
const githubPat = import.meta.env.VITE_GITHUB_PAT;
// console.log(`GitHub PAT: ${githubPat}`);

const useFetchData = () => {
  const [trafficData, setTrafficData] = useState([]);
  useEffect(() => {
    const fetchData = async (repo) => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/29Kumait/${repo}/traffic/views`,
          {
            headers: {
              Authorization: `token ${githubPat}`,
            },
          },
        );
        if (!response.ok) {
          // console.error("Error:", response.status, await response.text());
          return { repo, data: defaultData };
        }
        const data = await response.json();
        // console.log(`Fetched data for ${repo}:`, data);
        return {
          repo,
          data: { views: data.views, count: data.count, uniques: data.uniques },
        };
      } catch (error) {
        // console.error("Error:", error);
        return { repo, data: defaultData };
      }
    };
    Promise.all([fetchData("next"), fetchData("15")])
      .then((data) => setTrafficData(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  return trafficData;
};

export default useFetchData;
