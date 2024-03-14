export async function fetchJobs() {
  const headers = {
    "X-RapidAPI-Key": "6f5986a79emshccfbe6d6fd7ec0ep125727jsn828dc9bb9405",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  };
  const response = await fetch(
    "https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1",
    { headers }
  );

  const result = await response.json();

  return result;
}
