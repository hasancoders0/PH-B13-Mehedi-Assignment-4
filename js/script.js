const jobList = document.getElementById('job-list');
const allJob = jobList.getElementsByClassName('job-card');

const totaljob = document.getElementById('js-count-total');
const totalInterview = document.getElementById('js-count-interview');
const totalRejected = document.getElementById('js-count-rejected');


// Call Button All
const allJobToggle = document.getElementById('js-show-all');
// Call Button Interview
const interviewToggle = document.getElementById('js-show-inteview');
// Call Button Rejected
const rejectedToggle = document.getElementById('js-show-rejected');

//default active toggle
allJobToggle.classList.add('active');

// Action after click all button
allJobToggle.addEventListener('click', function(){
    this.classList.add('active');
    interviewToggle.classList.remove('active');
    rejectedToggle.classList.remove('active');

    for (let everyJob of allJob){
        everyJob.style.display = 'block'
    };
    
});
// Action after click Interview button 
interviewToggle.addEventListener('click', function(){
    this.classList.add('active');
    allJobToggle.classList.remove('active');
    rejectedToggle.classList.remove('active');

    for (let interviewJob of allJob){
        interviewJob.style.display = 'none'
        if(interviewJob.classList.contains('active-interview')){
            interviewJob.style.display = 'block'
        }
    }; 
});
// Action after click rejected button
rejectedToggle.addEventListener('click', function(){
    this.classList.add('active');
    interviewToggle.classList.remove('active');
    allJobToggle.classList.remove('active');

    for (let rejectedJob of allJob){
        rejectedJob.style.display = 'none'
        if(rejectedJob.classList.contains('rejected-job')){
            rejectedJob.style.display = 'block'
        }
    };
});


const countTotalJob = jobList.getElementsByClassName('job-card').length;
const countTotalInterview = jobList.getElementsByClassName('active-interview').length;
const countTotalRejected = jobList.getElementsByClassName('rejected-job').length;
// Update Counter
totaljob.innerText = countTotalJob;
totalInterview.innerText = countTotalInterview;
totalRejected.innerText = countTotalRejected;


// function updateCounts() {

//     const countTotalJob = jobList.getElementsByClassName('job-card').length;
//     const countTotalInterview = jobList.getElementsByClassName('active-interview').length;
//     const countTotalRejected = jobList.getElementsByClassName('rejected-job').length;

//     totaljob.innerText = countTotalJob;
//     totalInterview.innerText = countTotalInterview;
//     totalRejected.innerText = countTotalRejected;
// }
