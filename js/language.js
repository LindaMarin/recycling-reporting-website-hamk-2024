function setLanguage(lang) {
    localStorage.setItem('language', lang);

    // Get the current directory path
    const currentPath = window.location.pathname;
    
    // Determine whether we're in the root folder or a subfolder like 'src/'
    const basePath = currentPath.includes('/src/') ? '../js/' : 'js/';

    // Fetch the translation JSON file dynamically based on the directory
    fetch(`${basePath}lang-${lang}.json`)
        .then(response => response.json())
        .then(data => {
            // Store the translation object globally
            translations = data;

            // Update the content immediately
            updateContent();
            reinitializeEventListeners(); // Reattach event listeners after translation
        })
        .catch(error => console.error('Error loading language file:', error));
}


function loadLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
}

function updateContent() {
    document.title = translations.title;

    console.log("updateContent called, reapplying translations...");

    // Navbar translations
    if (document.getElementById('homeLink')) {
        document.getElementById('homeLink').textContent = translations.home;
    }
    if (document.getElementById('learnLink')) {
        document.getElementById('learnLink').textContent = translations.learn;
    }
    if (document.getElementById('statusMapLink')) {
        document.getElementById('statusMapLink').textContent = translations.statusMap;
    }
    if (document.getElementById('combinedReportLink')) {
        document.getElementById('combinedReportLink').textContent = translations.combinedReport;
    }

    // General content translations
    if (document.getElementById('comingSoon')) {
        document.getElementById('comingSoon').textContent = translations.comingSoon;
    }
    if (document.getElementById('footerText')) {
        document.getElementById('footerText').textContent = translations.footerText;
    }

    // Step 1 translations
    if (document.getElementById('addressInfo')) {
        document.getElementById('addressInfo').textContent = translations.addressInfo;
    }
    if (document.getElementById('selectAddress')) {
        document.getElementById('selectAddress').textContent = translations.selectAddress;
    }
    if (document.getElementById('step1InstructionsTitle')) {
        document.getElementById('step1InstructionsTitle').textContent = translations.step1InstructionsTitle;
    }
    if (document.getElementById('step1Instruction1')) {
        document.getElementById('step1Instruction1').textContent = translations.step1Instruction1;
    }
    if (document.getElementById('step1Instruction2')) {
        document.getElementById('step1Instruction2').textContent = translations.step1Instruction2;
    }

    // Step 2 translations
    if (document.getElementById('wasteSortingArea')) {
        document.getElementById('wasteSortingArea').textContent = translations.wasteSortingArea;
    }
    if (document.getElementById('generalCleanliness')) {
        document.getElementById('generalCleanliness').textContent = translations.generalCleanliness;
    }
    if (document.getElementById('wasteBins')) {
        document.getElementById('wasteBins').textContent = translations.wasteBins;
    }
    if (document.getElementById('selectedIssuesTitle')) {
        document.getElementById('selectedIssuesTitle').textContent = translations.selectedIssuesTitle;
    }
    if (document.getElementById('step2InstructionsTitle')) {
        document.getElementById('step2InstructionsTitle').textContent = translations.step2InstructionsTitle;
    }
    if (document.getElementById('step2Instruction1')) {
        document.getElementById('step2Instruction1').textContent = translations.step2Instruction1;
    }
    if (document.getElementById('step2Instruction2')) {
        document.getElementById('step2Instruction2').textContent = translations.step2Instruction2;
    }
    if (document.getElementById('step2Instruction3')) {
        document.getElementById('step2Instruction3').textContent = translations.step2Instruction3;
    }
    if (document.getElementById('step2Instruction4')) {
        document.getElementById('step2Instruction4').textContent = translations.step2Instruction4;
    }
    if (document.getElementById('step2Instruction5')) {
        document.getElementById('step2Instruction5').textContent = translations.step2Instruction5;
    }

    // Step 2 issues
    for (let i = 1; i <= 14; i++) {
        let stepIssueElement = document.getElementById(`step2issue${i}`);
        if (stepIssueElement) {
            stepIssueElement.textContent = translations[`step2issue${i}`];
        }
    }

    // Step 3 translations
    if (document.getElementById('step3Title')) {
        document.getElementById('step3Title').textContent = translations.step3Title;
    }
    if (document.getElementById('fullbin')) {
        document.getElementById('fullbin').textContent = translations.fullbin;
    }
    if (document.getElementById('cleanliness')) {
        document.getElementById('cleanliness').textContent = translations.cleanliness;
    }
    if (document.getElementById('misssortedwaste')) {
        document.getElementById('misssortedwaste').textContent = translations.misssortedwaste;
    }
    if (document.getElementById('labelsnotvisible')) {
        document.getElementById('labelsnotvisible').textContent = translations.labelsnotvisible;
    }
    if (document.getElementById('step3DynamicHeading')) {
        document.getElementById('step3DynamicHeading').textContent = translations.step3DynamicHeading;
    }
    if (document.getElementById('step3UploadTitle')) {
        document.getElementById('step3UploadTitle').textContent = translations.step3UploadTitle;
    }
    if (document.getElementById('step3DescriptionPlaceholder')) {
        document.getElementById('step3DescriptionPlaceholder').placeholder = translations.step3DescriptionPlaceholder;
    }
    if (document.getElementById('step3InstructionsTitle')) {
        document.getElementById('step3InstructionsTitle').textContent = translations.step3InstructionsTitle;
    }
    if (document.getElementById('step3Instruction1')) {
        document.getElementById('step3Instruction1').textContent = translations.step3Instruction1;
    }
    if (document.getElementById('step3Instruction2')) {
        document.getElementById('step3Instruction2').textContent = translations.step3Instruction2;
    }
    if (document.getElementById('step3Instruction3')) {
        document.getElementById('step3Instruction3').textContent = translations.step3Instruction3;
    }
    if (document.getElementById('step3Instruction4')) {
        document.getElementById('step3Instruction4').textContent = translations.step3Instruction4;
    }
    if (document.getElementById('step3Instruction5')) {
        document.getElementById('step3Instruction5').textContent = translations.step3Instruction5;
    }

    // Step 4 translations
    if (document.getElementById('step4Title')) {
        document.getElementById('step4Title').textContent = translations.step4Title;
    }
    if (document.getElementById('step4SubmissionMethod')) {
        document.getElementById('step4SubmissionMethod').textContent = translations.step4SubmissionMethod;
    }
    if (document.getElementById('step4Option1')) {
        document.getElementById('step4Option1').textContent = translations.step4Option1;
    }
    if (document.getElementById('step4Option1Description')) {
        document.getElementById('step4Option1Description').textContent = translations.step4Option1Description;
    }
    if (document.getElementById('step4Option2')) {
        document.getElementById('step4Option2').textContent = translations.step4Option2;
    }
    if (document.getElementById('step4Option2Description')) {
        document.getElementById('step4Option2Description').textContent = translations.step4Option2Description;
    }
    if (document.getElementById('step4Option3')) {
        document.getElementById('step4Option3').textContent = translations.step4Option3;
    }
    if (document.getElementById('step4Option3Description')) {
        document.getElementById('step4Option3Description').textContent = translations.step4Option3Description;
    }
    if (document.getElementById('step4FinishText')) {
        document.getElementById('step4FinishText').textContent = translations.step4FinishText;
    }

    // Step 5 translations
    if (document.getElementById('step5ThankYou')) {
        document.getElementById('step5ThankYou').textContent = translations.step5ThankYou;
    }
    if (document.getElementById('returnHome')) {
        document.getElementById('returnHome').textContent = translations.returnHome;
    }

    reinitializeEventListeners();
}

// Add a function to reinitialize all event listeners after translation
function reinitializeEventListeners() {
    const buttons = document.querySelectorAll('.option-button');
    buttons.forEach(button => {
        button.onclick = function() {
            selectOption(this);
        };
    });

    const instructionIcons = document.querySelectorAll('.fa-question-circle');
    instructionIcons.forEach(icon => {
        icon.onclick = function() {
            const step = icon.closest('.step').id.replace('step', '');
            toggleInstructions(step);
        };
    });

    console.log("Event listeners reattached after translation.");
}

window.addEventListener('load', loadLanguage);
