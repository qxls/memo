// script.js

// 加载并显示保存的备忘录
window.addEventListener('load', function() {
    const savedMemos = JSON.parse(localStorage.getItem('memos')) || [];
    const memoList = document.getElementById('memo-list');

    savedMemos.forEach(function(memo) {
        displayMemo(memo.text, memo.date);
    });
});

// 点击按钮添加新的备忘录
document.getElementById('add-memo-button').addEventListener('click', function() {
    const memoInput = document.getElementById('memo-input');
    const memoText = memoInput.value.trim();

    if (memoText !== '') {
        const now = new Date();
        const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

        // 保存备忘录到本地存储
        const savedMemos = JSON.parse(localStorage.getItem('memos')) || [];
        savedMemos.push({ text: memoText, date: dateStr });
        localStorage.setItem('memos', JSON.stringify(savedMemos));

        // 显示备忘录
        displayMemo(memoText, dateStr);

        // 清空输入框
        memoInput.value = '';
    }
});

// 显示备忘录函数
function displayMemo(text, date) {
    const memoList = document.getElementById('memo-list');

    const memoItem = document.createElement('div');
    memoItem.className = 'memo-item';

    const memoContent = document.createElement('p');
    memoContent.textContent = text;
    memoItem.appendChild(memoContent);

    const memoDate = document.createElement('div');
    memoDate.className = 'memo-date';
    memoDate.textContent = `记录时间: ${date}`;
    memoItem.appendChild(memoDate);

    memoList.appendChild(memoItem);
}
