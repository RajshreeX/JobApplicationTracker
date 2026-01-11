const BASE_URL = "http://localhost:5000/api/applications";

export const getApplications = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const createApplication = async (data) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.json();
};
