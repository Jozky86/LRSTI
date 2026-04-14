const STORAGE_KEY = "lrsti-local-state-v1";
const questions = QUESTIONS;
const specialQuestions = SPECIAL_QUESTIONS;
const dimensions = DIMENSIONS;
const HOOK_TRIGGER_QUESTION_ID = "wolf_gate_q2";
const QUESTION_PICK_COUNT = 18;
const ARCHETYPE_BONUS_WEIGHT = 0.6;

const explanationPools = {
  L: [
    "这一项在你身上不算主打，更多时候你会把它当成辅助位来用。",
    "你在这一维通常不会先手拉满，除非局面特别需要你顶出来。",
    "这类打法不是你的默认配置，你更常把精力放在别的节奏点上。",
    "这一块你一般收得比较住，不会一上来就把牌桌重心压在这里。",
    "别人通常不会先用这一项来记住你，它更像你偶尔补上的副技能。",
    "这一维在你身上存在感偏低，平时不太会成为你最亮的发言标签。",
    "你通常不会靠这一项打全场，更多是看情况补一点，而不是一路推到底。",
    "在这方面你偏克制，除非轮次逼到面前，不然不会主动把它开到最大。",
    "这不是你最习惯的赢法，比起硬走这一条，你更常换别的思路破局。",
    "这一维更像你手边的工具，不像你的王牌，偶尔用得上，但不会场场打满。",
    "你在这方面大多是顺手补位，不太会把整把的胜负都压在这里。",
    "这一项通常不会先暴露你的牌风，更多像你留着备用的一手。",
    "你碰到这种局面时往往先观察，不会本能地用这一维去抢重心。",
    "这块你偏向够用就行，不太会主动把存在感堆得很满。",
    "这一项更像你的副频道，能开，但平时不是最大音量。",
    "如果这局不特别需要，你通常不会主动走这条很重的路线。",
    "别人复盘你时，往往不会先从这一项想到你。",
    "你在这一维习惯留一点余地，不爱一开始就把路走死。",
    "这块能力你不是没有，只是平时不会拿它当核心卖点。",
    "这一项在你这里更多像保底配置，不像招牌动作。",
    "你通常不会靠这一路风格去赢得很显眼，更多是平稳过渡。",
    "这类表现你有，但不会很外放，常常藏在整体打法后面。",
    "你在这方面更偏节省使用，不到关键轮不会明显拉高。",
    "这项不是你的第一反应，很多时候你会先从别的角度切入。",
    "这块你会做，但做得比较轻，不太会让整桌一下子感知到。",
    "这一维在你身上偏低调，更多是兜底，不是开路。",
    "你通常不会一上来就把这项摆到台前，除非局势硬把你推过去。",
    "如果别人只看这一项来认你，往往会低估你其他更强的部分。",
    "这更像你偶尔掏出来的补充动作，不像你稳定挂在手上的主武器。",
    "这一项你更多是藏着用、顺着用，而不是把它当成自己每局都要亮出来的招牌。"
  ],
  M: [
    "你会看这局遇到的人和板子来调整打法，不会一直只用一种风格。",
    "你在这一维最像“看局切手感”的玩家，能随轮次和场面自然调档。",
    "这不是那种一眼就定死的标签，你更擅长边打边调、边听边换节奏。",
    "你在这一项上属于可收可放，既不会一直顶满，也不会全程隐身。",
    "同样一桌不同板子，你在这一维的表现经常会跟着局面一起变。",
    "你不是固定模板型玩家，这一项常常会随着站边、轮次和压力轻轻摆动。",
    "你的打法弹性比较大，这一维更多是看局面需要多少，你就给多少。",
    "这一项你拿捏得比较活，既能稳着来，也能在关键轮次突然加码。",
    "比起死守一种风格，你更像那种会根据发言环境随时校准自己的人。",
    "这项特质在你身上不硬不软，像个随时能切档位的旋钮。",
    "你在这一维最像临场派，怎么出手通常要看这桌到底怎么聊。",
    "这不是你固定拉满的技能，更像随着板子明暗自动调节的手感。",
    "你会边听边改，不太容易被一种既定节奏绑死。",
    "这项在你身上有明显弹性，碰到不同风格的玩家会切出不同面。",
    "有时候你会偏收，有时候又会突然顶上去，主要看局面对不对。",
    "你在这一维不像模板答案，更像一张会随发言环境变速的牌。",
    "别人很难一句话概括你这项到底高还是低，因为你是真的会看情况变。",
    "你在这块不执着于某种固定形状，更多是顺着轮次把力度调到合适。",
    "这一维在你身上最突出的不是强弱，而是会拿捏分寸。",
    "你会根据站边压力和场上信息量，决定这一项到底放几成出来。",
    "你不是不强，也不是不收，而是知道什么时候该给牌桌什么版本的自己。",
    "这项更像可伸可缩的手感，不会一直同一个档位打到底。",
    "你面对不同桌风时，这一维的表现通常会跟着一起转向。",
    "这一项在你这里很看对局温度，冷桌和热桌会打出两种感觉。",
    "你有能力把这块开高，也有耐心把它收住，重点在时机。",
    "比起绝对值，你这项更强的是调度能力，知道什么时候放、什么时候停。",
    "你在这一维常常表现得很会看空气，既不会太过，也不会缺位。",
    "这项特质在你身上很像滑杆，会随着身份和局势慢慢推移。",
    "如果说别人是一键到底，你更像多档可调，场面怎么变你就怎么跟。",
    "你这方面的最大特点不是突出，而是顺，常常能很自然地接住不同局势。"
  ],
  H: [
    "这一项很像你的主标签，别人通常很容易从这里记住你的打法。",
    "这块几乎会直接写在你的桌面气质上，你一开口就容易把它带出来。",
    "不管拿什么身份，这一维都很容易露出你的个人习惯和发言底色。",
    "这一项通常会成为你最先被别人感知到的牌风特征，藏都不太好藏。",
    "你在这方面的存在感很强，很多时候整桌都会顺着这一点认识你。",
    "这是你特别鲜明的一面，往往不用打太久，别人就能看出你的偏好。",
    "这一维在你身上像常驻技能，很容易在关键轮次直接决定你给人的印象。",
    "你在这块的辨识度很高，经常会成为别人复盘时第一时间提到的标签。",
    "这不是偶尔发挥，而是很稳定地长在你打法里的主轴能力。",
    "这一项通常会直接带出你的个人风格，属于那种很难不被看见的强标签。",
    "你在这方面往往不用刻意发力，整桌也能很快感受到你的倾向。",
    "这块很像你的稳定输出区，很多局都会自然亮出来。",
    "你一旦进入状态，这一维通常会直接成为桌上最显眼的部分之一。",
    "别人认你牌风时，经常会先从这一项给你贴标签。",
    "这项能力在你身上不是点缀，而是主心骨，很多判断都会围着它展开。",
    "你在这方面的存在感很难藏，哪怕想低调一点也容易露底色。",
    "这维度通常会直接决定别人对你是“这人就这种风格”的第一印象。",
    "你这块不只是有，而是很满，往往一两轮就能被人感觉出来。",
    "这一项像你的默认大招，很多局里都会自己跳到台前。",
    "就算你不主动提，别人也常会从你的发言方式里听出这块特别强。",
    "你在这一维很容易形成桌面记忆点，属于复盘时绕不过去的部分。",
    "这项特质在你身上经常是主导位，不只是加分项。",
    "你的很多操作最后都会回到这一维上，像是你打法的总开关。",
    "如果把你的牌风拆开看，这一项通常是最粗最明显的那根主线。",
    "你在这里的辨识度非常高，很多时候甚至比身份本身还先被看到。",
    "这块像是长在你打法里的固定骨架，不会轻易缺席。",
    "你一旦开始认真发力，这一维几乎总会成为场上能见度最高的部分之一。",
    "这项在你身上不只是偏高，而是很像别人认识你时的关键词。",
    "很多人会觉得你整个人的发言气质，就是被这一项先定义出来的。",
    "你在这块几乎自带风格滤镜，别人一听一看，就很容易把你和这项能力绑定起来。"
  ]
};

