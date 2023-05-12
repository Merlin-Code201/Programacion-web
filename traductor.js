function translate(targetLanguage, inputId) {
	const inputText = document.getElementById(inputId).value;
	const outputId = `input-${targetLanguage}`;
	const outputTextArea = document.getElementById(outputId);
	
	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const translation = JSON.parse(xhr.responseText).data.translations[0].translatedText;
			outputTextArea.value = translation;
		}
	}
	const url = `https://translation.googleapis.com/language/translate/v2?key=API_KEY&q=${inputText}&source=es&target=${targetLanguage}`;
	xhr.open('GET', url, true);
	xhr.send();
}
