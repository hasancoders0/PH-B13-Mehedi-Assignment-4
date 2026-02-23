const totaljob = document.getElementById('js-count-total');
const totalInterview = document.getElementById('js-count-interview');
const totalRejected = document.getElementById('js-count-rejected');

const jobList = document.getElementById('job-list');
const countTotalJob = jobList.getElementsByClassName('job-card').length;
const countTotalInterview = jobList.getElementsByClassName('active-interview').length;
const countTotalRejected = jobList.getElementsByClassName('rejected-job').length;

// Call Button All
const allJobToggle = document.getElementById('js-show-all')
    .addEventListener('click', function(){
        console.log('All job button clicked');
    });
// Call Button Interview
const interviewToggle = document.getElementById('js-show-inteview')
    .addEventListener('click', function(){
        console.log('Interview Button Clicked');
    });
// Call Button Rejected
const rejectedToggle = document.getElementById('js-show-rejected')
    .addEventListener('click', function(){
        console.log('Rejected button Clicked');
    });
// const heading = document.getElementById('title');
// heading.innerText = 'I changed the title for practice using JS';


// Update Counter
totaljob.innerText = countTotalJob;
totalInterview.innerText = countTotalInterview;
totalRejected.innerText = countTotalRejected;
