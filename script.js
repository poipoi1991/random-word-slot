// 単語リストの定義
const wordList = ["Apple", "Banana", "Cherry", "Grape", "Orange", "Lemon", "Melon", "Pear","file", "Plum"];

// スロット要素の取得
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const startButton = document.getElementById("startButton");

// ランダムな単語を取得する関数
function getRandomWord() {
    return wordList[Math.floor(Math.random() * wordList.length)];
}

// スロットの動作を設定する関数
function startSlot() {
    let count = 0;
    const maxCount = 30; // スロットが回る回数
    const interval = 100; // 回転速度（ミリ秒）

    const slotInterval = setInterval(() => {
        slot1.textContent = getRandomWord();
        slot2.textContent = getRandomWord();
        slot3.textContent = getRandomWord();
        count++;

        if (count >= maxCount) {
            clearInterval(slotInterval);
        }
    }, interval);
}

// ボタンをクリックしたらスロットがスタート
startButton.addEventListener("click", startSlot);

// 簡易パスワード認証
function passwordProtect() {
    const correctPassword = "9503"; // 任意のパスワード
    let userPassword = prompt("パスワードを入力してください:");
    
    if (userPassword !== correctPassword) {
        alert("パスワードが違います。アクセスを終了します。");
        document.body.innerHTML = ""; // ページの内容を空白にする
    } else {
        alert("認証成功！ページをお楽しみください。");
    }
}

// ページ読み込み時にパスワード認証を実行
window.onload = passwordProtect;
