const hiraganaArray = [
    { symbol: 'あ', sound: 'a' },
    { symbol: 'い', sound: 'i' },
    { symbol: 'う', sound: 'u' },
    { symbol: 'え', sound: 'e' },
    { symbol: 'お', sound: 'o' },
    { symbol: 'か', sound: 'ka' },
    { symbol: 'が', sound: 'ga' },
    { symbol: 'き', sound: 'ki' },
    { symbol: 'ぎ', sound: 'gi' },
    { symbol: 'く', sound: 'ku' },
    { symbol: 'ぐ', sound: 'gu' },
    { symbol: 'け', sound: 'ke' },
    { symbol: 'げ', sound: 'ge' },
    { symbol: 'こ', sound: 'ko' },
    { symbol: 'ご', sound: 'go' },
    { symbol: 'さ', sound: 'sa' },
    { symbol: 'ざ', sound: 'za' },
    { symbol: 'し', sound: 'shi' },
    { symbol: 'じ', sound: 'ji' },
    { symbol: 'す', sound: 'su' },
    { symbol: 'ず', sound: 'zu' },
    { symbol: 'せ', sound: 'se' },
    { symbol: 'ぜ', sound: 'ze' },
    { symbol: 'そ', sound: 'so' },
    { symbol: 'ぞ', sound: 'zo' },
    { symbol: 'た', sound: 'ta' },
    { symbol: 'だ', sound: 'da' },
    { symbol: 'ち', sound: 'chi' },
    { symbol: 'ぢ', sound: 'ji' }, // Note: ぢ is the voiced counterpart of ち
    { symbol: 'つ', sound: 'tsu' },
    { symbol: 'づ', sound: 'zu' }, // Note: づ is the voiced counterpart of つ
    { symbol: 'て', sound: 'te' },
    { symbol: 'で', sound: 'de' },
    { symbol: 'と', sound: 'to' },
    { symbol: 'ど', sound: 'do' },
    { symbol: 'な', sound: 'na' },
    { symbol: 'に', sound: 'ni' },
    { symbol: 'ぬ', sound: 'nu' },
    { symbol: 'ね', sound: 'ne' },
    { symbol: 'の', sound: 'no' },
    { symbol: 'は', sound: 'ha' },
    { symbol: 'ば', sound: 'ba' }, // Note: ば is the voiced counterpart of は
    { symbol: 'ぱ', sound: 'pa' }, // Note: ぱ is the semi-voiced counterpart of は
    { symbol: 'ひ', sound: 'hi' },
    { symbol: 'び', sound: 'bi' }, // Note: び is the voiced counterpart of ひ
    { symbol: 'ぴ', sound: 'pi' }, // Note: ぴ is the semi-voiced counterpart of ひ
    { symbol: 'ふ', sound: 'fu' },
    { symbol: 'ぶ', sound: 'bu' }, // Note: ぶ is the voiced counterpart of ふ
    { symbol: 'ぷ', sound: 'pu' }, // Note: ぷ is the semi-voiced counterpart of ふ
    { symbol: 'へ', sound: 'he' },
    { symbol: 'べ', sound: 'be' }, // Note: べ is the voiced counterpart of へ
    { symbol: 'ぺ', sound: 'pe' }, // Note: ぺ is the semi-voiced counterpart of へ
    { symbol: 'ほ', sound: 'ho' },
    { symbol: 'ぼ', sound: 'bo' }, // Note: ぼ is the voiced counterpart of ほ
    { symbol: 'ぽ', sound: 'po' }, // Note: ぽ is the semi-voiced counterpart of ほ
    { symbol: 'ま', sound: 'ma' },
    { symbol: 'み', sound: 'mi' },
    { symbol: 'む', sound: 'mu' },
    { symbol: 'め', sound: 'me' },
    { symbol: 'も', sound: 'mo' },
    { symbol: 'や', sound: 'ya' },
    { symbol: 'ゆ', sound: 'yu' },
    { symbol: 'よ', sound: 'yo' },
    { symbol: 'ら', sound: 'ra' },
    { symbol: 'り', sound: 'ri' },
    { symbol: 'る', sound: 'ru' },
    { symbol: 'れ', sound: 're' },
    { symbol: 'ろ', sound: 'ro' },
    { symbol: 'わ', sound: 'wa' },
    { symbol: 'を', sound: 'wo' },
    { symbol: 'ん', sound: 'n' }
];