const resultTypes = NORMAL_TYPES.map(({ code, pattern }) => ({
  ...TYPE_LIBRARY[code],
  pattern: pattern.split("")
}));

const ARCHETYPE_WEIGHTS_BY_DIM_LEVEL = {
  Logic: {
    L: ["CIVIL", "IDIOT", "MASK"],
    M: ["DIDI_SEER", "THIEF", "DREAMER"],
    H: ["SEER", "KNIGHT", "ELDER"]
  },
  Aggro: {
    L: ["GUARD", "CIVIL"],
    M: ["HUNTER", "KNIGHT"],
    H: ["WHITEWOLF", "ACTOR", "MECH_GUN"]
  },
  Lead: {
    L: ["CIVIL", "MASK"],
    M: ["DIDI_SEER", "DREAMER"],
    H: ["ELDER", "SEER", "JY"]
  },
  Deception: {
    L: ["IDIOT", "CIVIL"],
    M: ["DREAMER", "GUARD"],
    H: ["ACTOR", "MASK", "MECH_WOLF", "OK_CAPTAIN"]
  },
  Emotion: {
    L: ["NIGHTMARE", "MASK"],
    M: ["WOLF_BEAUTY", "CUPID"],
    H: ["DANCER", "JESTER", "OK_CAPTAIN"]
  },
  Team: {
    L: ["IDIOT", "WHITEWOLF"],
    M: ["THIEF", "WITCH"],
    H: ["GUARD", "DIDI_SEER", "MECH_GUARD", "CUPID"]
  }
};

