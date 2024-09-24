export default function isValidURL(url: string) {
  // Define the correct base URL
  const baseURL = `${process.env.EXPO_PUBLIC_API_URL}menu`;

  // Define the regex pattern to validate the URL and capture the part after /menu
  // Updated to allow hyphens in the captured part
  const pattern = new RegExp(`^${baseURL}/([a-zA-Z0-9-]+)$`);

  // Check if the provided URL matches the pattern
  const match = url.match(pattern);

  if (!match) {
    throw new Error('URL does not match the expected format');
  }

  // Extract and return the part after /menu
  return match[1]; // match[1] contains the captured part after /menu
}
