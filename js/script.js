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
    checkjobAvailable();
    
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
    checkjobAvailable();
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
    checkjobAvailable();
});


const allInterviewBtn = jobList.getElementsByClassName('interview-btn');
for(const singleInterviewBtn of allInterviewBtn){
    singleInterviewBtn.addEventListener('click', function(){
        const parentDiv = this.closest('.job-card');
        parentDiv.classList.add('active-interview');
        if(parentDiv.classList.contains('rejected-job')){
            parentDiv.classList.remove('rejected-job');
        }
        if(parentDiv.classList.contains('job-not-applied')){
            parentDiv.classList.remove('job-not-applied');
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
        if(parentDiv.classList.contains('job-not-applied')){
            parentDiv.classList.remove('job-not-applied');
        }
        updateCounts();
    });
}

const allDeleteBtn = jobList.getElementsByClassName('js-delete-job');
for(const singleRejectedBtn of allDeleteBtn){
    singleRejectedBtn.addEventListener('click', function(){
        const parentDiv = this.closest('.job-card');
        parentDiv.remove();
        updateCounts();
        checkjobAvailable();
    });
}



function updateCounts() {
    const countTotalJob = jobList.getElementsByClassName('job-card').length;
    const countTotalInterview = jobList.getElementsByClassName('active-interview').length;
    const countTotalRejected = jobList.getElementsByClassName('rejected-job').length;

    totaljob.innerText = countTotalJob;
    totalInterview.innerText = countTotalInterview;
    totalRejected.innerText = countTotalRejected;
}

function checkjobAvailable(){
    const noJobSec = document.getElementById('job-not-found');
    let found = false;

    for(const searchClass of allJob ){
        if(searchClass.classList.contains('job-not-applied')){
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
checkjobAvailable();





