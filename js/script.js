const jobList = document.getElementById('job-list');
const allJob = jobList.getElementsByClassName('job-card');

const totaljob = document.getElementById('js-count-total');
const totalInterview = document.getElementById('js-count-interview');
const totalRejected = document.getElementById('js-count-rejected');

const totalOfjob = document.getElementById('total-jobs-count');
const totalInterviewOfjob = document.getElementById('current-job-count');
const totalRejectedOfjob = document.getElementById('current-job-count');

// Call Button All
const allJobToggle = document.getElementById('js-show-all');
// Call Button Interview
const interviewToggle = document.getElementById('js-show-inteview');
// Call Button Rejected
const rejectedToggle = document.getElementById('js-show-rejected');

//default active toggle
allJobToggle.classList.add('active');
const currentCount = document.getElementById('current-count');
currentCount.classList.add('d-none');

// Action after click all button
allJobToggle.addEventListener('click', function(){
    this.classList.add('active');
    interviewToggle.classList.remove('active');
    rejectedToggle.classList.remove('active');

    for (let everyJob of allJob){
        everyJob.style.display = 'block';
    };
    checkAllJobAvailable();
    hideCurrentCounts();
    
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
    checkInterviewJobAvailable();
    updateInterviewCounts();
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
    checkRejectedJobAvailable();
    updateRejectedCounts();
});


const allInterviewBtn = jobList.getElementsByClassName('interview-btn');
for(const singleInterviewBtn of allInterviewBtn){
    singleInterviewBtn.addEventListener('click', function(){
        const parentDiv = this.closest('.job-card');
        parentDiv.classList.add('active-interview');
        if(parentDiv.classList.contains('rejected-job')){
            parentDiv.classList.remove('rejected-job');
        }
        updateCounts();
    });
}

const allRejectedBtn = jobList.getElementsByClassName('rejected-btn');

for(const singleRejectedBtn of allRejectedBtn){
    singleRejectedBtn.addEventListener('click', function(){
        const parentDiv = this.closest('.job-card');
        parentDiv.classList.add('rejected-job');
        if(parentDiv.classList.contains('active-interview')){
            parentDiv.classList.remove('active-interview');
        }
        updateCounts();
    });
}

const allDeleteBtn = jobList.getElementsByClassName('js-delete-job');

for(const singleDeleteBtn of allDeleteBtn){
    singleDeleteBtn.addEventListener('click', function(){
        const parentDiv = this.closest('.job-card');
        parentDiv.remove();
        updateCounts();

        if(allJobToggle.classList.contains('active')){
            checkAllJobAvailable();
        } 
        else if(interviewToggle.classList.contains('active')){
            checkInterviewJobAvailable();
        } 
        else if(rejectedToggle.classList.contains('active')){
            checkRejectedJobAvailable();
        }
    });
}


function updateCounts() {
    const countTotalJob = jobList.getElementsByClassName('job-card').length;
    const countTotalInterview = jobList.getElementsByClassName('active-interview').length;
    const countTotalRejected = jobList.getElementsByClassName('rejected-job').length;

    const countTotalOfjob = jobList.getElementsByClassName('job-card').length;

    totaljob.innerText = countTotalJob;
    totalInterview.innerText = countTotalInterview;
    totalRejected.innerText = countTotalRejected;

    totalOfjob.innerText = countTotalOfjob;
}

function updateInterviewCounts() {
    const countInterviewOfjob = jobList.getElementsByClassName('active-interview').length;
    totalInterviewOfjob.innerText = countInterviewOfjob;

    const currentCount = document.getElementById('current-count');
    currentCount.classList.remove('d-none')
}
function updateRejectedCounts() {
    const countRejectedOfjob = jobList.getElementsByClassName('rejected-job').length;
    totalRejectedOfjob.innerText = countRejectedOfjob;

    const currentCount = document.getElementById('current-count');
    currentCount.classList.remove('d-none')
}
function hideCurrentCounts() {
    const currentCount = document.getElementById('current-count');
    currentCount.classList.add('d-none')
}

function checkAllJobAvailable(){
    const noJobSec = document.getElementById('job-not-found');
    let found = false;

    for(const searchClass of allJob ){
        if(searchClass.classList.contains('job-card')){
            found = true;
            break;
        }
    }

    if(found){
        noJobSec.style.display = 'none';
    }else{
        noJobSec.style.display = 'block';
    }

};
function checkInterviewJobAvailable(){
    const noJobSec = document.getElementById('job-not-found');
    let found = false;

    for(const searchClass of allJob ){
        if(searchClass.classList.contains('active-interview')){
            found = true;
            break;
        }
    }

    if(found){
        noJobSec.style.display = 'none';
    }else{
        noJobSec.style.display = 'block';
    }

};
function checkRejectedJobAvailable(){
    const noJobSec = document.getElementById('job-not-found');
    let found = false;

    for(const searchClass of allJob ){
        if(searchClass.classList.contains('rejected-job')){
            found = true;
            break;
        }
    }

    if(found){
        noJobSec.style.display = 'none';
    }else{
        noJobSec.style.display = 'block';
    }

};

updateCounts();
checkAllJobAvailable();





