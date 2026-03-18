const termSections = [
  {
    id: 1,
    title: 'Road to War',
    terms: [
      {
        term: 'Mukden Incident (1931)',
        definition: 'A staged explosion along the Japanese-controlled South Manchuria Railway near Mukden, used by Japanese officers as a false-flag pretext to invade Manchuria. The League of Nations condemned the aggression but failed to enforce consequences, exposing the weakness of collective security.'
      },
      {
        term: 'Manchukuo (1932–1945)',
        definition: 'The Japanese puppet state established in Manchuria after the Mukden Incident and nominally led by Puyi. Japan controlled its political, military, and economic decisions, using it as a resource base and model for broader imperial expansion in East Asia.'
      },
      {
        term: 'Lebensraum',
        definition: 'German for living space, this Nazi ideological concept argued that the so-called Aryan race needed to expand eastward into places such as Poland and the Soviet Union to gain land and resources. It helped justify German territorial aggression and genocide.'
      },
      {
        term: 'Remilitarization of the Rhineland (1936)',
        definition: 'Hitler sent German troops into the demilitarized Rhineland in violation of the Treaty of Versailles. France and Britain protested but did not intervene militarily, reinforcing Hitler’s belief that the Western powers would not stop him by force.'
      },
      {
        term: 'Nuremberg Laws (1935)',
        definition: 'These antisemitic laws stripped Jews of German citizenship and banned marriage or sexual relations between Jews and non-Jewish Germans. They codified racial discrimination into law and escalated Nazi persecution.'
      },
      {
        term: 'Anschluss (March 1938)',
        definition: 'The annexation of Austria into Nazi Germany through intimidation, internal Nazi agitation, and threat of invasion. It violated the Treaty of Versailles but again met no military resistance from Britain or France.'
      },
      {
        term: 'Munich Conference (September 1938)',
        definition: 'A meeting among Hitler, Mussolini, Chamberlain, and Daladier that allowed Germany to annex the Sudetenland from Czechoslovakia in exchange for promises of no further expansion. Czechoslovakia was excluded, and Hitler broke the agreement within months.'
      },
      {
        term: 'Appeasement',
        definition: 'The policy of making concessions to aggressive dictators, especially Hitler, to avoid war. Supporters argued it bought time and reflected public war-weariness after WWI, but critics contend it encouraged further aggression.'
      },
      {
        term: 'Nazi-Soviet Non-Aggression Pact (August 1939)',
        definition: 'An agreement in which Germany and the Soviet Union pledged not to attack one another, while secretly dividing Eastern Europe into spheres of influence. It allowed Hitler to invade Poland without fear of immediate Soviet resistance.'
      },
      {
        term: 'Axis Powers',
        definition: 'The alliance of Nazi Germany, Fascist Italy, and Imperial Japan, later joined by states such as Hungary, Romania, and Bulgaria. They were united by expansionism, hostility to the existing international order, and authoritarian rule.'
      },
      {
        term: 'Allied Powers',
        definition: 'The coalition that opposed the Axis, centered on Great Britain, the Soviet Union, the United States, and Free France. The alliance was built on a common enemy rather than shared ideology, which later contributed to Cold War tensions.'
      }
    ]
  },
  {
    id: 2,
    title: 'Asian Theater',
    terms: [
      {
        term: 'Rape of Nanjing (December 1937 – January 1938)',
        definition: 'After capturing the Chinese capital of Nanjing, Japanese troops carried out mass murder, rape, and abuse against civilians and prisoners of war. The atrocity demonstrated the brutality of Japan’s war in China and remains a major issue in East Asian historical memory.'
      },
      {
        term: 'Pearl Harbor (December 7, 1941)',
        definition: 'Japan’s surprise attack on the U.S. naval base at Pearl Harbor aimed to cripple the Pacific Fleet and secure time for Japanese expansion. Instead, it unified American opinion and brought the United States fully into WWII.'
      },
      {
        term: 'Island Hopping',
        definition: 'The American strategy of capturing strategically important islands while bypassing heavily fortified ones in the Pacific. The goal was to secure air and naval bases and steadily move closer to Japan while conserving resources.'
      },
      {
        term: 'Firebombing of Tokyo (March 1945)',
        definition: 'Operation Meetinghouse used incendiary bombs against Tokyo’s largely wooden urban districts, killing about 100,000 civilians in one night. It was the deadliest air raid in history and reflected strategic bombing aimed at morale and industry.'
      },
      {
        term: 'Hiroshima and Nagasaki (August 6 and 9, 1945)',
        definition: 'The United States dropped atomic bombs on Hiroshima and Nagasaki, causing massive immediate and long-term civilian death. The bombings remain controversial because of the debate over whether they were militarily necessary or disproportionate.'
      },
      {
        term: 'V-J Day (August 15 / September 2, 1945)',
        definition: 'Victory over Japan Day marks the end of WWII in the Pacific. August 15 was the public surrender announcement by Emperor Hirohito, while September 2 was the formal surrender ceremony aboard the USS Missouri.'
      }
    ]
  },
  {
    id: 3,
    title: 'European Theater',
    terms: [
      {
        term: 'Blitzkrieg',
        definition: 'A lightning war strategy using fast-moving armor, motorized infantry, and close air support to achieve rapid breakthroughs and encirclements. It was highly effective early in the war but less successful in the Soviet Union’s vast terrain.'
      },
      {
        term: 'Vichy France (1940–1944)',
        definition: 'The collaborationist French regime led by Marshal Philippe Pétain after France’s defeat in 1940. It cooperated with Nazi Germany, including helping deport Jews, and remains one of the most contested topics in French memory.'
      },
      {
        term: 'Winston Churchill (1874–1965)',
        definition: 'British prime minister from 1940 to 1945, Churchill became the symbolic voice of resistance to Nazi Germany. His speeches strengthened morale, and he helped maintain the wartime alliance with Roosevelt and Stalin.'
      },
      {
        term: 'Battle of Britain and the Blitz (1940–1941)',
        definition: 'The Battle of Britain was Germany’s failed effort to destroy the RAF and gain air superiority for an invasion of Britain. The Blitz followed as a bombing campaign against British cities but failed to break morale or force surrender.'
      },
      {
        term: 'German Invasion of the USSR (Operation Barbarossa, June 1941)',
        definition: 'The largest military operation in history, involving over 3 million Axis troops attacking the Soviet Union. It opened the Eastern Front, which became the war’s deadliest and most decisive theater.'
      },
      {
        term: 'The Grand Alliance',
        definition: 'The wartime coalition of the United States, Great Britain, and the Soviet Union. Although united against the Axis, the alliance contained deep tensions over strategy and postwar Europe that foreshadowed the Cold War.'
      },
      {
        term: 'The Holocaust',
        definition: 'The systematic genocide of approximately six million European Jews by Nazi Germany and its collaborators, alongside the persecution of many other targeted groups. It evolved from exclusion and ghettoization to mass shootings and extermination camps.'
      },
      {
        term: 'Final Solution (Endlosung)',
        definition: 'The Nazi plan for the systematic extermination of European Jews, coordinated at the Wannsee Conference in 1942. The term was a bureaucratic euphemism for genocide carried out through extermination camps and mass murder.'
      },
      {
        term: 'Firebombing of Dresden (February 1945)',
        definition: 'A controversial Allied bombing campaign that created a firestorm in Dresden and killed roughly 25,000 people. Historians continue to debate its military necessity and the scale of civilian destruction.'
      },
      {
        term: 'D-Day (June 6, 1944)',
        definition: 'The Allied invasion of Normandy opened the long-awaited Western Front in Europe. It secured a foothold in France and began the liberation of Western Europe from Nazi control.'
      },
      {
        term: 'V-E Day (May 8, 1945)',
        definition: 'Victory in Europe Day marked Nazi Germany’s unconditional surrender. It ended the war in Europe, although fighting in the Pacific continued until Japan surrendered later that year.'
      }
    ]
  },
  {
    id: 4,
    title: 'Post-WWII Order',
    terms: [
      {
        term: 'Yalta Conference (February 1945)',
        definition: 'Roosevelt, Churchill, and Stalin met to discuss the final phase of the war and the postwar settlement. Agreements addressed occupied Germany, Eastern Europe, Soviet entry into the Pacific war, and creation of the United Nations.'
      },
      {
        term: 'Division of Germany',
        definition: 'After WWII, Germany and Berlin were divided into occupation zones run by the United States, Britain, France, and the Soviet Union. By 1949, this split hardened into West Germany and East Germany, symbolizing Cold War division.'
      },
      {
        term: 'Nuremberg and Tokyo Trials',
        definition: 'Postwar tribunals that prosecuted Axis leaders for war crimes, crimes against peace, and crimes against humanity. They established that individuals, including state leaders, could be held personally accountable under international law.'
      },
      {
        term: 'UN Universal Declaration of Human Rights (1948)',
        definition: 'A landmark United Nations document proclaiming universal human rights such as life, liberty, education, and freedom from torture. It was a direct response to the atrocities of WWII and the Holocaust.'
      },
      {
        term: 'NATO and Warsaw Pact',
        definition: 'The rival military alliances of the Cold War: NATO represented the Western bloc and the Warsaw Pact represented the Soviet-led Eastern bloc. Together they embodied Europe’s bipolar military division.'
      }
    ]
  }
];