const hiddenType = TYPE_LIBRARY.HOOK;
const hiddenArchetypes = [
  {
    type: TYPE_LIBRARY.JESTER,
    predicate: scores => scores.Emotion >= 8 && scores.Logic <= 5 && scores.Lead >= 5
  },
  {
    type: TYPE_LIBRARY.JY,
    predicate: scores => (
      scores.Logic >= 8 &&
      scores.Lead >= 8 &&
      scores.Deception >= 8 &&
      scores.Team >= 8 &&
      scores.Aggro >= 6
    )
  },
  {
    type: TYPE_LIBRARY.OK_CAPTAIN,
    predicate: scores => (
      scores.Deception >= 8 &&
      scores.Team >= 8 &&
      scores.Emotion >= 6 &&
      scores.Aggro <= 6
    )
  },
  {
    type: TYPE_LIBRARY.SLACKER,
    predicate: scores => (
      scores.Logic <= 5 &&
      scores.Aggro <= 5 &&
      scores.Lead <= 5 &&
      scores.Team <= 6 &&
      scores.Emotion <= 6
    )
  },
  {
    type: TYPE_LIBRARY.MECH_GUARD,
    predicate: scores => scores.Logic >= 8 && scores.Team >= 8 && scores.Aggro <= 5
  },
  {
    type: TYPE_LIBRARY.MECH_WITCH,
    predicate: scores => scores.Logic >= 8 && scores.Deception >= 8 && scores.Emotion <= 5
  },
  {
    type: TYPE_LIBRARY.MECH_GUN,
    predicate: scores => scores.Aggro >= 8 && scores.Lead >= 8 && scores.Deception >= 6
  },
  {
    type: TYPE_LIBRARY.CUPID,
    predicate: scores => scores.Deception >= 8 && scores.Emotion >= 8 && scores.Lead >= 8
  }
];

const state = {
  order: [],
  gateIndex: 0,
  currentIndex: 0,
  answers: {},
  result: null
};

