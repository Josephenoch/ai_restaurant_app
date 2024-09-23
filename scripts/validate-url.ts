export default function isValidURL(url: string) {
    // Define the correct base URL
    const baseURL = process.env.EXPO_PUBLIC_API_URL

    console.log(baseURL)
    // Define the regex pattern to validate the URL
    const pattern = new RegExp(`^${baseURL}(/[a-zA-Z0-9]+)?$`);
  
    // Check if the provided URL matches the pattern
    return pattern.test(url);
  }