function calcular() {
    let inputDay = document.getElementById('day').value
    let inputMonth = document.getElementById('month').value
    let inputYear = document.getElementById('year').value

    let dataOutput = new Date()
    let dataInput = new Date(inputYear, inputMonth - 1, inputDay)
    
    dataOutput.setDate(dataOutput.getDate() - dataInput.getDate())
    dataOutput.setMonth(dataOutput.getMonth() - dataInput.getMonth())
    dataOutput.setFullYear(dataOutput.getFullYear() - dataInput.getFullYear())



    if (inputDay > 31 || inputMonth > 12) {
        console.log('Data inválida')
        stop
    }else{
        document.getElementById('day_output').innerHTML =  dataOutput.getDate()
        document.getElementById('month_output').innerHTML =   dataOutput.getMonth()
        document.getElementById('year_output').innerHTML =   dataOutput.getFullYear()
    }

    
}