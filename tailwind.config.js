/** @type {import('tailwindcss').Config} */
// Before
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './pages/components/**/*.{js,ts,jsx,tsx}'],
  // ... other Tailwind CSS config
}

// After
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './pages/components/**/*.{js,ts,jsx,tsx}'],
  // ... other Tailwind CSS config
}