const els = {
  intro: document.querySelector("#introScreen"),
  test: document.querySelector("#testScreen"),
  result: document.querySelector("#resultScreen"),
  form: document.querySelector("#quizForm"),
  progressFill: document.querySelector("#progressFill"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector(".progress-bar"),
  hint: document.querySelector("#hintText"),
  submit: document.querySelector("#submitBtn"),
  prev: document.querySelector("#prevBtn"),
  next: document.querySelector("#nextBtn"),
  questionIndex: document.querySelector("#questionIndexText"),
  resume: document.querySelector("#resumeBtn"),
  poster: document.querySelector("#resultPoster"),
  resultImage: document.querySelector("#resultImage")
};

const ROLE_IMAGE_EXTENSIONS = ["png", "jpg", "jpeg", "webp"];
const dimensionQuestionIds = Object.fromEntries(
  dimensions.map(([key]) => [key, questions.filter(item => item.dim === key).map(item => item.id)])
);

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function visibleQuestions() {
  const base = state.order.map(id => questions.find(item => item.id === id));
  const insertAt = Math.min(state.gateIndex, base.length);
  const visible = [
    ...base.slice(0, insertAt),
    specialQuestions[0],
    ...base.slice(insertAt)
  ];
  const gateIndex = visible.findIndex(item => item.id === specialQuestions[0].id);
  if (gateIndex !== -1 && state.answers[specialQuestions[0].id] === 3) {
    visible.splice(gateIndex + 1, 0, specialQuestions[1]);
  }
  return visible;
}

function show(screen) {
  [els.intro, els.test, els.result].forEach(el => el.classList.remove("is-active"));
  screen.classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clampCurrentIndex() {
  const total = visibleQuestions().length;
  if (!total) {
    state.currentIndex = 0;
    return;
  }
  state.currentIndex = Math.max(0, Math.min(state.currentIndex, total - 1));
}

function jumpToFirstUnanswered() {
  const current = visibleQuestions();
  const firstUnanswered = current.findIndex(item => state.answers[item.id] === undefined);
  state.currentIndex = firstUnanswered === -1 ? current.length - 1 : firstUnanswered;
  clampCurrentIndex();
}

function start(fresh = true) {
  if (fresh || !state.order.length) {
    state.order = shuffle(questions).slice(0, QUESTION_PICK_COUNT).map(item => item.id);
    state.gateIndex = Math.floor(Math.random() * state.order.length) + 1;
    state.currentIndex = 0;
    state.answers = {};
    state.result = null;
  } else {
    clampCurrentIndex();
    if (state.answers[HOOK_TRIGGER_QUESTION_ID] === undefined) {
      jumpToFirstUnanswered();
    }
  }
  renderQuestions();
  updateProgress();
  saveState();
  show(els.test);
}

function renderQuestions() {
  const current = visibleQuestions();
  clampCurrentIndex();
  const item = current[state.currentIndex];

  if (!item) {
    els.form.innerHTML = "";
    return;
  }

  const options = item.options.map((option, optionIndex) => {
    const checked = state.answers[item.id] === option.value ? "checked" : "";
    const label = ["A", "B", "C", "D"][optionIndex];
    return `
      <label class="option">
        <input type="radio" name="${item.id}" value="${option.value}" ${checked}>
        <span>${label}. ${option.label}</span>
      </label>
    `;
  }).join("");

  els.form.innerHTML = `
    <fieldset class="question">
      <legend>
        <span class="question-meta">
          <span>第 ${state.currentIndex + 1} 题</span>
          <span>${item.special ? "特殊题" : "常规题"}</span>
        </span>
        <span>${item.text}</span>
      </legend>
      <div class="options">${options}</div>
    </fieldset>
  `;
}

function updateProgress() {
  const current = visibleQuestions();
  const done = current.filter(item => state.answers[item.id] !== undefined).length;
  const total = current.length;
  const percent = Math.round((done / total) * 100);
  const currentItem = current[state.currentIndex];
  const currentAnswered = currentItem && state.answers[currentItem.id] !== undefined;

  els.progressFill.style.width = `${percent}%`;
  els.progressText.textContent = `${done} / ${total}`;
  els.questionIndex.textContent = total ? `第 ${state.currentIndex + 1} 题` : "第 0 题";
  els.progressBar.setAttribute("aria-valuenow", String(done));
  els.progressBar.setAttribute("aria-valuemax", String(total));
  els.submit.disabled = done !== total;
  els.prev.disabled = state.currentIndex === 0;
  els.next.disabled = !total || state.currentIndex === total - 1;
  els.hint.textContent = done === total
    ? "全员发言完毕，可以放逐出结果了。"
    : currentAnswered
      ? "已锁定当前选择，可以返回改票，也可以继续下一题。"
      : "选择答案后会自动跳到下一题。";
}

function levelFromScore(score) {
  if (score <= 4) return "L";
  if (score <= 7) return "M";
  return "H";
}

function levelValue(level) {
  return { L: 1, M: 2, H: 3 }[level];
}

function explanationForDimension(key, level) {
  const pool = explanationPools[level];
  if (!pool || !pool.length) return "";

  const ids = dimensionQuestionIds[key] || [];
  const seedSource = ids.map((id, index) => {
    const answer = Number(state.answers[id] || 0);
    return answer * (index + 3);
  }).reduce((sum, value) => sum + value, 0);

  const globalSource = Object.keys(state.answers)
    .sort()
    .reduce((sum, id, index) => sum + Number(state.answers[id] || 0) * (index + 1), 0);

  const keyWeight = key.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const index = Math.abs(seedSource * 7 + globalSource + keyWeight) % pool.length;
  return pool[index];
}

function bonusFromAnswers() {
  const bonus = {};
  questions.forEach(item => {
    const answer = Number(state.answers[item.id] || 0);
    if (!answer) return;
    const level = answer === 1 ? "L" : answer === 2 ? "M" : "H";
    const targets = ARCHETYPE_WEIGHTS_BY_DIM_LEVEL[item.dim]?.[level] || [];
    targets.forEach(code => {
      if (!TYPE_LIBRARY[code]) return;
      bonus[code] = (bonus[code] || 0) + 1;
    });
  });
  return bonus;
}

function tryLoadRoleImage(code) {
  const image = els.resultImage;
  image.hidden = true;
  image.removeAttribute("src");
  image.removeAttribute("alt");

  let index = 0;

  function next() {
    if (index >= ROLE_IMAGE_EXTENSIONS.length) {
      image.hidden = true;
      image.onerror = null;
      image.onload = null;
      return;
    }

    const extension = ROLE_IMAGE_EXTENSIONS[index];
    index += 1;
    image.onload = () => {
      image.hidden = false;
      image.onload = null;
      image.onerror = null;
    };
    image.onerror = next;
    image.src = `./assets/images/roles/${code}.${extension}`;
    image.alt = `${code} 角色图`;
  }

  next();
}

function buildHiddenResult(type, scores, levels, similarity = 98) {
  return {
    type,
    levels,
    scores,
    similarity,
    exact: dimensions.length,
    mode: "hidden"
  };
}

function computeResult() {
  const scores = Object.fromEntries(dimensions.map(([key]) => [key, 0]));
  questions.forEach(item => {
    scores[item.dim] += Number(state.answers[item.id] || 0);
  });

  const bonusByCode = bonusFromAnswers();
  const levels = Object.fromEntries(
    dimensions.map(([key]) => [key, levelFromScore(scores[key])])
  );
  const userVector = dimensions.map(([key]) => levels[key]);

  if (state.answers[HOOK_TRIGGER_QUESTION_ID] === 2 && scores.Deception >= 6) {
    return buildHiddenResult(hiddenType, scores, levels, 100);
  }

  const matchedHidden = hiddenArchetypes.find(item => item.predicate(scores));
  if (matchedHidden) {
    return buildHiddenResult(matchedHidden.type, scores, levels);
  }

  const ranked = resultTypes.map(item => {
    let distance = 0;
    let exact = 0;

    item.pattern.forEach((level, index) => {
      const diff = Math.abs(levelValue(userVector[index]) - levelValue(level));
      distance += diff;
      if (diff === 0) exact += 1;
    });

    const bonus = bonusByCode[item.code] || 0;
    const adjusted = distance - bonus * ARCHETYPE_BONUS_WEIGHT;

    return {
      type: item,
      distance,
      exact,
      bonus,
      adjusted,
      similarity: Math.max(0, Math.round((1 - distance / 12) * 100))
    };
  }).sort((a, b) => a.adjusted - b.adjusted || a.distance - b.distance || b.exact - a.exact);

  return {
    ...ranked[0],
    levels,
    scores,
    mode: "normal"
  };
}

function renderResult() {
  const result = computeResult();
  state.result = result;
  saveState();

  document.querySelector("#resultKicker").textContent = result.mode === "hidden"
    ? "隐藏画像已解锁"
    : "你的狼人杀画像";
  document.querySelector("#resultTitle").textContent = result.type.name;
  document.querySelector("#posterSubtitle").textContent = result.type.subtitle;
  document.querySelector("#resultCode").textContent = result.type.code;
  document.querySelector("#matchBadge").textContent = `匹配度 ${result.similarity}%`;
  document.querySelector("#resultSummary").textContent = result.type.summary;
  document.querySelector("#resultDesc").textContent = result.type.desc;

  els.poster.className = `result-poster ${result.type.accent}`;
  tryLoadRoleImage(result.type.code);

  document.querySelector("#scoreGrid").innerHTML = dimensions.map(([key, name]) => {
    const level = result.levels[key];
    return `
      <article class="score-item">
        <strong><span>${name}</span><span>${level} / ${result.scores[key]}分</span></strong>
        <p>${explanationForDimension(key, level)}</p>
      </article>
    `;
  }).join("");

  show(els.result);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    order: state.order,
    gateIndex: state.gateIndex,
    currentIndex: state.currentIndex,
    answers: state.answers
  }));
  els.resume.hidden = !state.order.length;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || !Array.isArray(saved.order)) return;
    state.order = saved.order;
    state.gateIndex = Number.isInteger(saved.gateIndex) ? saved.gateIndex : 0;
    state.currentIndex = Number.isInteger(saved.currentIndex) ? saved.currentIndex : 0;
    state.answers = saved.answers || {};
    els.resume.hidden = false;
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function copyResult() {
  if (!state.result) return;
  const text = `我的 LRSTI 结果是 ${state.result.type.name}（${state.result.type.code}），匹配度 ${state.result.similarity}%。${state.result.type.summary}`;
  navigator.clipboard.writeText(text).then(() => {
    const button = document.querySelector("#copyBtn");
    button.textContent = "已复制";
    setTimeout(() => {
      button.textContent = "复制结果";
    }, 1200);
  });
}

