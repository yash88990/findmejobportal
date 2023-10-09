// Mock job data
const jobs = [
    { title: 'Web Developer', company: 'Tech Co.', location: 'City A' },
    { title: 'Graphic Designer', company: 'Design Studio', location: 'City B' },
    // Add more job objects here
  ];
  
  // Function to render job listings
  function renderJobListings() {
    const jobListings = document.getElementById('job-listings');
  
    jobs.forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.classList.add('job-card');
      
      const title = document.createElement('h2');
      title.textContent = job.title;
      
      const company = document.createElement('p');
      company.textContent = `Company: ${job.company}`;
      
      const location = document.createElement('p');
      location.textContent = `Location: ${job.location}`;
  
      jobCard.appendChild(title);
      jobCard.appendChild(company);
      jobCard.appendChild(location);
  
      jobListings.appendChild(jobCard);
    });
  }
  
  // Call the function to render job listings on page load
  window.addEventListener('load', renderJobListings);
  