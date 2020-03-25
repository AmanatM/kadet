export const parseDate = (stringDate) => {

    let date = new Date(stringDate)

    let month = date.getMonth()
    let day = date.getDate()
    let year = date.getFullYear()

    return day + '.' + month + '.' + year+''
}   