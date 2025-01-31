
let postData = {
    all: [
        { title: "How to Train for Cricket", content: "Here are some valuable tips for training in cricket. Focus on improving your batting, bowling, and fielding techniques to become a well-rounded player.", votes: 10, comments: [], date: "2024-10-10", voteStatus: 0 },
        { title: "Best Cricket Bats of 2024", content: "Check out our review of the top cricket bats for 2024, featuring a detailed comparison of durability, balance, and power for each model.", votes: 5, comments: [], date: "2024-10-11", voteStatus: 0 },
        { title: "Essential Cricket Drills", content: "Develop your skills with these essential drills. They cover everything from improving your batting stance to enhancing your reflexes and agility in the field.", votes: 12, comments: [], date: "2024-10-12", voteStatus: 0 },
        { title: "Top Bowling Techniques", content: "Master these advanced bowling techniques, including spin, swing, and seam. Each technique is broken down with step-by-step guidance for accuracy and control.", votes: 15, comments: [], date: "2024-10-13", voteStatus: 0 },
        { title: "Fitness for Cricketers", content: "Explore a cricketer's fitness routine that focuses on strength, endurance, and flexibility. Perfect for all-round improvement on the field.", votes: 9, comments: [], date: "2024-10-14", voteStatus: 0 },
        { title: "Strategies for Opening Batsmen", content: "Opening batsmen have a critical role. Learn the strategies to set the pace, handle fast bowlers, and build a solid foundation for the team.", votes: 11, comments: [], date: "2024-10-15", voteStatus: 0 },
        { title: "Cricket Fielding Techniques", content: "Improve your fielding skills with these techniques. Learn how to position yourself, anticipate the ball, and react quickly in various field positions.", votes: 7, comments: [], date: "2024-10-16", voteStatus: 0 },
        { title: "Common Injuries in Cricket", content: "Understand the common injuries that cricketers face, such as strains and sprains. Learn preventive measures and recovery tips to stay fit.", votes: 13, comments: [], date: "2024-10-17", voteStatus: 0 },
        { title: "Batting Against Spin", content: "Facing spin bowlers requires a unique approach. This post offers insights into reading the bowler's hand and playing with precision and patience.", votes: 8, comments: [], date: "2024-10-18", voteStatus: 0 },
        { title: "Best Cricket Shoes for 2024", content: "A good pair of cricket shoes can make a difference. Here’s our guide to the best shoes for grip, comfort, and durability on the pitch.", votes: 6, comments: [], date: "2024-10-19", voteStatus: 0 },
        { title: "Mental Preparation for Cricket", content: "Cricket is as much a mental game as a physical one. Learn how to stay calm under pressure and keep a focused mindset throughout the match.", votes: 14, comments: [], date: "2024-10-20", voteStatus: 0 },
        { title: "Analyzing Opponent’s Weaknesses", content: "Learn how to observe and exploit weaknesses in your opponent's game to gain an advantage, from bowlers’ speeds to fielding gaps.", votes: 10, comments: [], date: "2024-10-21", voteStatus: 0 },
        { title: "Famous Cricket Matches in History", content: "A look back at some of the most iconic cricket matches. Each match has been a memorable event that shaped the game and fans’ passion.", votes: 18, comments: [], date: "2024-10-22", voteStatus: 0 },
        { title: "Choosing the Right Cricket Gear", content: "Choosing proper gear can affect your performance. This post discusses bats, pads, gloves, and helmets to help you pick what fits best.", votes: 7, comments: [], date: "2024-10-23", voteStatus: 0 },
        { title: "Best Exercises for Cricketers", content: "Discover the best exercises tailored for cricketers, focusing on improving agility, power, and stamina. Great for building long-term endurance.", votes: 16, comments: [], date: "2024-10-24", voteStatus: 0 }
    ],
    popular: [
        { title: "Top Cricket Players", content: "Discover the best cricket players in the world. This list highlights players with exceptional skill, experience, and contributions to their teams.", votes: 20, comments: [], date: "2024-10-15", voteStatus: 0 },
        { title: "The Most Exciting World Cup Moments", content: "Relive the best World Cup moments, from thrilling finishes to unbelievable comebacks. Each moment is a testament to cricket's unpredictability.", votes: 25, comments: [], date: "2024-10-16", voteStatus: 0 },
        { title: "Best All-Rounders in Cricket", content: "Who are the best all-rounders? We discuss cricketers excelling in both batting and bowling, making them indispensable assets to their teams.", votes: 19, comments: [], date: "2024-10-17", voteStatus: 0 },
        { title: "Cricket's Greatest Captains", content: "Great captains lead with skill and strategy. Discover the captains who have left a legacy and changed the way the game is played.", votes: 30, comments: [], date: "2024-10-18", voteStatus: 0 },
        { title: "Unbreakable Records in Cricket", content: "A look at cricket records that seem impossible to break, from high individual scores to longest partnerships and exceptional bowling stats.", votes: 22, comments: [], date: "2024-10-19", voteStatus: 0 },
        // (Additional popular posts continue in a similar manner)
    ],
    latest: [
        { title: "Cricket Match Analysis", content: "Here’s a detailed breakdown of the recent match, covering top performances, match-changing moments, and strategic decisions by both teams.", votes: 8, comments: [], date: "2024-10-18", voteStatus: 0 },
        { title: "Recent Changes in Cricket Rules", content: "An overview of the latest rule changes in cricket, with explanations on how these changes will affect players and match outcomes.", votes: 6, comments: [], date: "2024-10-19", voteStatus: 0 },
        { title: "Player Fitness Levels for Recent Matches", content: "An analysis of top players' fitness levels in recent games, highlighting the importance of peak physical form in professional cricket.", votes: 9, comments: [], date: "2024-10-20", voteStatus: 0 },
        { title: "Umpiring Decisions in Recent Matches", content: "Discussion on controversial umpiring calls in recent games, with a breakdown of how these decisions impacted the match results.", votes: 5, comments: [], date: "2024-10-21", voteStatus: 0 },
        { title: "Rising Stars in Cricket", content: "An introduction to young, talented players making waves in cricket. Each player has shown immense potential in recent matches.", votes: 10, comments: [], date: "2024-10-22", voteStatus: 0 },
        // (Additional latest posts continue in a similar manner)
    ],
    following: [
        { title: "Followed Topic - Cricket Rules", content: "Understanding cricket rules is essential for every player. Here’s a guide to some of the complex rules that often confuse newcomers.", votes: 6, comments: [], date: "2024-10-20", voteStatus: 0 },
        { title: "Followed Topic - Iconic Cricket Venues", content: "Explore iconic cricket stadiums worldwide. Each venue has a rich history, from hosting memorable matches to architectural uniqueness.", votes: 8, comments: [], date: "2024-10-21", voteStatus: 0 },
        { title: "Followed Topic - Women’s Cricket", content: "Women’s cricket is gaining global popularity. This post covers the latest achievements, matches, and rising stars in women’s cricket.", votes: 12, comments: [], date: "2024-10-22", voteStatus: 0 },
        { title: "Followed Topic - Cricket Tournaments", content: "A look at popular cricket tournaments, including the history, significance, and notable performances that define each event.", votes: 9, comments: [], date: "2024-10-23", voteStatus: 0 },
        { title: "Followed Topic - Cricket Fan Culture", content: "Cricket fans are known for their passion. This post celebrates fan culture worldwide, from chants and songs to unique traditions.", votes: 10, comments: [], date: "2024-10-24", voteStatus: 0 },
        // (Additional followed posts continue in a similar manner)
    ]
};

