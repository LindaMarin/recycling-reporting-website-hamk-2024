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
    if (document.getElementById('header_step1')) {
        document.getElementById('header_step1').textContent = translations.header_step1;
    }
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
    if (document.getElementById('header_step2')) {
        document.getElementById('header_step2').textContent = translations.header_step2;
    }
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

    //Learn page specific translations
    if (document.getElementById('LearnTitle')) {
        document.getElementById('LearnTitle').textContent = translations.LearnTitle;
    }
    if (document.getElementById('RecycleInstruction')) {
        document.getElementById('RecycleInstruction').textContent = translations.RecycleInstruction;
    }
    if (document.getElementById('AddressInstruction')) {
        document.getElementById('AddressInstruction').textContent = translations.AddressInstruction;
    }
    if (document.getElementById('bio')) {
        document.getElementById('bio').textContent = translations.bio;
    }
    if (document.getElementById('metal')) {
        document.getElementById('metal').textContent = translations.metal;
    }
    if (document.getElementById('paper')) {
        document.getElementById('paper').textContent = translations.paper;
    }
    if (document.getElementById('cardboard')) {
        document.getElementById('cardboard').textContent = translations.cardboard;
    }
    if (document.getElementById('plastic')) {
        document.getElementById('plastic').textContent = translations.plastic;
    }
    if (document.getElementById('mixed')) {
        document.getElementById('mixed').textContent = translations.mixed;
    }
    if (document.getElementById('BioTitle1')) {
        document.getElementById('BioTitle1').textContent = translations.BioTitle1;
    }
    if (document.getElementById('BioText1')) {
        document.getElementById('BioText1').textContent = translations.BioText1;
    }
    if (document.getElementById('BioTitle2')) {
        document.getElementById('BioTitle2').textContent = translations.BioTitle2;
    }
    if (document.getElementById('BioList1')) {
        document.getElementById('BioList1').textContent = translations.BioList1;
    }
    if (document.getElementById('BioList2')) {
        document.getElementById('BioList2').textContent = translations.BioList2;
    }
    if (document.getElementById('BioList3')) {
        document.getElementById('BioList3').textContent = translations.BioList3;
    }
    if (document.getElementById('BioList4')) {
        document.getElementById('BioList4').textContent = translations.BioList4;
    }
    if (document.getElementById('BioMore')) {
        document.getElementById('BioMore').textContent = translations.BioMore;
    }
    if (document.getElementById('MetalTitle1')) {
        document.getElementById('MetalTitle1').textContent = translations.MetalTitle1;
    }
    if (document.getElementById('MetalText1')) {
        document.getElementById('MetalText1').textContent = translations.MetalText1;
    }
    if (document.getElementById('MetalTitle2')) {
        document.getElementById('MetalTitle2').textContent = translations.MetalTitle2;
    }
    if (document.getElementById('MetalList1')) {
        document.getElementById('MetalList1').textContent = translations.MetalList1;
    }
    if (document.getElementById('MetalList2')) {
        document.getElementById('MetalList2').textContent = translations.MetalList2;
    }
    if (document.getElementById('MetalList3')) {
        document.getElementById('MetalList3').textContent = translations.MetalList3;
    }
    if (document.getElementById('MetalList4')) {
        document.getElementById('MetalList4').textContent = translations.MetalList4;
    }
    if (document.getElementById('MetalMore')) {
        document.getElementById('MetalMore').textContent = translations.MetalMore;
    }
    if (document.getElementById('PaperTitle1')) {
        document.getElementById('PaperTitle1').textContent = translations.PaperTitle1;
    }
    if (document.getElementById('PaperText1')) {
        document.getElementById('PaperText1').textContent = translations.PaperText1;
    }
    if (document.getElementById('PaperTitle2')) {
        document.getElementById('PaperTitle2').textContent = translations.PaperTitle2;
    }
    if (document.getElementById('PaperList1')) {
        document.getElementById('PaperList1').textContent = translations.PaperList1;
    }
    if (document.getElementById('PaperList2')) {
        document.getElementById('PaperList2').textContent = translations.PaperList2;
    }
    if (document.getElementById('PaperList3')) {
        document.getElementById('PaperList3').textContent = translations.Paperlist3;
    }
    if (document.getElementById('PaperList4')) {
        document.getElementById('PaperList4').textContent = translations.PaperList4;
    }
    if (document.getElementById('PaperMore')) {
        document.getElementById('PaperMore').textContent = translations.PaperMore;
    }
    if (document.getElementById('CardboardTitle1')) {
        document.getElementById('CardboardTitle1').textContent = translations.CardboardTitle1;
    }
    if (document.getElementById('CardboardText1')) {
        document.getElementById('CardboardText1').textContent = translations.CardboardText1;
    }
    if (document.getElementById('CardboardTitle2')) {
        document.getElementById('CardboardTitle2').textContent = translations.CardboardTitle2;
    }
    if (document.getElementById('CardboardList1')) {
        document.getElementById('CardboardList1').textContent = translations.CardboardList1;
    }
    if (document.getElementById('CardboardList2')) {
        document.getElementById('CardboardList2').textContent = translations.CardboardList2;
    }
    if (document.getElementById('CardboardList3')) {
        document.getElementById('CardboardList3').textContent = translations.CardboardList3;
    }
    if (document.getElementById('CardboardList4')) {
        document.getElementById('CardboardList4').textContent = translations.CardboardList4;
    }
    if (document.getElementById('CardboardMore')) {
        document.getElementById('CardboardMore').textContent = translations.CardboardMore;
    }
    if (document.getElementById('PlasticTitle1')) {
        document.getElementById('PlasticTitle1').textContent = translations.PlasticTitle1;
    }
    if (document.getElementById('PlasticText1')) {
        document.getElementById('PlasticText1').textContent = translations.PlasticText1;
    }
    if (document.getElementById('PlasticTitle2')) {
        document.getElementById('PlasticTitle2').textContent = translations.PlasticTitle2;
    }
    if (document.getElementById('PlasticList1')) {
        document.getElementById('PlasticList1').textContent = translations.PlasticList1;
    }
    if (document.getElementById('PlasticList2')) {
        document.getElementById('PlasticList2').textContent = translations.PlasticList2;
    }
    if (document.getElementById('PlasticList3')) {
        document.getElementById('PlasticList3').textContent = translations.PlasticList3;
    }
    if (document.getElementById('PlasticList4')) {
        document.getElementById('PlasticList4').textContent = translations.PlasticList4;
    }
    if (document.getElementById('PlasticMore')) {
        document.getElementById('PlasticMore').textContent = translations.PlasticMore;
    }
    if (document.getElementById('MixedTitle1')) {
        document.getElementById('MixedTitle1').textContent = translations.MixedTitle1;
    }
    if (document.getElementById('MixedText1')) {
        document.getElementById('MixedText1').textContent = translations.MixedText1;
    }
    if (document.getElementById('MixedTitle2')) {
        document.getElementById('MixedTitle2').textContent = translations.MixedTitle2;
    }
    if (document.getElementById('MixedList1')) {
        document.getElementById('MixedList1').textContent = translations.MixedList1;
    }
    if (document.getElementById('MixedList2')) {
        document.getElementById('MixedList2').textContent = translations.MixedList2;
    }
    if (document.getElementById('MixedList3')) {
        document.getElementById('MixedList3').textContent = translations.MixedList3;
    }
    if (document.getElementById('MixedList4')) {
        document.getElementById('MixedList4').textContent = translations.MixedList4;
    }
    if (document.getElementById('MixedMore')) {
        document.getElementById('MixedMore').textContent = translations.MixedMore;
    }
    if (document.getElementById('BioTitle3')) {
        document.getElementById('BioTitle3').textContent = translations.BioTitle3;
    }
    if (document.getElementById('BioDescription')) {
        document.getElementById('BioDescription').textContent = translations.BioDescription;
    }
    if (document.getElementById('BioTip1')) {
        document.getElementById('BioTip1').textContent = translations.BioTip1;
    }
    if (document.getElementById('BioLink1')) {
        document.getElementById('BioLink1').textContent = translations.BioLink1;
    }
    if (document.getElementById('MetalTitle3')) {
        document.getElementById('MetalTitle3').textContent = translations.MetalTitle3;
    }
    if (document.getElementById('MetalDescription')) {
        document.getElementById('MetalDescription').textContent = translations.MetalDescription;
    }
    if (document.getElementById('MetalTip1')) {
        document.getElementById('MetalTip1').textContent = translations.MetalTip1;
    }
    if (document.getElementById('MetalLink1')) {
        document.getElementById('MetalLink1').textContent = translations.MetalLink1;
    }
    if (document.getElementById('PaperTitle3')) {
        document.getElementById('PaperTitle3').textContent = translations.PaperTitle3;
    }
    if (document.getElementById('PaperDescription')) {
        document.getElementById('PaperDescription').textContent = translations.PaperDescription;
    }
    if (document.getElementById('PaperTip1')) {
        document.getElementById('PaperTip1').textContent = translations.PaperTip1;
    }
    if (document.getElementById('PaperLink1')) {
        document.getElementById('PaperLink1').textContent = translations.PaperLink1;
    }
    if (document.getElementById('CardboardTitle3')) {
        document.getElementById('CardboardTitle3').textContent = translations.CardboardTitle3;
    }
    if (document.getElementById('CardboardDescription')) {
        document.getElementById('CardboardDescription').textContent = translations.CardboardDescription;
    }
    if (document.getElementById('CardboardTip1')) {
        document.getElementById('CardboardTip1').textContent = translations.CardboardTip1;
    }
    if (document.getElementById('CardboardLink1')) {
        document.getElementById('CardboardLink1').textContent = translations.CardboardLink1;
    }
    if (document.getElementById('PlasticTitle3')) {
        document.getElementById('PlasticTitle3').textContent = translations.PlasticTitle3;
    }
    if (document.getElementById('PlasticDescription')) {
        document.getElementById('PlasticDescription').textContent = translations.PlasticDescription;
    }
    if (document.getElementById('PlasticTip1')) {
        document.getElementById('PlasticTip1').textContent = translations.PlasticTip1;
    }
    if (document.getElementById('PlasticLink1')) {
        document.getElementById('PlasticLink1').textContent = translations.PlasticLink1;
    }
    if (document.getElementById('MixedTitle3')) {
        document.getElementById('MixedTitle3').textContent = translations.MixedTitle3;
    }
    if (document.getElementById('MixedDescription')) {
        document.getElementById('MixedDescription').textContent = translations.MixedDescription;
    }
    if (document.getElementById('MixedTip1')) {
        document.getElementById('MixedTip1').textContent = translations.MixedTip1;
    }
    if (document.getElementById('MixedLink1')) {
        document.getElementById('MixedLink1').textContent = translations.MixedLink1;
    }    
    if (document.getElementById('closeOverlay')) {
        document.getElementById('closeOverlay').textContent = translations.closeOverlay;
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
