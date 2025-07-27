const form = document.getElementById('policyForm');
const output = document.getElementById('output');
const policyText = document.getElementById('policyText');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const policy = `Privacy Policy for ${data.get('appName')}

This ${data.get('appType')} app collects: ${data.get('data')}. We follow ${data.get('region')} standards.`;
  policyText.textContent = policy;
  output.classList.remove('hidden');
});