/*
 * Run "npm run dev maintest/7-main.js" to test
*/
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
