import { Injectable } from '@angular/core';

export class Tab {
    id: number;
    text: string;
    content: Array<any>;
}

const employees: Employee[] =  [
    {
    'ID': 1,
    'FirstName': 'John',
    'LastName': 'Heart',
    'Prefix': 'Mr.',
    'Position': 'CEO',
    'Picture': 'images/employees/01.png',
    'BirthDate': '1964/03/16',
    'HireDate': '1995/01/15',
    'Notes': 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\n.',
    'Address': '351 S Hill St.',
    'State': 'California',
    'City': 'Los Angeles'
}, {
    'ID': 2,
    'FirstName': 'Olivia',
    'LastName': 'Peyton',
    'Prefix': 'Mrs.',
    'Position': 'Sales Assistant',
    'Picture': 'images/employees/09.png',
    'BirthDate': '1981/06/03',
    'HireDate': '2012/05/14',
    'Notes': 'Olivia loves to sell. She has been selling DevAV products since 2012. \r\n\r\n first child in 6 months. Good Luck Olivia.',
    'Address': '807 W Paseo Del Mar',
    'State': 'California',
    'City': 'Los Angeles'
}, {
    'ID': 3,
    'FirstName': 'Robert',
    'LastName': 'Reagan',
    'Prefix': 'Mr.',
    'Position': 'CMO',
    'Picture': 'images/employees/03.png',
    'BirthDate': '1974/09/07',
    'HireDate': '2002/11/08',
    'Notes': 'Robert was recently voted the CMO of the year by CMO Mnt Team.\r\n\r\nRobert is a chance ask him for his secret recipe.',
    'Address': '4 Westmoreland Pl.',
    'State': 'Arkansas',
    'City': 'Bentonville'
}, {
    'ID': 4,
    'FirstName': 'Greta',
    'LastName': 'Sims',
    'Prefix': 'Ms.',
    'Position': 'HR Manager',
    'Picture': 'images/employees/04.png',
    'BirthDate': '1977/11/22',
    'HireDate': '1998/04/23',
    'Notes': 'Greta has been DevAV\'s HR Managerom Sonee Corp.\r\n\r\nGreta best marathon time is 4 hours. Go Greta.',
    'Address': '1700 S Grandview Dr.',
    'State': 'Georgia',
    'City': 'Atlanta'
}, {
    'ID': 5,
    'FirstName': 'Brett',
    'LastName': 'Wade',
    'Prefix': 'Mr.',
    'Position': 'IT Manager',
    'Picture': 'images/employees/05.png',
    'BirthDate': '1968/12/01',
    'HireDate': '2009/03/06',
    'Notes': 'Brett came toosoft and012.\r\n\r\nWhen he is not  school pitcher).',
    'Address': '1120 Old Mill Rd.',
    'State': 'Idaho',
    'City': 'Boise'
}, {
    'ID': 6,
    'FirstName': 'Sandra',
    'LastName': 'Johnson',
    'Prefix': 'Mrs.',
    'Position': 'Controller',
    'Picture': 'images/employees/06.png',
    'BirthDate': '1974/11/15',
    'HireDate': '2005/05/11',
    'Notes': 'Sandra is a CPA and has been our controller since 2008.f so if you\' \r\n\r\nSandra gymnasts.',
    'Address': '4600 N Virginia Rd.',
    'State': 'Utah',
    'City': 'Beaver'
}, {
    'ID': 7,
    'FirstName': 'Kevin',
    'LastName': 'Carter',
    'Prefix': 'Mr.',
    'Position': 'Shipping Manager',
    'Picture': 'images/employees/07.png',
    'BirthDate': '1978/01/09',
    'HireDate': '2009/08/11',
    'Notes': 'Kevin is our hard-working 18 months.\r\n\r\nWhen not iourt playing pick-up games.',
    'Address': '424 N Main St.',
    'State': 'California',
    'City': 'San Diego'
}, {
    'ID': 8,
    'FirstName': 'Cynthia',
    'LastName': 'Stanwick',
    'Prefix': 'Ms.',
    'Position': 'HR Assistant',
    'Picture': 'images/employees/08.png',
    'BirthDate': '1985/06/05',
    'HireDate': '2008/03/24',
    'Notes': 'Cindy joined us in 2008 and has been in the HR department for 2 years. \r\n\r\nShe was go Cindy!',
    'Address': '2211 Bonita Dr.',
    'State': 'Arkansas',
    'City': 'Little Rock'
}, {
    'ID': 9,
    'FirstName': 'Kent',
    'LastName': 'Samuelson',
    'Prefix': 'Dr.',
    'Position': 'Ombudsman',
    'Picture': 'images/employees/02.png',
    'BirthDate': '1972/09/11',
    'HireDate': '2009/04/22',
    'Notes': 'As our ombudsman, Kent is on the front-lines solving customer prber of the Chamber Orchestra.',
    'Address': '12100 Mora Dr',
    'State': 'Missouri',
    'City': 'St. Louis'
}, {
    'ID': 10,
    'FirstName': 'Taylor',
    'LastName': 'Riley',
    'Prefix': 'Mr.',
    'Position': 'Network Admin',
    'Picture': '',
    'BirthDate': '1982/08/14',
    'HireDate': '2012/04/14',
    'Notes': 'If you are like the rest of us at DevAV, then you\'ve probably reached out for help from Taylmber of our IT department.',
    'Address': '7776 Torreyson Dr',
    'State': 'California',
    'City': 'San Jose'
}];

const turtle: Turtle[] =  [{
    'ID': 1,
    'FirstName': 'Hip',
    'LastName': 'Joint',
    'Prefix': 'Mr.',
    'Position': 'LeafEater',
    'Picture': 'images/employees/01.png',
    'BirthDate': '1964/03/16',
    'HireDate': '1995/01/15',
    'Notes': 'Hip has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\n.',
    'Address': '351 S Hill St.',
    'State': 'California',
    'City': 'Los Angeles'
}];

const tabs: Tab[] = [
    {
        id: 0,
        text: 'Work_Order_Types',
        content: employees
    },
    {
        id: 1,
        text: 'Work_Types_Unknown',
        content: turtle
    },
    {
        id: 2,
        text: 'Part_Types',
        content: employees
    },
    {
        id: 3,
        text: 'Parts_Unknown',
        content: employees
    },
    {
        id: 4,
        text: 'Schedules',
        content: employees
    }
];

@Injectable()
export class Employee {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
    Picture: string;
    BirthDate: string;
    HireDate: string;
    Notes: string;
    Address: string;
    State: string;
    City: string;
}

export class Turtle {
    ID: number;
    FirstName: string;
    LastName: string;
    Prefix: string;
    Position: string;
    Picture: string;
    BirthDate: string;
    HireDate: string;
    Notes: string;
    Address: string;
    State: string;
    City: string;
}

export class DatareviewService {
    getTabs(): Tab[] {
        return tabs;
    }

    getEmployees() {
        return employees;
    }

    getTurtles() {
        return turtle;
    }
}