const quizQuestions = [
  {
    id: 1,
    question: 'The Mukden Incident of 1931 is historically significant primarily because it',
    hint: 'Focus on what Japan did in Manchuria and how the League of Nations responded.',
    options: {
      A: 'led to the immediate outbreak of World War II in Asia',
      B: 'demonstrated the League of Nations\' inability to enforce collective security',
      C: 'resulted in a formal alliance between Japan and Nazi Germany',
      D: 'provoked the United States into imposing an oil embargo on Japan'
    },
    answer: 'B',
    explanation: 'Japan’s staged attack and the League’s ineffective response exposed the weakness of collective security and encouraged future aggressors.'
  },
  {
    id: 2,
    question: 'Which of the following best describes the concept of Lebensraum in Nazi ideology?',
    hint: 'This idea was about racial expansion eastward, not just revising Versailles.',
    options: {
      A: 'The belief that Germany needed to reclaim territories lost in the Treaty of Versailles',
      B: 'The doctrine that Aryan racial superiority required the conquest of eastern territories for settlement and resources',
      C: 'A diplomatic strategy for negotiating colonial possessions in Africa',
      D: 'An economic policy focused on achieving industrial self-sufficiency within existing German borders'
    },
    answer: 'B',
    explanation: 'Lebensraum was a racially driven vision of expansion into Eastern Europe for land, food, and resources, not just a revision of Versailles borders.'
  },
  {
    id: 3,
    question: 'The significance of the Remilitarization of the Rhineland (1936) was that it',
    hint: 'Think about what Britain and France did not do after Hitler moved troops in.',
    options: {
      A: 'triggered an immediate military response from France and Britain',
      B: 'violated the Treaty of Versailles and revealed Western democracies\' unwillingness to enforce it by force',
      C: 'was the first step in Hitler\'s plan to unite all German-speaking peoples',
      D: 'was secretly supported by the Soviet Union as part of the Nazi-Soviet Pact'
    },
    answer: 'B',
    explanation: 'Britain and France chose not to intervene militarily, which convinced Hitler that he could keep taking risks without facing forceful resistance.'
  },
  {
    id: 4,
    question: 'The Nuremberg Laws (1935) are best understood as',
    hint: 'These were prewar Nazi laws targeting Jews inside Germany.',
    options: {
      A: 'international laws created at the postwar Nuremberg Trials',
      B: 'economic regulations designed to exclude Jews from German industry',
      C: 'legislation that codified racial discrimination and stripped Jews of citizenship rights',
      D: 'wartime emergency decrees authorizing the deportation of Jews to camps'
    },
    answer: 'C',
    explanation: 'These laws legally defined Jewish status and removed citizenship rights, turning antisemitic ideology into official state policy before the war.'
  },
  {
    id: 5,
    question: 'A historian arguing that the Munich Conference (1938) represented the failure of appeasement would most likely cite which of the following as evidence?',
    hint: 'Consider who was excluded and what Hitler did soon afterward.',
    options: {
      A: 'Hitler honored the agreement by not seeking further territorial expansion',
      B: 'Czechoslovakia was not represented at the negotiations and Hitler violated the agreement within six months',
      C: 'The agreement successfully prevented the outbreak of war for over a decade',
      D: 'Britain and France used the time gained to build military superiority over Germany'
    },
    answer: 'B',
    explanation: 'Munich sacrificed Czechoslovakia without its participation, and Hitler soon occupied the rest of the country, showing appeasement had failed.'
  },
  {
    id: 6,
    question: 'The Nazi-Soviet Non-Aggression Pact (1939) was strategically important primarily because it',
    hint: 'The pact mattered most for Hitler’s invasion plans in Poland.',
    options: {
      A: 'created a lasting alliance between Germany and the Soviet Union based on shared ideology',
      B: 'allowed Germany to invade Poland without the risk of a two-front war',
      C: 'guaranteed Soviet neutrality throughout the entire duration of World War II',
      D: 'was the first formal diplomatic agreement between a fascist and communist state'
    },
    answer: 'B',
    explanation: 'The pact removed the immediate threat of Soviet intervention and let Hitler move west and east with greater confidence.'
  },
  {
    id: 7,
    question: 'The Rape of Nanjing (1937–1938) is significant in the broader context of WWII because it',
    hint: 'This event is remembered for both extreme violence and its lasting memory in East Asia.',
    options: {
      A: 'prompted the United States to immediately declare war on Japan',
      B: 'demonstrated the extreme brutality of Japan\'s war in China and remains contested in East Asian historical memory',
      C: 'was the first instance of genocide in the twentieth century',
      D: 'led directly to the formation of the Allied Powers'
    },
    answer: 'B',
    explanation: 'The massacre became a lasting symbol of the violence of the Sino-Japanese War and still shapes regional historical and political tensions.'
  },
  {
    id: 8,
    question: 'The U.S. strategy of island hopping in the Pacific was designed to',
    hint: 'The United States did not try to take every island.',
    options: {
      A: 'invade every Japanese-held island to ensure no enemy forces remained behind Allied lines',
      B: 'capture strategically important islands for use as air and naval bases while bypassing heavily fortified positions',
      C: 'avoid direct combat with Japanese forces by relying solely on naval blockades',
      D: 'focus exclusively on liberating European colonial territories in Southeast Asia'
    },
    answer: 'B',
    explanation: 'Island hopping targeted key positions and skipped others to conserve men and material while advancing toward Japan.'
  },
  {
    id: 9,
    question: 'Which of the following best explains why the atomic bombings of Hiroshima and Nagasaki remain historically controversial?',
    hint: 'The debate is about military necessity versus civilian destruction.',
    options: {
      A: 'Historians agree the bombings were unnecessary since Japan had already formally surrendered',
      B: 'The debate centers on whether the bombings were militarily justified or constituted disproportionate force against civilians',
      C: 'The bombings had no significant impact on Japan\'s decision to surrender',
      D: 'The controversy stems from the fact that only one of the two bombings was authorized by President Truman'
    },
    answer: 'B',
    explanation: 'The central issue is whether the bombings shortened the war or represented unnecessary civilian destruction given Japan’s weakening position.'
  },
  {
    id: 10,
    question: 'Blitzkrieg as a military strategy was most effective when',
    hint: 'Speed and concentrated force are the key ideas here.',
    options: {
      A: 'used in prolonged wars of attrition against well-supplied defenders',
      B: 'deployed over vast distances against an enemy willing to trade space for time',
      C: 'concentrated armor and air power could achieve rapid breakthroughs before the enemy organized a coordinated defense',
      D: 'supported by overwhelming naval superiority'
    },
    answer: 'C',
    explanation: 'Blitzkrieg depended on speed, surprise, and concentrated force to collapse enemy defenses before they could fully respond.'
  },
  {
    id: 11,
    question: 'Vichy France is historically significant because it demonstrates that',
    hint: 'This question turns on collaboration, not resistance.',
    options: {
      A: 'all French citizens actively resisted German occupation',
      B: 'collaboration with an occupying power can involve active participation in its crimes, including the deportation of Jews',
      C: 'democratic governments cannot be replaced by authoritarian regimes',
      D: 'France maintained full sovereignty throughout the war'
    },
    answer: 'B',
    explanation: 'The Vichy regime did not merely submit to German control; it cooperated in Nazi policies, including anti-Jewish persecution and deportations.'
  },
  {
    id: 12,
    question: 'Operation Barbarossa (1941) transformed the nature of World War II primarily because it',
    hint: 'Think about what new front opened and how large it became.',
    options: {
      A: 'opened the Eastern Front, which would become the war\'s largest and deadliest theater',
      B: 'led to an immediate Soviet surrender and German control of all Eastern Europe',
      C: 'caused the United States to enter the war against Germany',
      D: 'was the first time Germany had violated an international agreement'
    },
    answer: 'A',
    explanation: 'The invasion created the Eastern Front, where the vast majority of German military losses would occur and where the European war was ultimately decided.'
  },
  {
    id: 13,
    question: 'The term Final Solution (Endlosung) is historically significant because it',
    hint: 'This was Nazi bureaucratic language for genocide.',
    options: {
      A: 'referred to the Nazi plan for Jewish emigration to Palestine',
      B: 'represented the bureaucratic planning of systematic genocide, formalized at the Wannsee Conference',
      C: 'was a postwar term invented by Allied prosecutors at Nuremberg',
      D: 'described the final military strategy used to defeat the Soviet Union'
    },
    answer: 'B',
    explanation: 'The phrase masked the Nazi regime’s organized plan to transport and murder Jews across occupied Europe in extermination camps.'
  },
  {
    id: 14,
    question: 'D-Day (June 6, 1944) was a turning point in the European war primarily because it',
    hint: 'This event matters because it changed the geography of the war in Europe.',
    options: {
      A: 'was the first time Allied forces engaged German troops in combat',
      B: 'opened a second front in Western Europe, fulfilling a commitment to the Soviet Union and beginning the liberation of France',
      C: 'resulted in Germany\'s immediate unconditional surrender',
      D: 'demonstrated the superiority of airborne operations over amphibious assaults'
    },
    answer: 'B',
    explanation: 'Normandy opened the long-promised Western Front, relieved pressure on the Soviet Union, and launched the liberation of Western Europe.'
  },
  {
    id: 15,
    question: 'The Yalta Conference (1945) is often cited as a key moment in the origins of the Cold War because',
    hint: 'Focus on Eastern Europe and the promise of free elections.',
    options: {
      A: 'Roosevelt and Churchill formally declared war on the Soviet Union',
      B: 'agreements on free elections in Eastern Europe were made but not ultimately honored by the Soviet Union',
      C: 'the United States refused to participate in the creation of the United Nations',
      D: 'Stalin agreed to withdraw all Soviet forces from Eastern Europe immediately after the war'
    },
    answer: 'B',
    explanation: 'Yalta exposed underlying tensions over Eastern Europe, especially when Soviet actions later contradicted promises of free elections.'
  },
  {
    id: 16,
    question: 'The Nuremberg and Tokyo Trials established which of the following precedents in international law?',
    hint: 'The lasting precedent was about accountability for leaders.',
    options: {
      A: 'Only soldiers, not political leaders, could be prosecuted for actions during wartime',
      B: 'Individuals, including heads of state, could be held personally accountable for war crimes and crimes against humanity',
      C: 'Nations that lost wars were required to pay unlimited reparations to the victors',
      D: 'Following superior orders was a complete defense against charges of war crimes'
    },
    answer: 'B',
    explanation: 'These tribunals established the principle that leaders and officials can be personally prosecuted under international law and cannot escape responsibility by citing orders from above.'
  },
  {
    id: 17,
    question: 'The UN Universal Declaration of Human Rights (1948) was most directly a response to',
    hint: 'It followed the moral shock of wartime atrocities.',
    options: {
      A: 'the economic devastation of the Great Depression',
      B: 'the atrocities of World War II and the Holocaust',
      C: 'the territorial disputes created by decolonization',
      D: 'the nuclear arms race between the United States and Soviet Union'
    },
    answer: 'B',
    explanation: 'The declaration was drafted in response to wartime atrocities and sought to define universal standards to protect human dignity.'
  },
  {
    id: 18,
    question: 'NATO and the Warsaw Pact are best understood as',
    hint: 'These alliances belong to Cold War military competition, not economics.',
    options: {
      A: 'economic organizations designed to promote trade between member states',
      B: 'competing military alliances that embodied the Cold War\'s bipolar division of Europe',
      C: 'temporary wartime coalitions formed during World War II',
      D: 'international organizations created by the United Nations to maintain global peace'
    },
    answer: 'B',
    explanation: 'These alliances formalized the military and ideological division of Europe between the Western and Soviet-led blocs.'
  },
  {
    id: 19,
    question: 'The Battle of Britain (1940) is historically significant because it',
    hint: 'The answer is about air power and proving Germany could be resisted.',
    options: {
      A: 'resulted in a successful German invasion of England',
      B: 'was the first major campaign fought entirely in the air and demonstrated that Germany could be resisted',
      C: 'led directly to the United States\' entry into the war',
      D: 'ended with a negotiated peace between Britain and Germany'
    },
    answer: 'B',
    explanation: 'The RAF’s defense stopped German plans for invasion and showed that Nazi Germany was not militarily unstoppable.'
  },
  {
    id: 20,
    question: 'A key difference between the firebombing of Tokyo and the atomic bombings of Hiroshima and Nagasaki was that',
    hint: 'Compare the death toll from one Tokyo raid to each individual atomic bombing.',
    options: {
      A: 'the firebombing of Tokyo actually killed more people in a single raid than either individual atomic bombing',
      B: 'the atomic bombings targeted military installations while the firebombing targeted civilians',
      C: 'the firebombing of Tokyo was condemned by the Allies as a war crime',
      D: 'the atomic bombings had no impact on Japan\'s decision to surrender'
    },
    answer: 'A',
    explanation: 'Tokyo’s March 1945 firebombing caused more deaths in a single raid than the immediate death toll of either Hiroshima or Nagasaki, despite the atomic bombings’ unique destructive power.'
  },
  {
    id: 21,
    question: 'The division of Germany after WWII became significant in Cold War history because it',
    hint: 'The split became a symbol of East versus West in Europe.',
    options: {
      A: 'was a temporary arrangement that lasted only until 1950',
      B: 'became the most visible symbol of the Iron Curtain and the ideological division of Europe',
      C: 'was enthusiastically supported by all four occupying powers as a permanent solution',
      D: 'prevented any economic recovery in either German state'
    },
    answer: 'B',
    explanation: 'The split between East and West Germany, along with divided Berlin, became the clearest geographic symbol of Cold War Europe.'
  }
];

