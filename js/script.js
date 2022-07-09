let logBtn = document.getElementById("log-btn")
let trackBtn = document.getElementById("track-btn")
let logData = document.getElementById("log-data")
let visData = document.getElementById("vis-data")



//localStorage.setItem("weights", JSON.stringify(locWeight))
logBtn.addEventListener("click", function () {
    //console.log("chal rha h bc")
    logData.innerHTML = `  <label for="Session">Choose session type:</label>
                            <select name="Session" id="log-1">
                            <option value="1">Weight</option>
                            <option value="2">Track Trial</option>
                            
                            </select>
   
                            <button id="log1-btn">Submit</button>`
    let log1Btn = document.getElementById("log1-btn")
    log1Btn.addEventListener("click", function() {
        let log1 = document.getElementById("log-1")
        let num = parseInt(log1.value)
        if(num == 1) {
            log1Btn.removeEventListener("click", this)
            logData.innerHTML = `<form id="frm1">
                                    Enter Max Weights you lifted Today <br><br>
                                    Quater-squats<input type="text" name="fname" value="0" id="qSquat"><br>
                                    Bench Press&ensp;   <input type="text" name="lname" value="0" id="bench"><br>
                                    Step-up&emsp;&ensp;&emsp;       <input type="text" value="0" name="lname" id="step"><br>
                                    Power Clean&ensp;   <input type="text" name="lname" value="0" id="clean"><br>

                                    <input type="button"  value="Submit" id="log2-btn">
                                </form>`

            let log2Btn = document.getElementById("log2-btn")
            log2Btn.addEventListener("click", function() {
                log2Btn.removeEventListener("click", this)
                let squat = parseInt(document.getElementById("qSquat").value)
                let bench = parseInt(document.getElementById("bench").value)
                let stepUp = parseInt(document.getElementById("step").value)
                let pClean = parseInt(document.getElementById("clean").value)
                let putemp = {
                    1 : squat,
                    2 : bench,
                    3 : stepUp,
                    4 : pClean
                }
                logData.innerHTML = ""
                let temp =  JSON.parse(localStorage.getItem("weights"))
                if(temp == null) {
                    temp = [putemp]
                    localStorage.setItem("weights", JSON.stringify(temp))
                }
                else {
                    temp.push(putemp)
                localStorage.setItem("weights", JSON.stringify(temp))
                
                }
                alert("Your data has been saved")
                
            })
        }
        else {
            logData.innerHTML = `<label for="Session">Choose trial type:</label>
                            <select name="Session" id="log-2">
                            
                            <option value="1">400m</option>
                            <option value="2">800m</option>
                            </select>
   
                            <button id="log2-btn">Submit</button>`

            let log2 = document.getElementById("log-2")
            let log2Btn = document.getElementById("log2-btn")
            
            log2Btn.addEventListener("click", function() {
                log2Btn.removeEventListener("click", this)
                let trialNum = parseInt(log2.value)
                if(trialNum == 1) {
                    logData.innerHTML = `<form id="frm2">
                                            Enter time<br>
                                            minutes&emsp;&ensp;&ensp;   <input type="text" name="min" value="0" id="mint"><br>
                                            seconds&emsp;&ensp;&nbsp;&nbsp;   <input type="text" name="sec" value="0" id="sect"><br>
                                            milliseconds           <input type="text" name="msec" value="0" id="millisect"><br>
                                           

                                            <button id="log3-btn">Submit</button>
                                        </form>`
                    let log3Btn = document.getElementById("log3-btn")
                    log3Btn.addEventListener("click", function() {
                        let min = parseInt(document.getElementById("mint").value)
                        let sec = parseInt(document.getElementById("sect").value)
                        let millisec = parseInt(document.getElementById("millisect").value)
                        logData.innerHTML= ""
                        let trTime = {
                            1 : min,
                            2 : sec,
                            3 : millisec
                        }
                        let temp = JSON.parse(localStorage.getItem("400Time"))
                        if(temp == null){
                            temp = [trTime]
                            localStorage.setItem("400Time", JSON.stringify(temp))
                        }
                        else {
                            temp.push(trTime)
                        localStorage.setItem("400Time", JSON.stringify(temp))
                        }
                        
                        alert("Your Data has been Stored")
                    })

                }
                else {
                    logData.innerHTML = `<form id="frm2">
                                            Enter time<br>
                                            minutes&emsp;&ensp;&ensp;   <input type="text" name="min" value="0" id="mint"><br>
                                            seconds&emsp;&ensp;&ensp;   <input type="text" name="sec" value="0" id="sect"><br>
                                            milliseconds           <input type="text" name="msec" value="0" id="millisect"><br>
                                           

                                            <button id="log3-btn">Submit</button>
                                        </form>`
                        let log3Btn = document.getElementById("log3-btn")
                        log3Btn.addEventListener("click", function() {
                            log3Btn.removeEventListener("click", this)
                            let min = parseInt(document.getElementById("mint").value)
                            let sec = parseInt(document.getElementById("sect").value)
                            let millisec = parseInt(document.getElementById("millisect").value)
                            logData.innerHTML = ""
                            let trTime = {
                                1 : min,
                                2 : sec,
                                3 : millisec
                            }
                            let temp = JSON.parse(localStorage.getItem("800Time"))
                            if(temp == null){
                                temp = [trTime]
                                localStorage.setItem("800Time", JSON.stringify(temp))
                            }
                            else {
                                temp.push(trTime)
                                localStorage.setItem("800Time", JSON.stringify(temp))
                            }
                            alert("Your Data has been Stored")
                        })
                    }


                })}
    })
    
                        

})

