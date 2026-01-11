  <script>
    // =====================
    // # 卡池
    // =====================

    const characterPool = ["角色A", "角色B", "角色C", "角色D"];
    const talentPool = ["天賦A", "天賦B", "天賦C", "天賦D"];
    const noChallengePool = ["不要做A", "不要做B", "不要做C", "不要做D"];

    // =====================
    // # 抽卡功能
    // =====================

    function drawCharacter() {
      const i = Math.floor(Math.random() * characterPool.length);
      const card = characterPool[i];

      document.getElementById("characterResult").innerText =
        "你抽到的角色是：" + card;

      showEndButton();
    }

    function drawTalent() {
      const i = Math.floor(Math.random() * talentPool.length);
      const card = talentPool[i];

      document.getElementById("talentResult").innerText =
        "你抽到的天賦是：" + card;

      showEndButton();
    }

    function drawNoChallenge() {
      const i = Math.floor(Math.random() * noChallengePool.length);
      const card = noChallengePool[i];

      document.getElementById("noChallengeResult").innerText =
        "你抽到的不要做挑戰是：" + card;

      showEndButton();
    }

    // =====================
    // # 共用功能
    // =====================

    // # 顯示「挑戰完成」
    function showEndButton() {
      document.getElementById("endBtn").style.display = "inline-block";
    }

    // # 挑戰完成：重置所有抽卡
    function endChallenge() {
      document.getElementById("characterResult").innerText =
        "你抽到的角色是：---";

      document.getElementById("talentResult").innerText =
        "你抽到的天賦是：---";

      document.getElementById("noChallengeResult").innerText =
        "你抽到的不要做挑戰是：---";

      document.getElementById("endBtn").style.display = "none";
    }
  </script>
