  //Function to format date from Date object
const formatDateToAddInBlackDayList:(date:Date) => string = (date) => {
    const month:number = date.getMonth() + 1;
    const day:number = date.getDate();
    const year:number = date.getFullYear();

    const paddedMonth:string = month.toString().padStart(2,"0")
    const paddedDay:string = day.toString().padStart(2,"0")
    const paddedYear:string = year.toString().padStart(2,"0")

    return `${paddedDay}.${paddedMonth}.${paddedYear}`
}

export default formatDateToAddInBlackDayList