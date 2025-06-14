document.addEventListener('DOMContentLoaded', () => {
    const WORKER_URL = 'https://bold-bird-ac0f.wyrwizomb2022.workers.dev';

    const resultsGrid = document.getElementById('results-grid');
    const resultsContainer = document.querySelector('.results-container');

    async function fetchResults() {
        if (!resultsGrid || !resultsContainer) {
            console.error('Required elements not found on the page.');
            return;
        }

        try {
            const response = await fetch(WORKER_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const votes = data.record || data; // Worker may return data directly or nested
            displayResults(votes);
        } catch (error) {
            console.error("Could not fetch results:", error);
            resultsContainer.innerHTML = '<p style="text-align: center;">Could not load results. Please check the console for more information.</p>';
        }
    }

    function displayResults(votes) {
        resultsGrid.innerHTML = '';
        const totalVotes = Object.values(votes).reduce((sum, count) => sum + count, 0);

        const sortedCandidates = Object.entries(votes).sort(([, a], [, b]) => b - a);

        if (sortedCandidates.length === 0) {
            resultsGrid.innerHTML = '<p style="text-align: center;">No votes have been cast yet.</p>';
            return;
        }

        sortedCandidates.forEach(([name, count]) => {
            const percentage = totalVotes > 0 ? (count / totalVotes) * 100 : 0;

            const resultElement = document.createElement('div');
            resultElement.classList.add('result-item');
            resultElement.innerHTML = `
                <div class="result-info">
                    <span class="candidate-name">${name}</span>
                    <span class="candidate-votes">${count} głosów (${percentage.toFixed(1)}%)</span>
                </div>
                <div class="result-bar-bg">
                    <div class="result-bar"></div>
                </div>
            `;
            
            resultsGrid.appendChild(resultElement);
            
            const bar = resultElement.querySelector('.result-bar');
            // Use a timeout to ensure the transition plays after the element is added to the DOM
            setTimeout(() => {
                bar.style.width = `${percentage}%`;
            }, 100);
        });
    }

    fetchResults();
});