els.form.addEventListener("change", event => {
  if (!event.target.matches("input[type='radio']")) return;
  state.answers[event.target.name] = Number(event.target.value);

  if (event.target.name === specialQuestions[0].id) {
    if (state.answers[specialQuestions[0].id] !== 3) {
      delete state.answers[specialQuestions[1].id];
    }
    clampCurrentIndex();
  }

  const total = visibleQuestions().length;
  if (state.currentIndex < total - 1) {
    state.currentIndex += 1;
  }

  renderQuestions();
  updateProgress();
  saveState();
});

els.prev.addEventListener("click", () => {
  if (state.currentIndex === 0) return;
  state.currentIndex -= 1;
  renderQuestions();
  updateProgress();
  saveState();
});

els.next.addEventListener("click", () => {
  const total = visibleQuestions().length;
  if (state.currentIndex >= total - 1) return;
  state.currentIndex += 1;
  renderQuestions();
  updateProgress();
  saveState();
});

document.querySelector("#startBtn").addEventListener("click", () => start(true));
document.querySelector("#resumeBtn").addEventListener("click", () => start(false));
document.querySelector("#homeBtn").addEventListener("click", () => show(els.intro));
document.querySelector("#submitBtn").addEventListener("click", renderResult);
document.querySelector("#restartBtn").addEventListener("click", () => start(true));
document.querySelector("#copyBtn").addEventListener("click", copyResult);

loadState();
