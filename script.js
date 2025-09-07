function calcular() {
    let inputDay = document.getElementById('day').value
    let inputMonth = document.getElementById('month').value
    let inputYear = document.getElementById('year').value

    let dataOutput = new Date()
    let dataInput = new Date(inputYear, inputMonth - 1, inputDay)
    let difTempo = dataOutput.getTime() - dataInput.getTime()
    let outputDay = Math.ceil(difTempo / (24*60*60*1000))
    let outputMounth = Math.ceil(outputDay / 30)
    let outputYers = Math.ceil(outputMounth / 12)


    if (inputDay > 31 || inputMonth > 12) {
        console.log('Data inválida')
        stop
    }else{
        document.getElementById('day_output').innerHTML =   outputDay
        document.getElementById('month_output').innerHTML =   outputMounth
        document.getElementById('year_output').innerHTML =   outputYers
        console.log(outputDay )
    }

    
}