trackBtn.addEventListener("click", function() {
    visData.innerHTML = `<label for="Session">Choose session type:</label>
                        <select name="Session" id="track-1">
                        <option value="1">Weights</option>
                        <option value="2">400m</option>
                        <option value="3">800m</option>
                        </select>
                        <button id="track1-btn">Submit</button>`

    let track1Btn = document.getElementById("track1-btn")
    track1Btn.addEventListener("click", function() {
        let track1 = parseInt(document.getElementById("track-1").value)

        function renderTrialGraph(trialType) {
            let extArr = JSON.parse(localStorage.getItem(trialType))
                if(extArr == null) {
                    alert("You have not submitted any Data")
                    visData.innerHTML = ""
                    return
                }
                visData.innerHTML = `<canvas id="myChart"></canvas>`
                let creatArr = []
                let labels = []
                for(let i = 0; i < extArr.length; i++) {
                    creatArr.push((extArr[i][1] * 60) + (extArr[i][2]) + (extArr[i][3] / 100.0))
                    labels.push(i + 1)
                    //console.log(extArr[i][WeightEx])
                }
                const data = {
                    labels: labels,
                    datasets: [{
                        label: "Progress in " + trialType.replace("Time", "m") +   " Trials",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: creatArr,
                        

                      }] 

                }
                const config = {
                    type: 'line',
                    data: data,
                    options: {
                        scales: {
                          y: {
                            title: {
                              display: true,
                              text: 'Time in Seconds'
                            }
                          }
                        }     
                      }
                  };
                
                  const myChart = new Chart(
                    document.getElementById('myChart'),
                    config
                  );
        }

        if(track1 == 1) {
            visData.innerHTML = `<label for="Session">Choose Exercise:</label>
                                <select name="Session" id="track-2">
                                    <option value="1">Quater-Squats</option>
                                    <option value="2">Bench Press</option>
                                    <option value="3">Step Up</option>
                                    <option value="4">Power Clean</option>
                                </select>
                                <button id="track2-btn">Submit</button>`
            let track2Btn = document.getElementById("track2-btn")
            track2Btn.addEventListener("click", function() {
                let WeightEx = document.getElementById("track-2").value
                
                
                let extArr = JSON.parse(localStorage.getItem("weights"))
                if(extArr == null) {
                    alert("You have not submitted any Data")
                    visData.innerHTML = ""
                    return
                }
                visData.innerHTML = `<canvas id="myChart"></canvas>`
                let creatArr = []
                let labels = []
                for(let i = 0; i < extArr.length; i++) {
                    creatArr.push(extArr[i][WeightEx])
                    labels.push(i + 1)
                    //console.log(extArr[i][WeightEx])
                }
                let exList = ["Quater-Squats", "Bench-Press", "Step-Up", "Clean"]
                const data = {
                    labels: labels,
                    datasets: [{
                        label: "Progress in " +  exList[WeightEx - 1],
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: creatArr,
                      }] 

                }
                const config = {
                    type: 'line',
                    data: data,
                    options: {
                        scales: {
                          y: {
                            title: {
                              display: true,
                              text: 'Weight in Kg'
                            }
                          }
                        }     
                      }
                  };
                
                  const myChart = new Chart(
                    document.getElementById('myChart'),
                    config
                  );

            })
        } else if(track1 == 2) {
            
                
                renderTrialGraph("400Time")
                
              
        } else {
            renderTrialGraph("800mTime")

        }
        
        
    })



})
document.getElementById("delete-btn").addEventListener("click", function() {
    let check = confirm("Are you Sure you want to delete all your data")
    if(check == false) {
        return
    }
    else {
        localStorage.clear()
        location.reload()
    }
    
})