let currentQuestionIndex = 0;
let submittedAnswers = [];
let answeredCount = 0;
let correctCount = 0;
let hintVisibility = new Set();

function renderConcepts() {
  const container = document.getElementById('terms-stack');
  container.innerHTML = termSections.map(section => `
    <div class="concept-card" data-concept>
      <button class="concept-header" aria-expanded="false" aria-controls="concept-${section.id}">
        <div class="concept-tag">Section ${section.id}</div>
        <h3>${section.title}</h3>
        <svg class="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="concept-body" id="concept-${section.id}" hidden>
        <div class="term-list">
          ${section.terms.map(item => `
            <article class="term-entry">
              <h4>${item.term}</h4>
              <p>${item.definition}</p>
            </article>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function updateCounts() {
  const totalTerms = termSections.reduce((sum, section) => sum + section.terms.length, 0);
  document.getElementById('concept-count').textContent = totalTerms;
  document.getElementById('problem-count').textContent = quizQuestions.length;
  document.getElementById('progress-count').textContent = answeredCount;
}

function renderQuiz() {
  const question = quizQuestions[currentQuestionIndex];
  const submission = submittedAnswers[currentQuestionIndex];
  const progressWidth = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  const quizBody = document.getElementById('quiz-body');

  document.getElementById('pbar').style.width = `${progressWidth.toFixed(1)}%`;
  document.getElementById('q-label').textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  document.getElementById('score-badge').textContent = `${correctCount} correct / ${answeredCount} answered`;

  quizBody.innerHTML = `
    <article class="quiz-card">
      <p class="quiz-question-text">${question.question}</p>
      <div class="quiz-option-list">
        ${Object.entries(question.options).map(([label, text]) => {
          const isSelected = submission?.selected === label;
          const isCorrect = submission && label === question.answer;
          const isIncorrectSelection = submission && isSelected && label !== question.answer;
          const classNames = [
            'quiz-option',
            isSelected ? 'is-selected' : '',
            isCorrect ? 'is-correct' : '',
            isIncorrectSelection ? 'is-incorrect' : ''
          ].filter(Boolean).join(' ');

          return `
            <button class="${classNames}" data-option="${label}" ${submission ? 'disabled' : ''}>
              <span class="quiz-option-key">${label}</span>
              <span class="quiz-option-text">${text}</span>
            </button>
          `;
        }).join('')}
      </div>
      <div class="hint-row">
        <button class="hint-btn" id="hint-btn">${hintVisibility.has(question.id) ? 'Hide clue' : 'Show clue'}</button>
        <span class="hint-text${hintVisibility.has(question.id) ? ' is-visible' : ''}" id="hint-text">${question.hint}</span>
      </div>
      ${submission ? `
        <div class="feedback ${submission.isCorrect ? 'correct' : 'incorrect'}">
          <strong>${submission.isCorrect ? 'Correct.' : 'Incorrect.'}</strong>
          <span class="feedback-answer">${question.answer}) ${question.options[question.answer]}</span>
          <p>${question.explanation}</p>
        </div>
      ` : ''}
      <div class="nav-row">
        <button id="prev-btn" ${currentQuestionIndex === 0 ? 'disabled' : ''}>Previous</button>
        <button id="next-btn">${currentQuestionIndex === quizQuestions.length - 1 ? 'See Results' : 'Next'}</button>
      </div>
    </article>
  `;

  quizBody.querySelectorAll('[data-option]').forEach((button) => {
    button.addEventListener('click', () => submitAnswer(button.dataset.option));
  });

  quizBody.querySelector('#hint-btn').addEventListener('click', toggleHint);
  quizBody.querySelector('#prev-btn').addEventListener('click', () => goToQuestion(currentQuestionIndex - 1));
  quizBody.querySelector('#next-btn').addEventListener('click', () => {
    if (currentQuestionIndex === quizQuestions.length - 1) {
      showSummary();
      return;
    }
    goToQuestion(currentQuestionIndex + 1);
  });
}

function toggleHint() {
  const questionId = quizQuestions[currentQuestionIndex].id;
  if (hintVisibility.has(questionId)) {
    hintVisibility.delete(questionId);
  } else {
    hintVisibility.add(questionId);
  }
  renderQuiz();
}

function submitAnswer(selected) {
  if (submittedAnswers[currentQuestionIndex]) {
    return;
  }

  const question = quizQuestions[currentQuestionIndex];
  const isCorrect = selected === question.answer;
  submittedAnswers[currentQuestionIndex] = { selected, isCorrect };
  answeredCount += 1;
  if (isCorrect) {
    correctCount += 1;
  }
  animateAnsweredCount();
  renderQuiz();
}

function goToQuestion(index) {
  if (index < 0 || index >= quizQuestions.length) {
    return;
  }
  currentQuestionIndex = index;
  renderQuiz();
}

function animateAnsweredCount() {
  const counter = document.getElementById('progress-count');
  updateCounts();
  counter.style.transform = 'scale(1.3)';
  setTimeout(() => {
    counter.style.transform = 'scale(1)';
  }, 200);
}

function showSummary() {
  const quizBody = document.getElementById('quiz-body');
  const percentage = Math.round((correctCount / quizQuestions.length) * 100);

  document.getElementById('pbar').style.width = '100%';
  document.getElementById('q-label').textContent = 'Quiz complete';
  document.getElementById('score-badge').textContent = `${correctCount} / ${quizQuestions.length} correct`;

  quizBody.innerHTML = `
    <div class="summary-card">
      <p class="summary-kicker">Your results</p>
      <div class="summary-score">${percentage}%</div>
      <p class="summary-label">${correctCount} of ${quizQuestions.length} correct</p>
      <div class="summary-grid">
        <div class="summary-cell">
          <div class="summary-cell-num c-green">${correctCount}</div>
          <div class="summary-cell-lbl">Correct</div>
        </div>
        <div class="summary-cell">
          <div class="summary-cell-num c-red">${answeredCount - correctCount}</div>
          <div class="summary-cell-lbl">Incorrect</div>
        </div>
        <div class="summary-cell">
          <div class="summary-cell-num">${quizQuestions.length - answeredCount}</div>
          <div class="summary-cell-lbl">Skipped</div>
        </div>
      </div>
      <div class="summary-review-list">
        ${quizQuestions.map((question, index) => {
          const submission = submittedAnswers[index];
          const status = submission ? (submission.isCorrect ? 'Correct' : 'Incorrect') : 'Skipped';
          const statusClass = submission ? (submission.isCorrect ? 'is-correct' : 'is-incorrect') : 'is-skipped';
          return `
            <div class="summary-review-item ${statusClass}">
              <div>
                <span class="summary-review-number">${index + 1}.</span>
                <span>${question.question}</span>
              </div>
              <span class="summary-review-status">${status}</span>
            </div>
          `;
        }).join('')}
      </div>
      <button id="restart-btn" class="restart-btn">Retry quiz</button>
    </div>
  `;

  quizBody.querySelector('#restart-btn').addEventListener('click', restartQuiz);
  updateCounts();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  submittedAnswers = [];
  answeredCount = 0;
  correctCount = 0;
  hintVisibility = new Set();
  updateCounts();
  renderQuiz();
}

document.addEventListener('DOMContentLoaded', () => {
  renderConcepts();
  updateCounts();

  document.querySelectorAll('[data-concept]').forEach((card) => {
    const header = card.querySelector('.concept-header');
    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('is-open');
      const content = document.getElementById(header.getAttribute('aria-controls'));
      card.classList.toggle('is-open', !isOpen);
      header.setAttribute('aria-expanded', String(!isOpen));
      content.hidden = isOpen;
    });
  });

  renderQuiz();

  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const progressEl = document.getElementById('progress-count');
  progressEl.style.transition = 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)';
  progressEl.style.display = 'inline-block';
});

(function(){
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  if (t) {
    updateIcon();
    t.addEventListener('click', () => {
      d = d === 'dark' ? 'light' : 'dark';
      r.setAttribute('data-theme', d);
      t.setAttribute('aria-label', 'Switch to ' + (d === 'dark' ? 'light' : 'dark') + ' mode');
      updateIcon();
    });
  }
  function updateIcon() {
    t.innerHTML = d === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();