const katakanaArray = [
    { symbol: 'ア', sound: 'a' },
    { symbol: 'イ', sound: 'i' },
    { symbol: 'ウ', sound: 'u' },
    { symbol: 'エ', sound: 'e' },
    { symbol: 'オ', sound: 'o' },
    { symbol: 'カ', sound: 'ka' },
    { symbol: 'キ', sound: 'ki' },
    { symbol: 'ク', sound: 'ku' },
    { symbol: 'ケ', sound: 'ke' },
    { symbol: 'コ', sound: 'ko' },
    { symbol: 'サ', sound: 'sa' },
    { symbol: 'シ', sound: 'shi' },
    { symbol: 'ス', sound: 'su' },
    { symbol: 'セ', sound: 'se' },
    { symbol: 'ソ', sound: 'so' },
    { symbol: 'タ', sound: 'ta' },
    { symbol: 'チ', sound: 'chi' },
    { symbol: 'ツ', sound: 'tsu' },
    { symbol: 'テ', sound: 'te' },
    { symbol: 'ト', sound: 'to' },
    { symbol: 'ナ', sound: 'na' },
    { symbol: 'ニ', sound: 'ni' },
    { symbol: 'ヌ', sound: 'nu' },
    { symbol: 'ネ', sound: 'ne' },
    { symbol: 'ノ', sound: 'no' },
    { symbol: 'ハ', sound: 'ha' },
    { symbol: 'ヒ', sound: 'hi' },
    { symbol: 'フ', sound: 'fu' },
    { symbol: 'ヘ', sound: 'he' },
    { symbol: 'ホ', sound: 'ho' },
    { symbol: 'マ', sound: 'ma' },
    { symbol: 'ミ', sound: 'mi' },
    { symbol: 'ム', sound: 'mu' },
    { symbol: 'メ', sound: 'me' },
    { symbol: 'モ', sound: 'mo' },
    { symbol: 'ヤ', sound: 'ya' },
    { symbol: 'ユ', sound: 'yu' },
    { symbol: 'ヨ', sound: 'yo' },
    { symbol: 'ラ', sound: 'ra' },
    { symbol: 'リ', sound: 'ri' },
    { symbol: 'ル', sound: 'ru' },
    { symbol: 'レ', sound: 're' },
    { symbol: 'ロ', sound: 'ro' },
    { symbol: 'ワ', sound: 'wa' },
    { symbol: 'ヲ', sound: 'wo' },
    { symbol: 'ン', sound: 'n' },
    { symbol: 'ガ', sound: 'ga' },
    { symbol: 'ギ', sound: 'gi' },
    { symbol: 'グ', sound: 'gu' },
    { symbol: 'ゲ', sound: 'ge' },
    { symbol: 'ゴ', sound: 'go' },
    { symbol: 'ザ', sound: 'za' },
    { symbol: 'ジ', sound: 'ji' },
    { symbol: 'ズ', sound: 'zu' },
    { symbol: 'ゼ', sound: 'ze' },
    { symbol: 'ゾ', sound: 'zo' },
    { symbol: 'ダ', sound: 'da' },
    { symbol: 'ヂ', sound: 'ji' },
    { symbol: 'ヅ', sound: 'zu' },
    { symbol: 'デ', sound: 'de' },
    { symbol: 'ド', sound: 'do' },
    { symbol: 'バ', sound: 'ba' },
    { symbol: 'ビ', sound: 'bi' },
    { symbol: 'ブ', sound: 'bu' },
    { symbol: 'ベ', sound: 'be' },
    { symbol: 'ボ', sound: 'bo' },
    { symbol: 'パ', sound: 'pa' },
    { symbol: 'ピ', sound: 'pi' },
    { symbol: 'プ', sound: 'pu' },
    { symbol: 'ペ', sound: 'pe' },
    { symbol: 'ポ', sound: 'po' },
];

let selectedSymbol = null;
let attempts = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let accuracy = 100;

document.addEventListener('DOMContentLoaded', initialize);

const form = document.getElementById("answerForm");
form.addEventListener('submit', submitForm);

function initialize() {
    generateSymbol();
    showAnswers();
}

function submitForm(event) {
    event.preventDefault();
    onSubmit();
    form.reset();
}

function onSubmit() {
    const answer = document.getElementById('answer').value;
    if (answer == null) return;

    if (selectedSymbol.sound === answer) {
        generateSymbol();
        correctAnswers++;
        attempts = 0;
    } else {
        attempts++;
        incorrectAnswers++;

        if (attempts > 3) {
            showAnswer();
        } else if (!showAnswersSwitch.checked || attempts <= 3) {
            hideAnswer();
        }
    }

    accuracy = (correctAnswers / (correctAnswers + incorrectAnswers)) * 100;
    updateStats();
    showAnswers();
    document.getElementById('answer').click();
}

function updateStats() {
    document.getElementById("correct-answers").textContent = `Correct: ${correctAnswers}`;
    document.getElementById("incorrect-answers").textContent = `Incorrect: ${incorrectAnswers}`;
    document.getElementById("accuracy").textContent = `Accuracy: ${accuracy.toFixed(2)}%`;
}

function getRandomCharacter() {
    const random = Math.random();

    if (hiraganaSwitch.checked && katakanaSwitch.checked) {
        return random < 0.5 ? getRandomKatakanaCharacter() : getRandomHiraganaCharacter();
    } else if (hiraganaSwitch.checked) {
        return getRandomHiraganaCharacter();
    } else {
        katakanaSwitch.checked = true;
        return getRandomKatakanaCharacter();
    }
}

function generateSymbol() {
    selectedSymbol = getRandomCharacter();
    console.log(selectedSymbol);
    document.getElementById("character").textContent = selectedSymbol.symbol;
}

// option switches.
const showAnswersSwitch = document.getElementById('showAnswersSwitch');
const hiraganaSwitch = document.getElementById('hiraganaSwitch');
const katakanaSwitch = document.getElementById('katakanaSwitch');
const themeSwitch = document.getElementById('themeSwitch');

showAnswersSwitch.addEventListener('change', showAnswers);
themeSwitch.addEventListener('change', toggleTheme);

function showAnswers() {
    showAnswersSwitch.checked ? showAnswer() : hideAnswer();
}

function showAnswer() {
    document.getElementById("sound").textContent = selectedSymbol.sound;
}

function hideAnswer() {
    document.getElementById("sound").textContent = "";
}

function getRandomKatakanaCharacter() {
    const randomIndex = Math.floor(Math.random() * katakanaArray.length);
    return katakanaArray[randomIndex];
}

function getRandomHiraganaCharacter() {
    const randomIndex = Math.floor(Math.random() * hiraganaArray.length);
    return hiraganaArray[randomIndex];
}

function toggleTheme() {
    const htmlElement = document.querySelector('html');
    if (htmlElement.getAttribute('data-bs-theme') == 'light') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
    } else {
        htmlElement.setAttribute('data-bs-theme', 'light');
    }
}