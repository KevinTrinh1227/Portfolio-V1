const apiUrl = 'https://api.github.com/repos/KevinTrinh1227/Kevin-Trinh';

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

async function updatePortfolio() {
  try {
    const data = await fetchData(apiUrl);
    const lastPushed = data.pushed_at;
    const updateDate = formatDate(lastPushed);

    const startText = `/* -----------
      char siteAuthor[] = 'Kevin Huy Trinh'
      char currentClassification[] = 'Sophomore'
      char lastUpdated[] = '${updateDate}'
      ----------- */`;

    document.getElementById('portfolio-info').innerHTML = startText;

    const sectionElement = document.getElementById('typewriter-section');
    const originalText = sectionElement.textContent;
    sectionElement.textContent = '';

    for (let i = 0; i <= originalText.length; i++) {
      setTimeout(() => {
        sectionElement.textContent = originalText.slice(0, i) + '|';
      }, 10 * i);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

updatePortfolio();
