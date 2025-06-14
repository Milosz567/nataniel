document.addEventListener('DOMContentLoaded', function() {
    // --- TRANSLATIONS ---
    const translations = {
        'pl': {
            site_title: "Nataniel Czubak - Samorząd Uczniowski",
            nav_logo: "Nataniel Czubak",
            hero_slogan: "Wszystkie Pomysły, Jedna Szkoła.",
            about_title: "O mnie",
            about_text: "Cześć, jestem Nataniel. Kandyduję do samorządu uczniowskiego, ponieważ głęboko wierzę w siłę głosu uczniów. Chcę, aby nasza szkoła była miejscem, w którym każdy czuje się wysłuchany i doceniony. Razem z moim kolegą Miłoszem, który wspiera mnie w tej kampanii, mamy mnóstwo pomysłów na to, jak uczynić naszą szkolną społeczność jeszcze lepszą. Jesteśmy też dumni, że jako jedyni stworzyliśmy na potrzeby tej kampanii całą stronę internetową. Moim celem jest działać transparentnie i z pasją, aby wprowadzić realne, pozytywne zmiany.",
            goals_title: "Moje Cele",
            goal1_title: "Więcej Inicjatyw Uczniowskich",
            goal1_text: "Chcę wspierać tworzenie nowych klubów i organizację wydarzeń, które odpowiadają Waszym zainteresowaniom.",
            goal2_title: "Lepsza Komunikacja",
            goal2_text: "Usprawnię przepływ informacji między uczniami a dyrekcją, aby Wasze pomysły i problemy były szybciej rozwiązywane.",
            goal3_title: "Nowoczesna Szkoła",
            goal3_text: "Będę dążyć do wprowadzenia nowoczesnych rozwiązań i technologii, które ułatwią nam naukę i codzienne funkcjonowanie.",
            goal4_title: "Ciekawe Wydarzenia Szkolne",
            goal4_text: "Zorganizujemy więcej dni tematycznych, konkursów talentów i turniejów gier, aby życie szkolne było jeszcze bardziej ekscytujące.",
            goal5_title: "Strefa Relaksu dla Uczniów",
            goal5_text: "Stworzymy dedykowane miejsce, w którym uczniowie będą mogli odpocząć, zagrać w planszówki i spędzić czas z przyjaciółmi podczas przerw.",
            goal6_title: "Szczęśliwy Numerek Cały Rok",
            goal6_text: "Będziemy dążyć do tego, aby 'szczęśliwy numerek' obowiązywał każdego dnia, dając wszystkim większą szansę na bezstresowy dzień w szkole.",
            cta_title: "Twój Głos Ma Znaczenie!",
            cta_text: "Razem możemy więcej. Dołącz do mnie i zagłosuj, aby wspólnie budować lepszą przyszłość naszej szkoły. Liczę na Twoje wsparcie!",
            poll_title: "Sondażowe Głosowanie",
            poll_note: "Musisz wybrać dokładnie 3 kandydatów. Prosimy, głosuj tylko raz.",
            vote_button: "Oddaj głos",
            view_results_link: "Zobacz wyniki sondazu",
            footer_text: "© 2024 Nataniel Czubak. Wszelkie prawa zastrzeżone.",
            results_title: "Wyniki Sondażu - Nataniel Czubak",
            results_page_title: "Wyniki Sondażu",
            back_to_home: "Powrót do strony głównej",
            select_exactly_3: "Proszę wybrać dokładnie 3 kandydatów.",
            already_voted: "Już oddałeś głos w tej ankiecie.",
            thank_you_for_voting: "Dziękujemy za oddanie głosu!",
            vote_failed: "Nie udało się zapisać głosu. Spróbuj ponownie."
        },
        'en': {
            site_title: "Nataniel Czubak - Student Council",
            nav_logo: "Nataniel Czubak",
            hero_slogan: "All Ideas, One School.",
            about_title: "About Me",
            about_text: "Hi, I'm Nataniel. I am running for the student council because I deeply believe in the power of the student voice. I want our school to be a place where everyone feels heard and valued. Together with my friend Miłosz, who supports me in this campaign, we have tons of ideas on how to make our school community even better. We are also proud that we are the only ones who created an entire website for this campaign. My goal is to act with transparency and passion to bring about real, positive changes.",
            goals_title: "My Goals",
            goal1_title: "More Student Initiatives",
            goal1_text: "I want to support the creation of new clubs and the organization of events that match your interests.",
            goal2_title: "Better Communication",
            goal2_text: "I will improve the flow of information between students and the administration so that your ideas and problems are resolved more quickly.",
            goal3_title: "A Modern School",
            goal3_text: "I will strive to introduce modern solutions and technologies that will make learning and daily life easier for us.",
            goal4_title: "Fun School Events",
            goal4_text: "We'll organize more theme days, talent shows, and gaming tournaments to make school life more exciting.",
            goal5_title: "Student Chill Zone",
            goal5_text: "We want to create a dedicated space where students can relax, play board games, and hang out with friends during breaks.",
            goal6_title: "Lucky Number All Year",
            goal6_text: "We will work to have the 'lucky number' active every day, giving everyone a better chance to have a stress-free day.",
            cta_title: "Your Voice Matters!",
            cta_text: "Together we can do more. Join me and vote to build a better future for our school together. I'm counting on your support!",
            poll_title: "Straw Poll Voting",
            poll_note: "You must select exactly 3 candidates. Please vote only once.",
            vote_button: "Vote",
            view_results_link: "View poll results",
            footer_text: "© 2024 Nataniel Czubak. All rights reserved.",
            results_title: "Poll Results - Nataniel Czubak",
            results_page_title: "Poll Results",
            back_to_home: "Back to Home Page",
            select_exactly_3: "Please select exactly 3 candidates.",
            already_voted: "You have already voted in this poll.",
            thank_you_for_voting: "Thank you for voting!",
            vote_failed: "Failed to save your vote. Please try again."
        }
    };

    let currentLang = 'pl';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.querySelectorAll('[data-lang-key]').forEach(elem => {
            const key = elem.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                elem.innerHTML = translations[lang][key];
            }
        });
        document.documentElement.lang = lang;
        document.getElementById('lang-pl').classList.toggle('active', lang === 'pl');
        document.getElementById('lang-en').classList.toggle('active', lang === 'en');
    }

    document.getElementById('lang-pl').addEventListener('click', () => setLanguage('pl'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));

    const themeToggleBtn = document.getElementById('theme-toggle-btn');

    function applyTheme(theme) {
        if (theme === 'dark-mode') {
            document.body.classList.add('dark-mode');
            themeToggleBtn.classList.add('dark');
        } else {
            document.body.classList.remove('dark-mode');
            themeToggleBtn.classList.remove('dark');
        }
    }

    themeToggleBtn.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    const modal = document.getElementById('custom-modal');
    const modalMessage = document.getElementById('modal-message');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    function showModal(message) {
        if (!modal || !modalMessage || !modalCloseBtn) return;
        modalMessage.innerHTML = message;
        modal.classList.add('visible');
    }

    function hideModal() {
        if (!modal) return;
        modal.classList.remove('visible');
    }

    if (modal) {
        modalCloseBtn.addEventListener('click', hideModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal();
            }
        });
    }

    const candidates = [
        "Nataniel Czubak & milosz", "Nikita Nesterenko", "Silence Ennis",
        "Lida Lichota", "Mateusz Gorzowski", "Radek Szarek", "Michał Makłowicz", "Arina Chernyshova", "Marcin Majewski"];

    const pollOptionsContainer = document.querySelector('.poll-options');
    if (pollOptionsContainer) {
        candidates.forEach(candidate => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = 'candidate';
            checkbox.value = candidate;
            const span = document.createElement('span');
            span.textContent = candidate;
            label.appendChild(checkbox);
            label.appendChild(span);
            pollOptionsContainer.appendChild(label);
        });
    }

    const pollForm = document.getElementById('poll-form');
    if (pollForm) {
        pollForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (localStorage.getItem('hasVoted')) {
                showModal(translations[currentLang].already_voted);
                return;
            }

            const selectedCandidates = Array.from(document.querySelectorAll('input[name="candidate"]:checked')).map(cb => cb.value);

            if (selectedCandidates.length !== 3) {
                showModal(translations[currentLang].select_exactly_3);
                return;
            }

            showModal(translations[currentLang].thank_you_for_voting);
            localStorage.setItem('hasVoted', 'true');

            updateVotes(selectedCandidates).catch(error => {
                console.error('Vote submission failed:', error);
                localStorage.removeItem('hasVoted');
                showModal(translations[currentLang].vote_failed);
            });
        });
    }

    const BIN_ID = '684c78cc8a456b7966ada270';
    const API_KEY = '$2a$10$CYmmI5ZVyBw4z5I7t7w2VOAXJ6jr8HqDpxGecWlToqJLiZrH/9l7K';

    async function updateVotes(selectedCandidates) {
        const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
            headers: { 'X-Master-Key': API_KEY }
        });
        if (!response.ok) throw new Error('Failed to fetch current votes.');
        const data = await response.json();
        const currentVotes = data.record;

        selectedCandidates.forEach(candidate => {
            if (currentVotes.hasOwnProperty(candidate)) {
                currentVotes[candidate]++;
            } else {
                currentVotes[candidate] = 1;
            }
        });

        const putResponse = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': API_KEY
            },
            body: JSON.stringify(currentVotes)
        });

        if (!putResponse.ok) throw new Error('Failed to update votes.');
    }

    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    const savedLang = localStorage.getItem('lang') || 'pl';
    applyTheme(savedTheme);
    setLanguage(savedLang);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animated-section').forEach(section => {
        observer.observe(section);
    });
});