let currentSection = 'all'; 

function showPosts(section) {
    let postContainer = document.getElementById("postContainer");
    postContainer.innerHTML = ""; 
    const buttons = document.querySelectorAll('.category-tabs button');
    
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(`.category-tabs button[onclick="showPosts('${section}')"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    currentSection = section;

    document.getElementById("postContainer").innerHTML = `
        <div class="section-name" style="font-size:50px;font-weight:bold">${section.charAt(0).toUpperCase() + section.slice(1)}</div>
    `;
    
    postData[section].forEach((post, index) => {
        let postElement = document.createElement("div");
        postElement.classList.add("post-card");

        postElement.innerHTML = `
            <div class="post-votes">
                <button class="upvote" onclick="upvote('${section}', ${index})"><svg id="usvg"><?xml version="1.0" ?><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path d="M9.05,10.05a1,1,0,0,0,1.42,0l4.6-4.6V29a1,1,0,0,0,2,0V5.48l4.57,4.57a1,1,0,0,0,1.41-1.41L16.69,2.27a.9.9,0,0,0-1.27,0L9.05,8.64A1,1,0,0,0,9.05,10.05Z"/></g></svg></svg></button>
                <span>${post.votes}</span>
                <button class="downvote" onclick="downvote('${section}', ${index})"><svg id="dsvg"><?xml version="1.0" ?><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;}</style></defs><title/><g data-name="Layer 2" id="Layer_2"><path d="M16,29a1,1,0,0,1-.71-.29l-9-9a1,1,0,0,1,1.42-1.42L16,26.59l8.29-8.3a1,1,0,0,1,1.42,1.42l-9,9A1,1,0,0,1,16,29Z"/><path d="M16,29a1,1,0,0,1-1-1V4a1,1,0,0,1,2,0V28A1,1,0,0,1,16,29Z"/></g><g id="frame"><rect class="cls-1" height="32" width="32"/></g></svg></svg></button>
            </div>
            <div class="post-content">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
                <button class="comment-btn" onclick="toggleComments('${section}', ${index})"><svg><?xml version="1.0" ?><svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M113,0H15A15,15,0,0,0,0,15V79.57a15,15,0,0,0,15,15H38.28a1,1,0,0,1,1,1V121a7,7,0,0,0,11.95,4.95L82.31,94.87a1,1,0,0,1,.71-.29h30a15,15,0,0,0,15-15V15A15,15,0,0,0,113,0Zm9,79.57a9,9,0,0,1-9,9H83a7,7,0,0,0-4.95,2L47,121.7a1,1,0,0,1-1.71-.71V95.57a7,7,0,0,0-7-7H15a9,9,0,0,1-9-9V15a9,9,0,0,1,9-9h98a9,9,0,0,1,9,9Z"/></svg></svg></button>
                <div class="comments-section" id="comments-${section}-${index}" style="display:none;"></div>
            </div>
        `;

        postContainer.appendChild(postElement);
    });
}

function addComment(section, postIndex) {
    let commentInput = document.getElementById(`comment-input-${section}-${postIndex}`);
    let commentText = commentInput.value;
    if (commentText.trim() !== "") {
        let userName = "User"; 
        let timestamp = new Date().toLocaleString(); 
        let newComment = { user: userName, text: commentText, timestamp: timestamp };

        // Insert comment at the beginning of the comments array
        postData[section][postIndex].comments.unshift(newComment);
        toggleComments(section, postIndex); 
    }
}

function toggleComments(section, postIndex) {
    let commentsSection = document.getElementById(`comments-${section}-${postIndex}`);
    if (commentsSection.style.display === "none") {
        commentsSection.style.display = "block";
    }
    commentsSection.innerHTML = `
        <div class="add-comment">
            <input type="text" placeholder="Add a comment" id="comment-input-${section}-${postIndex}">
            <button onclick="addComment('${section}', ${postIndex})">Post Comment</button>
        </div>
        ${postData[section][postIndex].comments.map(comment => `
            <div class="comment">
                <span class="user-name">${comment.user}</span>
                <span class="text">${comment.text}</span>
                <span class="timestamp">${comment.timestamp}</span>
            </div>
        `).join('')}
    `;
}

function upvote(section, postIndex) {
    let post = postData[section][postIndex];

    if (post.voteStatus === 0) { 
        post.votes += 1;
        post.voteStatus = 1;
    } else if (post.voteStatus === -1) { 
        post.votes += 2;
        post.voteStatus = 1;
    } else { 
        return;
    }

    showPosts(section); 
    document.getElementById("usvg").style.fill="green"
}

function downvote(section, postIndex) {
    let post = postData[section][postIndex];

    if (post.voteStatus === 0) { 
        post.votes -= 1;
        post.voteStatus = -1;
    } else if (post.voteStatus === 1) { 
        post.votes -= 2;
        post.voteStatus = -1;
    } else { 
        return;
    }

    showPosts(section); 
    document.getElementById("dsvg").style.fill="red"
}

function toggleAddPostForm() {
    let popup = document.getElementById("addPostPopup");
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}

function selfPost() {
    let title = document.getElementById("writeTextTitle").value;
    let content = document.getElementById("writeTextContent").value;
    if (title.trim()) {
        postData.all.unshift({ 
            title: title, 
            content: content, 
            votes: 0, 
            comments: [], 
            date: new Date().toISOString(), 
            voteStatus: 0 
        });
        showPosts('all');
        toggleAddPostForm(); 
    }
}

window.onload = function() {
    showPosts('all');
};

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        document.querySelector(".header").style.backgroundColor = "white";
      } else {
        document.querySelector(".header").style.backgroundColor = "transparent";
      }
    });
  });
  