// Templates for different listicle types
const templates = {
    lessons: {
        title: "🎯 {count} Game-Changing Lessons I Learned in {topic}",
        intro: "After years in {topic}, here are the most valuable insights that transformed my approach:",
        points: [
            "Always be learning 📚",
            "Embrace failure as feedback 🔄",
            "Build meaningful connections 🤝",
            "Focus on impact, not perfection 🎯",
            "Stay curious and adaptable 🧠",
            "Lead with empathy 💖",
            "Take calculated risks 🎲",
            "Celebrate small wins 🎉",
            "Share knowledge freely 📢",
            "Stay authentic 💫"
        ]
    },
    mistakes: {
        title: "⚠️ {count} Common Mistakes to Avoid in {topic}",
        intro: "After seeing countless pitfalls in {topic}, here's what you should watch out for:",
        points: [
            "Rushing without planning 🏃‍♂️",
            "Ignoring feedback loops ↩️",
            "Avoiding difficult conversations 🤐",
            "Neglecting self-development 📚",
            "Following the crowd blindly 🐑",
            "Underestimating complexity 🔄",
            "Forgetting to document 📝",
            "Working in silos 🏢",
            "Resisting change 🔄",
            "Overlooking basics 📌"
        ]
    },
    signs: {
        title: "🎯 {count} Signs You're Ready for Your Next Big Move in {topic}",
        intro: "Wondering if it's time to level up in {topic}? Here are the tell-tale signs:",
        points: [
            "You're consistently exceeding goals 🎯",
            "You're teaching others naturally 👨‍🏫",
            "You see bigger patterns emerging 🔄",
            "Your current role feels comfortable 😌",
            "You're drawn to bigger challenges 💪",
            "People seek your advice 🤝",
            "You have a clear vision 👁️",
            "You're building strong networks 🕸️",
            "You're thinking strategically 🧠",
            "You're ready for more impact 🚀"
        ]
    },
    hacks: {
        title: "⚡ {count} Game-Changing Hacks to Revolutionize Your {topic}",
        intro: "Transform your approach to {topic} with these powerful, lesser-known strategies:",
        points: [
            "Automate repetitive tasks 🤖",
            "Use the 2-minute rule ⏱️",
            "Implement time-blocking 📅",
            "Create templates for everything 📋",
            "Batch similar tasks together 📦",
            "Use the Eisenhower matrix 🎯",
            "Practice systematic delegation 👥",
            "Set up trigger-based workflows 🔄",
            "Leverage compound effects 📈",
            "Master keyboard shortcuts ⌨️"
        ]
    },
    trends: {
        title: "🔮 {count} Emerging Trends Reshaping {topic} in 2024",
        intro: "Stay ahead of the curve in {topic} with these transformative trends:",
        points: [
            "AI-driven innovation 🤖",
            "Sustainable practices 🌱",
            "Remote-first approaches 🌐",
            "Personalization at scale 🎯",
            "Data-driven decision making 📊",
            "Immersive experiences 🎮",
            "Blockchain integration ⛓️",
            "Human-centric design 🧑‍🎨",
            "Edge computing adoption 💻",
            "Hybrid solutions 🔄"
        ]
    },
    myths: {
        title: "🔍 {count} Common Myths About {topic} Debunked",
        intro: "Let's separate fact from fiction in {topic} with evidence-based insights:",
        points: [
            "It's too complex to start 🚫",
            "Only experts can succeed ❌",
            "You need expensive tools 💰",
            "It takes years to master ⏰",
            "There's only one right way ↔️",
            "Technology solves everything 🤖",
            "More features equal better 📊",
            "Success happens overnight 🌙",
            "Bigger is always better 📈",
            "You can't teach creativity 🎨"
        ]
    },
    habits: {
        title: "🌟 {count} Daily Habits of Successful {topic} Professionals",
        intro: "Transform your {topic} journey with these powerful daily practices:",
        points: [
            "Start with intention setting 🎯",
            "Practice deep work blocks 🧠",
            "Review metrics daily 📊",
            "Network strategically 🤝",
            "Read industry updates 📚",
            "Exercise decision muscles 💪",
            "Maintain a learning journal 📝",
            "Seek constructive feedback 🔄",
            "Practice mindful breaks 🧘‍♂️",
            "End with reflection time 🌅"
        ]
    },
    tools: {
        title: "🛠️ {count} Essential Tools Every {topic} Professional Needs",
        intro: "Level up your {topic} game with these powerful tools and resources:",
        points: [
            "Project management suite 📊",
            "Automation platform ⚡",
            "Analytics dashboard 📈",
            "Collaboration workspace 👥",
            "Version control system 🔄",
            "Knowledge base platform 📚",
            "Communication hub 💬",
            "Task tracking system ✅",
            "Resource planning tool 📅",
            "Performance monitor 📊"
        ]
    }
};

// Buzzwords by intensity level
const buzzwords = [
    ["optimize", "innovate", "leverage"],
    ["synergy", "paradigm shift", "thought leadership"],
    ["disruptive innovation", "growth mindset", "value proposition"],
    ["quantum leap", "blockchain revolution", "digital transformation"],
    ["hyper-scalable", "meta-cognitive", "exponential mindset"]
];

