// import {OptionsFuncGetDate} from '../../types/myFunc/getDate/getDate'

export function getDate(date: Date): string {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formDate;
}
export function getTime(date: Date): string {
    const options = { hour: 'numeric', minute: 'numeric', hour12: false };
    const formTime = new Intl.DateTimeFormat('en-US', options).format(date);
    return formTime;
}
