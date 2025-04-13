// Functionality for showing/hiding the comments section
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

if (commentWrapper && showHideBtn) {
  commentWrapper.style.display = 'none';
  showHideBtn.setAttribute('aria-expanded', 'false');

  showHideBtn.addEventListener('click', toggleComments);
  showHideBtn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleComments();
    }
  });
}

function toggleComments() {
  const isVisible = commentWrapper.style.display === 'block';
  commentWrapper.style.display = isVisible ? 'none' : 'block';
  showHideBtn.textContent = isVisible ? 'Show comments' : 'Hide comments';
  showHideBtn.setAttribute('aria-expanded', !isVisible);
}

// Functionality for adding a new comment via the comments form
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

if (form && nameField && commentField && list) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitComment();
  });
}

function submitComment() {
  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  if (!nameValue || !commentValue) {
    alert('Please fill out both name and comment fields.');
    return;
  }

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
  nameField.focus();
}