// Emojis by enthusiasm level
const emojis = [
    ["📈", "💡", "✨"],
    ["🚀", "💪", "🎯", "✅"],
    ["🔥", "⭐", "🌟", "💫", "🎉"],
    ["💯", "🙌", "🎊", "🌈", "✨"],
    ["🚀", "💫", "🔥", "⚡", "💥", "✨", "🌟"]
];

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '✨';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.setProperty('--tx', (Math.random() * 100 - 50) + 'px');
    sparkle.style.setProperty('--ty', (Math.random() * -100 - 50) + 'px');
    document.querySelector('.preview').appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
}

function addSparkles() {
    const preview = document.querySelector('.preview');
    const rect = preview.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createSparkle(
                Math.random() * rect.width,
                Math.random() * rect.height
            );
        }, i * 200);
    }
}

function validateForm() {
    const listType = document.getElementById('listType');
    const topic = document.getElementById('topic');
    let isValid = true;

    // Reset previous error states
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

    if (!listType.value) {
        listType.classList.add('error');
        listType.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    if (!topic.value.trim()) {
        topic.classList.add('error');
        topic.nextElementSibling.style.display = 'block';
        isValid = false;
    }

    return isValid;
}

function generateListicle() {
    if (!validateForm()) {
        return;
    }

    const type = document.getElementById('listType').value;
    const count = parseInt(document.getElementById('itemCount').value);
    const topic = document.getElementById('topic').value;
    const buzzwordLevel = parseInt(document.getElementById('buzzwordLevel').value);
    const emojiLevel = parseInt(document.getElementById('emojiLevel').value);
    const humbleLevel = parseInt(document.getElementById('humbleLevel').value);

    const template = templates[type];
    if (!template) return;

    let points = template.points.slice(0, count);

    // Add buzzwords based on intensity
    const selectedBuzzwords = buzzwords[buzzwordLevel - 1];
    points = points.map(point => {
        const buzzword = selectedBuzzwords[Math.floor(Math.random() * selectedBuzzwords.length)];
        return point.replace(/\b(in|for|to)\b/, `$1 ${buzzword}`);
    });

    // Add emojis based on enthusiasm
    const selectedEmojis = emojis[emojiLevel - 1];
    points = points.map(point => {
        const emoji = selectedEmojis[Math.floor(Math.random() * selectedEmojis.length)];
        return `${point} ${emoji}`;
    });

    // Generate the post
    let post = template.title.replace('{count}', count).replace('{topic}', topic) + '\n\n';
    post += template.intro.replace('{topic}', topic) + '\n\n';
    points.forEach((point, index) => {
        post += `${index + 1}. ${point}\n`;
    });

    // Add humble brag based on level
    if (humbleLevel > 2) {
        post += `\nP.S. Just sharing what worked for me while building a ${topic} team from 0 to 100+ people! 🚀`;
    }

    post += '\n\nAgree? 🤔\n\n';
    post += `#${topic.replace(/\s+/g, '')} #CareerGrowth #Innovation`;

    document.getElementById('previewContent').innerText = post;
    addSparkles();
    updateCopyButton(true);
}

function updateCopyButton(active) {
    const copyBtn = document.getElementById('copyBtn');
    if (active) {
        copyBtn.classList.add('active');
    } else {
        copyBtn.classList.remove('active');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Generate button click handler
    document.getElementById('generateBtn').addEventListener('click', generateListicle);

    // Copy button functionality
    document.getElementById('copyBtn').addEventListener('click', function() {
        if (!this.classList.contains('active')) return;

        const content = document.getElementById('previewContent').innerText;
        navigator.clipboard.writeText(content).then(() => {
            const originalText = this.innerText;
            this.innerText = 'Copied! ✅';
            setTimeout(() => {
                this.innerText = originalText;
            }, 2000);
        });
    });

    // Range value labels
    const buzzwordLabels = ['Conservative', 'Professional', 'Medium', 'Enhanced', 'Maximum'];
    const emojiLabels = ['Minimal', 'Casual', 'Medium', 'Enthusiastic', 'Gen-Z'];
    const humbleLabels = ['Subtle', 'Modest', 'Balanced', 'Confident', 'LinkedIn Guru'];

    function updateRangeValue(input, labels) {
        const value = input.value;
        input.nextElementSibling.textContent = labels[value - 1];
    }

    // Range input event listeners
    document.getElementById('buzzwordLevel').addEventListener('input', function() {
        updateRangeValue(this, buzzwordLabels);
    });

    document.getElementById('emojiLevel').addEventListener('input', function() {
        updateRangeValue(this, emojiLabels);
    });

    document.getElementById('humbleLevel').addEventListener('input', function() {
        updateRangeValue(this, humbleLabels);
    });

    // Initialize range values
    updateRangeValue(document.getElementById('buzzwordLevel'), buzzwordLabels);
    updateRangeValue(document.getElementById('emojiLevel'), emojiLabels);
    updateRangeValue(document.getElementById('humbleLevel'), humbleLabels);

    // Initialize copy button state
    updateCopyButton(false);
});
