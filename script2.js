const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

const fixedQuestions =  [
	"What are the courses available?",
	"Who are the school program heads?",
	"What is your name?",
	"Hi",
	"What are the requirements for enrollment?",
	"Thank you",
	"program heads",
	"courses offered",
	"courses available",
	"hello",
	"requirements for enrollment",
	"what are the requirements",
    "what are the requirements?",
    "What are the courses?",
    "How many courses available?",
    "thanks",
    "what are the available courses?"	
	];


const fixedAnswers =  [
	"Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
	"President : Lorna Murillo PM Phd, Finance Manager: Michelle Caligner PM PhD, Campus Ministry: April Hiquial PM, General Services Officer: Estrella Soriano, Office of the Students Affair Head: Janrey Solana, Dean of College: Atty. Grecel Paclipan, BSED Program Head: Dr. Katherine Rosales, BSBA Program Head: Dr. Marybeth Lauron, IT Program Head: Atty. Grecel Paclipan",
	"My name is Nortrom the chatbot, I am here to assist you.",
	"Hello, how can I help you?",
	"The following are the requirements to enroll: For freshmen: 1. Must pass the entrance examination 2. Senior High School Report Card 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Authenticated Birth Certificate 6. PSA/NSO Marriage Certificate (for married women) 7. Latest 1x1 ID Picture For Transferees: 1. Honorable Dissmissal/Transfer Credential 2. SPR/TQR for Evaluation 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Marriage Certificate (for married women) 6. PSA/NSO Authenticated Birth Certificate 7. Latest 1x1 ID Picture Note: Some of the requirements can be followed up.",
	"You're welcome.",
	"President : Lorna Murillo PM Phd, Finance Manager: Michelle Caligner PM PhD, Campus Ministry: April Hiquial PM, General Services Officer: Estrella Soriano, Office of the Students Affair Head: Janrey Solana, Dean of College: Atty. Grecel Paclipan, BSED Program Head: Dr. Katherine Rosales, BSBA Program Head: Dr. Marybeth Lauron, IT Program Head: Atty. Grecel Paclipan",
	"Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
	"Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
	"Hello, how can I help you?",
	"The following are the requirements to enroll: For freshmen: 1. Must pass the entrance examination 2. Senior High School Report Card 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Authenticated Birth Certificate 6. PSA/NSO Marriage Certificate (for married women) 7. Latest 1x1 ID Picture For Transferees: 1. Honorable Dissmissal/Transfer Credential 2. SPR/TQR for Evaluation 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Marriage Certificate (for married women) 6. PSA/NSO Authenticated Birth Certificate 7. Latest 1x1 ID Picture Note: Some of the requirements can be followed up.",
    "The following are the requirements to enroll: For freshmen: 1. Must pass the entrance examination 2. Senior High School Report Card 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Authenticated Birth Certificate 6. PSA/NSO Marriage Certificate (for married women) 7. Latest 1x1 ID Picture For Transferees: 1. Honorable Dissmissal/Transfer Credential 2. SPR/TQR for Evaluation 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Marriage Certificate (for married women) 6. PSA/NSO Authenticated Birth Certificate 7. Latest 1x1 ID Picture Note: Some of the requirements can be followed up.",
    "The following are the requirements to enroll: For freshmen: 1. Must pass the entrance examination 2. Senior High School Report Card 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Authenticated Birth Certificate 6. PSA/NSO Marriage Certificate (for married women) 7. Latest 1x1 ID Picture For Transferees: 1. Honorable Dissmissal/Transfer Credential 2. SPR/TQR for Evaluation 3. Good Moral Certificate 4. Police Clearance 5. PSA/NSO Marriage Certificate (for married women) 6. PSA/NSO Authenticated Birth Certificate 7. Latest 1x1 ID Picture Note: Some of the requirements can be followed up.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology.",
    "You're welcome.",
    "Saint Peter's College of Toril offered the following programs: Kindergraten, Elementary, Junior Highschool, Senior Highschool: STEM, HUMSS, ABM, ICT. For college programs: Bachelor's of Secondary Education(BSED) Major: Science, Filipino, English, Mathematics,  Bachelor of Science in Business Administration(BSBA)Majors: Human Resource Management, Finanacial Management, Marketing Management. Bachelor's of Science in Information Technology."
	];

function sendMessage(){
	const userMessage = userInput.value.trim();

	if(userMessage !== ""){
		addMessage("You", userMessage, "outgoing");

		const botResponse = processInput(userMessage);

		addMessage("Bot", botResponse, "ongoing");

		userInput.value = "";

	}
}

function addMessage(sender, text, className){
	const messageElement = document.createElement("li");
	messageElement.textContent = text;
	messageElement.className = `chat ${className}`;
	const ulElement = document.createElement("ul");
	ulElement.appendChild(messageElement);
	chatbox.appendChild(ulElement);
}

function processInput(userInput){
    userInput = userInput.toLowerCase();

    const index = fixedQuestions.findIndex(question => userInput.includes(question.toLowerCase()));
    if(index !== -1){
    	return fixedAnswers[index];
    }

    return "I'm sorry, I don't understand. Could you please be more specific?";
}
