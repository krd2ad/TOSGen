// src/scripts/ai.js
export function generatePolicy({ appName, appType, data, region }) {
  return `Privacy Policy for ${appName}

This ${appType} app collects: ${data || 'basic usage data'}.
We comply with ${region.toUpperCase()} requirements.

We respect your privacy and handle your information in accordance with best practices.
By using this application, you consent to this privacy policy.`
}
