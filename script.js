// =====================
// # 初始卡池（重置會回到這裡）
// =====================

const initialCharacters = ["角色A", "角色B", "角色C", "角色D"];
const initialTalents = ["天賦A", "天賦B", "天賦C", "天賦D"];
const initialNoChallenges = ["不要做A", "不要做B", "不要做C", "不要做D"];

let characterPool = [...initialCharacters];
let talentPool = [...initialTalents];
let noChallengePool = [...initialNoChallenges];

// =====================
// # 抽卡功能
// =====================

function drawCharacter() {
  drawFromPool(characterPool, "characterResult", "角色");
}

function drawTalent() {
  drawFromPool(talentPool, "talentResult", "天賦");
}

function drawNoChallenge() {
  drawFromPool(noChallengePool, "noChallengeResult", "不要做挑戰");
}

function drawFromPool(pool, elementId, label) {
  if (pool.length === 0) {
    document.getElementById(elementId).innerText =
      `你抽到的${label}是：卡池為空`;
    return;
  }
  const i = Math.floor(Math.random() * pool.length);
  document.getElementById(elementId).innerText =
    `你抽到的${label}是：` + pool[i];
}

// =====================
// # 編輯卡池（新增 + 刪除）
// =====================

function addCharacter() {
  addCard("characterInput", characterPool, renderCharacterList);
}

function addTalent() {
  addCard("talentInput", talentPool, renderTalentList);
}

function addNoChallenge() {
  addCard("noChallengeInput", noChallengePool, renderNoChallengeList);
}

function addCard(inputId, pool, renderFn) {
  const input = document.getElementById(inputId);
  if (input.value.trim() === "") return;
  pool.push(input.value.trim());
  input.value = "";
  renderFn();
}

function removeCard(pool, index, renderFn) {
  pool.splice(index, 1);
  renderFn();
}

// =====================
// # 渲染清單
// =====================

function renderCharacterList() {
  renderList("characterList", characterPool, renderCharacterList);
}

function renderTalentList() {
  renderList("talentList", talentPool, renderTalentList);
}

function renderNoChallengeList() {
  renderList("noChallengeList", noChallengePool, renderNoChallengeList);
}

function renderList(elementId, pool, renderFn) {
  const ul = document.getElementById(elementId);
  ul.innerHTML = "";
  pool.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item} <button onclick="removeCard(${JSON.stringify(pool)}, ${index}, ${renderFn.name})">刪除</button>`;
    ul.appendChild(li);
  });
}

// =====================
// # 一鍵重置（全部回初始）
// =====================

function resetAll() {
  characterPool = [...initialCharacters];
  talentPool = [...initialTalents];
  noChallengePool = [...initialNoChallenges];

  document.getElementById("characterResult").innerText =
    "你抽到的角色是：---";
  document.getElementById("talentResult").innerText =
    "你抽到的天賦是：---";
  document.getElementById("noChallengeResult").innerText =
    "你抽到的不要做挑戰是：---";

  document.getElementById("characterInput").value = "";
  document.getElementById("talentInput").value = "";
  document.getElementById("noChallengeInput").value = "";

  renderCharacterList();
  renderTalentList();
  renderNoChallengeList();
}

// =====================
// # 初始化畫面
// =====================

renderCharacterList();
renderTalentList();
renderNoChallengeList();
